import { useState, useRef, useEffect, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  to: string;   // animation or tailwind class
  from?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  to,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const { top, bottom } = element.getBoundingClientRect();
      const inView = top < window.innerHeight && bottom > 0; // in viewport
      setIsVisible(inView);

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classes = `${to} ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
