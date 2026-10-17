import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { pincode } = await req.json();

    if (!pincode || !/^[1-9][0-9]{5}$/.test(pincode.toString().trim())) {
      return NextResponse.json({ error: "Invalid 6-digit pincode" }, { status: 400 });
    }

    const cleanPincode = pincode.toString().trim();

    // Call Skyking API from server side (avoids browser CORS restrictions)
    const formData = new URLSearchParams();
    formData.append("pincodeList", cleanPincode);

    const response = await fetch("https://live.skyking.co/api/pincode_api/bindSearviceablityBranch", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch from Skyking API" }, { status: response.status });
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return NextResponse.json({ areas: [], serviceable: false });
    }

    // Filter only areas where Serviceability is "Yes" (case-insensitive)
    const serviceableAreas = data
      .filter((item: any) => item?.Serviceability?.toString().trim().toLowerCase() === "yes")
      .map((item: any) => ({
        areaName: item?.AreaName?.toString().trim() || "",
        districtName: item?.DistrictName?.toString().trim() || "",
        stateName: item?.StateName?.toString().trim() || "",
        pincode: item?.Pincode?.toString().trim() || cleanPincode,
      }))
      .filter((item: any) => item.areaName.length > 0);

    // Deduplicate area names in case of repeated entries
    const seen = new Set<string>();
    const uniqueAreas = serviceableAreas.filter((item: any) => {
      const key = item.areaName.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return NextResponse.json({
      success: true,
      pincode: cleanPincode,
      areas: uniqueAreas,
      hasServiceableAreas: uniqueAreas.length > 0,
      totalReported: data.length,
    });
  } catch (error: any) {
    console.error("Skyking pincode lookup error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
