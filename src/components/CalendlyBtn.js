/*
import React, { useEffect } from 'react';
function CalendlyBtn() {
    useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.setAttribute('async', true);
        document.head.appendChild(script);
        
        window.onload = function() {
      Calendly.initBadgeWidget({ 
          url: 'https://calendly.com/davidazuaje1084', 
          text: 'Schedule time with me', 
          color: '#0069ff', 
          textColor: '#ffffff', 
          branding: true 
        }); 
    };
    
    return () => {
        document.head.removeChild(script);
    };
}, []);

return (
    <div className="calendly-badge-widget">
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    </div>
    );
}

export default CalendlyBtn;
*/
