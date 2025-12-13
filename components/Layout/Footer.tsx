import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 py-8 text-center">
      <div className="font-mono text-sm text-slate-500 hover:text-primary-400 transition-colors duration-300 cursor-default">
        <p>Designed & Built by JARVIS-28</p>
        <p className="mt-2 text-xs opacity-50">
           Built with React, Tailwind & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;