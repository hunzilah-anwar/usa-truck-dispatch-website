import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck } from './Icons';

export default function DispatchCourseSection() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-primary-navy border-y border-[#002244]">
      {/* Background Image Overlay */}
      <img
        src="/images/course.jpg"
        alt="Dispatch Course Training"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary-navy via-primary-navy/90 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 sm:space-y-6 space-y-4">
            <span className="inline-block text-amber-400 font-black text-xs uppercase">
              Truck Dispatcher Course
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Master the Art of <br/> <span className="text-amber-400">Truck Dispatching</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Want to start your own dispatching agency? Learn directly from industry veterans. Master load boards, broker negotiations, carrier packets, and back-office workflows.
            </p>
            
            <ul className="space-y-3 pt-2">
              {[
                "Live Load Board Demonstrations",
                "Broker Negotiation Scripts & Templates",
                "Official Certificate of Completion"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <IconCheck className="w-5 h-5 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Link
                to="/course"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-primary-navy font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl"
              >
                <span>Explore Full Course</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
               <img src="/images/course.jpg" alt="Training Course" className="w-full h-auto object-cover" />
               <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                 <h4 className="text-white font-bold text-lg">Comprehensive 8-Module Syllabus</h4>
                 <p className="text-slate-300 text-sm">Enroll today and launch your career.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
