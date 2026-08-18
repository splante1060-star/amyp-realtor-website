import { useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  ariaLabel: string;
  beforePosition?: string;
  afterPosition?: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  ariaLabel,
  beforePosition = "center",
  afterPosition = "center",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [showHint, setShowHint] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const hintTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShowHint(true);

        hintTimeoutRef.current = window.setTimeout(() => {
          setShowHint(false);
        }, 1600);

        observer.disconnect();
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(slider);

    return () => {
      observer.disconnect();

      if (hintTimeoutRef.current !== null) {
        window.clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

  const stopHint = () => {
    setShowHint(false);

    if (hintTimeoutRef.current !== null) {
      window.clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
  };

  const updatePosition = (clientX: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    stopHint();

    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    updatePosition(event.clientX);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stopHint();

      setPosition((current) => Math.max(0, current - 2));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      stopHint();

      setPosition((current) => Math.min(100, current + 2));
    }

    if (event.key === "Home") {
      event.preventDefault();
      stopHint();
      setPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      stopHint();
      setPosition(100);
    }
  };

  return (
    <div
      ref={sliderRef}
      className={`before-after-slider ${
        showHint ? "before-after-slider-hint" : ""
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      {/* After image */}
      <img
        src={after}
        alt={afterAlt}
        className="before-after-slider-image"
        style={{ objectPosition: afterPosition }}
        draggable={false}
      />

      {/* Before image */}
      <div
        className="before-after-overlay"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={before}
          alt={beforeAlt}
          className="before-after-slider-image"
          style={{ objectPosition: beforePosition }}
          draggable={false}
        />
      </div>

      {/* Divider + handle */}
      <div
        className="before-after-divider"
        style={{
          left: `${position}%`,
        }}
        aria-hidden="true"
      >
        <div className="before-after-handle">
          <span className="before-after-arrow">‹</span>
          <span className="before-after-arrow">›</span>
        </div>
      </div>

      {/* Labels */}
      <div
        className={`before-after-label before-after-before-label ${
          position < 22 ? "before-after-label--hidden" : ""
        }`}
      >
        Before
      </div>

      <div
        className={`before-after-label before-after-after-label ${
          position > 76 ? "before-after-label--hidden" : ""
        }`}
      >
        Prepared for Market
      </div>
    </div>
  );
}
