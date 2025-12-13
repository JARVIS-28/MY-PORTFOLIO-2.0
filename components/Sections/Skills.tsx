import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS } from '../../constants';
import { Cpu, Code, Database, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const chartData = SKILLS.map(s => ({ name: s.name, level: s.level }));

  const categories = [
    { name: 'Frontend', icon: <Code className="w-4 h-4" />, skills: SKILLS.filter(s => s.category === 'Frontend') },
    { name: 'Backend', icon: <Database className="w-4 h-4" />, skills: SKILLS.filter(s => s.category === 'Backend') },
    { name: 'Core', icon: <Cpu className="w-4 h-4" />, skills: SKILLS.filter(s => s.category === 'Core') },
    { name: 'Tools', icon: <Terminal className="w-4 h-4" />, skills: SKILLS.filter(s => s.category === 'Tools') },
  ];

  return (
    <section id="skills" className="py-24 relative flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary-400 font-mono text-lg">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
             System <span className="text-emerald-500">Stats</span>
          </h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Skill Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
            {categories.map((category) => (
              <div key={category.name} className="bg-[#0d1117] p-5 rounded border border-slate-800 hover:border-primary-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3 text-primary-400 border-b border-slate-800 pb-2">
                  {category.icon}
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">{category.name}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center text-xs font-mono group">
                        <span className="text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                        <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-emerald-500/50 group-hover:bg-primary-400 transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Chart Monitor */}
          <div className="bg-[#0d1117] p-6 rounded border border-slate-800 flex flex-col relative overflow-hidden min-w-0">
             {/* Scanline effect */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

             <div className="flex justify-between items-end mb-6 relative z-20">
                <div>
                    <h3 className="text-sm font-bold text-white font-mono uppercase">Proficiency_Monitor.exe</h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">Real-time skill analysis</p>
                </div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-emerald-500/30 rounded-full"></div>
                </div>
             </div>
             
             {/* Fixed height container to prevent Recharts warning */}
             <div className="w-full h-[400px] relative z-20">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }} barGap={2}>
                    <XAxis type="number" hide domain={[0, 100]} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={90} 
                      tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }} 
                      axisLine={false}
                      tickLine={false}
                      interval={0}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#334155', color: '#fff', fontSize: '12px', fontFamily: 'monospace' }} 
                      itemStyle={{ color: '#22d3ee' }}
                      cursor={{fill: 'rgba(34, 211, 238, 0.05)'}}
                    />
                    <Bar dataKey="level" barSize={6} radius={[0, 2, 2, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#0ea5e9" fillOpacity={0.6 + (index * 0.02)} />
                      ))}
                    </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;