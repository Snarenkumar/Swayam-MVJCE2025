import Image from "next/image";
import NavBar from "@/components/NavBar";
import '../font.css'; // adjust path if needed
import Link from "next/link";
import { ClubEvent } from "@/types/events";

// Create properly structured events using the ClubEvent type
const nrityatrixEvents: ClubEvent[] = [
    {
      id: "indian-solo",
      title: "Indian Solo Dance Competition",
      description:
        "Celebrate the elegance of India's traditional dance forms with mesmerizing moves and vibrant expressions. Let your performance reflect the cultural hues of VIRASAT.",
      rules: [
        "Individual event.",
        "Time limit: 3 minutes.",
        "Background music and props prohibited.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 150",
      prize1: "₹ 3000",
      prize2: "₹ 1500",
      image: "/assets/clubevents/nrityatrix/indian_solo.svg",
    },
    {
      id: "western-solo",
      title: "Western Solo Dance Competition",
      description:
        "Showcase high-octane solo dance talent with high-energy moves that captivate judges and audiences. Unleash your creativity and stage presence.",
      rules: [
        "Individual event.",
        "Time limit: 3 minutes.",
        "Background music and props prohibited.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 150",
      prize1: "₹ 3000",
      prize2: "₹ 1500",
      image: "/assets/clubevents/nrityatrix/western_solo.svg",
    },
    {
      id: "duet-dance",
      title: "Duet Dance Competition",
      description:
        "Witness the beautiful harmony of two artists in perfect synchronization as they bring rhythm and passion to the stage with their duet performance.",
      rules: [
        "Teams of 2 members.",
        "Time limit: 3 minutes.",
        "Background music and props prohibited.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 150",
      prize1: "₹ 3000",
      prize2: "₹ 1500",
      image: "/assets/clubevents/nrityatrix/duet_dance.svg",
    },
    {
      id: "open-dance-battle",
      title: "Open Dance Battle Competition",
      description:
        "Bring the heat to the floor in this spontaneous dance showdown. Unpredictable beats and raw talent take center stage.",
      rules: [
        "Individual or group participation.",
        "Music will be provided on the spot.",
        "Time limits vary per round.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 200",
      prize1: "₹ 4000",
      prize2: "₹ 2000",
      image: "/assets/clubevents/nrityatrix/battle.svg",
    },
    {
      id: "western-group",
      title: "Western Group Dance Competition",
      description:
        "Showcase your group's creativity and energy through synchronized choreography that resonates with the vibrancy of Western dance styles.",
      rules: [
        "Teams of 6-8 members.",
        "Time limit: 5 minutes.",
        "Background music and props allowed.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 300",
      prize1: "₹ 5000",
      prize2: "₹ 3000",
      image: "/assets/clubevents/nrityatrix/western_group.svg",
    }, 
    {
      id: "mega-event",
      title: "Mega Event",
      description:
        "A grand spectacle combining drama, music, and dance into a thematic performance. Bring the spirit of VIRAASATH alive through your artistry.",
      rules: [
        "Teams of 8-17 members.",
        "Performance duration: 7 minutes.",
        "Props and costumes encouraged; hazardous materials prohibited.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 1500",
      prize1: "₹ 50,000",
      prize2: "₹ 25,000",
      image: "/assets/clubevents/nrityatrix/mega_event.svg",
    },
  ];
  

export default function NrityatrixPage() {
  return (
    <div className="bg-[#F9F4D7] text-[#5F4A37] font-serif min-h-screen pb-10">
      <NavBar/>


      {/* Title */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 text-center">
          <Image
            src="/assets/clubevents/nrityatrix/nrityatrix_logo.svg"
            alt="Nrityatrix"
            width={80}
            height={80}
            className="w-20 h-20 md:w-30 md:h-30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide jaini-font">
          NRITYATRIX
          </h1>
        </div>


      {/* Events */}
      <div className="flex flex-col gap-15 items-center px-4 md:px-16 ">
        {nrityatrixEvents.map((event) => (
       <div key={event.id} className="bg-[#E1DABD] custom-shadow rounded-3xl p-6 max-w-4xl w-full relative">
          <div className="absolute -top-12 left-2 z-10">
          <div className="pentagon text-black font-bold flex items-center justify-center text-lg">
            {event.id}
          </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 jaini-font">
  {event.title}
</h2>

            <div className="flex flex-col md:flex-row gap-6">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={500}
              className="rounded-md md:ml-6"
            />
              <div className="ml-5 text-black font-bold">
                <p className="mb-2"  >
                  <strong  >Description :</strong> {event.description}
                </p>
                <p><strong>Rules :</strong></p>
                <ol className="list-disc pl-6 mb-2 text-[#000000]">
                  {event.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ol>
                <p className="mb-1"><strong>Date :</strong> {event.date} &nbsp; <strong>Time :</strong> {event.time}</p>
                <p className="mb-1"><strong>Registration Fee :</strong> {event.fee}</p>
                <p className="mb-2">1st: {event.prize1} &nbsp; 2nd: {event.prize2}</p>
                <Link href={`/events/nrityatrix/${event.id}/register`}>
                  <button className="bg-[#5d4037] text-white px-7 py-2 rounded-xl italic hover:bg-[#4e342e] cursor-pointer">
                    Register now
                  </button>
                </Link>
                <div className="mt-2 text-sm ml-0 md:ml-12">
                  <strong>Event Coordinators :</strong><br />
                  1. Sriram : +91 7338688960 <br />
                  2. Hari Vaidhya : +91 6379719184
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contact Us Footer */}
<footer className="bg-[#5F4A37] text-[#F9F4D7] py-8 mt-20 text-center rounded-t-3xl">
  <h2 className="text-3xl sm:text-4xl font-bold jaini-font mb-4">CONTACT US</h2>
  <p className="text-2xl mb-2">Club Coordinators :-</p>
  <div className="text-base space-y-2 font-semibold">
    <p>Darshan: 9141695797</p>
    <p>Ashmita: 7411061287</p>
  </div>
</footer>
    </div>
  );
}
