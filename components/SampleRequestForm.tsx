"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle, ArrowRight, ArrowLeft, User, Building2,
  Phone, Package, ChevronDown, Loader2, Send, Check
} from "lucide-react";
import Image from "next/image";
import { trackEvent } from "../lib/analytics";

const INDIAN_STATES = [
  "Andaman & Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam",
  "Bihar","Chandigarh","Chhattisgarh","Dadra & Nagar Haveli and Daman & Diu",
  "Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir",
  "Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha",
  "Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];
const TEA_GRADES = [
  "CTC (BP / OF / PD)","Tea Dust / Fanning","Darjeeling Orthodox",
  "Assam Orthodox Leaf","Green Tea","Private Label (Custom Blend)",
  "Assam CTC Blends","Nepal High Grown",
];
const BUSINESS_TYPES = [
  "Retailer / Kirana Store","Wholesaler / Distributor","Hotel / Restaurant / Canteen",
  "Tea Bag Manufacturer","Exporter","FMCG / Packer Brand","Tea Stall Owner","New Startup","Other",
];
const PURCHASE_FROM_OPTIONS = [
  "Local Market / Mandi","Siliguri Dealer","Kolkata Dealer","Direct from Gardens","Online Platform","Other",
];
const HEAR_FROM_OPTIONS = [
  "Google Search","Google Maps","WhatsApp / Referral","Social Media","IndiaMART","JustDial","Other",
];

type SampleType = "business" | "startup" | null;
interface FormData {
  sampleType: SampleType;
  name: string; firmName: string; primaryMobile: string; whatsappNumber: string;
  hasGst: boolean; gstNumber: string; street: string; city: string; state: string; pincode: string;
  teaGrades: string[]; priceRange: string; businessType: string;
  purchaseFrom: string; purchaseFromOther: string; hearAboutUs: string;
  hearAboutUsOther: string; description: string; website: string;
}
type Errors = Partial<Record<keyof FormData, string>>;
const EMPTY: FormData = {
  sampleType: null,
  name: "", firmName: "", primaryMobile: "", whatsappNumber: "",
  hasGst: true, gstNumber: "", street: "", city: "", state: "", pincode: "",
  teaGrades: [], priceRange: "", businessType: "",
  purchaseFrom: "", purchaseFromOther: "", hearAboutUs: "",
  hearAboutUsOther: "", description: "", website: "",
};

const isValidMobile = (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\s/g, ""));
const isValidGST = (v: string) => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v.toUpperCase());
const isValidPincode = (v: string) => /^[1-9][0-9]{5}$/.test(v);

function validateSection1(data: FormData): Errors {
  const e: Errors = {};
  if (!data.name.trim()) e.name = "Full name is required";
  if (!data.firmName.trim()) e.firmName = "Firm name is required";
  if (!data.primaryMobile.trim()) e.primaryMobile = "Mobile number is required";
  else if (!isValidMobile(data.primaryMobile)) e.primaryMobile = "Enter a valid 10-digit Indian mobile number";
  if (!data.whatsappNumber.trim()) e.whatsappNumber = "WhatsApp number is required";
  else if (!isValidMobile(data.whatsappNumber)) e.whatsappNumber = "Enter a valid 10-digit WhatsApp number";
  if (data.hasGst) {
    if (!data.gstNumber.trim()) e.gstNumber = "GST number is required";
    else if (!isValidGST(data.gstNumber)) e.gstNumber = "Enter a valid 15-character GST number";
  }
  if (!data.street.trim()) e.street = "Street/Area is required";
  if (!data.city.trim()) e.city = "City is required";
  if (!data.state) e.state = "Please select your state";
  if (!data.pincode.trim()) e.pincode = "Pincode is required";
  else if (!isValidPincode(data.pincode)) e.pincode = "Enter a valid 6-digit Pincode";
  return e;
}
function validateSection2(data: FormData): Errors {
  const e: Errors = {};
  if (data.teaGrades.length === 0) e.teaGrades = "Please select at least one tea grade";
  if (!data.purchaseFrom) e.purchaseFrom = "Please select where you currently buy from";
  return e;
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode; }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold text-gray-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      {children}
      {error && <span className="text-xs text-red-600 font-medium">{error}</span>}
    </div>
  );
}
function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  const { error, ...rest } = props as { error?: string } & React.InputHTMLAttributes<HTMLInputElement>;
  return <input {...rest} className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-tea-500 focus:border-transparent ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"} ${className}`} />;
}
function Select({ className = "", children, error, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) {
  return (
    <div className="relative w-full">
      <select {...props} className={`w-full appearance-none border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-all pr-9 focus:ring-2 focus:ring-tea-500 focus:border-transparent ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"} ${className}`}>{children}</select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );
}
function Textarea({ className = "", error, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) {
  return <textarea {...props} rows={3} className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all resize-none focus:ring-2 focus:ring-tea-500 focus:border-transparent ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white hover:border-gray-400"} ${className}`} />;
}

const STEP_LABELS: Record<number, string> = { 1: "Contact & Address", 2: "Sample Type", 3: "Tea Requirement", 4: "Confirm Details" };

export default function SampleRequestForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const formTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (localStorage.getItem("mtt_sample_requested")) setAlreadySubmitted(true); }, []);

  const set = (field: keyof FormData, value: string | boolean | string[] | SampleType) =>
    setData((prev) => ({ ...prev, [field]: value }));
  const clearErr = (field: keyof FormData) =>
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  const toggleGrade = (grade: string) => {
    const next = data.teaGrades.includes(grade) ? data.teaGrades.filter((g) => g !== grade) : [...data.teaGrades, grade];
    set("teaGrades", next); clearErr("teaGrades");
  };
  const scrollToTop = () => { if (formTopRef.current) formTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); };

  const handleNext1 = () => {
    const errs = validateSection1(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); scrollToTop(); return; }
    setErrors({}); setStep(2); setTimeout(scrollToTop, 50);
  };
  const handleNext2 = (type: SampleType) => {
    set("sampleType", type);
    // Startup sample skips Step 3 (Tea Requirement) — go straight to confirm
    setStep(type === "startup" ? 4 : 3);
    setTimeout(scrollToTop, 50);
  };
  const handleNext3 = () => {
    const errs = validateSection2(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); scrollToTop(); return; }
    setErrors({}); setStep(4); setTimeout(scrollToTop, 50);
  };
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (data.website) return;
    setSubmitting(true); setSubmitError("");
    try {
      // Static site — POST directly to Google Apps Script (no Next.js API route available)
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5_0WxvI1lTZL7a7blCzzAoUFZmYRHIoTYOqlycEqD_5GtCgr6fKBdx-UBq5sYScVKnQ/exec";
      const submission = { ...data, submittedAt: new Date().toISOString(), deliveryAddress: `${data.street}, ${data.city}, ${data.state} - ${data.pincode}` };
      const res = await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(submission) });
      // no-cors means we can't read the response — assume success
      void res;

      // Track successful sample form submission in GA4
      trackEvent("sample_form_submit", {
        event_category: "leads",
        event_label: data.sampleType || "Unknown Sample",
        sample_type: data.sampleType,
        business_type: data.businessType,
        tea_grades: data.teaGrades.join(", "),
        city: data.city,
        state: data.state,
      });

      setSubmitted(true); localStorage.setItem("mtt_sample_requested", "true"); scrollToTop();
    } catch { setSubmitError("Something went wrong. Please try WhatsApp or call us directly."); }
    finally { setSubmitting(false); }
  };

  // For startup: 3 steps (1, 2, 4). For business: 4 steps (1, 2, 3, 4)
  const isStartup = data.sampleType === "startup";
  const totalSteps = isStartup ? 3 : 4;
  // Map actual step to display step number
  const displayStep = isStartup && step === 4 ? 3 : step;
  const progressPct = Math.round((displayStep / totalSteps) * 100);
  const stepLabel = step === 4
    ? "Confirm Details"
    : step === 3
    ? "Tea Requirement"
    : step === 2
    ? "Sample Type"
    : "Contact & Address";

  if (alreadySubmitted && !submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-8 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-yellow-600" /></div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Request Already Received</h3>
        <p className="text-gray-600 mb-6">You have already submitted a sample request recently. Our team is processing it and will contact you via WhatsApp.</p>
        <a href="https://wa.me/917001958588" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">Contact Support on WhatsApp</a>
      </div>
    );
  }

  if (submitted) {
    const isStartup = data.sampleType === "startup";
    return (
      <div ref={formTopRef} className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-green-600" /></div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Request Received Successfully!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Thank you, <strong>{data.name}</strong>. We have received your request.</p>
        <div className="bg-tea-50 border border-tea-100 rounded-xl p-6 text-sm text-tea-800 font-medium mb-6 flex flex-col items-center gap-3">
          <span className="text-2xl">📱</span>
          {isStartup
            ? <span>Please check your WhatsApp (<strong>+91 {data.whatsappNumber}</strong>). Our team will send you a <strong>payment link of ₹600</strong> and confirm dispatch after payment.</span>
            : <span>Please check your WhatsApp (<strong>+91 {data.whatsappNumber}</strong>). Our team will connect with you shortly for courier payment confirmation and address verification.</span>}
        </div>
        <a href={`https://wa.me/917001958588?text=Hi, I just submitted the sample request form. My name is ${encodeURIComponent(data.name)} from ${encodeURIComponent(data.firmName)}. I selected the ${isStartup ? "Startup Sample (Rs600)" : "Business Sample (Free)"} option.`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
          Follow Up on WhatsApp &rarr;
        </a>
      </div>
    );
  }

  return (
    <div ref={formTopRef} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-tea-900 px-6 py-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-tea-200 text-sm font-medium">Step {displayStep} of {totalSteps}</span>
          <span className="text-tea-300 text-xs">{stepLabel}</span>
        </div>
        <div className="w-full bg-tea-800 rounded-full h-1.5">
          <div className="bg-yellow-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
      </div>
      <div className="bg-orange-50 border-b border-orange-100 px-6 py-3.5 flex items-start gap-3">
        <span className="text-orange-600 mt-0.5 text-sm">⚠️</span>
        <p className="text-xs text-orange-900 font-medium leading-relaxed"><strong>Please Note:</strong> This sample service is strictly for businesses and serious buyers who want to order bulk tea. We do not process sample requests for individual home consumption.</p>
      </div>
      <form onSubmit={(e) => e.preventDefault()} noValidate className="p-6 md:p-8">

        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full Name" error={errors.name} required>
                <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="text" placeholder="Rajesh Kumar" value={data.name} error={errors.name} className="pl-9" onChange={(e) => { set("name", e.target.value); clearErr("name"); }} /></div>
              </Field>
              <Field label="Firm / Business Name" error={errors.firmName} required>
                <div className="relative"><Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="text" placeholder="Kumar Tea House" value={data.firmName} error={errors.firmName} className="pl-9" onChange={(e) => { set("firmName", e.target.value); clearErr("firmName"); }} /></div>
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Primary Mobile" error={errors.primaryMobile} required>
                <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="tel" placeholder="9876543210" maxLength={10} value={data.primaryMobile} error={errors.primaryMobile} className="pl-9" onChange={(e) => { set("primaryMobile", e.target.value.replace(/\D/g, "")); clearErr("primaryMobile"); }} /></div>
              </Field>
              <Field label="WhatsApp Number" error={errors.whatsappNumber} required>
                <div className="relative">
                  <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 fill-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <Input type="tel" placeholder="9876543210" maxLength={10} value={data.whatsappNumber} error={errors.whatsappNumber} className="pl-9" onChange={(e) => { set("whatsappNumber", e.target.value.replace(/\D/g, "")); clearErr("whatsappNumber"); }} />
                </div>
              </Field>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
              <div className="flex gap-4 mb-2">
                <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gst" checked={data.hasGst} onChange={() => { set("hasGst", true); clearErr("gstNumber"); }} className="w-4 h-4 text-tea-600 focus:ring-tea-500" /><span className="text-sm font-medium">I have GST</span></label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gst" checked={!data.hasGst} onChange={() => { set("hasGst", false); clearErr("gstNumber"); }} className="w-4 h-4 text-tea-600 focus:ring-tea-500" /><span className="text-sm font-medium">New Startup (No GST)</span></label>
              </div>
              {data.hasGst && (
                <Field label="GST Number" error={errors.gstNumber} required>
                  <Input type="text" placeholder="19AHJPR0891G1ZX" maxLength={15} value={data.gstNumber} error={errors.gstNumber} onChange={(e) => { set("gstNumber", e.target.value.toUpperCase()); clearErr("gstNumber"); }} className="font-mono tracking-wider" />
                </Field>
              )}
            </div>
            <div className="border-t border-gray-100 pt-5">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Delivery Address</h4>
              <div className="space-y-4">
                <Field label="Street / Apartment / Area" error={errors.street} required>
                  <Input type="text" placeholder="Shop No. 12, Main Market Road" value={data.street} error={errors.street} onChange={(e) => { set("street", e.target.value); clearErr("street"); }} />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Field label="City" error={errors.city} required><Input type="text" placeholder="Patna" value={data.city} error={errors.city} onChange={(e) => { set("city", e.target.value); clearErr("city"); }} /></Field>
                  <Field label="State" error={errors.state} required>
                    <Select value={data.state} error={errors.state} onChange={(e) => { set("state", e.target.value); clearErr("state"); }}>
                      <option value="">Select state…</option>
                      {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </Select>
                  </Field>
                  <Field label="Pincode" error={errors.pincode} required><Input type="text" placeholder="800001" maxLength={6} value={data.pincode} error={errors.pincode} onChange={(e) => { set("pincode", e.target.value.replace(/\D/g, "")); clearErr("pincode"); }} /></Field>
                </div>
              </div>
            </div>
            <div style={{ display: "none" }} aria-hidden="true"><input type="text" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set("website", e.target.value)} /></div>
            <button type="button" onClick={handleNext1} className="w-full bg-tea-600 hover:bg-tea-700 text-white py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-md">
              Next: Choose Sample Type <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-3xl">📦</span>
              <h3 className="text-xl font-serif font-bold text-tea-900 mt-2 mb-1">Sample Options</h3>
              <p className="text-sm text-gray-600">We have <strong>2 sample options</strong> — choose what suits your business best.</p>
              <p className="text-xs text-gray-400 mt-1">हमारे पास <strong>2 प्रकार के सैंपल</strong> उपलब्ध हैं — अपने व्यवसाय के अनुसार चुनें।</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border-2 border-green-200 rounded-2xl overflow-hidden flex flex-col bg-white hover:border-green-400 transition-colors shadow-sm">
                <div className="bg-green-600 text-white text-center py-2.5 px-4 font-bold text-sm">1️⃣ Business Sample</div>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image src="/blog-images/business-sample-pack.jpg?v=3" alt="Business Sample — small zip-lock tea grade bags" fill className="object-cover" sizes="(max-width:768px) 100vw,50vw" />
                </div>
                <div className="p-4 flex-1 space-y-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">✅ Tea FREE — Courier charges extra</span>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-none mt-0.5" /><span>5–6 small tea samples of different grades, selected as per your requirement.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-none mt-0.5" /><span>Tea samples are <strong>free of cost</strong>. Courier charges will be applicable.</span></li>
                  </ul>
                  <div className="border-t border-green-100 pt-3">
                    <p className="text-xs text-gray-500 font-semibold mb-1.5">🇮🇳 हिंदी</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      <li className="flex items-start gap-1.5"><span className="text-green-600">✔️</span><span>आपकी आवश्यकता के अनुसार अलग-अलग ग्रेड की चाय के <strong>5–6 छोटे सैंपल</strong></span></li>
                      <li className="flex items-start gap-1.5"><span className="text-green-600">✔️</span><span>चाय के सैंपल <strong>निःशुल्क</strong> हैं। केवल कूरियर शुल्क देय होगा।</span></li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button type="button" onClick={() => handleNext2("business")} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                    Choose Business Sample <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="border-2 border-yellow-300 rounded-2xl overflow-hidden flex flex-col bg-white hover:border-yellow-500 transition-colors shadow-sm">
                <div className="bg-yellow-500 text-white text-center py-2.5 px-4 font-bold text-sm">2️⃣ Startup Sample — ₹600</div>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image src="/blog-images/startup-sample-pack.jpg?v=3" alt="Startup Sample — 200g foil-packed tea varieties" fill className="object-cover" sizes="(max-width:768px) 100vw,50vw" />
                </div>
                <div className="p-4 flex-1 space-y-3">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">💰 ₹600 Total — Courier included</span>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-600 flex-none mt-0.5" /><span>5–6 varieties of tea (subject to availability).</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-yellow-600 flex-none mt-0.5" /><span>Each sample pack contains <strong>200 grams</strong> of tea.</span></li>
                  </ul>
                  <div className="border-t border-yellow-100 pt-3">
                    <p className="text-xs text-gray-500 font-semibold mb-1.5">🇮🇳 हिंदी</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      <li className="flex items-start gap-1.5"><span className="text-yellow-600">✔️</span><span>उपलब्धता के अनुसार <strong>5–6 प्रकार की चाय</strong></span></li>
                      <li className="flex items-start gap-1.5"><span className="text-yellow-600">✔️</span><span>प्रत्येक सैंपल पैक का वजन <strong>200 ग्राम</strong> होगा।</span></li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button type="button" onClick={() => handleNext2("startup")} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                    Choose Startup Sample (₹600) <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => { setStep(1); scrollToTop(); }} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Contact Details
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className={`flex items-start gap-3 rounded-xl px-4 py-3 text-sm font-medium ${data.sampleType === "startup" ? "bg-yellow-50 border border-yellow-200 text-yellow-900" : "bg-green-50 border border-green-200 text-green-900"}`}>
              <span className="text-lg flex-none">{data.sampleType === "startup" ? "💰" : "✅"}</span>
              <span>{data.sampleType === "startup" ? "Startup Sample (₹600) — 5–6 × 200g foil-packed varieties. Payment link will be sent on WhatsApp." : "Business Sample (Free Tea) — 5–6 small grade samples. Courier charges collected via WhatsApp."}</span>
            </div>
            <Field label="Which tea grade(s) are you interested in?" error={errors.teaGrades} required>
              <div className="flex flex-wrap gap-2 pt-1">
                {TEA_GRADES.map((g) => (
                  <button key={g} type="button" onClick={() => toggleGrade(g)} className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border transition-all ${data.teaGrades.includes(g) ? "bg-tea-600 text-white border-tea-600 shadow-sm" : "bg-white text-gray-700 border-gray-300 hover:border-tea-400"}`}>
                    {data.teaGrades.includes(g) && <CheckCircle className="h-3.5 w-3.5" />}
                    <Package className={`h-3.5 w-3.5 ${data.teaGrades.includes(g) ? "hidden" : ""}`} />
                    {g}
                  </button>
                ))}
              </div>
              {errors.teaGrades && <span className="text-xs text-red-600 font-medium">{errors.teaGrades}</span>}
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Preferred Price Range (per kg)" error={errors.priceRange}>
                <Select value={data.priceRange} onChange={(e) => set("priceRange", e.target.value)}>
                  <option value="">Any range</option>
                  <option>₹100 – ₹150 / kg (Economy)</option>
                  <option>₹150 – ₹250 / kg (Standard)</option>
                  <option>₹250 – ₹400 / kg (Premium)</option>
                  <option>₹400+ / kg (Specialty / Export)</option>
                  <option>Not sure — need recommendation</option>
                </Select>
              </Field>
              <Field label="Type of Business" error={errors.businessType}>
                <Select value={data.businessType} onChange={(e) => set("businessType", e.target.value)}>
                  <option value="">Select type…</option>
                  {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
                </Select>
              </Field>
            </div>
            <Field label="Currently purchasing tea from" error={errors.purchaseFrom} required>
              <Select value={data.purchaseFrom} error={errors.purchaseFrom} onChange={(e) => { set("purchaseFrom", e.target.value); clearErr("purchaseFrom"); }}>
                <option value="">Select current source…</option>
                {PURCHASE_FROM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </Select>
              {data.purchaseFrom === "Other" && <Input type="text" placeholder="Please specify…" value={data.purchaseFromOther} onChange={(e) => set("purchaseFromOther", e.target.value)} className="mt-2" />}
            </Field>
            <Field label="How did you hear about us?" error={errors.hearAboutUs}>
              <Select value={data.hearAboutUs} onChange={(e) => set("hearAboutUs", e.target.value)}>
                <option value="">Select source…</option>
                {HEAR_FROM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </Select>
              {data.hearAboutUs === "Other" && <Input type="text" placeholder="Please specify…" value={data.hearAboutUsOther} onChange={(e) => set("hearAboutUsOther", e.target.value)} className="mt-2" />}
            </Field>
            <Field label="Additional notes (monthly requirement, special grades, etc.)" error={errors.description}>
              <Textarea placeholder="E.g. I need 200kg/month of Assam CTC BP grade for my retail chain…" value={data.description} onChange={(e) => set("description", e.target.value)} rows={3} />
            </Field>
            <div className="flex gap-3">
              <button type="button" onClick={() => { setStep(2); scrollToTop(); }} className="flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors"><ArrowLeft className="h-4 w-4" /> Back</button>
              <button type="button" onClick={handleNext3} className="flex-1 bg-tea-600 hover:bg-tea-700 text-white py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-md">
                Proceed to Confirmation <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-sm text-blue-900 font-medium leading-relaxed">Please confirm your details below. You cannot edit this information later.</p>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
              <div className="bg-gray-50 px-4 py-3 font-bold text-gray-900 border-b border-gray-200">Contact & Address</div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Name</span><span className="font-semibold text-right">{data.name}</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Business</span><span className="font-semibold text-right">{data.firmName}</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">WhatsApp</span><span className="font-semibold text-right">{data.whatsappNumber}</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">GST</span><span className="font-semibold text-right">{data.hasGst ? data.gstNumber : "New Startup (No GST)"}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Delivery Address</span><span className="font-semibold text-right max-w-[200px] leading-tight">{data.street}, {data.city}, {data.state} - {data.pincode}</span></div>
              </div>
            </div>
            {/* Hide Tea Requirement section for startup users who skipped step 3 */}
            {data.sampleType !== "startup" && (
              <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
                <div className="bg-gray-50 px-4 py-3 font-bold text-gray-900 border-b border-gray-200">Tea Requirement</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Grades Selected</span><span className="font-semibold text-right max-w-[200px]">{data.teaGrades.join(", ")}</span></div>
                  <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-500">Business Type</span><span className="font-semibold text-right">{data.businessType || "N/A"}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Current Source</span><span className="font-semibold text-right">{data.purchaseFrom}</span></div>
                </div>
              </div>
            )}
            {data.sampleType === "business" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="text-sm text-green-900 leading-relaxed font-medium">
                  <span className="font-bold text-green-700 text-base block mb-1">✓ Business Sample — Tea is Free</span>
                  Based on your delivery pincode (<strong>{data.pincode}</strong>), courier charges of <strong>~₹200</strong> will be applicable.<br />
                  <span className="font-bold text-tea-800 mt-1 block">Good News: This courier cost will be adjusted in your first bulk order with us!</span>
                </p>
                <div className="flex gap-2 mt-4 text-xs text-green-800"><Check className="w-4 h-4 flex-none mt-0.5" /><p>Once you submit, our team will connect on WhatsApp to collect the courier payment and dispatch your samples.</p></div>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <p className="text-sm text-yellow-900 leading-relaxed font-medium">
                  <span className="font-bold text-yellow-700 text-base block mb-1">💰 Startup Sample — ₹600 Total</span>
                  Includes 5–6 × 200g foil-packed tea varieties + courier charges.<br />
                  <span className="font-bold text-tea-800 mt-1 block">Our team will send you a payment link on WhatsApp after submission.</span>
                </p>
                <div className="flex gap-2 mt-4 text-xs text-yellow-800"><Check className="w-4 h-4 flex-none mt-0.5" /><p>Samples will be dispatched within 48 hours of payment confirmation.</p></div>
              </div>
            )}
            {submitError && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">{submitError}</div>}
            <div className="flex gap-3">
              <button type="button" onClick={() => { setStep(data.sampleType === "startup" ? 2 : 3); scrollToTop(); }} disabled={submitting} className="flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"><ArrowLeft className="h-4 w-4" /> Back</button>
              <button type="button" onClick={handleSubmit} disabled={submitting} className="flex-1 bg-tea-600 hover:bg-tea-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-md">
                {submitting ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</> : <><Send className="h-5 w-5" /> Confirm &amp; Submit Request</>}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
