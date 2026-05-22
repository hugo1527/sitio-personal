import React from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  profile: UserProfile;
}

export function Layout({ children, profile }: LayoutProps) {
  return (
    <div className="min-h-screen legal-pattern text-slate-800 flex flex-col justify-between py-12 px-6 sm:px-12 selection:bg-slate-950 selection:text-white relative overflow-x-hidden">
      {/* Elegantly placed top ambient light accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Centered Background Watermark (Logo opacity 0.045) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden mix-blend-multiply opacity-[0.25]">
        <img 
          src="/piedra.jpg" 
          alt="" 
          referrerPolicy="no-referrer"
          className="w-full max-w-full md:max-w-7xl h-auto object-contain select-none pointer-events-none filter grayscale"
        />
      </div>

      {/* Main Grid Wrapper */}
      <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-stretch">
          
          {/* Left Column: Lawyer Card Profile */}
          <motion.header 
            id="profile-header"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6 md:border-r md:border-slate-200 md:pr-12 md:text-left text-center items-center md:items-start"
          >
            {/* Elegant Lettermark Monogram "D" from theme / Custom logo.jpeg */}
            <img 
              src="/logo.jpeg" 
              alt="Logo Estudio Jurídico Dra. Debora Sayavedra" 
              referrerPolicy="no-referrer"
              className="w-24 h-24 object-cover rounded-sm mb-2 border border-slate-950 shadow-md transform hover:rotate-3 transition-transform duration-300"
            />

            {/* Title Block */}
            <div className="space-y-2">
              <h1 className="font-serif text-4.5xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                {profile.name}
              </h1>
              <p className="text-amber-700 font-semibold tracking-[0.2em] uppercase text-xs mt-1">
                {profile.title}
              </p>
              {profile.firm && (
                <p className="text-slate-400 font-sans font-medium text-[10px] uppercase tracking-widest mt-1">
                  {profile.firm}
                </p>
              )}
            </div>

            {/* Sincere, Editorial Bio Description */}
            <p className="text-slate-600 leading-relaxed text-sm font-sans text-center md:text-left max-w-xs">
              {profile.bio}
            </p>

            {/* Direct Contact Details Block */}
            <div className="w-full flex flex-col space-y-3 pt-6 border-t border-slate-200/80 items-center md:items-start">
              {profile.email && (
                <div className="flex items-center space-x-3 text-slate-500 hover:text-slate-800 transition-colors duration-200">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs select-all font-mono">{profile.email}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center space-x-3 text-slate-500">
                  <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs">{profile.location}</span>
                </div>
              )}
            </div>
          </motion.header>

          {/* Right Column: Interactive links list & academic courses */}
          <div className="col-span-1 md:col-span-7 flex flex-col justify-center space-y-6">
            {children}
          </div>

        </div>
      </div>

      {/* Footer conforming to Professional Polish guidelines */}
      <footer className="w-full max-w-4xl mx-auto text-center mt-16 pt-8 border-t border-slate-200 relative z-10">
        <p className="font-sans text-[10px] text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors duration-300">
          © {new Date().getFullYear()} Estudio Jurídico • Dra. Debora Sayavedra
        </p>
        <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-wider">
          asesoría legal integral • capacitaciones profesionales
        </p>
      </footer>
    </div>
  );
}
