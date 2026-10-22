import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { certificatesList, type CertificateItem } from '../data/certificates';

const row1 = certificatesList.slice(0, 7);
const row2 = certificatesList.slice(7);

// Tripled lists for continuous seamless animation
const row1Tripled = [...row1, ...row1, ...row1];
const row2Tripled = [...row2, ...row2, ...row2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setScrollOffset(currentOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const openModal = (cert: CertificateItem) => {
    setSelectedCert(cert);
  };

  const nextCert = () => {
    if (!selectedCert) return;
    const currentIndex = certificatesList.findIndex((c) => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % certificatesList.length;
    setSelectedCert(certificatesList[nextIndex]);
  };

  const prevCert = () => {
    if (!selectedCert) return;
    const currentIndex = certificatesList.findIndex((c) => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + certificatesList.length) % certificatesList.length;
    setSelectedCert(certificatesList[prevIndex]);
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-36 pb-16 overflow-hidden relative select-none"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-purple-400 font-mono mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>Industry Accreditations & Certifications</span>
        </div>
        <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-3">
          Verified Credentials
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto font-light">
          13 professional certifications from <span className="text-white font-medium">Microsoft</span>, <span className="text-white font-medium">Google</span>, <span className="text-white font-medium">IBM</span>, <span className="text-white font-medium">Deloitte</span>, and <span className="text-white font-medium">AICTE</span>. Click any certificate to verify.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div
        className="flex flex-col gap-4 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 - Sliding Right */}
        <div
          className={`flex gap-4 ${isPaused ? '' : 'transition-transform duration-75 ease-out'}`}
          style={{
            transform: `translateX(${scrollOffset - 300}px)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((cert, idx) => (
            <div
              key={`row1-${cert.id}-${idx}`}
              onClick={() => openModal(cert)}
              className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[210px] sm:h-[250px] md:h-[275px] rounded-2xl overflow-hidden bg-[#16171d] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] group relative cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:scale-[1.02]"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Bottom Gradient Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-md">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-white/60 font-light">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide line-clamp-1">
                  {cert.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-purple-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Sparkles className="w-3 h-3" />
                  <span>Click to view & verify certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Sliding Left */}
        <div
          className={`flex gap-4 ${isPaused ? '' : 'transition-transform duration-75 ease-out'}`}
          style={{
            transform: `translateX(${-(scrollOffset - 300) - 1200}px)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((cert, idx) => (
            <div
              key={`row2-${cert.id}-${idx}`}
              onClick={() => openModal(cert)}
              className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[210px] sm:h-[250px] md:h-[275px] rounded-2xl overflow-hidden bg-[#16171d] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.8)] group relative cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:scale-[1.02]"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Bottom Gradient Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-md">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-white/60 font-light">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide line-clamp-1">
                  {cert.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-purple-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Sparkles className="w-3 h-3" />
                  <span>Click to view & verify certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121318] border-2 border-[#D7E2EA]/30 rounded-[32px] max-w-4xl w-full p-4 sm:p-6 max-h-[95vh] flex flex-col text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative">
            {/* Top Bar with Title & Close */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/10 text-white">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-sm sm:text-lg font-bold uppercase truncate text-white">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600/30 border border-purple-500/40 text-xs font-medium text-white hover:bg-purple-600/50 transition-colors"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-[#D7E2EA]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image View */}
            <div className="my-4 flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-2xl bg-[#08080a] border border-white/10 relative group">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />

              {/* Prev/Next Navigation Controls */}
              <button
                onClick={prevCert}
                className="absolute left-3 p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-all backdrop-blur-sm cursor-pointer"
                title="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextCert}
                className="absolute right-3 p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-all backdrop-blur-sm cursor-pointer"
                title="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Details Footer */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D7E2EA]/70">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Credential Verified</span>
                </span>
                <span>&bull;</span>
                <span>Completed: {selectedCert.date}</span>
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-600/30 border border-purple-500/40 text-xs font-medium text-white"
                  >
                    <span>Verify Online</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <span className="font-mono text-[11px] text-[#D7E2EA]/50">
                  {certificatesList.findIndex((c) => c.id === selectedCert.id) + 1} of {certificatesList.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MarqueeSection;
