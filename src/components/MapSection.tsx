import { useState } from 'react';
import { LANDMARKS_DATA } from '../data/landmarks';
import { Landmark } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowRight, Compass, CompassIcon, Info, Sparkles, BookOpen } from 'lucide-react';

interface MapSectionProps {
  onSelectLandmark: (landmark: Landmark) => void;
  selectedLandmarkId: string | null;
}

export default function MapSection({ onSelectLandmark, selectedLandmarkId }: MapSectionProps) {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const handlePinClick = (landmark: Landmark) => {
    onSelectLandmark(landmark);
    // Smooth scroll to the landmark details section
    const element = document.getElementById('details-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const selectedLandmark = LANDMARKS_DATA.find(l => l.id === selectedLandmarkId) || LANDMARKS_DATA[0];

  return (
    <div id="interactive-map" className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 mb-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold text-recife-navy flex items-center gap-2">
            <Compass className="text-recife-sky animate-spin-pulse" size={24} />
            Mapa Interativo do Marco Zero
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Explore as atrações ao redor da praça e descubra a geografia única do estuário do Recife.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-recife-sky/10 text-recife-blue px-3 py-1.5 rounded-full border border-recife-sky/20">
          <Sparkles size={14} className="text-recife-orange" />
          <span>Clique nos pinos para explorar</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Interactive Visual Map Card */}
        <div className="lg:col-span-7 bg-gradient-to-br from-blue-50 to-sky-100/50 rounded-2xl border border-slate-200/60 p-4 relative overflow-hidden flex flex-col justify-between min-h-[380px] md:min-h-[460px]">
          
          {/* Aesthetic Background Grid lines & Nautical decoration */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Compass Rose on the map */}
          <div className="absolute top-4 right-4 text-recife-blue/15 pointer-events-none">
            <CompassIcon size={110} />
          </div>

          {/* Geographical annotations representing Recife Harbour */}
          <div className="absolute left-4 bottom-4 font-mono text-[10px] text-slate-400 tracking-wider">
            <div>BACIA DO PORTO INTERNO</div>
            <div>ESTUÁRIO RIO CAPIBARIBE</div>
          </div>
          <div className="absolute right-4 bottom-4 font-mono text-[10px] text-slate-400 tracking-wider text-right">
            <div>ATLÂNTICO SUL</div>
            <div>MOLHE DE ARRECIFES</div>
          </div>

          <div className="absolute left-6 top-6 text-xs font-mono font-bold tracking-widest text-recife-navy/35 select-none">
            RECIFE ANTIGO (TERRA FIRME)
          </div>

          {/* Reef Line Division across the middle/right of the map */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* The Reef barrier line */}
            <path 
              d="M 280,0 Q 285,150 290,260 T 300,500" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="4" 
              strokeDasharray="4 6" 
              className="opacity-40"
            />
            {/* Capibaribe river bank outline (simplified) */}
            <path
              d="M 120,0 Q 150,220 130,500"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              className="opacity-25"
            />
          </svg>

          {/* Map Hotspots / Pins */}
          <div className="relative w-full h-full flex-grow mt-8">
            {LANDMARKS_DATA.map((landmark) => {
              const isSelected = landmark.id === selectedLandmarkId;
              const isHovered = landmark.id === hoveredPin;

              return (
                <div
                  key={landmark.id}
                  id={`pin-${landmark.id}`}
                  style={{
                    left: `${landmark.mapCoords.x}%`,
                    top: `${landmark.mapCoords.y}%`
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  onClick={() => handlePinClick(landmark)}
                  onMouseEnter={() => setHoveredPin(landmark.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                >
                  <div className="relative flex items-center justify-center">
                    
                    {/* Ripple/Pulse effect for the pin */}
                    <span className={`absolute inline-flex h-8 w-8 rounded-full opacity-60 animate-ping ${
                      isSelected ? 'bg-recife-orange' : 'bg-recife-sky'
                    }`} />

                    {/* Main Pin icon container */}
                    <div className={`relative p-2.5 rounded-full border shadow-md transition-all duration-300 ${
                      isSelected 
                        ? 'bg-recife-orange text-white border-orange-400 scale-125' 
                        : isHovered 
                        ? 'bg-recife-blue text-white border-recife-sky scale-115' 
                        : 'bg-white text-recife-navy border-slate-200'
                    }`}>
                      <MapPin size={18} fill={isSelected || isHovered ? 'currentColor' : 'none'} />
                    </div>

                    {/* Mini floating label */}
                    <AnimatePresence>
                      {(isHovered || isSelected) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: -28, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="absolute bg-recife-navy text-white text-[11px] font-medium font-display py-1 px-2.5 rounded-md shadow-md whitespace-nowrap z-50 pointer-events-none"
                        >
                          {landmark.name}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-recife-navy" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm p-2 rounded-xl border border-slate-200/50 text-xs text-slate-500 z-10 font-sans mt-2">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-recife-orange inline-block" /> Selecionado</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-recife-sky inline-block animate-pulse" /> Atração</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" /> Travessia de barco</span>
          </div>
        </div>

        {/* Selected Landmark Snapshot details */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-slate-100 rounded-2xl p-6 bg-slate-50/50">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono uppercase font-semibold bg-recife-blue/10 text-recife-navy">
                {selectedLandmark.category}
              </span>
              {selectedLandmark.author && (
                <span className="text-xs text-slate-500 font-sans">
                  Obra de: <strong>{selectedLandmark.author}</strong>
                </span>
              )}
            </div>

            <motion.h3 
              key={`title-${selectedLandmark.id}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-display font-bold text-slate-900 mb-2"
            >
              {selectedLandmark.name}
            </motion.h3>

            <motion.p 
              key={`desc-${selectedLandmark.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-slate-600 leading-relaxed font-sans mb-4"
            >
              {selectedLandmark.shortDescription}
            </motion.p>

            <div className="border-t border-slate-200/60 my-4 pt-4">
              <h4 className="text-xs font-mono text-recife-blue uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Info size={13} />
                Dica de Visitação
              </h4>
              <p className="text-xs text-slate-500 leading-normal">
                {selectedLandmark.locationTip}
              </p>
            </div>

            <div className="bg-recife-gold/10 rounded-xl p-3 border border-recife-gold/20 flex gap-2.5 items-start mt-4">
              <Sparkles size={16} className="text-recife-orange shrink-0 mt-0.5" />
              <div>
                <h5 className="text-[11px] font-mono uppercase font-bold text-recife-orange">Curiosidade</h5>
                <p className="text-[11px] text-slate-700 leading-normal mt-0.5">
                  {selectedLandmark.curiosity}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <button
              onClick={() => handlePinClick(selectedLandmark)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-recife-blue hover:bg-recife-navy text-white text-xs font-semibold rounded-xl tracking-wide transition-all duration-200 group shadow-md shadow-recife-blue/10"
            >
              Ver Detalhes do Acervo
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
