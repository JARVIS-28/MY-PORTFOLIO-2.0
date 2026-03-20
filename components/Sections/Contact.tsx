import React, { useState } from 'react';
import { Mail, ArrowRight, Terminal, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const initialForm = {
  name: '',
  email: '',
  subject: 'Hello from the portfolio',
  message: '',
};

type StatusState = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<StatusState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const endpoint = (import.meta as any).env?.VITE_CONTACT_ENDPOINT;

  const logLines = [];
  if (status === 'sending') logLines.push('Connecting to jarvis-mailer...');
  if (status === 'success') logLines.push('All transmissions complete. Check your inbox!');
  if (status === 'error') logLines.push('Transmission failed. See below for details.');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!endpoint) {
      setStatus('error');
      setErrorMessage('Contact endpoint not configured. Set VITE_CONTACT_ENDPOINT.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const payload = {
        to: PERSONAL_INFO.email,
        ccSender: true,
        ...formData,
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Unknown error');
      }

      setStatus('success');
      setFormData(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <section id="contact" className="py-32 relative flex justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0d1117] rounded-lg border border-slate-800 overflow-hidden shadow-2xl mx-auto relative">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-mono text-slate-400">send_message.sh</span>
          </div>

          <div className="p-8 md:p-12 font-mono text-center space-y-8">
            <div>
              <p className="text-emerald-500 text-sm mb-2">Success: Project viewing complete.</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What's Next?</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
                My inbox is always open. Whether you have a question about my projects, want to collaborate on some code, or just want to say hi.
              </p>
            </div>

            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
                <span>root@jarvis:~$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500/10 border border-primary-500 text-primary-400 font-bold rounded hover:bg-primary-500/20 transition-all group"
            >
              <Mail className="w-5 h-5" />
              <span>Execute: Say Hello</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-600">
              <p>Designed & Built by {PERSONAL_INFO.name} v2.0.0</p>
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <div
                className="absolute inset-0 bg-slate-950"
                onClick={() => setIsOpen(false)}
              ></div>
              <div className="relative w-full max-w-xl">
                <div className="relative bg-gradient-to-br from-[#06101c] via-[#05070f] to-[#04060d] border border-slate-800/60 rounded-2xl shadow-[0_20px_120px_rgba(2,6,23,0.85)] overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_60%)]"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-900 bg-slate-900/80">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        <span>jarvis-mailer: v2.1</span>
                      </div>
                      <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-6 space-y-6 text-left">
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label className="text-xs text-slate-400 uppercase tracking-wide">
                            Your Name
                            <input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Janet Bytes"
                              required
                              className="mt-2 w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400"
                            />
                          </label>
                          <label className="text-xs text-slate-400 uppercase tracking-wide">
                            Your Email
                            <input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              required
                              className="mt-2 w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400"
                            />
                          </label>
                        </div>

                        <label className="text-xs text-slate-400 uppercase tracking-wide block">
                          Subject
                          <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-2 w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400"
                          />
                        </label>

                        <label className="text-xs text-slate-400 uppercase tracking-wide block">
                          Message
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell me about the plan..."
                            required
                            className="mt-2 w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400"
                          />
                        </label>

                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-primary-500/50 px-4 py-3 text-sm font-bold text-primary-400 bg-primary-500/5 hover:bg-primary-500/30 transition-all"
                        >
                          {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>

                      <div className="text-xs text-slate-400 space-y-2 flex flex-col">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-500">cc: sender</span>
                          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-500">copy: {PERSONAL_INFO.email}</span>
                        </div>
                        {status === 'success' && <p className="text-emerald-400">Message queued. You'll receive a copy shortly.</p>}
                        {status === 'error' && <p className="text-rose-400">{errorMessage || 'Unable to send, check the console.'}</p>}
                      </div>

                      <div className="bg-[#0c151f] border border-slate-900 rounded-lg p-4 text-xs text-slate-500 space-y-1 font-mono select-none">
                        {logLines.length === 0 ? (
                          <p>Awaiting command...</p>
                        ) : (
                          logLines.map((line, index) => (
                            <p key={index}>{line}</p>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
