import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Instagram, 
  Linkedin, 
  MessageSquare, 
  ArrowUpRight, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  item: LinkItem;
}

export function LinkButton({ item }: LinkButtonProps) {
  // Classic high-contrast icon renderer based on link type
  const renderIcon = () => {
    switch (item.icon) {
      case 'graduation':
        return <GraduationCap className="w-5 h-5 text-amber-700 group-hover:scale-110 transition-transform duration-300" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-amber-700 group-hover:scale-110 transition-transform duration-300" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-slate-700 group-hover:scale-110 transition-transform duration-300" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-slate-700 group-hover:scale-110 transition-transform duration-300" />;
      case 'whatsapp':
        return <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Award className="w-5 h-5 text-slate-600" />;
    }
  };

  if (item.type === 'course') {
    return (
      <motion.a
        id={`course-item-${item.id}`}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col p-5 bg-white border border-slate-200 hover:border-slate-900 rounded-lg transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 block text-left"
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start gap-4">
          {/* Subtle minimal background for icons layout */}
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-slate-200 group-hover:bg-slate-100 transition-colors duration-300">
            {renderIcon()}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-[15px] font-sans font-bold text-slate-800 group-hover:text-slate-950 transition-colors duration-200">
                {item.title}
              </h3>
              {item.badge && (
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-sm text-[9px] font-sans font-extrabold bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-widest whitespace-nowrap">
                  <Sparkles className="w-2.5 h-2.5" />
                  {item.badge}
                </span>
              )}
            </div>
            
            {item.subtitle && (
              <p className="text-xs font-serif text-amber-800 italic mt-0.5">
                {item.subtitle}
              </p>
            )}
            
            {item.description && (
              <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed font-sans">
                {item.description}
              </p>
            )}

            {item.price && (
              <div className="text-xs font-sans font-semibold text-amber-700 mt-2 block tracking-wide">
                {item.price}
              </div>
            )}
          </div>
          
          <div className="self-center p-1 bg-white rounded-full border border-slate-200 text-slate-300 group-hover:text-slate-800 group-hover:border-slate-400 transition-all duration-300">
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </motion.a>
    );
  }

  if (item.type === 'whatsapp') {
    return (
      <motion.a
        id={`whatsapp-item-${item.id}`}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-5 bg-slate-900 text-white border border-slate-950 hover:bg-slate-950 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-left"
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-slate-800 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors duration-300">
            {renderIcon()}
          </div>
          <div>
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-[0.2em] block font-sans">
              Atención directa
            </span>
            <span className="text-[15px] font-sans font-bold text-white block mt-0.5">
              {item.title}
            </span>
            {item.description && (
              <span className="text-xs text-slate-300 block mt-1 font-sans leading-relaxed">
                {item.description}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-emerald-400 font-bold font-sans tracking-wide">Online</span>
          <ArrowUpRight className="w-4.5 h-4.5 text-emerald-400/80 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </motion.a>
    );
  }

  // Social Channels Card
  return (
    <motion.a
      id={`social-item-${item.id}`}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-slate-900 rounded-lg transition-all duration-300 shadow-sm text-left"
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center gap-3.5">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors duration-300">
          {renderIcon()}
        </div>
        <div>
          <span className="text-sm font-sans font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-200 block">
            {item.title}
          </span>
          {item.description && (
            <span className="text-xs text-slate-400 block mt-0.5 font-sans">
              {item.description}
            </span>
          )}
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
    </motion.a>
  );
}
