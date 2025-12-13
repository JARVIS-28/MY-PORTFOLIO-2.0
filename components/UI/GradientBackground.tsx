import React from 'react';

const GradientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
       <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-600/5 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-600/5 rounded-full blur-[120px] animate-blob mix-blend-screen" style={{ animationDelay: '2s' }}></div>
       <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[100px] animate-blob mix-blend-screen" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};
export default GradientBackground;