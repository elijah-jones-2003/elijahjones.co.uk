import React, { useState } from 'react';
import './Pi.css';

const Pi: React.FC = () => {
  const [isPoweredOn, setIsPoweredOn] = useState(true);

  const togglePower = () => {
    setIsPoweredOn(!isPoweredOn);
  };

  const handleLink = (url: string) => {
    if (!isPoweredOn) return; 
    window.open(url, '_blank');
  };

  return (
    <div className="portfolio-pi-wrapper">
      <div id="pi-container" className={isPoweredOn ? 'power-on' : 'power-off'}>
        <svg 
          width="100%" 
          height="auto" 
          viewBox="0 0 1307 848" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1" clipPath="url(#clip0_2_560)">
            <g id="board with clips">
                <rect x="0" y="0" width="1200" height="800" rx="40" fill="#2ba67a"
                />
                <g id="Mounting Holes">
                    <circle cx="70" cy="60" r="30" stroke="#F4E387" strokeWidth="20" fill="none" />
                    <circle cx="70" cy="60" r="25" fill="#0f0f0f" />
                    
                    <circle cx="70" cy="740" r="30" stroke="#F4E387" strokeWidth="20" fill="none" />
                    <circle cx="70" cy="740" r="25" fill="#0f0f0f" />
                    
                    <circle cx="890" cy="740" r="30" stroke="#F4E387" strokeWidth="20" fill="none" />
                    <circle cx="890" cy="740" r="25" fill="#0f0f0f" />
                    
                    {/* Top-Right */}
                    <circle cx="890" cy="60" r="30" stroke="#F4E387" strokeWidth="20" fill="none" />
                    <circle cx="890" cy="60" r="25" fill="#0f0f0f" />
                </g>
            </g>

            <g id="GPIO">
              <rect x="125" y="22" width="715" height="75" rx="10" fill="#4C4D4F"/>
              {Array.from({ length: 20 }).map((_, index) => {
                const xOffset = 150 + (index * 35); 
                return (
                <g key={index}>
                    <circle cx={xOffset} cy="40" r="5" fill="#CAD0CC" />
                    <circle cx={xOffset} cy="80" r="5" fill="#CAD0CC" />
                </g>
                );
            })}
            </g>

            <g id="USB1" className="hotspot" onClick={() => handleLink('pages/ai_cars.html')}>
            <rect x="1020" y="40" width="250" height="190" rx="10" fill="#d1d5db" />
            <text fill="#4b5563" fontFamily="-apple-system, sans-serif" fontSize="38" fontWeight="600"textAnchor="middle">
                <tspan x="1145" y="150">AI CARS</tspan>
            </text>
            </g>

            <g id="USB2" className="hotspot" onClick={() => handleLink('pages/ratnet.html')}>
            <rect x="1020" y="280" width="250" height="190" rx="10" fill="#d1d5db" />
            <text fill="#4b5563" fontFamily="-apple-system, sans-serif" fontSize="38" fontWeight="600"textAnchor="middle">
                <tspan x="1145" y="390">RATNET</tspan>
            </text>
            </g>

            <g id="Ethernet" className="hotspot" onClick={() => handleLink('pages/home_lab.html')}>
            <rect x="970" y="530" width="302" height="230" rx="10" fill="#d1d5db" />
            <text fill="#4b5563" fontFamily="-apple-system, sans-serif" fontSize="38" fontWeight="600"textAnchor="middle">
                <tspan x="1120" y="655">HOME LAB</tspan>
            </text>
            </g>

            {/* CPU: CV Link */}
            <g id="CPU" className="hotspot" onClick={() => handleLink('/cv.pdf')}>
              <rect x="364" y="358" width="240" height="240" rx="5" fill="url(#paint8_linear_2_560)"/>
              <text fill="#8f8f8f" fontFamily="Chivo" fontSize="96" fontWeight="500">
                <tspan x="421" y="500">CV</tspan>
              </text>
            </g>

            {/* LinkedIn Hotspot */}
            <g id="MicroHDMI1" className="hotspot" onClick={() => handleLink('https://linkedin.com/in/elijah-jones')}>
              <path d="M538 719C538 713.477 542.477 709 548 709H601C606.523 709 611 713.477 611 719V825H538V719Z" fill="url(#paint5_linear_2_560)"/>
              <image href="images/icone-linkedin-grise.png" x="546" y="739" width="57" height="57" />
            </g>

            {/* GitHub Hotspot */}
            <g id="MicroHDMI2" className="hotspot" onClick={() => handleLink('https://github.com/elijah-jones-2003')}>
              <path d="M345 719C345 713.477 349.477 709 355 709H408C413.523 709 418 713.477 418 719V825H345V719Z" fill="url(#paint6_linear_2_560)"/>
              <image href="images/icone-github-grise.png" x="349" y="735" width="65" height="65" />
            </g>

            {/* POWER BUTTON */}
            <g id="on/off button" style={{ cursor: 'pointer' }} onClick={togglePower}>
              <rect x="12" y="518" width="13" height="37" rx="1" fill={isPoweredOn ? "#22C88B" : "#9F9F9F"} />
              <rect x="23" y="500" width="28" height="76" rx="1" fill="#CED1C6"/>
              <path d="M26 508C26 507.448 26.4477 507 27 507H51V567H27C26.4477 567 26 566.552 26 566V508Z" fill="#474849"/>
            </g>

            <text fill="white" fontFamily="Chivo" fontSize="64">
              <tspan x="342" y="164">Portfolio Pi</tspan>
            </text>

            <defs>
              <filter id="filter0_f_2_560" x="-33" y="-44" width="1320" height="920" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_2_560"/>
              </filter>
              <radialGradient id="paint0_radial_2_560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(627 416) scale(600 900)">
                <stop stopColor="#26916A"/><stop offset="1" stopColor="#22C88B" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial_2_560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(627 418) scale(600 900)">
                <stop stopColor="#22C88B"/><stop offset="1" stopColor="#26916A"/>
              </radialGradient>
              <linearGradient id="paint2_linear_2_560" x1="1148" y1="40" x2="1148" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8F3EC"/><stop offset="0.5" stopColor="#C5C1BB"/><stop offset="1" stopColor="#928F8B"/>
              </linearGradient>
              <linearGradient id="paint3_linear_2_560" x1="1122" y1="548" x2="1122" y2="778" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8F3EC"/><stop offset="0.5" stopColor="#C5C1BB"/><stop offset="1" stopColor="#928F8B"/>
              </linearGradient>
              <linearGradient id="paint5_linear_2_560" x1="574.5" y1="709" x2="574.5" y2="825" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8F3EC"/><stop offset="0.5" stopColor="#C5C1BB"/><stop offset="1" stopColor="#928F8B"/>
              </linearGradient>
              <linearGradient id="paint6_linear_2_560" x1="381.5" y1="709" x2="381.5" y2="825" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8F3EC"/><stop offset="0.5" stopColor="#C5C1BB"/><stop offset="1" stopColor="#928F8B"/>
              </linearGradient>
              <linearGradient id="paint8_linear_2_560" x1="484" y1="358" x2="484" y2="598" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8F3EC"/><stop offset="0.5" stopColor="#C5C1BB"/><stop offset="1" stopColor="#928F8B"/>
              </linearGradient>
              <clipPath id="clip0_2_560"><rect width="1307" height="848" fill="white"/></clipPath>
            </defs>
          </g>
        </svg>

        {!isPoweredOn && (
          <div id="power-message">
            <p>That was powering the site… please turn it back on!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pi;