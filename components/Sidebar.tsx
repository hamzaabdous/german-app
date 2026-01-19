
import React, { useState } from 'react';
import { Level } from '../types';
import { STATIC_LESSONS } from '../data/staticLessons';

interface SidebarProps {
  currentLevel: Level;
  currentUnitIndex: number;
  onUnitSelect: (level: Level, index: number) => void;
  onGenerate: () => void;
  loading: boolean;
}

const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

const Sidebar: React.FC<SidebarProps> = ({ currentLevel, currentUnitIndex, onUnitSelect, onGenerate, loading }) => {
  const [expandedLevel, setExpandedLevel] = useState<Level | null>(currentLevel);

  const toggleLevel = (lvl: Level) => {
    setExpandedLevel(expandedLevel === lvl ? null : lvl);
  };

  return (
    <div className="w-full md:w-72 bg-slate-900 text-white min-h-screen p-6 flex flex-col shrink-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl">D</div>
        <h1 className="text-xl font-bold tracking-tight">DeutschMeister</h1>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Curriculum</p>
        <div className="space-y-4">
          {levels.map((lvl) => (
            <div key={lvl} className="space-y-1">
              <button
                onClick={() => toggleLevel(lvl)}
                className={`w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                  currentLevel === lvl 
                  ? 'bg-slate-800 text-white font-semibold' 
                  : 'hover:bg-slate-800/50 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${currentLevel === lvl ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    {lvl}
                  </span>
                  <span>Level {lvl}</span>
                </div>
                <i className={`fas fa-chevron-down text-[10px] transition-transform ${expandedLevel === lvl ? 'rotate-180' : ''}`}></i>
              </button>

              {expandedLevel === lvl && (
                <div className="pl-12 pr-2 py-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {STATIC_LESSONS[lvl].map((lesson, idx) => (
                    <button
                      key={idx}
                      onClick={() => onUnitSelect(lvl, idx)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-colors relative flex items-center gap-2 ${
                        currentLevel === lvl && currentUnitIndex === idx
                        ? 'text-yellow-400 font-medium'
                        : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {currentLevel === lvl && currentUnitIndex === idx && (
                        <div className="absolute left-0 w-1 h-4 bg-yellow-400 rounded-full -ml-1"></div>
                      )}
                      <span className="truncate">{lesson.unit}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <i className="fas fa-magic"></i>
          )}
          Surprise Me (AI)
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
