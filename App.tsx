
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import { generateLesson } from './services/geminiService';
import { GermanLesson, Level } from './types';
import { STATIC_LESSONS } from './data/staticLessons';

const LOADING_MESSAGES = [
  "Drafting vocabulary list...",
  "Analyzing grammar patterns...",
  "Creating conversational dialogues...",
  "Gathering cultural insights...",
  "Preparing the mini-quiz...",
  "Translating to English and Arabic...",
  "Polishing pronunciation tips..."
];

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<Level>('A1');
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
  const [lesson, setLesson] = useState<GermanLesson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  
  // In-memory cache to store lessons. Static lessons are loaded initially.
  const lessonCache = useRef<Record<Level, GermanLesson[]>>(JSON.parse(JSON.stringify(STATIC_LESSONS)));

  useEffect(() => {
    let interval: number | undefined;
    if (loading) {
      interval = window.setInterval(() => {
        setLoadingMsgIdx(prev => (prev + 1) % LOADING_MESSAGES.length);
      }, 2000);
    } else {
      setLoadingMsgIdx(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const loadLesson = useCallback((level: Level, unitIdx: number) => {
    const list = lessonCache.current[level];
    if (list && list[unitIdx]) {
      setLesson(list[unitIdx]);
      setCurrentLevel(level);
      setCurrentUnitIndex(unitIdx);
      setError(null);
    }
  }, []);

  const generateNewLesson = useCallback(async (level: Level) => {
    setLoading(true);
    setError(null);
    try {
      const topic = getTopicForLevel(level);
      const data = await generateLesson(level, topic);
      // Append generated lesson to the level's list
      lessonCache.current[level].push(data);
      const newIndex = lessonCache.current[level].length - 1;
      setLesson(data);
      setCurrentUnitIndex(newIndex);
    } catch (err) {
      setError('Connection slow or API limit reached. Showing existing lesson.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTopicForLevel = (level: Level): string => {
    const topics: Record<Level, string[]> = {
      'A1': ['Hobbies', 'Shopping', 'Home', 'Pets'],
      'A2': ['Health', 'Work', 'City Life', 'Past Events'],
      'B1': ['Media', 'Social Issues', 'Careers', 'Hobbies'],
      'B2': ['Digitalization', 'Migration', 'Economy', 'Global Warming'],
      'C1': ['Artificial Intelligence', 'Neuroscience', 'Political Theory', 'Literature']
    };
    const list = topics[level];
    return list[Math.floor(Math.random() * list.length)];
  };

  useEffect(() => {
    // Initial load: Level A1 first static lesson
    loadLesson('A1', 0);
  }, [loadLesson]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar 
        currentLevel={currentLevel} 
        currentUnitIndex={currentUnitIndex}
        onUnitSelect={loadLesson} 
        onGenerate={() => generateNewLesson(currentLevel)}
        loading={loading}
      />
      
      <main className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center p-10 text-center animate-in fade-in duration-300">
            <div className="relative mb-8">
              <div className="w-24 h-24 border-8 border-slate-100 border-t-indigo-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-indigo-600">
                <i className="fas fa-bolt text-2xl animate-pulse"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Generating AI Lesson</h3>
            <p className="text-slate-500 max-w-md italic">
              {LOADING_MESSAGES[loadingMsgIdx]}
            </p>
          </div>
        ) : error && !lesson ? (
          <div className="h-full flex flex-col items-center justify-center p-10 text-center">
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-6 text-3xl">
              <i className="fas fa-wifi"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Error</h3>
            <p className="text-slate-500 mb-8 px-4 max-w-sm">{error}</p>
            <button 
              onClick={() => loadLesson(currentLevel, 0)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Back to Safety
            </button>
          </div>
        ) : lesson ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <LessonView lesson={lesson} />
            <div className="max-w-4xl mx-auto px-6 pb-12 flex flex-col items-center gap-4">
              <div className="h-px w-full bg-slate-200"></div>
              <button 
                onClick={() => generateNewLesson(currentLevel)}
                className="text-indigo-600 font-semibold text-sm flex items-center gap-2 hover:text-indigo-800 transition-all bg-indigo-50 px-6 py-3 rounded-full border border-indigo-100"
              >
                  <i className="fas fa-magic text-xs"></i>
                  Need more practice? Create a custom AI lesson for {currentLevel}
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-10 text-slate-400">
            Select a unit to start learning.
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
