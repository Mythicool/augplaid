import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  animationType?: 'words' | 'lines' | 'container';
  stagger?: number;
  delay?: number;
}

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 2,
  blurStrength = 3,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  animationType = 'words',
  stagger = 0.05,
  delay = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    if (animationType !== 'words' || typeof children !== 'string') {
      return children;
    }
    
    const text = children;
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="scroll-reveal-word" key={index}>
          {word}
        </span>
      );
    });
  }, [children, animationType]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Container rotation animation
    if (baseRotation !== 0) {
      gsap.fromTo(
        el,
        { 
          transformOrigin: '0% 50%', 
          rotate: baseRotation,
          willChange: 'transform'
        },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true,
          },
        }
      );
    }

    // Different animation types
    if (animationType === 'words') {
      const wordElements = el.querySelectorAll('.scroll-reveal-word');
      
      if (wordElements.length > 0) {
        gsap.fromTo(
          wordElements,
          { 
            opacity: baseOpacity, 
            willChange: 'opacity, filter',
            ...(enableBlur && { filter: `blur(${blurStrength}px)` })
          },
          {
            ease: 'none',
            opacity: 1,
            ...(enableBlur && { filter: 'blur(0px)' }),
            stagger: stagger,
            delay: delay,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    } else if (animationType === 'container') {
      gsap.fromTo(
        el,
        { 
          opacity: baseOpacity,
          y: 50,
          willChange: 'opacity, transform',
          ...(enableBlur && { filter: `blur(${blurStrength}px)` })
        },
        {
          ease: 'power2.out',
          opacity: 1,
          y: 0,
          ...(enableBlur && { filter: 'blur(0px)' }),
          delay: delay,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=10%',
            end: 'top center',
            scrub: 1,
          },
        }
      );
    } else if (animationType === 'lines') {
      const lines = el.children;
      
      if (lines.length > 0) {
        gsap.fromTo(
          lines,
          { 
            opacity: baseOpacity,
            y: 30,
            willChange: 'opacity, transform',
            ...(enableBlur && { filter: `blur(${blurStrength}px)` })
          },
          {
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            ...(enableBlur && { filter: 'blur(0px)' }),
            stagger: stagger,
            delay: delay,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=10%',
              end: 'top center',
              scrub: 1,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
    animationType,
    stagger,
    delay,
  ]);

  return (
    <div
      ref={containerRef}
      className={`scroll-reveal-container ${containerClassName}`}
    >
      <div className={`scroll-reveal-content ${textClassName}`}>
        {splitText}
      </div>
    </div>
  );
}
