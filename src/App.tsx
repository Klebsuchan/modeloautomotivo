import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, User, ChevronDown, Check, Smartphone, Layers, LayoutGrid, Menu } from 'lucide-react';

export default function App() {
  const [mounted, setMounted] = useState(false);

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
          background: #DFB78C;
        }
      `}</style>

      <div className="min-h-screen bg-[#090909] text-white font-body selection:bg-[#DFB78C] selection:text-black overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen pt-6 pb-20 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
          
          {/* Top Nav Area */}
          <nav className="w-full max-w-[1600px] flex justify-between items-start z-50 relative">
            
            {/* Left Dates (Desktop only) */}
            <div className="hidden lg:flex flex-col items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-4">
              <ChevronDown className="w-4 h-4 mb-2" />
              <span>Data</span>
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-white font-medium bg-[#111]">
                07
              </div>
              <span>2024</span>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden pt-4">
              <Menu className="w-8 h-8 text-white" />
            </div>

            {/* Right Profile & Icons (Desktop only) */}
            <div className="hidden lg:flex flex-col items-end gap-6 pt-4">
              <div className="flex items-center gap-3 bg-[#111] border border-zinc-800 p-2 pr-4 rounded-full">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Tatyana</span>
                  <span className="text-[10px] text-zinc-500">Design Lead</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-zinc-500 items-center">
                <ChevronDown className="w-4 h-4" />
                <LayoutGrid className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                <Layers className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                <span className="font-display font-bold text-lg mt-2 hover:text-[#DFB78C] cursor-pointer transition-colors">T</span>
              </div>
            </div>
          </nav>

          {/* Main Huge Typography */}
          <div className="flex flex-col items-center justify-center w-full relative z-10 mt-12 lg:mt-0 lg:absolute lg:top-[12%] pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[15vw] lg:text-[11vw] leading-[0.85] font-display font-black uppercase text-[#E0E0E0] tracking-tighter"
            >
              ESTÉTICA
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-[15vw] lg:text-[11vw] leading-[0.85] font-display font-black uppercase text-[#DFB78C] tracking-tighter relative z-30"
            >
              AUTOMOTIVA
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[15vw] lg:text-[11vw] leading-[0.85] font-display font-black uppercase text-[#E0E0E0] tracking-tighter"
            >
              PREMIUM
            </motion.h1>
          </div>

          {/* Hero Car Image (Using mix-blend-screen for transparent effect on black bg) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: mounted ? 1 : 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="w-full max-w-[1200px] mt-10 lg:mt-0 lg:absolute lg:top-[25%] lg:left-1/2 lg:-translate-x-1/2 z-20 pointer-events-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Porsche" 
              className="w-full h-auto object-contain mix-blend-screen opacity-90"
            />
          </motion.div>

          {/* Review Card Floating */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: mounted ? 1 : 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-auto relative lg:absolute lg:bottom-20 lg:left-20 z-40 bg-[#121212]/90 backdrop-blur-md p-6 rounded-[24px] border border-white/5 max-w-sm mt-12 lg:mt-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">Roberto</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-[#DFB78C] text-[#DFB78C]" />)}
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              O nível de detalhamento é absurdo. Deixaram meu carro impecável, parecendo que acabou de sair da concessionária. Serviço de altíssimo padrão. Recomendo de olhos fechados.
            </p>
            <div className="text-[10px] text-zinc-600 mt-4 text-right">09:37</div>
          </motion.div>
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
                <div className="mb-16">
                  <h2 className="font-display font-black text-2xl uppercase tracking-widest flex items-center gap-4 mb-6">
                    <span className="text-[#DFB78C] text-3xl">01</span> SERVIÇOS
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                    O nosso estúdio é especializado em estética automotiva de alto luxo. O objetivo é restaurar e proteger a pintura original, entregando um brilho incomparável.
                  </p>
                  <div className="border-l-2 border-[#DFB78C] pl-6 py-2">
                    <p className="text-sm font-medium italic text-zinc-300">
                      // Trabalhamos com as melhores vitrificaçōes e compostos do mercado, garantindo durabilidade e proteção extrema.
                    </p>
                  </div>
                </div>

                {/* 02 Block */}
                <div>
                  <h2 className="font-display font-black text-2xl uppercase tracking-widest flex items-center gap-4 mb-8">
                    <span className="text-[#DFB78C] text-3xl">02</span> SOLUÇÕES
                  </h2>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group">
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#DFB78C] transition-colors shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-1">Detalhamento Profundo</strong>
                        <span className="text-zinc-500 text-sm font-light">Limpeza minuciosa de cada fresta, interior e exterior, sem ruído visual.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#DFB78C] transition-colors shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-1">Correção de Pintura</strong>
                        <span className="text-zinc-500 text-sm font-light">Remoção de micro-riscos e hologramas, devolvendo a profundidade da cor.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#DFB78C] transition-colors shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-1">Proteção Cerâmica (Vitrificação)</strong>
                        <span className="text-zinc-500 text-sm font-light">Camada de sacrifício que repele água, sujeira e protege contra raios UV.</span>
                      </div>
                    </li>
                  </ul>

                  <button className="mt-10 px-8 py-4 border border-zinc-700 rounded-full text-sm font-medium hover:border-[#DFB78C] hover:text-[#DFB78C] transition-all flex items-center gap-3">
                    Agendar Avaliação <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column / Car & Floating Card */}
              <div className="relative h-[400px] lg:h-auto mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop" 
                  alt="BMW Custom" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[800px] mix-blend-screen opacity-80 pointer-events-none"
                />
                
                {/* Result Card overlapping */}
                <div className="absolute bottom-0 right-0 lg:-bottom-12 lg:-right-12 bg-[#D1D1D1] text-black p-8 rounded-[24px] max-w-[340px] shadow-2xl">
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
              </div>
            </div>
          </div>
        </section>

        {/* POSTER SHOWCASE SECTION (Inspired by Audi Reference) */}
        <section className="relative w-full min-h-[1000px] lg:min-h-[1200px] bg-[#000000] overflow-hidden text-white flex flex-col justify-between py-12 px-6 lg:px-12 my-20">
          
          {/* Top Labels */}
          <div className="flex justify-between w-full relative z-20 font-display font-bold text-[10px] tracking-widest uppercase text-zinc-500">
            <div className="border-b-2 border-[#A6101E] pb-1 text-white">POSTER NO. 101</div>
            <div>ALTA PERFORMANCE</div>
            <div>VITRIFICAÇÃO 9H</div>
          </div>

          {/* Diagonal Red Stripe */}
          <div className="absolute top-[-20%] left-[10%] lg:left-[30%] w-[150vw] lg:w-[35vw] h-[150%] bg-[#A6101E] -skew-x-[20deg] z-10 shadow-2xl"></div>

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
              className="relative w-full max-w-[700px] -ml-0 lg:-ml-48 mb-8 lg:mb-0"
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
              className="relative w-full max-w-[900px] mt-[-80px] lg:mt-[-180px] z-30"
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
             <span className="font-display font-black text-xl lg:text-2xl tracking-tighter text-white uppercase">Sua Logo</span>
             <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest border-l border-[#A6101E] pl-4 uppercase">
               <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#A6101E]"></div>
               Estética Sport
             </div>
          </div>
        </section>

        {/* MOBILE / FOCUS SECTION */}
        <section className="px-6 lg:px-12 py-24 bg-[#090909] overflow-hidden">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Huge text */}
            <div>
              <h2 className="text-[12vw] lg:text-[7vw] leading-[0.9] font-display font-black text-[#DFB78C] uppercase tracking-tighter">
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
                className="absolute left-[10%] lg:left-[20%] top-[10%] w-[280px] h-[580px] bg-[#161616] rounded-[40px] border-[6px] border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
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
                  <div className="h-14 w-full bg-[#DFB78C] rounded-xl mt-4 flex items-center justify-center text-black font-bold text-sm">ENVIAR</div>
                </div>
              </motion.div>

              {/* Phone 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: 20, rotateZ: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 15, rotateY: 25, rotateZ: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute right-[5%] lg:right-[15%] top-[25%] w-[280px] h-[580px] bg-[#111] rounded-[40px] border-[6px] border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
              >
                {/* Fake App UI 2 */}
                <div className="h-[45%] w-full bg-zinc-900 relative">
                  <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                </div>
                <div className="flex-1 p-6 relative z-10 -mt-10">
                  <h3 className="font-display font-black text-xl mb-2 text-white uppercase">Nossos <br/><span className="text-[#DFB78C]">Trabalhos</span></h3>
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
          
          {/* Footer Grid / Meta info */}
          <div className="max-w-[1500px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm font-mono uppercase tracking-widest">
            <div className="flex gap-8">
              <span>Sede: SÃO PAULO, BR</span>
              <span>EST. 2024</span>
            </div>
            <div className="text-3xl font-display font-black text-zinc-800">
              320 PX
            </div>
            <div>
               // DESIGN INSPIRATION
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

