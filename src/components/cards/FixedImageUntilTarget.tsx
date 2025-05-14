import React, { useEffect, useRef, useState } from 'react';

interface FixedImageUntilTargetProps {
  imageUrls: string[];
  sectionIds: string[];
  targetId: string;
}

const FixedImageUntilTarget: React.FC<FixedImageUntilTargetProps> = ({
  imageUrls,
  sectionIds,
  targetId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [stoppedTop, setStoppedTop] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById(targetId);
    const container = containerRef.current;
    if (!target || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollTop = window.scrollY || window.pageYOffset;
        if (entry.intersectionRatio >= 0.1) {
          const rect = container.getBoundingClientRect();
          const absoluteTop = rect.top + scrollTop;
          setStoppedTop(absoluteTop);
          setIsFixed(false);
          setIsStopped(true);
        } else if (isStopped && scrollTop < stoppedTop) {
          setIsFixed(true);
          setIsStopped(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId, isStopped, stoppedTop]);

  const getTransitionProgress = () => {
    const first = document.getElementById(sectionIds[0]);
    if (!first) return { index: 0, progress: 0 };

    const firstTop = first.getBoundingClientRect().top + window.scrollY;
    if (scrollY < firstTop) {
      return { index: 0, progress: 0 };
    }

    for (let i = 0; i < sectionIds.length - 1; i++) {
      const curr = document.getElementById(sectionIds[i]);
      const next = document.getElementById(sectionIds[i + 1]);
      if (!curr || !next) continue;

      const start = curr.getBoundingClientRect().top + window.scrollY;
      const end = next.getBoundingClientRect().top + window.scrollY;
      if (scrollY >= start && scrollY < end) {
        const rawProgress = (scrollY - start) / (end - start);
        const acceleratedProgress = Math.min(Math.max(rawProgress * 1.5, 0), 1);
        return { index: i, progress: acceleratedProgress };
      }
    }

    return { index: sectionIds.length - 1, progress: 0 };
  };

  const { index, progress } = getTransitionProgress();
  const currentImg = imageUrls[index] || '';
  const nextImg = imageUrls[index + 1] || '';

  return (
    <div
      ref={containerRef}
      style={{
        position: isFixed ? 'fixed' : 'absolute',
        top: isFixed ? '120px' : `${stoppedTop}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '40vw',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      className="w-[60vw] max-w-[250px] md:max-w-[350px] lg:max-w-[464px] overflow-hidden relative"
    >
      {/* Поточне зображення */}
      <img
        src={currentImg}
        alt=""
        style={{
          width: '100%',
          height: `${100 - progress * 100}%`, // Змінюється висота зображення
          objectFit: 'cover', // Збереження пропорцій
        }}
      />

      {/* Наступне зображення */}
      {nextImg && progress > 0 && (
        <img
          src={nextImg}
          alt=""
          style={{
            width: '100%',
            height: `${progress * 100}%`, // Змінюється висота наступного зображення
            objectFit: 'cover', // Збереження пропорцій
          }}
        />
      )}
    </div>
  );
};

export default FixedImageUntilTarget;
