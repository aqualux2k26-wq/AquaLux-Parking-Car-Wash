import React, { useState, useRef, useCallback } from "react";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImg?: string;
  afterImg?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImg = "/images/before_wash.png",
  afterImg = "/images/after_wash.png",
  beforeAlt = "Dirty Car Before AquaLux Wash",
  afterAlt = "Clean Mirror Finish After AquaLux Wash",
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 2) percentage = 2;
      if (percentage > 98) percentage = 98;
      setSliderPos(percentage);
    }
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="before-after-container group cursor-ew-resize"
        style={{ "--slider-pos": `${sliderPos}%` } as React.CSSProperties}
      >
        {/* After Image (Full width underneath) */}
        <img
          src={afterImg}
          alt={afterAlt}
          className="before-after-image-after"
          referrerPolicy="no-referrer"
        />

        {/* Before Image (Clipped overlay) */}
        <img
          src={beforeImg}
          alt={beforeAlt}
          className="before-after-image-before"
          referrerPolicy="no-referrer"
        />

        {/* Labels */}
        <div className="before-after-label before-label flex items-center gap-2">
          <span>BEFORE</span>
        </div>
        <div className="before-after-label after-label flex items-center gap-2 text-sky-400 border-sky-400">
          <Sparkles className="w-4 h-4 text-sky-300" />
          <span>AFTER AQUALUX</span>
        </div>

        {/* Vertical Divider Handle */}
        <div className="before-after-handle">
          <div className="before-after-handle-circle">
            <ArrowLeftRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm text-slate-400 mt-3 font-medium">
        Drag or tap the slider to inspect AquaLux scratch-free mirror perfection.
      </p>
    </div>
  );
};
