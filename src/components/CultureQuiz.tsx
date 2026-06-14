import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Check, X, Award, RotateCcw, ChevronRight, Play, BookOpen } from 'lucide-react';

export default function CultureQuiz() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startQuiz = () => {
    setStarted(true);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setGameOver(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
  };

  const submitAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    const currentQuestion = QUIZ_QUESTIONS[currentIndex];
    const correct = selectedOption === currentQuestion.correctIndex;
    if (correct) {
      setScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
    }
  };

  const getBadgeMessage = (finalScore: number) => {
    const total = QUIZ_QUESTIONS.length;
    if (finalScore === total) {
      return {
        title: "Doutor em Recife Antigo 🎓",
        desc: "Você é um verdadeiro nativo! Conhece cada centímetro da praça e toda a alma artística de Pernambuco.",
        color: "bg-emerald-50 text-emerald-800 border-emerald-200"
      };
    } else if (finalScore >= total * 0.6) {
      return {
        title: "Guia de Turismo Credenciado 🗺️",
        desc: "Muito bem! Você tem muito conhecimento cultural do Recife. Quase um mestre do frevo!",
        color: "bg-recife-sky/10 text-recife-navy border-recife-sky/20"
      };
    } else {
      return {
        title: "Turista de Primeira Viagem 🎒",
        desc: "Seu passeio está apenas começando! Explore mais as atrações no mapa para dominar os segredos de Pernambuco.",
        color: "bg-amber-50 text-amber-800 border-amber-100"
      };
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const percentage = Math.round((currentIndex / QUIZ_QUESTIONS.length) * 100);

  return (
    <div id="cultural-quiz" className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 mb-10 overflow-hidden relative">
      
      {/* Decorative Frevo streamers */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400" />

      {!started && !gameOver ? (
        <div className="text-center py-10 max-w-xl mx-auto">
          <div className="mx-auto w-16 h-16 bg-recife-sky/10 rounded-2xl flex items-center justify-center text-recife-blue mb-4">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-2xl font-display font-extrabold text-recife-navy mb-2">
            Desafio Cultural do Marco Zero
          </h2>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Teste sua bagagem cultural sobre a história, arte urbana de Cícero Dias, esculturas de Francisco Brennand e o folclore que pulsa no Recife Antigo!
          </p>
          <button
            onClick={startQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-recife-blue to-recife-sky text-white font-semibold rounded-xl text-sm tracking-wide shadow-md hover:from-recife-navy hover:to-recife-blue transition-all"
          >
            <Play size={16} fill="currentColor" />
            Começar Desafio
          </button>
        </div>
      ) : gameOver ? (
        <div className="text-center py-8 max-w-lg mx-auto">
          <div className="w-20 h-20 bg-recife-orange/10 rounded-full flex items-center justify-center mx-auto text-recife-orange mb-4">
            <Award size={48} className="animate-bounce" />
          </div>
          
          <h2 className="text-2xl font-display font-extrabold text-recife-navy mb-1">
            Desafio Concluído!
          </h2>
          <div className="text-base font-mono uppercase text-recife-sky font-bold mb-4">
            Pontuação: {score} de {QUIZ_QUESTIONS.length} acertos
          </div>

          <div className={`p-5 rounded-2xl border ${getBadgeMessage(score).color} text-center mb-6`}>
            <h4 className="font-display font-extrabold text-base mb-1">
              {getBadgeMessage(score).title}
            </h4>
            <p className="text-xs leading-relaxed opacity-95">
              {getBadgeMessage(score).desc}
            </p>
          </div>

          <button
            onClick={startQuiz}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            <RotateCcw size={14} />
            Refazer Desafio
          </button>
        </div>
      ) : (
        <div>
          {/* Quiz running state */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-recife-orange">Quiz Pernambuco</span>
              <h3 className="text-lg font-display font-bold text-recife-navy mt-0.5">
                Pergunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
              </h3>
            </div>
            <div className="text-xs font-mono font-bold text-slate-400">
              Acertos: {score}
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
            <div 
              className="h-full bg-recife-sky transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Question & Options */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-base md:text-lg font-semibold text-slate-800 leading-snug">
                {currentQuestion.question}
              </h4>

              <div className="space-y-2.5">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOption === index;
                  let optionStyle = "border-slate-100 hover:bg-slate-50 text-slate-700 bg-white";
                  
                  if (isAnswered) {
                    if (index === currentQuestion.correctIndex) {
                      optionStyle = "border-emerald-200 bg-emerald-50 text-emerald-800 font-medium";
                    } else if (isSelected) {
                      optionStyle = "border-rose-200 bg-rose-50 text-rose-800";
                    } else {
                      optionStyle = "border-slate-100 bg-white text-slate-400 opacity-60";
                    }
                  } else if (isSelected) {
                    optionStyle = "border-recife-sky bg-sky-50 text-recife-blue font-medium";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all duration-200 flex items-center justify-between gap-3 ${optionStyle}`}
                    >
                      <span>{option}</span>
                      
                      {isAnswered && index === currentQuestion.correctIndex && (
                        <Check size={16} className="text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isSelected && index !== currentQuestion.correctIndex && (
                        <X size={16} className="text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex justify-end">
                {!isAnswered ? (
                  <button
                    onClick={submitAnswer}
                    disabled={selectedOption === null}
                    className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide shadow-sm transition-all flex items-center gap-1.5 ${
                      selectedOption !== null 
                        ? 'bg-recife-blue text-white hover:bg-recife-navy cursor-pointer' 
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Confirmar Resposta
                    <ChevronRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="px-5 py-2.5 bg-recife-orange hover:bg-recife-orange/90 text-white rounded-xl text-xs font-semibold tracking-wide shadow-sm transition-all flex items-center gap-1.5"
                  >
                    {currentIndex + 1 === QUIZ_QUESTIONS.length ? 'Ver Resultados' : 'Próxima Pergunta'}
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Educational Explanation on Answer */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {isAnswered ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase text-slate-500">
                      <BookOpen size={14} className="text-recife-sky" />
                      Explicação Histórica
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                ) : (
                  <div className="border border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-400 flex flex-col items-center justify-center min-h-[140px]">
                    <HelpCircle size={28} className="text-slate-300 mb-2 animate-pulse" />
                    <p className="text-xs max-w-xs leading-relaxed">
                      Selecione uma opção e confirme para ler a explicação cultural detalhada desta questão!
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
