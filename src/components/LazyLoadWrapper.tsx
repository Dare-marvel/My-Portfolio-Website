// components/LazyLoadWrapper.tsx
import { useEffect, useRef, useState, ReactNode } from 'react';

const LazyLoadWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        // 👇 This will preload component when it's 300px away from viewport
        rootMargin: '300px 0px',
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyLoadWrapper;
