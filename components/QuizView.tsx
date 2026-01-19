
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizViewProps {
  quiz: QuizQuestion[];
}

const QuizView: React.FC<QuizViewProps> = ({ quiz }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQ = quiz[currentIdx];

  const handleNext = () => {
    if (selected === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentIdx < quiz.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600 text-4xl">
          <i className="fas fa-trophy"></i>
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Quiz Completed!</h3>
        <p className="text-slate-500 mb-8">You scored <span className="text-indigo-600 font-bold">{score}</span> out of {quiz.length}</p>
        <button 
          onClick={() => {
            setCurrentIdx(0);
            setScore(0);
            setFinished(false);
            setSelected(null);
          }}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Question {currentIdx + 1} of {quiz.length}</span>
        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${((currentIdx + 1) / quiz.length) * 100}%` }}></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-8">{currentQ.question}</h3>

      <div className="space-y-4">
        {currentQ.options.map((opt) => (
          <button
            key={opt}
            disabled={showResult}
            onClick={() => {
              setSelected(opt);
              setShowResult(true);
            }}
            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${
              showResult 
                ? opt === currentQ.correctAnswer 
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800' 
                  : opt === selected 
                    ? 'bg-rose-50 border-rose-500 text-rose-800'
                    : 'bg-white border-slate-100 text-slate-400'
                : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700'
            }`}
          >
            <span className="font-semibold">{opt}</span>
            {showResult && opt === currentQ.correctAnswer && <i className="fas fa-check-circle text-emerald-500"></i>}
            {showResult && opt === selected && opt !== currentQ.correctAnswer && <i className="fas fa-times-circle text-rose-500"></i>}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNext}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            {currentIdx < quiz.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizView;
