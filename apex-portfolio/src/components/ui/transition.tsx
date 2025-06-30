import { useState, useRef, useEffect, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  to: string;
}
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  to,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    onWindScroll(); // trigger initial visibility on load

    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `${to} ${
    isVisible
      ? "opacity-100"
      : "opacity-0 "
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
