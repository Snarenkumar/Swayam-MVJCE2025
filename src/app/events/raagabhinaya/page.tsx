import Image from "next/image";
import NavBar from "@/components/NavBar";
import '../font.css'; // adjust path if needed
import Link from "next/link";
import { ClubEvent } from "@/types/events";


const raagabhinayaEvents: ClubEvent[] = [
    {
      id: "mono-acting",
      title: "Mono Acting",
      description:
        "Step into the spotlight and showcase your acting skills in this solo performance event. Convey emotions and stories through dramatic artistry.",
      rules: [
        "Individual event.",
        "Performance duration: 2 minutes.",
        "Any language permitted.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 250",
      prize1: "₹ 4000",
      prize2: "₹ 3000",
      image: "/assets/clubevents/raagabhinaya/mono_acting.svg",
    },
    {
      id: "street-play",
      title: "Street Play",
      description:
        "Command the streets with impactful performances that bring societal issues to the forefront. Fuse energy and creativity to inspire change while honoring the values of VIRASAT.",
      rules: [
        "Teams of 7-20 members.",
        "Time limit: 7 minutes.",
        "Props allowed; electronic instruments prohibited.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 800",
      prize1: "₹ 8000",
      prize2: "₹ 4000",
      image: "/assets/clubevents/raagabhinaya/street_play.svg",
    },
    {
      id: "mime-group",
      title: "Mime Group",
      description:
        "Delve into the art of silent storytelling, where actions speak louder than words. Express emotions and narratives that transcend language barriers with finesse and creativity.",
      rules: [
        "Teams of 6-10 participants.",
        "Time limit: 6 minutes.",
        "Pre-recorded music without lyrics is allowed.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 600",
      prize1: "₹ 8000",
      prize2: "₹ 5000",
      image: "/assets/clubevents/raagabhinaya/mime_group.svg",
    },
    {
      id: "short-film",
      title: "Short Film Making",
      description:
        "Lights, camera, action! Create a cinematic masterpiece that tells a story that's both emotionally powerful and visually stunning.",
      rules: [
        "Teams of up to 5 participants.",
        "Film duration: 6 minutes.",
        "Topic provided on the spot.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 600",
      prize1: "₹ 8000",
      prize2: "₹ 5000",
      image: "/assets/clubevents/raagabhinaya/short_film.svg",
    },
    {
      id: "stand-up",
      title: "Stand-Up",
      description:
        "Bring the house down with your humor and wit in this solo stand-up comedy event. Make the audience laugh while reflecting the cultural essence of VIRASAT.",
      rules: [
        "Individual event.",
        "Time limit: 4 minutes.",
        "No offensive content allowed.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 250",
      prize1: "₹ 4000",
      prize2: "₹ 3000",
      image: "/assets/clubevents/raagabhinaya/stand_up.svg",
    },
    {
      id: "graphic-design",
      title: "Graphic Designing",
      description:
        "Transform your ideas into stunning visuals that captivate and inspire. Let your creativity shine in this design competition.",
      rules: [
        "Individual event.",
        "Theme provided on the spot.",
        "Submit in JPEG, JPG, or PNG format within 24 hours.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 200",
      prize1: "₹ 3000",
      prize2: "₹ 1500",
      image: "/assets/clubevents/raagabhinaya/graphic_design.svg",
    },
    {
      id: "photography",
      title: "Photography",
      description:
        "Capture the spirit of VIRASAT through your lens. Tell stories that words cannot express in this photography contest.",
      rules: [
        "Individual event.",
        "Images must be original and relevant to the theme.",
        "Basic editing allowed.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 200",
      prize1: "₹ 3000",
      prize2: "₹ 2000",
      image: "/assets/clubevents/raagabhinaya/photography.svg",
    },
    {
      id: "improv",
      title: "Improv",
      description:
        "Unleash your spontaneity and humor in this improvisation event where quick thinking takes the stage. Create magic on the spot.",
      rules: [
        "Teams of 2-3 participants.",
        "Team formation on the spot.",
        "Time limit: 6 minutes.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 600",
      prize1: "₹ 4000",
      prize2: "₹ 3000",
      image: "/assets/clubevents/raagabhinaya/improv.svg",
    }
  ];
  

export default function RaagabhinayaPage() {
  return (
    <div className="bg-[#F9F4D7] text-[#5F4A37] font-serif min-h-screen pb-10">
      <NavBar/>


      {/* Title */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 text-center">
          <Image
            src="/assets/clubevents/raagabhinaya/raagabhinaya_logo.svg"
            alt="RAAGABHINAYA"
            width={80}
            height={80}
            className="w-20 h-20 md:w-30 md:h-30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide jaini-font">
          RAAGABHINAYA
          </h1>
        </div>


      {/* Events */}
      <div className="flex flex-col gap-15 items-center px-4 md:px-16 ">
        {raagabhinayaEvents.map((event) => (
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
                <Link href={`/events/raagabhinaya/${event.id}/register`}>
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
    <p>Sharat: 9380897991</p>
    <p>Sachin: 8660241556</p>
    <p>Aishwarya: 9148913385</p>
    <p>Raaghav: 7348860439</p>
  </div>
</footer>
    </div>
  );
}
