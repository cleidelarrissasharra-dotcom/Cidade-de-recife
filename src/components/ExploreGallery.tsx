import { useState } from 'react';
import { LANDMARKS_DATA } from '../data/landmarks';
import { Landmark } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Tag, Landmark as LandmarkIcon, Palette, History, Trees, Sparkles, AlertCircle } from 'lucide-react';

interface ExploreGalleryProps {
  selectedLandmarkId: string | null;
  onSelectLandmark: (landmark: Landmark) => void;
}

export default function ExploreGallery({ selectedLandmarkId, onSelectLandmark }: ExploreGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos', icon: Grid },
    { id: 'arte', label: 'Arte', icon: Palette },
    { id: 'historia', label: 'História', icon: History },
    { id: 'arquitetura', label: 'Arquitetura', icon: LandmarkIcon },
    { id: 'natureza', label: 'Natureza', icon: Trees },
  ];

  const filteredLandmarks = activeCategory === 'todos' 
    ? LANDMARKS_DATA 
    : LANDMARKS_DATA.filter(l => l.category === activeCategory);

  const selectedLandmark = LANDMARKS_DATA.find(l => l.id === selectedLandmarkId) || LANDMARKS_DATA[0];

  return (
    <div id="details-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
      
      {/* Category selector + grid cards (Left on Desktop) */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <h2 className="text-2xl font-display font-bold text-recife-navy flex items-center gap-2">
            <Tag className="text-recife-orange" size={24} />
            Acervo e História do Recife Antigo
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Navegue pelos principais monumentos culturais, ruas e patrimônios no entorno do Marco Zero.
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex flex-wrap gap-2 pb-2 overflow-x-auto scrollbar-none border-b border-slate-100">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 uppercase ${
                  isActive 
                    ? 'bg-recife-blue text-white shadow-sm shadow-recife-blue/20' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                <IconComponent size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredLandmarks.map((landmark) => {
              const isSelected = landmark.id === selectedLandmarkId;

              return (
                <motion.div
                  key={landmark.id}
                  layoutId={`card-${landmark.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => onSelectLandmark(landmark)}
                  className={`cursor-pointer overflow-hidden rounded-2xl border text-left transition-all duration-300 group bg-white flex flex-col justify-between ${
                    isSelected 
                      ? 'border-recife-orange ring-1 ring-recife-orange shadow-md' 
                      : 'border-slate-100 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={landmark.image}
                      alt={landmark.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-medium">
                      {landmark.category}
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-slate-800 text-sm group-hover:text-recife-blue transition-colors line-clamp-1 mb-1">
                        {landmark.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {landmark.shortDescription}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">
                        {landmark.year || 'Histórico'}
                      </span>
                      <span className={`font-semibold ${isSelected ? 'text-recife-orange' : 'text-recife-blue group-hover:underline'}`}>
                        {isSelected ? 'Selecionado' : 'Ler mais →'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Elegant Full Details panel (Right on Desktop) */}
      <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm sticky top-6">
        <div className="flex items-center gap-1.5 text-xs text-recife-sky font-mono font-bold tracking-widest uppercase mb-2">
          <Sparkles size={14} className="text-recife-gold" />
          Acervo Detalhado
        </div>

        <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100 mb-6">
          <img
            src={selectedLandmark.image}
            alt={selectedLandmark.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-recife-orange text-white font-bold mb-1">
              {selectedLandmark.category}
            </span>
            <h3 className="font-display font-bold text-base md:text-lg">
              {selectedLandmark.name}
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs font-mono mb-4">
              <div>
                <span className="block text-slate-400 text-[10px]">CONSTRUÇÃO</span>
                <span className="text-slate-700 font-bold">{selectedLandmark.year || 'Não datada'}</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px]">AUTORIA / ORIGEM</span>
                <span className="text-slate-700 font-bold truncate block">{selectedLandmark.author || 'Pernambucana'}</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-sans mt-2">
              {selectedLandmark.longDescription}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-xs font-mono font-bold text-recife-navy uppercase tracking-wider mb-2">
              📍 Onde Encontrar?
            </h4>
            <p className="text-xs text-slate-500 leading-normal bg-sky-50/40 p-3 rounded-lg border border-sky-100/50">
              {selectedLandmark.locationTip}
            </p>
          </div>

          <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3.5 flex gap-2.5 items-start">
            <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
            <div>
              <h5 className="text-xs font-bold text-slate-800">Você sabia?</h5>
              <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                {selectedLandmark.curiosity}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
