import React from 'react';
import { Mail, ArrowRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative flex justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Window for Contact */}
        <div className="bg-[#0d1117] rounded-lg border border-slate-800 overflow-hidden shadow-2xl mx-auto">
            {/* Header */}
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-mono text-slate-400">send_message.sh</span>
            </div>
            
            <div className="p-8 md:p-12 font-mono text-center">
                <div className="mb-8">
                    <p className="text-emerald-500 text-sm mb-2">Success: Project viewing complete.</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What's Next?</h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
                        My inbox is always open. Whether you have a question about my projects, 
                        want to collaborate on some code, or just want to say hi.
                    </p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
                        <span>root@jarvis:~$</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </div>

                <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500/10 border border-primary-500 text-primary-400 font-bold rounded hover:bg-primary-500/20 transition-all group"
                >
                    <Mail className="w-5 h-5" />
                    <span>Execute: Say Hello</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-600">
                    <p>Designed & Built by {PERSONAL_INFO.name} v2.0.0</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;