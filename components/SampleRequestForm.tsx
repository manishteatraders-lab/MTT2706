"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, Loader2, Send, AlertTriangle, Smartphone, MapPin } from "lucide-react";
import Image from "next/image";
import { trackEvent } from "../lib/analytics";

// --- Types -------------------------------------------------------------------
type SampleType = "business" | "startup" | null;
type TeaType = "CTC" | "Orthodox";

interface ServiceableArea {
  areaName: string;
  districtName: string;
  stateName: string;
  pincode: string;
}

interface FormData {
  name: string;
  firmName: string;
  whatsappNumber: string;
  businessType: string;
  teaTypes: TeaType[];
  monthlyRequirement: string;
  sampleType: SampleType;
  address: string;
  pincode: string;
  selectedArea: string; // From Skyking API or custom area
  isCustomArea: boolean; // True if "My area is not listed"
  customAreaName: string; // If customer types their area name manually
  website: string; // honeypot
}

type Errors = Partial<Record<keyof FormData, string>>;

const BUSINESS_TYPES = [
  "Wholesaler / Distributor",
  "Retailer / Kirana Store",
  "Tea bag / packet maker",
  "Hotel / restaurant / canteen",
  "Private label brand",
  "Exporter",
  "Other",
];

const EMPTY: FormData = {
  name: "",
  firmName: "",
  whatsappNumber: "",
  businessType: "",
  teaTypes: [],
  monthlyRequirement: "",
  sampleType: null,
  address: "",
  pincode: "",
  selectedArea: "",
  isCustomArea: false,
  customAreaName: "",
  website: "",
};

// --- Validators --------------------------------------------------------------
const isValidMobile = (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\s/g, ""));
const isValidPincode = (v: string) => /^[1-9][0-9]{5}$/.test(v);

function validate(data: FormData, hasAreaOptions: boolean): Errors {
  const e: Errors = {};
  if (!data.name.trim()) e.name = "Full name is required";
  if (!data.firmName.trim()) e.firmName = "Business / firm name is required";
  if (!data.whatsappNumber.trim()) e.whatsappNumber = "WhatsApp number is required";
  else if (!isValidMobile(data.whatsappNumber)) e.whatsappNumber = "Enter a valid 10-digit WhatsApp number";
  if (!data.businessType) e.businessType = "Please select your business type";
  if (data.teaTypes.length === 0) e.teaTypes = "Please select at least one tea type";
  if (!data.monthlyRequirement.trim()) e.monthlyRequirement = "Please mention your monthly requirement";
  if (!data.sampleType) e.sampleType = "Please select a sample option";
  if (!data.address.trim()) e.address = "Delivery address is required";
  if (!data.pincode.trim()) e.pincode = "Pincode is required";
  else if (!isValidPincode(data.pincode)) e.pincode = "Enter a valid 6-digit pincode";

  // Validate area selection if Skyking returned serviceable areas
  if (hasAreaOptions && !data.selectedArea) {
    e.selectedArea = "Please select your delivery area or choose 'My area is not listed'";
  }

  // If user selected "My area is not listed", ensure custom area name is entered
  if (data.isCustomArea && !data.customAreaName.trim()) {
    e.customAreaName = "Please enter your area or locality name";
  }

  return e;
}

// --- Shared UI primitives ----------------------------------------------------
function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold text-gray-700">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-red-600 font-medium">{error}</span>}
    </div>
  );
}

function Input({ error, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <input
      {...props}
      className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-tea-500 focus:border-transparent ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"} ${className}`}
    />
  );
}

function Select({ error, children, className = "", ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) {
  return (
    <div className="relative w-full">
      <select
        {...props}
        className={`w-full appearance-none border rounded-lg px-3 py-2.5 sm:py-2.5 min-h-[44px] text-sm text-gray-900 outline-none transition-all pr-9 focus:ring-2 focus:ring-tea-500 focus:border-transparent truncate ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"} ${className}`}
      >
        {children}
      </select>
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
    </div>
  );
}

// --- Main component ----------------------------------------------------------
export default function SampleRequestForm() {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const formTopRef = useRef<HTMLDivElement>(null);

  // Skyking Pincode Courier Lookup State
  const [serviceableAreas, setServiceableAreas] = useState<ServiceableArea[]>([]);
  const [isLoadingAreas, setIsLoadingAreas] = useState<boolean>(false);
  const [areaLookupStatus, setAreaLookupStatus] = useState<"idle" | "found" | "empty" | "error">("idle");
  const lastCheckedPincode = useRef<string>("");

  useEffect(() => {
    if (localStorage.getItem("mtt_sample_requested")) setAlreadySubmitted(true);
  }, []);

  const set = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setData(prev => ({ ...prev, [field]: value }));

  const clearErr = (field: keyof FormData) =>
    setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });

  const toggleTeaType = (t: TeaType) => {
    const next = data.teaTypes.includes(t)
      ? data.teaTypes.filter(x => x !== t)
      : [...data.teaTypes, t];
    set("teaTypes", next);
    clearErr("teaTypes");
  };

  const handleSelectSample = (sample: SampleType) => {
    set("sampleType", sample);
    clearErr("sampleType");
  };

  // --- Fetch Courier Serviceability from Skyking API ---
  const fetchCourierAreas = async (pin: string) => {
    if (lastCheckedPincode.current === pin) return;
    lastCheckedPincode.current = pin;

    setIsLoadingAreas(true);
    setAreaLookupStatus("idle");
    setServiceableAreas([]);
    set("selectedArea", "");
    set("isCustomArea", false);
    set("customAreaName", "");

    try {
      // Direct call to Skyking API
      const formData = new URLSearchParams();
      formData.append("pincodeList", pin);

      const res = await fetch("https://live.skyking.co/api/pincode_api/bindSearviceablityBranch", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!res.ok) {
        throw new Error("Courier lookup failed");
      }

      const list = await res.json();

      if (Array.isArray(list)) {
        // Filter ONLY areas where Serviceability is "Yes"
        const yesAreas = list
          .filter((item: any) => item?.Serviceability?.toString().trim().toLowerCase() === "yes")
          .map((item: any) => ({
            areaName: item?.AreaName?.toString().trim() || "",
            districtName: item?.DistrictName?.toString().trim() || "",
            stateName: item?.StateName?.toString().trim() || "",
            pincode: item?.Pincode?.toString().trim() || pin,
          }))
          .filter((item: any) => item.areaName.length > 0);

        // Deduplicate area names
        const seen = new Set<string>();
        const unique = yesAreas.filter(a => {
          const k = a.areaName.toLowerCase();
          if (seen.has(k)) return false;
          seen.add(k);
          return true;
        });

        if (unique.length > 0) {
          setServiceableAreas(unique);
          setAreaLookupStatus("found");
        } else {
          setServiceableAreas([]);
          setAreaLookupStatus("empty");
        }
      } else {
        setAreaLookupStatus("empty");
      }
    } catch {
      // Fallback: If direct client fetch faces CORS or network issue, try local proxy route
      try {
        const proxyRes = await fetch("/api/check-pincode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pincode: pin }),
        });
        const proxyData = await proxyRes.json();
        if (proxyData.areas && proxyData.areas.length > 0) {
          setServiceableAreas(proxyData.areas);
          setAreaLookupStatus("found");
        } else {
          setServiceableAreas([]);
          setAreaLookupStatus("empty");
        }
      } catch {
        setAreaLookupStatus("error");
      }
    } finally {
      setIsLoadingAreas(false);
    }
  };

  const handlePincodeChange = (val: string) => {
    const digitsOnly = val.replace(/\D/g, "");
    set("pincode", digitsOnly);
    clearErr("pincode");

    if (digitsOnly.length === 6 && isValidPincode(digitsOnly)) {
      fetchCourierAreas(digitsOnly);
    } else {
      setServiceableAreas([]);
      setAreaLookupStatus("idle");
      lastCheckedPincode.current = "";
    }
  };

  const handleAreaSelect = (areaVal: string) => {
    clearErr("selectedArea");
    if (areaVal === "__CUSTOM__") {
      set("selectedArea", "__CUSTOM__");
      set("isCustomArea", true);
    } else {
      set("selectedArea", areaVal);
      set("isCustomArea", false);
      set("customAreaName", "");
    }
  };

  const scrollToTop = () => formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (data.website) return;

    const hasAreaOptions = serviceableAreas.length > 0;
    const errs = validate(data, hasAreaOptions);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      scrollToTop();
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzo2PJ3rqhp2SLvXwEmO2OJXXdWGkGzLoXSGfntkAmaDTOjw7ZAS0VNMgq1C0TF1uPnIg/exec";

      // Formulate final area and serviceability for delivery record
      let finalAreaName = "";
      let isServiceable = "No";

      if (data.isCustomArea) {
        finalAreaName = data.customAreaName ? `${data.customAreaName} (Not listed)` : "Not listed";
        isServiceable = "No";
      } else if (data.selectedArea) {
        finalAreaName = data.selectedArea;
        isServiceable = "Yes";
      } else if (serviceableAreas.length === 0 && data.pincode) {
        finalAreaName = "Pincode not covered by Skyking";
        isServiceable = "No";
      } else {
        finalAreaName = "Standard Pincode Area";
        isServiceable = "Yes";
      }

      const submission = {
        ...data,
        courierArea: finalAreaName,
        isServiceable: isServiceable,
        submittedAt: new Date().toISOString(),
        teaTypes: data.teaTypes.join(", "),
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      void res;

      // Track event
      trackEvent("sample_form_submit", {
        event_category: "leads",
        event_label: data.sampleType || "Unknown Sample",
        sample_type: data.sampleType,
        business_type: data.businessType,
        tea_types: data.teaTypes.join(", "),
        monthly_requirement: data.monthlyRequirement,
        pincode: data.pincode,
        courier_area: finalAreaName,
        courier_serviceable: isServiceable,
      });

      setSubmitted(true);
      localStorage.setItem("mtt_sample_requested", "true");
      scrollToTop();
    } catch {
      setSubmitError("Something went wrong. Please try WhatsApp or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  // --- Already submitted screen ----------------------------------------------
  if (alreadySubmitted && !submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-yellow-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Request Already Received</h3>
        <p className="text-gray-600 mb-6">
          You have already submitted a sample request recently. Our team is processing it and will contact you via WhatsApp.
        </p>
        <a
          href="https://wa.me/917001958588"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
        >
          Contact Support on WhatsApp
        </a>
      </div>
    );
  }

  // --- Success screen --------------------------------------------------------
  if (submitted) {
    return (
      <div ref={formTopRef} className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Request Received!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you, <strong>{data.name}</strong>. We will confirm your sample and payment on WhatsApp within a few hours and dispatch within 48 hours.
        </p>
        <div className="bg-tea-50 border border-tea-100 rounded-xl p-6 text-sm text-tea-800 font-medium mb-6 flex flex-col items-center gap-3">
          <Smartphone className="w-8 h-8 text-tea-700" />
          {data.sampleType === "startup"
            ? <span>Check WhatsApp (<strong>+91 {data.whatsappNumber}</strong>). Our team will send you a <strong>payment link of &#8377;600</strong>.</span>
            : <span>Check WhatsApp (<strong>+91 {data.whatsappNumber}</strong>). Our team will confirm your details and dispatch.</span>}
        </div>
        <a
          href={`https://wa.me/917001958588?text=Hi,%20I%20just%20submitted%20the%20sample%20request%20form.%20My%20name%20is%20${encodeURIComponent(data.name)}%20from%20${encodeURIComponent(data.firmName)}.%20I%20chose%20the%20${data.sampleType === "startup" ? "Startup%20Sample%20(Rs%20600)" : "Business%20Sample%20(Free)"}%20option.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
        >
          Follow Up on WhatsApp &rarr;
        </a>
      </div>
    );
  }

  // --- Main form -------------------------------------------------------------
  return (
    <div ref={formTopRef} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-tea-900 px-6 py-5">
        <h2 className="text-white font-bold text-lg">Request Free Tea Samples</h2>
        <p className="text-tea-300 text-sm mt-0.5">Fill in once &mdash; we will call you on WhatsApp to confirm.</p>
      </div>

      {/* Notice */}
      <div className="bg-orange-50 border-b border-orange-100 px-6 py-3.5 flex items-start gap-3">
        <AlertTriangle className="text-orange-600 w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-orange-900 font-medium leading-relaxed">
          <strong>For businesses only.</strong> This sample service is for serious buyers who want to order bulk tea. We do not process sample requests for individual home use.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8 space-y-7">

        {/* --- Section 1: Your Details --- */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Your Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name" error={errors.name} required>
                <Input
                  type="text"
                  placeholder="Rajesh Kumar"
                  value={data.name}
                  error={errors.name}
                  onChange={e => { set("name", e.target.value); clearErr("name"); }}
                />
              </Field>
              <Field label="Business / Firm Name" error={errors.firmName} required>
                <Input
                  type="text"
                  placeholder="Kumar Tea House"
                  value={data.firmName}
                  error={errors.firmName}
                  onChange={e => { set("firmName", e.target.value); clearErr("firmName"); }}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="WhatsApp Number" error={errors.whatsappNumber} required>
                <div className="relative">
                  <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 fill-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <Input
                    type="tel"
                    placeholder="9876543210"
                    maxLength={10}
                    value={data.whatsappNumber}
                    error={errors.whatsappNumber}
                    className="pl-9"
                    onChange={e => { set("whatsappNumber", e.target.value.replace(/\D/g, "")); clearErr("whatsappNumber"); }}
                  />
                </div>
              </Field>

              <Field label="Business Type" error={errors.businessType} required>
                <Select
                  value={data.businessType}
                  error={errors.businessType}
                  onChange={e => { set("businessType", e.target.value); clearErr("businessType"); }}
                >
                  <option value="">Select type...</option>
                  {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </Select>
              </Field>
            </div>
          </div>
        </div>

        {/* --- Section 2: Tea Type --- */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">Tea Type</h3>
          <Field label="Which type of tea are you interested in?" error={errors.teaTypes} required>
            <div className="flex gap-3 mt-1">
              {(["CTC", "Orthodox"] as TeaType[]).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTeaType(t)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-bold transition-all ${
                    data.teaTypes.includes(t)
                      ? "bg-tea-600 text-white border-tea-600 shadow-sm"
                      : "bg-white text-gray-700 border-gray-300 hover:border-tea-400"
                  }`}
                >
                  {data.teaTypes.includes(t) && <CheckCircle className="h-4 w-4" />}
                  {t}
                </button>
              ))}
            </div>
          </Field>
        </div>

        {/* --- Section 3: Monthly Requirement --- */}
        <div>
          <Field label="Monthly Requirement" error={errors.monthlyRequirement} required>
            <Input
              type="text"
              placeholder="E.g. 100 kg/month CTC, 20 kg Darjeeling..."
              value={data.monthlyRequirement}
              error={errors.monthlyRequirement}
              onChange={e => { set("monthlyRequirement", e.target.value); clearErr("monthlyRequirement"); }}
            />
          </Field>
        </div>

        {/* --- Section 4: Choose Your Sample --- */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">Choose Your Sample</h3>
          <p className="text-xs text-gray-500 mb-3">Click on a sample type to select and view details:</p>
          {errors.sampleType && <p className="text-xs text-red-600 font-medium mb-3">{errors.sampleType}</p>}

          {/* Two toggle buttons side-by-side */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              type="button"
              onClick={() => handleSelectSample("business")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-bold transition-all ${
                data.sampleType === "business"
                  ? "bg-green-700 text-white border-green-700 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
              }`}
            >
              {data.sampleType === "business" && <CheckCircle className="h-4 w-4" />}
              Business Sample (Free)
            </button>

            <button
              type="button"
              onClick={() => handleSelectSample("startup")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-bold transition-all ${
                data.sampleType === "startup"
                  ? "bg-yellow-600 text-white border-yellow-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:border-yellow-500"
              }`}
            >
              {data.sampleType === "startup" && <CheckCircle className="h-4 w-4" />}
              Startup Sample
            </button>
          </div>

          {/* Details revealed only when a sample is selected */}
          {data.sampleType === "business" && (
            <div className="rounded-2xl border-2 border-green-500 overflow-hidden bg-white shadow-sm mt-3 animate-fadeIn">
              <div className="bg-green-600 text-white py-2 px-4 font-bold text-sm">
                &#10003; Selected: Business Sample (Free)
              </div>
              <div className="p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-start">
                <div className="relative w-full md:w-56 h-44 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                  <Image
                    src="/blog-images/business-sample-pack.webp"
                    alt="Business Sample - small zip-lock tea grade bags"
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 224px"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-base font-bold text-green-700">
                    Free Sample Pack
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For people already dealing in tea. You get small 5&ndash;10 gram packets, enough to check the quality, colour and strength of the tea and compare it with what you use now.
                  </p>
                </div>
              </div>
            </div>
          )}

          {data.sampleType === "startup" && (
            <div className="rounded-2xl border-2 border-yellow-500 overflow-hidden bg-white shadow-sm mt-3 animate-fadeIn">
              <div className="bg-yellow-500 text-white py-2 px-4 font-bold text-sm">
                &#10003; Selected: Startup Sample
              </div>
              <div className="p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-start">
                <div className="relative w-full md:w-56 h-44 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                  <Image
                    src="/blog-images/startup-sample-pack.webp"
                    alt="Startup Sample - 200g foil-packed tea varieties"
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 224px"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-base font-bold text-gray-900">
                    <span className="text-yellow-700 font-semibold">&#8377;600</span> including courier
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For people starting a new tea business. You get 5&ndash;6 packs of 200 grams each, so you can test the tea several times, make cups for your team, and discuss it with partners before you decide to buy.
                  </p>
                  <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-xs text-yellow-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span>Contains 5&ndash;6 full 200g packs &mdash; enough for full team tasting sessions.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- Section 5: Delivery & Courier Area Selection --- */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Delivery</h3>
          <div className="space-y-4">
            <Field label="Full Address" error={errors.address} required>
              <Input
                type="text"
                placeholder="House number, building name, street, landmark"
                value={data.address}
                error={errors.address}
                onChange={e => { set("address", e.target.value); clearErr("address"); }}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              <Field label="Pincode (6 digits)" error={errors.pincode} required>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="e.g. 734005, 201301"
                    maxLength={6}
                    value={data.pincode}
                    error={errors.pincode}
                    onChange={e => handlePincodeChange(e.target.value)}
                  />
                  {isLoadingAreas && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs text-tea-700 bg-white/80 px-1 py-0.5 rounded">
                      <Loader2 className="w-4 h-4 animate-spin text-tea-600" />
                      <span>Checking courier...</span>
                    </div>
                  )}
                </div>
              </Field>

              {/* Serviceable Area Selection (Appears when Skyking API returns areas) */}
              {areaLookupStatus === "found" && serviceableAreas.length > 0 && (
                <Field
                  label="Select Your Area / Branch"
                  error={errors.selectedArea}
                  required
                >
                  <Select
                    value={data.selectedArea}
                    error={errors.selectedArea}
                    onChange={e => handleAreaSelect(e.target.value)}
                  >
                    <option value="">-- Select your area ({serviceableAreas.length} serviceable) --</option>
                    {serviceableAreas.map(a => (
                      <option key={a.areaName} value={a.areaName}>
                        {a.areaName} ({a.districtName})
                      </option>
                    ))}
                    <option value="__CUSTOM__">❌ My area is not listed</option>
                  </Select>
                </Field>
              )}
            </div>

            {/* Area lookup feedback badge */}
            {data.pincode.length === 6 && (
              <div>
                {areaLookupStatus === "found" && (
                  <div className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-600" />
                    <span>
                      Courier service verified for PIN <strong>{data.pincode}</strong>: {serviceableAreas.length} serviceable areas found.
                    </span>
                  </div>
                )}

                {areaLookupStatus === "empty" && !isLoadingAreas && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-amber-600" />
                    <span>
                      Direct branch pickup not listed for PIN {data.pincode}. No worries &mdash; our team will dispatch via alternate national courier.
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Custom Area input when user chooses "My area is not listed" */}
            {data.isCustomArea && (
              <div className="p-4 bg-tea-50/70 border border-tea-200 rounded-xl space-y-2 animate-fadeIn">
                <Field
                  label="Enter your specific locality / area name"
                  error={errors.customAreaName}
                  required
                >
                  <Input
                    type="text"
                    placeholder="e.g. Sector 44, Near Kali Mandir, Subhash Pally"
                    value={data.customAreaName}
                    error={errors.customAreaName}
                    onChange={e => {
                      set("customAreaName", e.target.value);
                      clearErr("customAreaName");
                    }}
                  />
                </Field>
                <p className="text-[11px] text-gray-500">
                  We will arrange the nearest serviceable courier hub or alternate delivery partner for this locality.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Honeypot */}
        <div style={{ display: "none" }} aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={e => set("website", e.target.value)} />
        </div>

        {/* --- Submit --- */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {submitError}
          </div>
        )}

        <div className="pt-1">
          <p className="text-xs text-gray-500 text-center mb-4">
            We will confirm your sample and payment on WhatsApp, and dispatch within 48 hours.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-tea-600 hover:bg-tea-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            {submitting
              ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
              : <><Send className="h-5 w-5" /> Request My Samples</>}
          </button>
        </div>

      </form>
    </div>
  );
}
