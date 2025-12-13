import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["intelligent systems", "scalable backends", "digital experiences"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Terminal Window */}
        <div className="w-full max-w-4xl bg-[#0d1117] rounded-lg border border-slate-800 shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Terminal Header */}
            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    jarvis@portfolio:~
                </div>
                <div className="w-12"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-12 font-mono space-y-6">
                
                {/* Command 1 */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <span className="text-emerald-500">jarvis@portfolio:~$</span>
                        <span className="text-slate-300">./init_profile.sh</span>
                    </div>
                    <div className="pl-4 text-slate-400 text-sm">
                        Loading modules... <span className="text-emerald-500">Done</span><br/>
                        Initializing interface... <span className="text-emerald-500">Done</span>
                    </div>
                </div>

                {/* Main Heading Content */}
                <div className="space-y-4 pt-4">
                     <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Hello, I'm <span className="text-primary-400">{PERSONAL_INFO.name}</span>
                     </h1>
                     <div className="text-xl md:text-3xl text-slate-400 font-medium h-[1.5em] flex items-center">
                        <span className="text-emerald-500 mr-3">❯</span>
                        I engineer 
                        <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
                             {text}
                        </span>
                        <span className="animate-pulse text-emerald-500 ml-1">_</span>
                     </div>
                </div>

                {/* Bio Block */}
                <div className="pt-6 border-l-2 border-slate-700 pl-6 my-8">
                     <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                        <span className="text-slate-600 block text-xs mb-2">// bio.txt</span>
                        {PERSONAL_INFO.bio}
                     </p>
                </div>

                {/* Buttons / Actions */}
                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <a href="#projects" className="group relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium text-[#0d1117] bg-primary-400 rounded hover:bg-primary-300 transition-all">
                         <span className="mr-2">cd ./projects</span>
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/resume.pdf" download="resume.pdf" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium text-primary-400 border border-primary-400/30 rounded hover:bg-primary-400/5 transition-all">
                        <Download className="w-4 h-4 mr-2" />
                        cat resume.pdf
                    </a>
                </div>

            </div>
        </div>
        
        {/* Scroll Hint */}
        <div className="absolute bottom-8 animate-bounce text-slate-600 font-mono text-xs">
            Scroll to continue...
        </div>

      </div>
    </section>
  );
};

export default Hero;