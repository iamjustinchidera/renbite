/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10', showText = false }) => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/renbitelogo.png" 
        alt="Renbite Logo" 
        className={className} 
      />
      {showText && (
        <span className="font-sans font-bold text-xl tracking-tight text-gray-900" id="brand-name">
          Renbite<span className="text-brand-500">Support</span>
        </span>
      )}
    </div>
  );
};
