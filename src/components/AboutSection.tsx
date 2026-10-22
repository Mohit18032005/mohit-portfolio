import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { AnimatedText } from './AnimatedText';
import { Cpu, Award, GraduationCap, Briefcase, Sparkles, Terminal } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const aboutText =
    "With a strong foundation in computer science and artificial intelligence, i focus on machine learning, data analytics, and embedded robotics, i truly enjoy creating intelligent hardware systems that stand out and push boundaries. Let's build something incredible together!";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-12 py-24 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Corner Elements with Gentle Float Animation */}
      {/* Top-Left: Moon icon */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 sm:top-16 left-2 sm:left-6 md:left-10 z-10 pointer-events-none opacity-85 hover:opacity-100 transition-opacity"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter brightness-105"
          loading="lazy"
        />
      </motion.div>

      {/* Top-Right: Lego icon */}
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-12 sm:top-16 right-2 sm:right-6 md:right-10 z-10 pointer-events-none opacity-85 hover:opacity-100 transition-opacity"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter brightness-105"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom-Left: 3D object */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-12 sm:bottom-16 left-2 sm:left-6 md:left-10 z-10 pointer-events-none opacity-80 hover:opacity-100 transition-opacity"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Geometric Smiley"
          className="w-[80px] sm:w-[110px] md:w-[150px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter brightness-105"
          loading="lazy"
        />
      </motion.div>

      {/* Bottom-Right: 3D cursor arrow */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-12 sm:bottom-16 right-2 sm:right-6 md:right-10 z-10 pointer-events-none opacity-80 hover:opacity-100 transition-opacity"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Pointer Object"
          className="w-[90px] sm:w-[130px] md:w-[160px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter brightness-105"
          loading="lazy"
        />
      </motion.div>

      {/* Centered Content Block */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Section Pill Badge */}
        <FadeIn delay={0} y={20} className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-purple-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Engineer &bull; Robotics Specialist</span>
          </div>
        </FadeIn>

        {/* Heading: "About me" */}
        <FadeIn delay={0.1} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-8 sm:h-12" />

        {/* Animated Paragraph with character-by-character scroll opacity */}
        <div className="max-w-[620px] text-center px-4">
          <AnimatedText
            text={aboutText}
            className="text-[#E2EDF5] font-normal leading-relaxed text-base sm:text-lg md:text-xl tracking-wide"
          />
        </div>

        {/* Engineering Highlights Grid */}
        <FadeIn delay={0.3} y={30} className="w-full mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center backdrop-blur-md hover:border-purple-500/40 transition-colors">
              <GraduationCap className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-white uppercase">B.Tech AI</div>
              <div className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider">IEM Kolkata &apos;27</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center backdrop-blur-md hover:border-purple-500/40 transition-colors">
              <Briefcase className="w-5 h-5 text-blue-400 mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-white uppercase">AI Intern</div>
              <div className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider">Codec Technologies</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center backdrop-blur-md hover:border-purple-500/40 transition-colors">
              <Award className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-white uppercase">9+ Certs</div>
              <div className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider">IBM &bull; Google &bull; MS</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center backdrop-blur-md hover:border-purple-500/40 transition-colors">
              <Cpu className="w-5 h-5 text-pink-400 mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-white uppercase">Robotics & IoT</div>
              <div className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider">Raspberry Pi & AI</div>
            </div>
          </div>
        </FadeIn>

        {/* Tech Stack Chip Strip */}
        <FadeIn delay={0.4} y={20} className="mt-6 flex flex-wrap justify-center gap-2 max-w-xl text-center px-4">
          {["Python", "Machine Learning", "Generative AI", "Raspberry Pi", "Data Analytics", "Google Voice API", "IBM Granite"].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-[#D7E2EA]/80 hover:bg-white/10 hover:text-white transition-all"
            >
              {tech}
            </span>
          ))}
        </FadeIn>

        {/* Gap between text block and button */}
        <div className="h-10 sm:h-14" />

        {/* Action Buttons: Contact Button + View Credentials */}
        <FadeIn delay={0.5} y={20} className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton
            onClick={() => {
              if (onContactClick) {
                onContactClick();
              } else {
                scrollTo('contact');
              }
            }}
          />
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border border-white/20 text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>View Certifications & Bio</span>
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
