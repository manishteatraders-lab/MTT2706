import React, { useState } from 'react';
import { Mail, Check, MessageSquare, ArrowRight, Bell } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setSubscribed(true);
        setEmail('');
      }, 500);
    }
  };

  return (
    <section className="bg-gradient-to-br from-tea-900 to-tea-800 py-16 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 30 50 70 50 100 100 Z" fill="white" />
            <circle cx="20" cy="20" r="10" fill="white" />
            <circle cx="80" cy="30" r="5" fill="white" />
          </svg>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-white mb-2">Stay Updated with Market Rates</h3>
            <p className="text-tea-100 max-w-2xl mx-auto text-lg">
              Tea prices fluctuate weekly. Don't miss out on the best deals. Choose how you want to receive updates.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Option 1: WhatsApp Channel (Primary Focus) */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-green-500 transform hover:-translate-y-1 transition-transform relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                Most Popular
             </div>
             <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-gray-900">Official WhatsApp Channel</h4>
                    <p className="text-sm text-gray-500">Join 1000+ traders for instant alerts.</p>
                </div>
             </div>
             
             <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="h-4 w-4 text-green-500" /> Weekly Price Lists
                </li>
                 <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="h-4 w-4 text-green-500" /> New Arrival Notifications
                </li>
                 <li className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check className="h-4 w-4 text-green-500" /> Exclusive Deals
                </li>
             </ul>

             <a 
                href={CONTACT_INFO.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
             >
                Join Channel Now <ArrowRight className="h-4 w-4" />
             </a>
             <p className="text-xs text-center text-gray-400 mt-2">One-click join. No spam.</p>
          </div>

          {/* Option 2: Email Newsletter (Secondary) */}
          <div className="bg-tea-800/50 backdrop-blur-md rounded-2xl p-8 border border-tea-700/50 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-4">
                 <div className="bg-tea-700 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-tea-200" />
                 </div>
                 <h4 className="text-xl font-bold text-white">Weekly Email Digest</h4>
             </div>
             <p className="text-tea-100 text-sm mb-6 leading-relaxed">
                Prefer email? Get a detailed market analysis and rate report delivered to your inbox every Monday morning.
             </p>

            {subscribed ? (
              <div className="bg-green-500/20 rounded-lg p-4 flex items-center gap-3 border border-green-400/30 text-white animate-in fade-in">
                <div className="bg-green-500 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-medium">Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-tea-300">
                    <Bell className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-tea-600 bg-tea-900/50 text-white placeholder-tea-400 focus:ring-2 focus:ring-tea-400 focus:border-transparent outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tea-100 hover:bg-white text-tea-900 font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Subscribe via Email
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;