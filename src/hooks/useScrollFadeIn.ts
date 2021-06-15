import { useCallback, useEffect, useRef } from 'react';

export const useScrollFadeIn = () => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current }: any = dom;

    if (entry.isIntersecting) {
      current.classList.add('fadeIn');
    }
  }, []);

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.8 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
  };
};
