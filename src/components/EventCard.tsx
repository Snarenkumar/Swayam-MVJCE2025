import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type MegaEventProps = {
  type: "mega";
  title: string;
  description: string;
  rules: string[];
  info: string[];
  clubId?: string;
  eventId?: string;
};

type DJEventProps = {
  type: "dj";
  title: string;
  description: string;
  venue: string;
  time: string;
  date: string;
  qrImage: string;
};

type EventCardProps = MegaEventProps | DJEventProps;

const EventCard: FC<EventCardProps> = (props) => {
  // Static image paths
  const backgroundImages = {
    mega: '/assets/clubs/mega-event-bg.png',
    dj: '/assets/clubs/dj-night-bg.png'
  };

  return (
    <div
      className="flex-shrink-0 max-w-[850px] w-[calc(100vw-40px)] rounded-[30px] overflow-hidden text-white relative bg-cover bg-center h-[500px]"
      style={{ 
        backgroundImage: `url('${backgroundImages[props.type]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10 p-8 h-full flex flex-col">
        {props.type === "mega" ? (
          <>
            <div className="text-center mb-6">
              <h2 className="bg-white text-[#6e4a12] font-extrabold text-2xl py-2 px-6 inline-block rounded-2xl shadow-md">
                {props.title}
              </h2>
            </div>
            <p className="text-lg mb-6">{props.description}</p>
            <div className="flex flex-wrap gap-8 justify-between mt-auto">
              <div className="flex-1 min-w-[280px]">
                <button className="bg-white text-[#6e4a12] border-black border-[3px] font-bold py-2 px-5 rounded-full shadow-md mb-3">
                  RULES:
                </button>
                <ul className="list-none pl-0 space-y-2">
                  {props.rules.map((rule, idx) => (
                    <li key={idx} className="relative pl-5 before:content-['●'] before:absolute before:left-0">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 min-w-[280px]">
                {props.clubId && props.eventId ? (
                  <Link href={`/events/${props.clubId}/${props.eventId}/register`}>
                    <button className="bg-white text-[#6e4a12] border-[#6e4a12] border-[3px] font-bold py-2 px-5 rounded-full shadow-md mb-3 cursor-pointer hover:bg-[#f5f5f5]">
                      Register Now ➤
                    </button>
                  </Link>
                ) : (
                  <button 
                    className="bg-white text-[#6e4a12] border-[#6e4a12] border-[3px] font-bold py-2 px-5 rounded-full shadow-md mb-3 cursor-pointer hover:bg-[#f5f5f5]"
                    onClick={() => alert("Registration not available for this event yet.")}
                  >
                    Register Now ➤
                  </button>
                )}
                <ul className="list-none pl-0 space-y-2">
                  {props.info.map((item, idx) => (
                    <li key={idx} className="relative pl-5 before:content-['●'] before:absolute before:left-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center text-6xl font-bold mb-3">{props.title}</h2>
            <p className="text-xl mb-6 text-center">{props.description}</p>
            <div className="flex justify-between flex-wrap gap-6 mt-auto">
              <div className="flex-1 min-w-[220px] space-y-4">
                <p className="text-lg">Venue: {props.venue}</p>
                <p className="text-lg">Starts At: {props.time}</p>
                <p className="text-lg">Date: {props.date}</p>
              </div>
              <div className="flex-1 min-w-[220px] flex flex-col items-center">
                <p className="mb-4 text-lg">Get your ticket – Scan now!</p>
                <div className="relative h-[100px] w-[100px]">
                  <Image
                    src={props.qrImage}
                    alt="QR Code"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;