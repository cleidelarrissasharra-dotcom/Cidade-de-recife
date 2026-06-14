import { Compass, Anchor, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeaderBanner() {
  return (
    <div id="header-banner" className="relative overflow-hidden bg-gradient-to-r from-recife-navy via-recife-blue to-recife-sky text-white py-14 px-6 md:px-12 rounded-3xl shadow-xl mb-10 border border-white/10">
      
      {/* Decorative organic shapes representing waves or reefs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-recife-gold/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-recife-orange/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      {/* Floating Frevo Umbrella decorative outline or subtle sun in the background */}
      <div className="absolute right-12 bottom-6 opacity-10 pointer-events-none hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 100 100" className="text-white animate-spin-slow">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono tracking-wider text-recife-gold border border-white/10 uppercase mb-4"
        >
          <Sparkles size={13} className="animate-pulse" />
          Patrimônio Cultural de Pernambuco
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-4"
        >
          Marco Zero <span className="text-recife-gold">do Recife</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-100 font-light max-w-2xl leading-relaxed mb-6"
        >
          Onde a história colonial encontra a arte contemporânea, cercado pelos icônicos arrecifes que deram nome à Veneza Brasileira.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-xs md:text-sm text-slate-200"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg text-recife-gold">
              <MapPin size={16} />
            </div>
            <div>
              <span className="block text-slate-400 text-[10px] uppercase">Localização</span>
              <strong>Recife Antigo, PE</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg text-recife-gold">
              <Compass size={16} />
            </div>
            <div>
              <span className="block text-slate-400 text-[10px] uppercase">Quilômetro</span>
              <strong>Km Zero do Estado</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5 col-span-2 md:col-span-1">
            <div className="p-2 bg-white/10 rounded-lg text-recife-gold">
              <Anchor size={16} />
            </div>
            <div>
              <span className="block text-slate-400 text-[10px] uppercase"> Fundação</span>
              <strong>Praça Rio Branco (1913)</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
