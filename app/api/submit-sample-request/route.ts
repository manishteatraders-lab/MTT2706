import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }); // silently ignore bots
    }

    // Basic server-side validation
    const required = ["name", "firmName", "primaryMobile", "whatsappNumber", "street", "city", "state", "pincode"];
    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }
    
    // Only validate GST if they haven't explicitly marked it as false (New Startup)
    if (body.hasGst !== false && !body.gstNumber?.trim()) {
      return NextResponse.json({ error: "gstNumber is required" }, { status: 400 });
    }

    if (!body.teaGrades || body.teaGrades.length === 0) {
      return NextResponse.json({ error: "teaGrades is required" }, { status: 400 });
    }

    // Assemble deliveryAddress for legacy API compatibility
    body.deliveryAddress = `${body.street}, ${body.city}, ${body.state} - ${body.pincode}`;
    // Format GST for the sheet
    if (body.hasGst === false) {
      body.gstNumber = "New Startup (No GST)";
    }

    const submissionId = Date.now();
    const submittedAt = new Date().toISOString();

    // ── 1. Save to local JSON file (Backup) ──────────
    const submission = {
      id: submissionId,
      submittedAt: submittedAt,
      ...body,
    };

    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "sample-requests.json");
    let existing: object[] = [];
    if (fs.existsSync(filePath)) {
      try { existing = JSON.parse(fs.readFileSync(filePath, "utf-8")); } catch { existing = []; }
    }
    existing.push(submission);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    // ── 2. Send to Google Sheets via Apps Script Web App ──────────
    if (process.env.GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission), // Sending the exact JSON object built above
        });
        
        if (!response.ok) {
          console.error("Google Script Web App returned an error:", await response.text());
        } else {
          console.log("Successfully appended to Google Sheet via Web App");
        }
      } catch (sheetErr) {
        console.error("Failed to POST to Google Script Web App:", sheetErr);
        // Continue even if sheet fails, so the user sees a success message and we still have the local JSON backup
      }
    } else {
        console.warn("GOOGLE_SCRIPT_URL not found in environment variables. Skipping Sheets upload.");
    }

    // ── 3. Send email via Nodemailer (if configured) ─────────────────────────
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT ?? 587),
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        const html = `
          <div style="font-family: sans-serif; max-width:600px; margin:auto;">
            <div style="background:#4a5d23; color:white; padding:20px; border-radius:8px 8px 0 0;">
              <h2 style="margin:0;">🍵 New Sample Request — Manish Tea Traders</h2>
              <p style="margin:4px 0 0; font-size:13px; opacity:0.85;">Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
            <div style="border:1px solid #e5e7eb; border-top:none; padding:20px; border-radius:0 0 8px 8px; background:#fafaf7;">
              <h3 style="color:#4a5d23; border-bottom:2px solid #4a5d23; padding-bottom:6px;">Contact & Business</h3>
              <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280; width:40%">Name</td><td style="padding:6px 0; font-weight:600;">${body.name}</td></tr>
                <tr style="background:#f3f4f6;"><td style="padding:6px 12px 6px 0; color:#6b7280;">Firm</td><td style="padding:6px 0; font-weight:600;">${body.firmName}</td></tr>
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Mobile</td><td style="padding:6px 0;">${body.primaryMobile}</td></tr>
                <tr style="background:#f3f4f6;"><td style="padding:6px 12px 6px 0; color:#6b7280;">WhatsApp</td><td style="padding:6px 0;">${body.whatsappNumber}</td></tr>
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">GST</td><td style="padding:6px 0; font-family:monospace;">${body.gstNumber}</td></tr>
                <tr style="background:#f3f4f6;"><td style="padding:6px 12px 6px 0; color:#6b7280;">Location</td><td style="padding:6px 0;">${body.city}, ${body.state}</td></tr>
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Address</td><td style="padding:6px 0;">${body.deliveryAddress}</td></tr>
              </table>
              <h3 style="color:#4a5d23; border-bottom:2px solid #4a5d23; padding-bottom:6px; margin-top:20px;">Tea Requirement</h3>
              <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280; width:40%; vertical-align:top;">Tea Grades</td><td style="padding:6px 0; font-weight:600;">${Array.isArray(body.teaGrades) ? body.teaGrades.join(", ") : body.teaGrades}</td></tr>
                <tr style="background:#f3f4f6;"><td style="padding:6px 12px 6px 0; color:#6b7280;">Price Range</td><td style="padding:6px 0;">${body.priceRange || "Not specified"}</td></tr>
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Business Type</td><td style="padding:6px 0;">${body.businessType || "Not specified"}</td></tr>
                <tr style="background:#f3f4f6;"><td style="padding:6px 12px 6px 0; color:#6b7280;">Buys from</td><td style="padding:6px 0;">${body.purchaseFrom}${body.purchaseFromOther ? ` — ${body.purchaseFromOther}` : ""}</td></tr>
                <tr><td style="padding:6px 12px 6px 0; color:#6b7280;">Source</td><td style="padding:6px 0;">${body.hearAboutUs || "Not specified"}${body.hearAboutUsOther ? ` — ${body.hearAboutUsOther}` : ""}</td></tr>
                <tr style="background:#f3f4f6;"><td style="padding:6px 12px 6px 0; color:#6b7280; vertical-align:top;">Notes</td><td style="padding:6px 0;">${body.description || "—"}</td></tr>
              </table>
              <div style="margin-top:20px; text-align:center;">
                <a href="https://wa.me/91${body.whatsappNumber}?text=Hi+${encodeURIComponent(body.name)},+we+received+your+sample+request.+Let+us+confirm+your+details."
                   style="display:inline-block; background:#25D366; color:white; text-decoration:none; padding:10px 24px; border-radius:8px; font-weight:700; font-size:14px;">
                  Reply on WhatsApp →
                </a>
              </div>
            </div>
          </div>`;

        await transporter.sendMail({
          from: `"Manish Tea Traders Website" <${process.env.SMTP_USER}>`,
          to: process.env.SMTP_TO ?? process.env.SMTP_USER,
          subject: `🍵 New Sample Request — ${body.name} (${body.city}, ${body.state})`,
          html,
        });
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
