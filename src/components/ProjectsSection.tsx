import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { X, Cpu, Radio, Brain, ExternalLink, CheckCircle } from 'lucide-react';

interface ProjectData {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  techStack: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  icon: any;
}

const projects: ProjectData[] = [
  {
    number: "01",
    category: "Hardware & Applied AI",
    title: "Voice-Controlled AI Robot",
    subtitle: "Raspberry Pi &bull; Python &bull; Google Voice API &bull; GPIO Pins",
    description:
      "A voice-activated robotic system engineered with a Raspberry Pi and Python, executing complex physical navigation through natural speech recognition and motor driver automation.",
    bullets: [
      "Developed a Raspberry Pi-based robot controlled entirely through voice commands (forward, backward, left, right).",
      "Integrated Google/Alexa Voice API for speech recognition and natural language command processing.",
      "Wrote Python code to convert recognized voice input into motor control signals via GPIO pins.",
      "Combined AI/voice processing with hardware automation, demonstrating practical human-robot interaction.",
    ],
    techStack: ["Raspberry Pi", "Python", "Google Voice API", "GPIO", "Embedded Systems", "Motor Drivers"],
    col1Image1: "/projects/robot_hardware.jpg",
    col1Image2: "/projects/robot_voice_ui.jpg",
    col2Image: "/projects/robot_main.jpg",
    icon: Cpu,
  },
  {
    number: "02",
    category: "Embedded Systems & IoT",
    title: "Radar Object Detection",
    subtitle: "Raspberry Pi &bull; Ultrasonic Sensor &bull; Servo 180° &bull; Real-Time GUI",
    description:
      "A real-time radar-style object mapping system using an ultrasonic sensor on a sweeping 180° servo motor, calculating precision angle and distance vectors on a live display.",
    bullets: [
      "Built a radar-style object detection system using a Raspberry Pi and ultrasonic sensor on a rotating servo motor covering a 180° scanning range.",
      "Wrote Python scripts to collect real-time distance data and calculate the angle and distance of detected objects.",
      "Created a live radar-style visualization to plot detected objects on screen, similar to an authentic aviation radar display.",
      "Demonstrated hands-on skills in embedded systems, sensor interfacing, and real-time serial telemetry.",
    ],
    techStack: ["Raspberry Pi", "Python", "Ultrasonic Sensor", "Servo Motor", "Real-Time Telemetry", "Tkinter/Pygame"],
    col1Image1: "/projects/radar_sensor.jpg",
    col1Image2: "/projects/radar_screen.jpg",
    col2Image: "/projects/radar_main.jpg",
    icon: Radio,
  },
  {
    number: "03",
    category: "Machine Learning & Analytics",
    title: "AI Model & Analytics Engine",
    subtitle: "IBM Granite &bull; Codec Technologies AI Intern &bull; Azure AI",
    description:
      "Machine learning model pipelines and automated data preprocessing workflows developed for enterprise AI validation, testing, and production predictive analysis.",
    bullets: [
      "AICTE & ICAC Approved AI Internship at Codec Technologies, enhancing machine learning model efficiency.",
      "Engineered automated data collection, cleansing, and preprocessing pipelines for high-accuracy training.",
      "Integrated IBM Granite software development models and Microsoft Azure AI services for robust evaluation.",
      "Documented complete project workflows and deployment pipelines for reproducible team handoffs.",
    ],
    techStack: ["Python", "Machine Learning", "IBM Granite", "Azure AI", "Data Analytics", "Scikit-Learn"],
    col1Image1: "/projects/ai_training.jpg",
    col1Image2: "/projects/ai_analytics.jpg",
    col2Image: "/projects/ai_model_main.jpg",
    icon: Brain,
  },
];

interface StackingCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
  onOpenModal: (proj: ProjectData) => void;
}

const StackingCard: React.FC<StackingCardProps> = ({
  project,
  index,
  totalCards,
  scrollYProgress,
  onOpenModal,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const startRange = index / totalCards;
  const scale = useTransform(scrollYProgress, [startRange, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
      >
        {/* Top Row: Number, Category, Project Name, Live Project Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm font-medium tracking-widest">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-bold uppercase text-lg sm:text-2xl md:text-3xl tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveProjectButton onClick={() => onOpenModal(project)} />
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 pt-4 sm:pt-6">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 relative group bg-[#16171d]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} Preview 1`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 relative group bg-[#16171d]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} Preview 2`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-7 h-[300px] sm:h-[400px] md:h-auto">
            <div className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/20 relative group bg-[#16171d]">
              <img
                src={project.col2Image}
                alt={`${project.title} Main Preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-3xl bg-black/70 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs sm:text-sm text-[#D7E2EA] font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 pb-28 relative select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Project" */}
        <FadeIn delay={0} y={40} className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Sticky Stacking Cards */}
        <div className="relative">
          {projects.map((project, index) => (
            <StackingCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
              scrollYProgress={scrollYProgress}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#121318] border-2 border-[#D7E2EA] rounded-[36px] max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#D7E2EA] shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-[#D7E2EA]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-2">
              <span className="font-bold text-base text-purple-400">{selectedProject.number}</span>
              <span>&bull;</span>
              <span>{selectedProject.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-3">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-[#D7E2EA]/90 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/10 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <a
                href="mailto:mk8212581@gmail.com?subject=Inquiry regarding your project"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <span>Discuss Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
