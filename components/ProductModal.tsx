"use client";

import React, { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { PRODUCTS } from "../data/products";
import OptimizedImage from "./OptimizedImage";

interface ProductModalProps {
    productId: string;
    onClose: () => void;
    onRequestSample: (productName: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ productId, onClose, onRequestSample }) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');

    if (!product) return null;

    // Find related products (same category, excluding current)
    const relatedProducts = PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const handleCtaClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onRequestSample(product.name);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 relative h-64 md:h-auto shrink-0">
                        <OptimizedImage
                            src={product.imageUrl}
                            alt={product.imageAlt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-tea-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900">{product.name}</h2>
                                <p className="text-sm text-gray-500 font-mono mt-1">SKU: {product.sku}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex gap-2 mb-6 border-b border-gray-100">
                            <button
                                onClick={() => setActiveTab('description')}
                                className={`pb-2 px-1 text-sm font-semibold transition-colors border-b-2 ${activeTab === 'description' ? 'border-tea-600 text-tea-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab('specs')}
                                className={`pb-2 px-1 text-sm font-semibold transition-colors border-b-2 ${activeTab === 'specs' ? 'border-tea-600 text-tea-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            >
                                Specifications
                            </button>
                        </div>

                        <div className="flex-grow mb-8">
                            {activeTab === 'description' ? (
                                <div className="space-y-4 animate-in slide-in-from-right-2 duration-300">
                                    <div
                                        className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: product.longDescription || product.description }}
                                    />

                                    <div className="bg-tea-50 p-4 rounded-lg mt-4">
                                        <h4 className="font-bold text-tea-900 text-sm mb-2">Why this tea?</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-tea-600" /> Premium Sourcing
                                            </li>
                                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-tea-600" /> Wholesale Rates
                                            </li>
                                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-tea-600" /> {product.stockStatus}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="animate-in slide-in-from-right-2 duration-300">
                                    <table className="w-full text-sm text-left">
                                        <tbody>
                                            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                                                <tr key={key} className="border-b border-gray-100 last:border-0 border-dashed">
                                                    <td className="py-2 pr-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest w-1/3">{key}</td>
                                                    <td className="py-2 text-gray-900 font-semibold">{value}</td>
                                                </tr>
                                            ))}
                                            <tr className="border-b border-gray-100 border-dashed last:border-0">
                                                <td className="py-2 pr-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest">MOQ</td>
                                                <td className="py-2 text-gray-900 font-semibold">{product.moq || 'Contact for info'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        {/* Pricing & CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-gray-100 bg-white sticky bottom-0 z-10">
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Pricing</p>
                                <p className="text-xl font-bold text-tea-800">{product.priceRange}</p>
                            </div>
                            <button
                                onClick={handleCtaClick}
                                className="flex-1 bg-tea-600 hover:bg-tea-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                Enquire / Request Sample <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Related Products Footer */}
                {relatedProducts.length > 0 && (
                    <div className="hidden md:block bg-gray-50 p-4 border-t border-gray-200">
                        <p className="text-xs font-bold text-gray-500 uppercase mb-3">You might also like</p>
                        <div className="grid grid-cols-3 gap-4">
                            {relatedProducts.map(rp => (
                                <div key={rp.id} className="flex items-center gap-3 p-2 bg-white rounded border border-gray-200 cursor-pointer hover:border-tea-400 transition-colors" onClick={() => {
                                    // Quick way to switch product in modal without full refresh, 
                                    // though ideally we'd pass a handler to parent
                                    const btn = document.createElement('button'); // visual hack not needed if parent handles
                                }}>
                                    <OptimizedImage src={rp.imageUrl} className="w-10 h-10 object-cover rounded" alt={rp.name} />
                                    <div className="overflow-hidden">
                                        <p className="text-sm font-semibold text-gray-900 truncate">{rp.name}</p>
                                        <p className="text-xs text-gray-500">{rp.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductModal;