import { useState, useEffect, FormEvent } from 'react';
import { Postcard } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Image, MessageSquare, Award, Trash2, ShieldAlert, Sparkles, Heart } from 'lucide-react';

const PRESETS = [
  {
    id: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Marco_Zero_Recife.jpg',
    label: 'Marco Zero'
  },
  {
    id: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Recife_Antigo.jpg',
    label: 'Recife Antigo'
  },
  {
    id: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80',
    label: 'Parque das Esculturas'
  },
  {
    id: 'https://images.unsplash.com/photo-1582555762499-79aef45a42f6?auto=format&fit=crop&w=800&q=80',
    label: 'Casarões Históricos'
  }
];

const STAMPS = [
  { id: 'frevo', label: 'Sombrinha de Frevo', icon: '🌂', color: 'bg-red-500' },
  { id: 'lighthouse', label: 'Farol do Porto', icon: '🚨', color: 'bg-blue-500' },
  { id: 'sun', label: 'Sol de Pernambuco', icon: '☀️', color: 'bg-amber-400' },
  { id: 'brennand', label: 'Coluna de Brennand', icon: '🏺', color: 'bg-stone-500' }
];

export default function PostcardCreator() {
  const [postcards, setPostcards] = useState<Postcard[]>([]);
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [message, setMessage] = useState('');
  const [bgImage, setBgImage] = useState(PRESETS[0].id);
  const [stamp, setStamp] = useState(STAMPS[0].id);

  // Load sample postcards and saved ones from local storage on component mount
  useEffect(() => {
    const stored = localStorage.getItem('marco_zero_postcards');
    if (stored) {
      try {
        setPostcards(JSON.parse(stored));
      } catch (e) {
        // Fallback
        initDefaultPostcards();
      }
    } else {
      initDefaultPostcards();
    }
  }, []);

  const initDefaultPostcards = () => {
    const defaults: Postcard[] = [
      {
        id: 'default-1',
        senderName: 'Clara Cavalcanti',
        receiverName: 'Tia Júlia',
        message: 'Dando uma volta no Marco Zero hoje à tarde! Os barcos para o parque de esculturas de Brennand estavam lindos sob o sol. Saudades!',
        backgroundImage: PRESETS[0].id,
        stamp: 'sun',
        stampPosition: 'top-4 right-4',
        createdAt: '14/06/2026'
      },
      {
        id: 'default-2',
        senderName: 'Beto Silva',
        receiverName: 'Mariana',
        message: 'Quanta cor na Rosa dos Ventos do Cícero Dias! O carnaval aqui deve ser incrível. Te vejo na volta de Recife, levei um bolo de rolo para você!',
        backgroundImage: PRESETS[1].id,
        stamp: 'frevo',
        stampPosition: 'top-4 right-4',
        createdAt: '12/06/2026'
      }
    ];
    setPostcards(defaults);
    localStorage.setItem('marco_zero_postcards', JSON.stringify(defaults));
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName || !receiverName || !message) return;

    const newCard: Postcard = {
      id: `pc-${Date.now()}`,
      senderName,
      receiverName,
      message,
      backgroundImage: bgImage,
      stamp,
      stampPosition: 'top-4 right-4',
      createdAt: new Date().toLocaleDateString('pt-BR')
    };

    const updated = [newCard, ...postcards];
    setPostcards(updated);
    localStorage.setItem('marco_zero_postcards', JSON.stringify(updated));

    // Reset fields
    setSenderName('');
    setReceiverName('');
    setMessage('');
  };

  const handleDelete = (id: string) => {
    const updated = postcards.filter(p => p.id !== id);
    setPostcards(updated);
    localStorage.setItem('marco_zero_postcards', JSON.stringify(updated));
  };

  const activeStampObj = STAMPS.find(s => s.id === stamp) || STAMPS[0];

  return (
    <div id="postcard-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
      
      {/* Postcard editor / customized layout (Left Column) */}
      <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-recife-navy flex items-center gap-2">
            <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={24} />
            Escreva um Cartão Postal Virtual
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Personalize, escreva e envie sua mensagem para o mural de recifes. Mande lembranças de Recife Antigo!
          </p>
        </div>

        <form onSubmit={handleSend} className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-500 mb-1.5 font-bold">
                Seu Nome (Remetente)
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={e => setSenderName(e.target.value)}
                placeholder="Ex: Amanda Silva"
                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-recife-sky focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-500 mb-1.5 font-bold">
                Para quem? (Destinatário)
              </label>
              <input
                type="text"
                required
                value={receiverName}
                onChange={e => setReceiverName(e.target.value)}
                placeholder="Ex: Família"
                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-recife-sky focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-500 mb-1.5 font-bold flex justify-between">
              <span>Sua mensagem (máx. 180 caracteres)</span>
              <span className={message.length > 180 ? 'text-rose-500 font-bold' : 'text-slate-400'}>
                {message.length}/180
              </span>
            </label>
            <textarea
              required
              maxLength={180}
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Escreva algo carinhoso sobre sua visita virtual ao imponente Marco Zero..."
              className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-recife-sky focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Preset image selector */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-500 mb-2 font-bold flex items-center gap-1">
              <Image size={14} className="text-recife-blue" />
              Selecione o cenário de fundo
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {PRESETS.map((p) => {
                const isActive = bgImage === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setBgImage(p.id)}
                    className={`relative h-14 rounded-lg overflow-hidden border-2 text-left group transition-all duration-200 ${
                      isActive ? 'border-recife-orange scale-102 ring-1 ring-recife-orange/50' : 'border-slate-100 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={p.id} alt={p.label} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 left-1.5 text-[9px] bg-black/60 text-white px-1.5 py-0.5 rounded uppercase font-semibold">
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stamp selector */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-500 mb-2 font-bold flex items-center gap-1">
              <Award size={14} className="text-recife-blue" />
              Escolha o Selo Postal
            </label>
            <div className="flex flex-wrap gap-2">
              {STAMPS.map((s) => {
                const isActive = stamp === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStamp(s.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 flex items-center gap-1.5 uppercase ${
                      isActive 
                        ? 'border-recife-orange bg-recife-orange/10 text-recife-orange font-bold scale-102' 
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span className="text-[10px]">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-recife-navy via-recife-blue to-recife-sky hover:brightness-110 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Send size={14} />
            Pendurar no Varal Virtual
          </button>
        </form>
      </div>

      {/* Live Preview of Current Postcard & Communal list (Right Column) */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        
        {/* Real-time Preview Area */}
        <div className="bg-slate-100/50 border border-dashed border-slate-200 rounded-3xl p-5 flex flex-col justify-between h-auto">
          <span className="text-xs font-mono uppercase font-semibold text-slate-400 block mb-3">
            Prévia do Seu Postal em Tempo Real
          </span>

          <div className="relative bg-amber-50/70 border border-amber-200/60 rounded-2xl p-5 shadow-md flex flex-col justify-between min-h-[190px] text-amber-950 font-serif overflow-hidden">
            
            {/* Stamp visual overlay */}
            <div className="absolute top-4 right-4 text-center border-2 border-dashed border-amber-600/30 p-1 bg-white/60 rounded-md shadow-xs select-none pointer-events-none">
              <div className="text-xl leading-none">{activeStampObj.icon}</div>
              <div className="text-[7px] font-mono uppercase tracking-widest text-amber-800 font-bold leading-normal mt-0.5">
                CORREIO BRASIL
              </div>
            </div>

            {/* Postcard grid split */}
            <div className="grid grid-cols-12 gap-4 h-full relative">
              
              {/* Message Block */}
              <div className="col-span-7 border-r border-amber-200/50 pr-4 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-800/70 mb-2">
                    Lembranças de Recife
                  </div>
                  <p className="text-xs italic leading-relaxed break-words font-light">
                    {message || "Digite sua história ou sentimentos à esquerda para preencher este cartão postal..."}
                  </p>
                </div>
                <div className="text-[10px] font-sans text-amber-800/65 font-bold mt-2">
                  De: <span className="font-serif underline text-amber-900">{senderName || "Você"}</span>
                </div>
              </div>

              {/* Address Block */}
              <div className="col-span-5 pl-1.5 flex flex-col justify-end">
                <div className="space-y-2 font-handwritten">
                  <div className="border-b border-amber-300 pb-0.5 w-full text-xs">
                    <span className="text-[8px] font-sans text-amber-800/50 block leading-none">Para</span>
                    <strong>{receiverName || 'Destinatário'}</strong>
                  </div>
                  <div className="border-b border-amber-300 pb-0.5 w-full text-[9px] text-amber-800/80 leading-tight">
                    Praça Rio Branco, S/N
                  </div>
                  <div className="border-b border-amber-300 pb-0.5 w-full text-[9px] text-amber-800/80 leading-tight">
                    Recife Antigo - PE
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Dynamic community Clothesline (Varal) board */}
        <div className="flex-grow bg-white border border-slate-100 rounded-3xl p-5 shadow-sm max-h-[300px] flex flex-col">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h4 className="text-xs font-mono font-bold text-recife-navy uppercase tracking-wider flex items-center gap-1">
              <MessageSquare size={13} className="text-recife-orange" />
              Varal de Lembranças ({postcards.length})
            </h4>
            {postcards.length > 2 && (
              <button 
                onClick={initDefaultPostcards}
                className="text-[10px] text-slate-400 hover:text-recife-orange cursor-pointer"
              >
                Resetar Mural
              </button>
            )}
          </div>

          <div className="overflow-y-auto pr-1 flex-grow space-y-3 scrollbar-thin">
            <AnimatePresence initial={false}>
              {postcards.map((post) => {
                const associatedStamp = STAMPS.find(s => s.id === post.stamp) || STAMPS[0];
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-3 bg-slate-50 border border-slate-150 rounded-xl relative flex justify-between gap-4 shadow-2xs text-left"
                  >
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          Enviado por <strong>{post.senderName}</strong>
                        </span>
                        <span className="text-[9px] text-slate-400">{post.createdAt}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-normal italic mt-1 break-words">
                        "{post.message}"
                      </p>
                      <div className="text-[10px] text-recife-blue font-semibold mt-1.5 flex items-center gap-1">
                        <span>Para:</span>
                        <span className="underline">{post.receiverName}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between shrink-0">
                      <div className="text-lg bg-white rounded-md p-1 shadow-3xs leading-none border border-slate-200 select-none">
                        {associatedStamp.icon}
                      </div>

                      {/* We only show delete if it is not default card */}
                      {post.id.startsWith('pc-') && (
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-1 text-slate-300 hover:text-rose-500 rounded-md transition-colors"
                          title="Excluir postal"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
