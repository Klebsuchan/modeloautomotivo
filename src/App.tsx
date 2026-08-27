import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Star, ArrowRight, User, ChevronDown, Check, Smartphone, Layers, LayoutGrid, Menu, Plus, Minus, Instagram, MapPin } from 'lucide-react';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 80]);
  const heroCarY = useTransform(scrollY, [0, 1000], [0, 200]);

  const faqs = [
    {
      question: "Qual a diferença entre polimento e vitrificação?",
      answer: "O polimento visa corrigir a pintura, removendo riscos, manchas e hologramas. Já a vitrificação é a aplicação de uma proteção de alta resistência (Coat 9H) que sela a pintura, intensifica o brilho e protege contra agressões externas."
    },
    {
      question: "Quanto tempo dura a proteção da vitrificação?",
      answer: "Trabalhamos com produtos premium que garantem proteção real de 1 a 3 anos, dependendo do pacote contratado e dos cuidados na lavagem e manutenção do dia a dia."
    },
    {
      question: "O detalhamento interno remove manchas dos bancos?",
      answer: "Sim! Nosso detalhamento interno conta com extração profunda para tecidos e higienização com hidratação premium para bancos de couro, recuperando o aspecto original de fábrica."
    },
    {
      question: "Vocês oferecem garantia nos serviços prestados?",
      answer: "Absolutamente. Você recebe um certificado de garantia sobre a durabilidade da aplicação da vitrificação e demais serviços, válido mediante as manutenções preventivas orientadas por nossa equipe."
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-display {
          font-family: 'Montserrat', sans-serif;
        }
        .font-body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Custom scrollbar for a premium feel */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #090909;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #E3242B;
        }
      `}</style>

      <div className="min-h-screen bg-[#090909] text-white font-body selection:bg-[#E3242B] selection:text-black overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] pt-6 pb-12 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
          
          {/* Top Nav Area */}
          <nav className="w-full max-w-[1600px] flex justify-between items-center z-50 relative py-4 lg:py-6">
            
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logoesteticaauto.png" alt="Sena Estética Automotiva" className="h-16 lg:h-24 w-auto object-contain drop-shadow-lg" style={{ imageRendering: 'high-quality' }} />
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <Menu className="w-8 h-8 text-white" />
            </div>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Serviços</a>
              <a href="#" className="hover:text-white transition-colors">Portfólio</a>
              <a href="#" className="hover:text-white transition-colors">Avaliações</a>
              <a href="#" className="px-6 py-3 border border-zinc-800 rounded-full hover:border-[#E3242B] hover:text-[#E3242B] transition-colors text-white font-semibold">
                Agendar Horário
              </a>
            </div>
          </nav>

          {/* Main Hero Layout (Aligned to reference moldes) */}
          <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-8 z-20 relative flex-1">
            
            {/* Left Column: Typography & Review */}
            <motion.div 
              style={{ y: heroTextY }}
              className="w-full lg:w-[55%] flex flex-col justify-center relative z-40"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-zinc-500 font-display font-bold tracking-widest text-sm lg:text-lg uppercase mb-2 lg:mb-4 ml-1"
              >
                Estúdio Especializado em
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-[18vw] lg:text-[7.5vw] leading-[0.9] font-display font-black uppercase text-[#E3242B] tracking-tighter drop-shadow-xl"
              >
                ESTÉTICA
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-[18vw] lg:text-[7.5vw] leading-[0.9] font-display font-black uppercase text-[#E0E0E0] tracking-tighter drop-shadow-xl"
              >
                AUTOMOTIVA
              </motion.h1>

              {/* Review Card Floating */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: mounted ? 1 : 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full lg:w-auto relative z-40 bg-[#121212] p-6 rounded-[24px] border border-white/5 max-w-sm mt-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-white">Roberto</p>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-[#E3242B] text-[#E3242B]" />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  O nível de detalhamento é absurdo. Deixaram meu carro impecável, parecendo que acabou de sair da concessionária. Serviço de altíssimo padrão. Recomendo de olhos fechados.
                </p>
                <div className="text-[10px] text-zinc-600 mt-4 text-right">09:37</div>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Car Image */}
            <motion.div 
              style={{ y: heroCarY }}
              className="w-full lg:w-[45%] relative mt-12 lg:mt-0 flex items-center justify-center lg:justify-end z-10"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: mounted ? 1 : 0, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="relative w-full lg:absolute lg:right-[-5%] lg:w-[120%] z-20 pointer-events-none"
              >
                <img 
                  src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop" 
                  alt="Carro de Alta Performance" 
                  className="w-full h-auto object-cover rounded-3xl lg:rounded-none drop-shadow-2xl brightness-75"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to left, black 80%, transparent 100%)'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* PROJECT DETAILS / SERVICES SECTION */}
        <section className="px-4 lg:px-12 py-12 lg:py-24 relative z-30">
          <div className="max-w-[1500px] mx-auto bg-[#111111] rounded-[40px] p-8 lg:p-20 relative overflow-hidden border border-white/5">
            
            {/* Faint Background Title */}
            <div className="absolute top-12 right-12 text-right hidden lg:block opacity-[0.03] font-display font-black text-[6rem] leading-[0.8] uppercase pointer-events-none">
              DETALHES <br/> DO PROJETO
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
              
              {/* Left Column */}
              <div className="max-w-xl">
                {/* 01 Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-16"
                >
                  <h2 className="font-display font-black text-2xl uppercase tracking-widest flex items-center gap-4 mb-6">
                    <span className="text-[#E3242B] text-3xl">01</span> SERVIÇOS
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    O nosso estúdio é especializado em estética automotiva de alto luxo. O objetivo é restaurar e proteger a pintura original, entregando um brilho incomparável.
                  </p>
                  <div className="border-l-2 border-[#E3242B] pl-6 py-2">
                    <p className="text-sm font-medium italic text-zinc-300">
                      // Trabalhamos com as melhores vitrificaçōes e compostos do mercado, garantindo durabilidade e proteção extrema.
                    </p>
                  </div>
                </motion.div>

                {/* 02 Block */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <h2 className="font-display font-black text-2xl uppercase tracking-widest flex items-center gap-4 mb-8">
                    <span className="text-[#E3242B] text-3xl">02</span> SOLUÇÕES
                  </h2>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group">
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#E3242B] transition-colors shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-1">Detalhamento Profundo</strong>
                        <span className="text-zinc-500 text-sm font-light">Limpeza minuciosa de cada fresta, interior e exterior, sem ruído visual.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#E3242B] transition-colors shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-1">Correção de Pintura</strong>
                        <span className="text-zinc-500 text-sm font-light">Remoção de micro-riscos e hologramas, devolvendo a profundidade da cor.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#E3242B] transition-colors shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-1">Proteção Cerâmica (Vitrificação)</strong>
                        <span className="text-zinc-500 text-sm font-light">Camada de sacrifício que repele água, sujeira e protege contra raios UV.</span>
                      </div>
                    </li>
                  </ul>

                  <button className="mt-10 px-8 py-4 border border-zinc-700 rounded-full text-sm font-medium hover:border-[#E3242B] hover:text-[#E3242B] transition-all flex items-center gap-3">
                    Agendar Avaliação <Check className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>

              {/* Right Column / Car & Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="relative flex flex-col items-center mt-12 lg:mt-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop" 
                  alt="BMW Custom" 
                  className="w-full max-w-[600px] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[150%] lg:max-w-[800px] mix-blend-screen opacity-80 pointer-events-none mb-8 lg:mb-0"
                />
                
                {/* Result Card overlapping */}
                <div className="relative lg:absolute lg:bottom-0 lg:-left-4 bg-[#D1D1D1] text-black p-8 rounded-[24px] max-w-[340px] shadow-2xl z-20">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display font-black text-2xl uppercase">NOSSA<br/>GARANTIA</h3>
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-10 h-10 rounded-full" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed mb-4">
                    Estética de alta performance que atrai olhares e valoriza o seu patrimônio.
                  </p>
                  <p className="text-sm font-bold">
                    Veículo protegido e com brilho espelhado por até 3 anos.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* POSTER SHOWCASE SECTION (Inspired by Audi Reference) */}
        <section className="relative w-full min-h-[1000px] lg:min-h-[1200px] bg-[#000000] overflow-hidden text-white flex flex-col justify-between py-12 px-6 lg:px-12 my-20">
          
          {/* Top Labels */}
          <div className="flex justify-between w-full relative z-20 font-display font-bold text-[10px] tracking-widest uppercase text-zinc-500">
            <div className="border-b-2 border-[#E3242B] pb-1 text-white">POSTER NO. 101</div>
            <div>ALTA PERFORMANCE</div>
            <div>VITRIFICAÇÃO 9H</div>
          </div>

          {/* Diagonal Red Stripe */}
          <div className="absolute top-[-20%] left-[10%] lg:left-[30%] w-[150vw] lg:w-[35vw] h-[150%] bg-[#E3242B] -skew-x-[20deg] z-10 shadow-2xl"></div>

          {/* Vertical Text */}
          <div className="absolute right-2 lg:right-8 top-0 h-full flex items-center z-0 pointer-events-none">
            <h2 
              className="text-[25vw] lg:text-[18vw] font-display font-black text-[#111111] leading-[0.8] uppercase tracking-tighter"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              SHIELD 9H
            </h2>
          </div>

          {/* Center Content / Cars */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center w-full h-full mt-24 lg:mt-12">
            
            {/* Car 1 (Rear/Top) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[600px] lg:-ml-32 mb-4 lg:mb-0 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-auto object-cover mix-blend-screen opacity-90 drop-shadow-2xl"
                alt="Detailing Performance"
              />
            </motion.div>

            {/* Car 2 (Side profile overlay) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-[800px] mt-[-40px] lg:mt-[-100px] z-30"
            >
              <img 
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-auto object-cover mix-blend-screen drop-shadow-2xl brightness-110"
                alt="Car Side Profile"
              />
            </motion.div>
          </div>

          {/* Bottom Specs (Mimicking the diagram lines) */}
          <div className="relative z-30 w-full flex flex-col items-center mt-auto pb-4 pt-16">
            <div className="max-w-[900px] w-full flex flex-col items-center">
              
              {/* Bracket / Top Line */}
              <div className="w-full flex justify-between items-end border-b border-white/20 pb-2 px-1">
                 <div className="w-1 h-3 bg-white/40"></div>
                 <div className="w-1 h-3 bg-white/40"></div>
              </div>

              <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-8 px-4">
                <div className="flex-1 text-[10px] lg:text-xs font-medium leading-relaxed tracking-widest text-zinc-300 max-w-sm uppercase">
                  A VITRIFICAÇÃO DE ALTA PERFORMANCE COMBINA BRILHO DESLUMBRANTE COM PROTEÇÃO EXTREMA PARA O DIA A DIA. DESENVOLVIDO PARA QUEM EXIGE PERFEIÇÃO.
                </div>
                
                <div className="flex gap-6 lg:gap-12 border-l border-white/20 pl-6 lg:pl-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Proteção:</span>
                    <span className="font-display font-black text-base lg:text-xl text-white">9H COAT</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Durabilidade:</span>
                    <span className="font-display font-black text-base lg:text-xl text-white">3 ANOS</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Brilho:</span>
                    <span className="font-display font-black text-base lg:text-xl text-white">EXTREMO</span>
                  </div>
                </div>
              </div>
              
              {/* Bracket / Bottom Line */}
              <div className="w-full flex justify-between items-start border-t border-white/20 pt-2 px-1">
                 <div className="w-1 h-3 bg-white/40"></div>
                 <div className="w-1 h-3 bg-white/40"></div>
              </div>

            </div>
          </div>
          
          {/* Logos bottom left */}
          <div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 z-30 flex items-center gap-4">
             <img src="/logoesteticaauto.png" alt="Sena" className="h-12 lg:h-16 w-auto object-contain drop-shadow-md" style={{ imageRendering: 'high-quality' }} />
             <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest border-l border-[#E3242B] pl-4 uppercase">
               <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#E3242B]"></div>
               Estética Automotiva
             </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="px-6 lg:px-12 py-24 bg-[#090909] border-t border-white/5">
          <div className="max-w-[1000px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-[#E3242B] font-display font-bold tracking-widest text-sm uppercase mb-4">Ficou com Dúvidas?</h2>
              <h3 className="text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tighter">Perguntas Frequentes</h3>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden bg-[#111] transition-all duration-300 ${openFaq === index ? 'border-[#E3242B]' : 'border-zinc-800 hover:border-zinc-700'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className={`font-display font-bold text-lg lg:text-xl pr-8 transition-colors ${openFaq === index ? 'text-white' : 'text-zinc-300'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-[#E3242B] text-white' : 'bg-zinc-900 text-[#E3242B]'}`}>
                      {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-zinc-400 font-light leading-relaxed border-t border-zinc-800/50 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOBILE / FOCUS SECTION */}
        <section className="px-6 lg:px-12 py-24 bg-[#090909] overflow-hidden">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Huge text */}
            <div>
              <h2 className="text-[12vw] lg:text-[7vw] leading-[0.9] font-display font-black text-[#E3242B] uppercase tracking-tighter">
                FOCO
              </h2>
              <h2 className="text-[12vw] lg:text-[7vw] leading-[0.9] font-display font-black text-white/30 uppercase tracking-tighter mb-8">
                TOTAL
              </h2>
              <p className="text-zinc-400 text-lg lg:text-xl font-light max-w-md leading-relaxed">
                Atendimento personalizado na palma da sua mão. Solicite orçamentos, acompanhe o processo do seu veículo e agende retornos diretamente pelo nosso canal exclusivo.
              </p>
            </div>

            {/* Right Column - Stylized Floating Phones */}
            <div className="relative h-[600px] lg:h-[800px] w-full flex justify-center items-center perspective-[2000px]">
              
              {/* Phone 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -20, rotateZ: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 20, rotateY: -15, rotateZ: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-[5%] lg:left-[15%] top-[5%] lg:top-[10%] w-[260px] lg:w-[280px] h-[560px] lg:h-[580px] bg-[#161616] rounded-[40px] border-[6px] border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10"
              >
                {/* Fake App UI */}
                <div className="flex-1 p-6 flex flex-col relative">
                  <div className="w-full flex justify-between items-center mb-8">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><User className="w-4 h-4" /></div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <h3 className="font-display font-black text-xl mb-2 text-white">ORÇAMENTO RÁPIDO</h3>
                  <p className="text-xs text-zinc-400 mb-8">Preencha os dados do seu veículo.</p>
                  
                  <div className="space-y-4 flex-1">
                     <div className="h-12 w-full bg-zinc-900 rounded-xl border border-zinc-800"></div>
                     <div className="h-12 w-full bg-zinc-900 rounded-xl border border-zinc-800"></div>
                     <div className="h-32 w-full bg-zinc-900 rounded-xl border border-zinc-800"></div>
                  </div>
                  <div className="h-14 w-full bg-[#E3242B] rounded-xl mt-4 flex items-center justify-center text-black font-bold text-sm">ENVIAR</div>
                </div>
              </motion.div>

              {/* Phone 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: 20, rotateZ: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 15, rotateY: 25, rotateZ: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute right-[5%] lg:right-[10%] top-[30%] lg:top-[25%] w-[260px] lg:w-[280px] h-[560px] lg:h-[580px] bg-[#111] rounded-[40px] border-[6px] border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-20"
              >
                {/* Fake App UI 2 */}
                <div className="h-[45%] w-full bg-zinc-900 relative">
                  <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                </div>
                <div className="flex-1 p-6 relative z-10 -mt-10">
                  <h3 className="font-display font-black text-xl mb-2 text-white uppercase">Nossos <br/><span className="text-[#E3242B]">Trabalhos</span></h3>
                  <p className="text-xs text-zinc-400 mb-6 line-clamp-2">Acompanhe o portfólio completo de transformações recentes no estúdio.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-zinc-800 rounded-xl overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-zinc-800 rounded-xl flex items-center justify-center">
                       <span className="text-xs text-zinc-500 font-medium">+ VER MAIS</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
          {/* Footer Grid / Meta info (Replaced by ELEGANT FOOTER) */}
        </section>

        {/* ELEGANT FOOTER */}
        <footer className="w-full bg-[#050505] pt-20 pb-10 px-6 lg:px-12 border-t border-white/5">
          <div className="max-w-[1500px] mx-auto flex flex-col">
            
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
              
              {/* Brand */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-6 lg:col-span-1"
              >
                <div className="flex items-start">
                  <img src="/logoesteticaauto.png" alt="Sena Estética Automotiva" className="h-24 lg:h-36 w-auto object-contain drop-shadow-xl" style={{ imageRendering: 'high-quality' }} />
                </div>
                <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-xs">
                  Estúdio de estética automotiva premium focado em alta performance, proteção duradoura e atenção aos mínimos detalhes.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm">Links Úteis</h4>
                <div className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
                  <a href="#" className="hover:text-[#E3242B] transition-colors w-fit">Nossos Serviços</a>
                  <a href="#" className="hover:text-[#E3242B] transition-colors w-fit">Avaliações</a>
                  <a href="#" className="hover:text-[#E3242B] transition-colors w-fit">Dúvidas Frequentes</a>
                  <a href="#" className="hover:text-[#E3242B] transition-colors w-fit">Política de Privacidade</a>
                  <a href="#" className="hover:text-[#E3242B] transition-colors w-fit">Política de Cookies</a>
                  <a href="#" className="hover:text-[#E3242B] transition-colors w-fit">Termos de Autorização</a>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm">Contato</h4>
                <div className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
                  <a href="#" className="hover:text-white transition-colors w-fit flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-[#E3242B]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </span>
                    (11) 99999-9999
                  </a>
                  <a href="#" className="hover:text-white transition-colors w-fit flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-[#E3242B]">
                      <MapPin className="w-4 h-4" />
                    </span>
                    São Paulo, SP
                  </a>
                </div>
              </motion.div>

              {/* Social / CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col gap-6"
              >
                <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-[#E3242B] hover:border-[#E3242B] transition-all text-white group">
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-[#E3242B] hover:border-[#E3242B] transition-all text-white group">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.4L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600"
            >
              <p>© 2024 SENA ESTÉTICA AUTOMOTIVA. TODOS OS DIREITOS RESERVADOS.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              </div>
            </motion.div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#E3242B] rounded-full animate-ping opacity-40 duration-1000"></div>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#E3242B] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(227,36,43,0.5)] hover:bg-white hover:text-[#E3242B] transition-colors duration-300 flex items-center justify-center group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:scale-110 transition-transform">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

      </div>
    </>
  );
}

