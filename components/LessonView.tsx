
import React, { useState } from 'react';
import { GermanLesson, VocabularyItem, ExampleSentence } from '../types';
import QuizView from './QuizView';

interface LessonViewProps {
  lesson: GermanLesson;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<'study' | 'quiz' | 'culture'>('study');

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm mb-2">
          <span className="px-2 py-0.5 bg-indigo-100 rounded uppercase tracking-wide">{lesson.level}</span>
          <span>&bull;</span>
          <span>{lesson.unit}</span>
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{lesson.unit}</h2>
      </header>

      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
        {(['study', 'quiz', 'culture'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-semibold capitalize border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab 
              ? 'border-indigo-600 text-indigo-600' 
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {activeTab === 'study' && (
          <>
            {/* Vocabulary */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <i className="fas fa-book-open text-indigo-500"></i> Vocabulary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lesson.vocabulary.map((vocab, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                    <div className="text-xl font-bold text-slate-800 mb-1 flex justify-between">
                      {vocab.de}
                      <span className="text-xs font-normal text-slate-400 group-hover:text-indigo-400 transition-colors">{vocab.phonetic}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-slate-600">
                      <span>{vocab.en}</span>
                      <span className="font-arabic text-indigo-600 text-lg" dir="rtl">{vocab.ar}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Grammar */}
            <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="fas fa-graduation-cap text-yellow-500"></i> Grammar Guide
              </h3>
              <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-line leading-relaxed">
                {lesson.grammar}
              </div>
            </section>

            {/* Examples */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <i className="fas fa-comment-dots text-green-500"></i> Example Sentences
              </h3>
              <div className="space-y-4">
                {lesson.examples.map((ex, i) => (
                  <div key={i} className="bg-slate-50 border-l-4 border-slate-800 p-4 rounded-r-xl">
                    <p className="text-lg font-semibold text-slate-900">{ex.de}</p>
                    <p className="text-sm text-slate-500 mt-1 italic">{ex.en}</p>
                    <p className="text-sm text-indigo-700 mt-1 font-arabic" dir="rtl">{ex.ar}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Speaking & Listening */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-indigo-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Speaking Practice</h3>
                <div className="text-slate-700 whitespace-pre-line">
                  <h4 className="font-bold mb-2">Dialogue:</h4>
                  {lesson.speaking.dialogue}
                  <div className="mt-4 p-4 bg-white rounded-xl text-sm italic">
                    <span className="font-bold text-indigo-600 block mb-1">Roleplay Goal:</span>
                    {lesson.speaking.roleplay}
                  </div>
                </div>
              </section>
              <section className="bg-emerald-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Listening Transcription</h3>
                <p className="text-slate-700 italic leading-relaxed">
                  "{lesson.listening.script}"
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-700 text-sm font-medium">
                  <i className="fas fa-volume-up"></i>
                  Tip: Listen to native speakers on YouTube for similar contexts.
                </div>
              </section>
            </div>

            {/* Reading & Writing */}
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <i className="fas fa-pen-nib text-slate-800"></i> Reading & Writing
              </h3>
              <div className="grid grid-cols-1 gap-10">
                <div className="border-b border-slate-100 pb-8">
                  <h4 className="text-lg font-bold mb-3">Reading Passage</h4>
                  <p className="text-slate-700 mb-6 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">{lesson.reading.text}</p>
                  <div className="space-y-4">
                    {lesson.reading.questions.map((q, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-100">
                        <p className="font-medium text-slate-800 mb-2">Q{idx+1}: {q.q}</p>
                        <div className="flex flex-wrap gap-2">
                          {q.options.map(opt => (
                            <span key={opt} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600">{opt}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Writing Task</h4>
                  <p className="bg-indigo-50 text-indigo-900 p-4 rounded-xl mb-4 font-medium border border-indigo-100">{lesson.writing.prompt}</p>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Expert Sample</h5>
                  <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl text-sm italic border border-emerald-100">{lesson.writing.sample}</div>
                </div>
              </div>
            </section>

             {/* Pronunciation */}
             <section className="bg-orange-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                <i className="fas fa-mouth text-orange-500"></i> Pronunciation Master
              </h3>
              <p className="text-orange-950 leading-relaxed font-medium">
                {lesson.pronunciation}
              </p>
            </section>
          </>
        )}

        {activeTab === 'quiz' && <QuizView quiz={lesson.quiz} />}

        {activeTab === 'culture' && (
          <section className="bg-amber-50 rounded-3xl p-10 border border-amber-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 text-3xl">
                <i className="fas fa-globe-europe"></i>
              </div>
              <h3 className="text-3xl font-bold text-amber-950">Kultur Ecke (Culture Corner)</h3>
            </div>
            <div className="prose prose-amber max-w-none text-amber-900 text-lg leading-relaxed italic">
              {lesson.culture}
            </div>
            <div className="mt-8 flex gap-2">
              <span className="w-10 h-1 bg-black"></span>
              <span className="w-10 h-1 bg-red-600"></span>
              <span className="w-10 h-1 bg-yellow-400"></span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LessonView;
