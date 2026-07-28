import React, { useState, useRef, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { contactConfig } from "../config/contact";

export const FloatingActionButtons: React.FC = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  // Handle Mouse / Touch Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(false);
    const startX = e.clientX;
    const startY = e.clientY;

    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offsetRef.current = {
        x: startX - rect.left,
        y: startY - rect.top,
      };
    }

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const dist = Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY);
      if (dist > 5) {
        setIsDragging(true);
      }

      if (dragRef.current) {
        const newX = window.innerWidth - moveEvent.clientX - (dragRef.current.offsetWidth - offsetRef.current.x);
        const newY = window.innerHeight - moveEvent.clientY - (dragRef.current.offsetHeight - offsetRef.current.y);

        setPosition({
          x: Math.max(10, Math.min(window.innerWidth - 80, newX)),
          y: Math.max(10, Math.min(window.innerHeight - 160, newY)),
        });
      }
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      return;
    }
    const url = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
      contactConfig.whatsappDefaultMessage
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCallClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      return;
    }
    window.location.href = `tel:${contactConfig.phoneNumberRaw}`;
  };

  return (
    <div
      ref={dragRef}
      onPointerDown={handlePointerDown}
      style={{
        position: "fixed",
        right: `${position.x}px`,
        bottom: `${position.y}px`,
        zIndex: 9999,
        touchAction: "none",
      }}
      className="flex flex-col gap-3 select-none cursor-grab active:cursor-grabbing"
    >
      {/* Draggable Call Button */}
      <button
        onClick={handleCallClick}
        aria-label="Call AquaLux Parking Car Wash"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-700 to-slate-900 border-2 border-slate-300 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 group"
      >
        <Phone className="w-6 h-6 text-slate-100 group-hover:animate-bounce" />
        <span className="sr-only">Call Us</span>
      </button>

      {/* Draggable WhatsApp Button with Official WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp with AquaLux"
        className="w-14 h-14 rounded-full bg-blue-600 border-2 border-slate-200 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 group"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.886-9.885 9.886m0-18c-6.54 0-11.861 5.321-11.864 11.863 0 2.091.547 4.133 1.587 5.932l-1.688 6.166 6.31-1.655a11.823 11.823 0 005.65 1.423h.005c6.54 0 11.863-5.322 11.866-11.863.001-3.168-1.233-6.147-3.476-8.392A11.8 11.8 0 0012.051 3.78" />
        </svg>
        <span className="sr-only">WhatsApp Us</span>
      </button>
    </div>
  );
};
