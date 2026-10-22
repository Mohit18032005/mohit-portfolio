import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.45, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{displayChar}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none text-white transition-colors duration-200"
      >
        {displayChar}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(" ");
  const totalChars = text.length;

  // Track global index across words to calculate precise range
  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        const elements = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const start = globalCharIndex / totalChars;
              const end = Math.min(1, (globalCharIndex + 1) / totalChars);
              globalCharIndex++;
              return (
                <Character
                  key={globalCharIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for space between words
        if (wordIdx < words.length - 1) {
          const spaceStart = globalCharIndex / totalChars;
          const spaceEnd = Math.min(1, (globalCharIndex + 1) / totalChars);
          globalCharIndex++;
          return (
            <React.Fragment key={`group-${wordIdx}`}>
              {elements}
              <Character
                char=" "
                progress={scrollYProgress}
                range={[spaceStart, spaceEnd]}
              />
            </React.Fragment>
          );
        }

        return elements;
      })}
    </p>
  );
};

export default AnimatedText;
