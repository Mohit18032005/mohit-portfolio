import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    name: "AI & Machine Learning",
    description:
      "Creation of specialized machine learning models, custom neural networks, and generative AI algorithms engineered to automate complex processes and elevate project intelligence.",
  },
  {
    number: "02",
    name: "Embedded Systems & IoT",
    description:
      "Development of robust hardware-software architectures using Raspberry Pi, sensor arrays, GPIO automation, and real-time serial communication protocols.",
  },
  {
    number: "03",
    name: "Robotics & Automation",
    description:
      "Designing responsive robotic solutions with voice-activated navigation, real-time motor driver control, and seamless human-machine interaction.",
  },
  {
    number: "04",
    name: "Data Analytics",
    description:
      "Data pipeline design, exploratory data processing, and dynamic visual dashboards translating complex raw data into actionable engineering decisions.",
  },
  {
    number: "05",
    name: "Applied AI & Voice",
    description:
      "Integrating natural language voice command recognition, speech processing APIs, and intelligent hardware actuation for physical computing.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items List */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 0.1}
              y={30}
              className={`flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 md:gap-12 transition-all duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-xl ${
                i === 0 ? "border-t" : ""
              }`}
            >
              {/* Number on the left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 md:w-[220px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Name + Description stacked vertically on the right */}
              <div className="flex flex-col gap-2 md:gap-3 flex-1">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-tight leading-snug"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
