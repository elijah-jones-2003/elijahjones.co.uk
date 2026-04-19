import React, { useState } from 'react';
import './Pi.css';
import linkedinIcon from '../assets/icone-linkedin-grise.png';
import githubIcon from '../assets/icone-github-grise.png';
import youtubeIcon from '../assets/youtube-icon.png';
import mailImg from '../assets/mail.png';

interface PiProps {onNavigate: (view: string) => void;}

const Pi: React.FC<PiProps> = ({ onNavigate }) => {

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
        viewBox="0 0 1307 848" 
        preserveAspectRatio="xMidYMid meet" 
        xmlns="http://www.w3.org/2000/svg"
        className="main-pi-svg"
        >

            <g id="Frame 1">
                <g id="board with clips">
                    <rect x="15" y="0" width="1200" height="800" rx="40" fill="#2ba67a"
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
                    <text fill="#8e8e8e" fontFamily="-apple-system, sans-serif" fontSize="38" fontWeight="600"textAnchor="middle">
                        <tspan x="1145" y="150">AI CARS</tspan>
                    </text>
                </g>

                <g id="USB2" className="hotspot" onClick={() => handleLink('pages/ratnet.html')}>
                    <rect x="1020" y="280" width="250" height="190" rx="10" fill="#d1d5db" />
                    <text fill="#8e8e8e" fontFamily="-apple-system, sans-serif" fontSize="38" fontWeight="600"textAnchor="middle">
                        <tspan x="1145" y="390">RATNET</tspan>
                    </text>
                </g>

                <g id="Ethernet" className="hotspot" onClick={() => handleLink('pages/home_lab.html')}>
                    <rect x="970" y="530" width="302" height="230" rx="10" fill="#d1d5db" />
                    <text fill="#8e8e8e" fontFamily="-apple-system, sans-serif" fontSize="38" fontWeight="600"textAnchor="middle">
                        <tspan x="1120" y="655">HOME LAB</tspan>
                    </text>
                </g>

                <g id="CPU" className="hotspot" onClick={() => handleLink('/cv.pdf')}>
                <rect x="364" y="358" width="240" height="240" rx="5" fill="#d1d5db"/>
                <text fill="#8e8e8e" fontFamily="-apple-system, sans-serif" fontSize="96" fontWeight="500">
                    <tspan x="420" y="510">CV</tspan>
                </text>
                </g>

                <g id="LinkedIn" className="hotspot" onClick={() => handleLink('https://linkedin.com/in/elijah-jones')}>
                <rect x="540" y="710" width="75" height="120" rx="6" fill="#d1d5db" />
                <image href={linkedinIcon} x="550" y="740" width="57" height="57" />
                </g>

                <g id="GitHub" className="hotspot" onClick={() => handleLink('https://github.com/elijah-jones-2003')}>
                <rect x="345" y="710" width="75" height="120" rx="6" fill="#d1d5db" />
                <image href={githubIcon} x="350" y="740" width="65" height="65" />
                </g>

                <g id="Power" className="hotspot" onClick={() => onNavigate('about')}>
                    <rect x="120" y="710" width="120" height="120" rx="10" fill="#d1d5db" />
                    <text x="180" y="790" fill="#8e8e8e" fontFamily="-apple-system, sans-serif" fontSize="48" fontWeight="600" textAnchor="middle">EJ</text>
                </g>

                <g id="Wireless-Bluetooth" className='Hotspot' onClick={ () => handleLink('mailto:ej@elijahjones.co.uk')} >
                    <rect x="120" y="110" width="150" height="180" rx="5" fill="#d1d5db"/>
                    <image href={mailImg} x="125" y="130" width="140" height="140" /> 
                </g>

                <g id="DSI-CSI-Connectors">
                    <rect x="775" y="550" width="40" height="240" rx="5" fill="#A2775B"/>
                    <rect x="700" y="550" width="40" height="240" rx="5" fill="#A2775B"/>

                    <rect x="810" y="560" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="590" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="620" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="650" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="680" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="710" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="740" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="810" y="770" width="20" height="10" fill="#AFCDC1"/> 

                    <rect x="735" y="560" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="590" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="620" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="650" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="680" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="710" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="740" width="20" height="10" fill="#AFCDC1"/>
                    <rect x="735" y="770" width="20" height="10" fill="#AFCDC1"/> 
                </g>

                <g id="PCI-Express">
                    <rect x="40" y="275" width="40" height="190" fill="#A2775B"/>
                    <rect x="80" y={290} width="20" height="10" fill="#AFCDC1"/>
                    <rect x="80" y={320} width="20" height="10" fill="#AFCDC1"/>
                    <rect x="80" y={350} width="20" height="10" fill="#AFCDC1"/>
                    <rect x="80" y={380} width="20" height="10" fill="#AFCDC1"/>
                    <rect x="80" y={410} width="20" height="10" fill="#AFCDC1"/>
                    <rect x="80" y={440} width="20" height="10" fill="#AFCDC1"/>
                </g>

                <g id="IO-Controller" className='hotspot' onClick={() => onNavigate('projects')}>
                    <rect x="650" y="230" width="170" height="170" rx="10" fill="#474849"/>
                    <text fill="#E2E5D9" fontFamily="-apple-system, sans-serif" fontSize="32" fontWeight="600">
                        <tspan x="675" y="325">Projects</tspan>
                    </text>
                </g>

                <g id="RAM" className="hotspot" onClick={() => handleLink('https://www.youtube.com/@elijahjones6525')}>
                    <rect x="390" y="185" width="200" height="140" rx="5" fill="#474849"/>
                    <image href={youtubeIcon} x="410" y="205" width="160" height="100" />
                </g>
                
                <g id="on/off button" style={{ cursor: 'pointer' }} onClick={togglePower}>
                    <rect x="20" y="500" width="30" height="80" rx="1" fill="#d1d5db"/>
                    <rect x="5" y="520" width="15" height="40" rx="1" fill="#8e8e8e"/>
                </g>        

                <g id="Silkscreen" fontFamily="-apple-system, sans-serif" fontWeight="600">
                    <g>
                        <rect x="700" y="450" width="190" height="50" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                        <text x="710" y="485" fill="white" fontSize="36">Favourites</text>
                    </g>
                    <g>
                        <rect x="140" y="467" width="210" height="45" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                        <text x="150" y="500" fill="white" fontSize="36">Contact Me</text>
                    </g>
                    <g>
                        <rect x="330" y="110" width="305" height="60" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                        <text x="340" y="160" fill="white" fontSize="58">Portfolio Pi</text>
                    </g>
                    <g>
                        <rect x="120" y="650" width="120" height="35" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                        <text x="125" y="675" fill="white" fontSize="24">About Me</text>
                    </g>
                    <g id="Lines" stroke="white" strokeWidth="3"> 
                        {/* Projects */}
                        <line x1="750" y1="450" x2="750" y2="400"/>
                        <line x1="920" y1="180" x2="920" y2="600"/>
                        <line x1="920" y1="370" x2="1020" y2="370"/>
                        <line x1="920" y1="180" x2="1020" y2="180"/>
                        <line x1="920" y1="600" x2="970" y2="600"/>
                        <line x1="920" y1="180" x2="1020" y2="180"/>
                        <line x1="920" y1="475" x2="890" y2="475"/>
                        {/* Contact me */}
                        <line x1="180" y1="467" x2="180" y2="290"/>
                        <line x1="180" y1="513" x2="180" y2="630"/>
                        <line x1="180" y1="630" x2="570" y2="630"/>
                        <line x1="570" y1="710" x2="570" y2="630"/>
                        <line x1="385" y1="710" x2="385" y2="630"/>
                        <line x1="230" y1="513" x2="230" y2="563"/>
                        <line x1="230" y1="563" x2="365" y2="563"/>
                        {/* About me */}
                        <line x1="180" y1="685" x2="180" y2="710"/>
                    </g>           
                </g>
                <g id="Interactive-Instructions">
                    <text x="450" y="870" fill="white" fontFamily="-apple-system, sans-serif" fontSize="24">
                        Click the ports and chips to navigate
                    </text>
                </g>


            </g>  
        </svg>

        {!isPoweredOn && (
          <div id="power-message">
            <p>Why did you turn it off? Please turn it back on to make use of the links</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pi;