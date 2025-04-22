'use client'; // Add this directive since we need interactivity

import { FC, useState } from "react";
import EventCard from "./EventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      type: "mega" as const,
      title: "Mega Event",
      description: "A grand spectacle combining drama, music, and dance into a thematic performance. Bring the spirit of VIRAASATH alive through your artistry.",
      rules: [
        "Teams of 8–17 members.",
        "Performance duration: 7 minutes.",
        "Props and costumes encouraged; hazardous materials prohibited.",
      ],
      info: [
        "Registration fee: ₹1500",
        "Prize: 1st: ₹50,000, 2nd: ₹25,000",
        "Date & Time: [To be Updated]",
        "Coordinator Contact: [To be Updated]",
      ]
    },
    {
      type: "dj" as const,
      title: "DJ NIGHT",
      description: "Free entry for all registered participants and MVJCE students",
      venue: "MVJCE BasketBall Court",
      time: "4 PM",
      date: "26th May 2025",
      qrImage: "/assets/qr-code.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/70 text-3xl px-3 py-1 rounded-lg hover:bg-white/90 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>

      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            <EventCard {...event} />
          </div>
        ))}
      </div>

      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/70 text-3xl px-3 py-1 rounded-lg hover:bg-white/90 transition-colors"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Slider;