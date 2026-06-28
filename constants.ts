import { ContactInfo, NavItem } from "./types";

export const CONTACT_INFO: ContactInfo = {
  address: "H/8811/204/4, Ganga Nagar, Mahananda Para, Ward No. 5",
  city: "Siliguri",
  state: "West Bengal",
  zip: "734005",
  phone: "917001958588",
  displayPhone: "+91 70019 58588",
  mapEmbedUrl: "https://maps.google.com/maps?q=Manish+Tea+Traders,26.70445006858671,88.41120717507069&hl=en&z=17&output=embed",
  mapShareUrl: "https://share.google/xSalNg6M7uyYZQc4V",
  whatsappChannel: "https://whatsapp.com/channel/0029VbC2xZKH5JLpQV5Y9I0x"
};

export const BUSINESS_DETAILS = {
  gst: "19AHJPR0891G1ZX",
  tomco: "KOL/B-7410",
  proprietor: "Jaleshwar Ray",
  established: "2004",
  natureOfBusiness: "Wholesaler / Distributor",
  employees: "Upto 10 People",
  paymentMode: "Cash, Credit Card, DD, Cheque, UPI",
  shipmentMode: "By Road (All India)",
  indiamartProfile: "https://www.indiamart.com/manishteatraders",
  justdialProfile: "https://www.justdial.com/Siliguri/Manish-Tea-Traders-Mahananda-Para/9999PX353-X353-241126070451-T2Z7_BZDET",
  sampleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScFyImy-vM2I66AM_IKujtmmCb8TW9XxIrJIc8txis2bNoogQ/viewform?usp=send_form"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "home", type: 'view' },
  { label: "About Us", href: "home#about", type: 'link' },
  { label: "Products", href: "home#products", type: 'link' },
  { label: "Locations", href: "locations", type: 'view', viewName: 'locations' },
  { label: "Blog", href: "blog", type: 'view', viewName: 'blog' },
  { label: "Pricing", href: "home#contact", type: 'link' },
];