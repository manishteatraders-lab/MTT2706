
import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface UpdateIndicatorProps {
  id: number;
  description: string;
}

const UpdateIndicator: React.FC<UpdateIndicatorProps> = ({ id, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-flex items-center relative ml-2 group align-middle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full cursor-pointer hover:bg-yellow-500 transition-colors shadow-sm animate-pulse"
        title="Click to see what's updated"
      >
        UPDATED #{id}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-xl z-[99999] text-left">
          <div className="flex justify-between items-start mb-1 border-b border-gray-100 pb-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Update Details</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed font-medium">#{id}: {description}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default UpdateIndicator;
