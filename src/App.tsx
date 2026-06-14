import { useState } from 'react';
import HeaderBanner from './components/HeaderBanner';
import MapSection from './components/MapSection';
import ExploreGallery from './components/ExploreGallery';
import CultureQuiz from './components/CultureQuiz';
import PostcardCreator from './components/PostcardCreator';
import { Landmark } from './types';
import { LANDMARKS_DATA } from './data/landmarks';
import { Compass, Film, Award, Heart, HelpCircle, Navigation, Anchor } from 'lucide-react';

export default function App() {
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string>('rosa-dos-ventos');

  const handleSelectLandmark = (landmark: Landmark) => {
    setSelectedLandmarkId(landmark.id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Decorative colored top-strip resembling Pernambuco Carnival colors */}
      <div className="w-full h-2.5 bg-gradient-to-r from-red-500 via-amber-400 via-recife-sky to-recife-blue z-50 sticky top-0" />

      {/* Primary Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Decorative Top header menu */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gradient-to-br from-recife-blue to-recife-sky rounded-xl text-white font-bold text-center block text-lg shadow-sm leading-none">
              MZ
            </span>
            <div>
              <h2 className="text-sm font-display font-extrabold text-recife-navy leading-none">
                MARCO ZERO
              </h2>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#00b4d8] font-bold">
                Recife Antigo
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs font-mono font-bold tracking-wide text-slate-500 uppercase">
            <a href="#interactive-map" className="hover:text-recife-blue transition-colors flex items-center gap-1">
              <Compass size={13} />
              Geografia
            </a>
            <a href="#details-container" className="hover:text-recife-blue transition-colors flex items-center gap-1">
              <Film size={13} />
              Acervo
            </a>
            <a href="#cultural-quiz" className="hover:text-recife-blue transition-colors flex items-center gap-1">
              <HelpCircle size={13} />
              Quiz
            </a>
            <a href="#postcard-section" className="hover:text-recife-blue transition-colors flex items-center gap-1">
              <Heart size={13} />
              Postais
            </a>
          </div>
        </div>

        {/* Hero Postcard banner */}
        <HeaderBanner />

        {/* Brief Introduction Card with visual depth */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs mb-10">
          <div className="max-w-3xl">
            <h3 className="text-xl font-display font-bold text-recife-navy mb-3 flex items-center gap-2">
              <Anchor className="text-recife-sky" size={20} />
              O Berço Marítimo de Pernambuco
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans mb-4">
              Localizado na antiga Praça Rio Branco, no histórico bairro do <strong>Recife Antigo</strong>, o Marco Zero representava originalmente o ponto central do porto e o berço comercial do estado de Pernambuco. Hoje, mais do que uma referência de medição para rodovias, é um majestoso anfiteatro urbano à beira-mar, onde se celebra o lendário carnaval recifense e no qual confluem a arquitetura do início do século, a brisa do Atlântico e a lendária vanguarda artesanal de Pernambuco.
            </p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Exploração Digital • Produzido em 2026
            </p>
          </div>
        </section>

        {/* MAP COMPONENT */}
        <section className="scroll-mt-16">
          <MapSection 
            selectedLandmarkId={selectedLandmarkId} 
            onSelectLandmark={handleSelectLandmark} 
          />
        </section>

        {/* DETAILED GALLERY & INFORMATION ACCORDION COMPONENT */}
        <section className="scroll-mt-16">
          <ExploreGallery 
            selectedLandmarkId={selectedLandmarkId} 
            onSelectLandmark={handleSelectLandmark} 
          />
        </section>

        {/* CULTURAL QUIZ SECTION */}
        <section className="scroll-mt-16">
          <CultureQuiz />
        </section>

        {/* POSTCARD WRITER SECTION */}
        <section className="scroll-mt-16">
          <PostcardCreator />
        </section>

      </main>

      {/* Footer conforming strictly to natural, responsive constraints in Portuguese */}
      <footer className="bg-recife-navy text-slate-300 py-12 px-6 border-t border-white/5 font-sans mt-16 relative overflow-hidden">
        
        {/* Ambient subtle blur representing light from the lighthouse */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-96 h-1 bg-recife-sky/30 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
          <div>
            <div className="flex items-center gap-1.5 mb-3 text-white">
              <span className="text-lg font-display font-extrabold uppercase tracking-wide">Marco Zero</span>
              <span className="text-xs bg-recife-orange text-white px-2 py-0.5 rounded font-mono font-bold">2026</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Um portal turístico-cultural projetado para homenagear os recifes permanentes, Cícero Dias, Francisco Brennand e todos os poetas, músicos e moradores de Recife.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Atrações Principais</h4>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Rosa dos Ventos de Cícero Dias</li>
              <li>• Coluna de Cristal no Parque de Esculturas</li>
              <li>• Rua do Bom Jesus (Anciã das Américas)</li>
              <li>• Centro de Artesanato de Pernambuco</li>
            </ul>
          </div>

          <div className="space-y-2 text-left md:text-right">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Vozes da Cultura</h4>
            <p className="text-xs italic text-slate-400 max-w-sm md:ml-auto">
              "Aqui nasceu o Brasil... sob a cor marítima e o compasso voador do Frevo."
            </p>
            <div className="text-[10px] font-mono text-recife-gold font-bold">
              RECIFE ANTIGO • PERNAMBUCO
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
          <div>
            Projeto HTML Reestruturado • Guia Cultural do Marco Zero © 2026
          </div>
          <div className="mt-2 sm:mt-0">
            Pulsando no Coração Verde-Amarelo de Pernambuco
          </div>
        </div>
      </footer>
    </div>
  );
}
