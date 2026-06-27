import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "../../../data/products";
import { ChevronLeft, ShoppingBag, ShieldCheck, Truck, Package, Info, ArrowRight } from "lucide-react";
import { BUSINESS_DETAILS } from "../../../constants";
import OptimizedImage from "../../../components/OptimizedImage";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Wholesale Tea Supplier Siliguri`,
    description: product.description,
    alternates: {
      canonical: `https://manishteatraders.in/product/${product.slug}/`,
      languages: {
        'en-IN': `https://manishteatraders.in/product/${product.slug}/`
      }
    },
    openGraph: {
      images: [
        {
          url: `https://manishteatraders.in${product.imageUrl}`
        }
      ]
    }
  };
}

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": `https://manishteatraders.in${product.imageUrl}`,
      "description": product.description,
      "sku": product.sku,
      "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": product.priceRange.includes('₹') ? product.priceRange.split('–')[0].replace(/[^\d.]/g, '') : "130",
          "availability": "https://schema.org/InStock",
          "offerCount": "1"
      }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-stone-50 min-h-screen">
          <main className="flex-grow pt-24 pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Breadcrumbs */}
                  <nav className="flex mb-8 text-sm text-stone-500">
                      <Link href="/" className="hover:text-tea-600">Home</Link>
                      <span className="mx-2">/</span>
                      <Link href={`/products/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-tea-600">{product.category}</Link>
                      <span className="mx-2">/</span>
                      <span className="text-stone-800 font-medium">{product.name}</span>
                  </nav>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                      {/* Image Section */}
                      <div className="relative group">
                          <div className="aspect-square overflow-hidden rounded-3xl bg-white shadow-xl border border-stone-100">
                              <OptimizedImage
                                  src={product.imageUrl}
                                  alt={product.imageAlt}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                          </div>
                          {product.badge && (
                              <div className="absolute top-6 right-6 bg-tea-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10">
                                  {product.badge}
                              </div>
                          )}
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col">
                          <div className="mb-2">
                              <span className="inline-block px-3 py-1 bg-tea-100 text-tea-800 text-xs font-bold rounded-full uppercase tracking-wider">
                                  {product.category}
                              </span>
                          </div>
                          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4 leading-tight">
                              {product.name}
                          </h1>

                          <div className="flex items-center gap-4 mb-6">
                              <span className="text-2xl font-bold text-tea-800">{product.priceRange}</span>
                              <span className="text-stone-400 text-sm italic">(Wholesale Rates)</span>
                          </div>

                          <p className="text-stone-600 text-lg mb-8 leading-relaxed italic border-l-4 border-tea-200 pl-4">
                              &quot;{product.description}&quot;
                          </p>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                                  <Package className="text-tea-600 mb-2" size={20} />
                                  <span className="text-xs text-stone-400 uppercase font-bold tracking-tighter">SKU</span>
                                  <span className="text-sm font-semibold text-stone-800">{product.sku}</span>
                              </div>
                              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                                  <ShoppingBag className="text-tea-600 mb-2" size={20} />
                                  <span className="text-xs text-stone-400 uppercase font-bold tracking-tighter">MOQ</span>
                                  <span className="text-sm font-semibold text-stone-800">{product.moq}</span>
                              </div>
                              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                                  <ShieldCheck className="text-tea-600 mb-2" size={20} />
                                  <span className="text-xs text-stone-400 uppercase font-bold tracking-tighter">Availability</span>
                                  <span className="text-sm font-semibold text-stone-800">{product.stockStatus}</span>
                              </div>
                          </div>

                          <div className="space-y-4 mb-8">
                              <Link
                                  href="/contact-us"
                                  className="w-full flex items-center justify-center gap-2 bg-tea-700 hover:bg-tea-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
                              >
                                  Get Bulk Quotation <ArrowRight size={20} />
                              </Link>
                              <a
                                  href={BUSINESS_DETAILS.sampleFormUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-200 hover:border-tea-600 font-bold py-4 rounded-2xl transition-all"
                              >
                                  Request Samples
                              </a>
                          </div>

                          {/* Trust Signals */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-t border-stone-200">
                              <div className="flex items-center gap-3">
                                  <div className="bg-tea-50 p-2 rounded-lg text-tea-700">
                                      <Truck size={20} />
                                  </div>
                                  <span className="text-sm font-medium text-stone-700">Pan India Delivery</span>
                              </div>
                              <div className="flex items-center gap-3">
                                  <div className="bg-tea-50 p-2 rounded-lg text-tea-700">
                                      <Info size={20} />
                                  </div>
                                  <span className="text-sm font-medium text-stone-700">Direct Estate Sourcing</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Long Description and Specs */}
                  <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                      <div className="lg:col-span-2">
                          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Detailed Product Overview</h2>
                          <div
                              className="prose prose-stone max-w-none text-stone-600 leading-relaxed text-lg"
                              dangerouslySetInnerHTML={{ __html: product.longDescription || '' }}
                          />
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-stone-100 lg:sticky lg:top-28">
                          <h3 className="text-lg font-bold text-stone-900 mb-4 border-b border-stone-100 pb-3 flex items-center gap-2">
                              <Package className="text-tea-600" size={20} /> Technical Specs
                          </h3>
                          <dl className="space-y-2">
                              {Object.entries(product.specifications).map(([key, value]) => (
                                  <div key={key} className="flex justify-between items-start py-1.5 border-b border-stone-50 last:border-0 border-dashed">
                                      <dt className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pt-1">{key}</dt>
                                      <dd className="text-sm font-semibold text-stone-800 text-right max-w-[60%] leading-tight">{value}</dd>
                                  </div>
                              ))}
                          </dl>
                      </div>
                  </div>

                  {/* Related Products Section */}
                  <div className="mt-24">
                      <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Related Tea Collections</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(related => (
                              <Link
                                  key={related.id}
                                  href={`/product/${related.slug}`}
                                  className="bg-white p-4 rounded-2xl border border-stone-100 hover:shadow-lg transition-all"
                              >
                                  <OptimizedImage
                                      src={related.imageUrl}
                                      alt={related.name}
                                      className="w-full aspect-square object-cover rounded-xl mb-4"
                                  />
                                  <h4 className="font-bold text-stone-800">{related.name}</h4>
                                  <p className="text-xs text-stone-400 font-bold uppercase tracking-tighter mt-1">{related.category}</p>
                              </Link>
                          ))}
                      </div>
                  </div>
              </div>
          </main>
      </div>
    </>
  );
}
