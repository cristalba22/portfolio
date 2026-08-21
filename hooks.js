import { useEffect } from 'react';

// Staggered reveal-on-scroll for elements matching the given selector list.
export function useScrollReveal(selectors, deps = []) {
  useEffect(() => {
    const targets = document.querySelectorAll(selectors);
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 6) * 60}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// 3D pointer-tilt effect on any element with the .tilt-card class.
export function useTiltCards(deps = []) {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    const MAX_TILT = 10;
    const handlers = [];

    cards.forEach((card) => {
      card.style.perspective = '800px';

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * MAX_TILT;
        const rotateX = -((y - centerY) / centerY) * MAX_TILT;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push([card, onMove, onLeave]);
    });

    return () => {
      handlers.forEach(([card, onMove, onLeave]) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
