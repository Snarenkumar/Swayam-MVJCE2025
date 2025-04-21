import Image from "next/image";
import NavBar from "@/components/NavBar";
import '../font.css'; // adjust path if needed


const events = [
    {
      id: 1,
      title: "Vocal Vistar",
      description:
        "Showcase your vocal talent in a melody or solo singing event that brings out the nuances of classical and contemporary styles with a Vistaar.",
      rules: [
        "Solo performance.",
        "Time limit: 5 minutes.",
        "Only karaoke or Tanpura can be used.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 200",
      prize1: "₹ 2000",
      prize2: "₹ 1000",
      image: "/assets/clubevents/dhwani/vocal_vistar.svg",
    },
    {
      id: 2,
      title: "Spit Fire",
      description:
        "Unleash your inner poet, rapper or rhythmically creative lyricist in this electrifying rap battle. Spit bars that capture hearts. Let your beat reflect the pulse of expression through Spitfire.",
      rules: [
        "Individual event.",
        "Time limit: 5 minutes.",
        "Language should be clean & non-offensive.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 200",
      prize1: "₹ 2000",
      prize2: "₹ 1000",
      image: "/assets/clubevents/dhwani/spit_fire.svg",
    },
    {
      id: 3,
      title: "Raag Rang",
      description:
        "Bring the essence of Raags alive in your modern musical tale of tradition in this fusion event. Blending classical elements with modern beats, this event is the true celebration of musical evolution.",
      rules: [
        "Teams of 4–5 members.",
        "Time limit: 8 minutes.",
        "Use of electronic instruments allowed.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 400",
      prize1: "₹ 2000",
      prize2: "₹ 1000",
      image: "/assets/clubevents/dhwani/raag_rang.svg",
    },
    {
      id: 4,
      title: "Echoes And Beats",
      description:
        "A band showdown that invites you to unleash your music madness on the stage. Present your musical harmony and coordination while riding the spirit of rock and roll!",
      rules: [
        "Minimum 3 members per performance.",
        "Time limit: 10 minutes.",
        "Instruments to be brought by participants.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 300",
      prize1: "₹ 3000",
      prize2: "₹ 1500",
      image: "/assets/clubevents/dhwani/echoes_beats.svg",
    },
    {
      id: 5,
      title: "Symphony Squad",
      description:
        "Bring your band and set the stage buzzing as you deliver a mix of symphonic wonders. Whether it’s fusion, Bollywood or jazz, this is the stage to unleash your musical spirit.",
      rules: [
        "Teams of 5–7 members.",
        "Time limit: 8 minutes.",
        "Use of karaoke and instruments is allowed.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 400",
      prize1: "₹ 6000",
      prize2: "₹ 3000",
      image: "/assets/clubevents/dhwani/symphony_squad.svg",
    },
  ];

export default function DhwaniPage() {
  return (
    <div className="bg-[#F9F4D7] text-[#5F4A37] font-serif min-h-screen pb-10">
      <NavBar/>


      {/* Title */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 text-center">
          <Image
            src="/assets/clubevents/dhwani/dhwani_logo.svg"
            alt="Dhwani"
            width={80}
            height={80}
            className="w-20 h-20 md:w-30 md:h-30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide jaini-font">
            DhWANI
          </h1>
        </div>


      {/* Events */}
      <div className="flex flex-col gap-15 items-center px-4 md:px-16 ">
        {events.map((event) => (
       <div key={event.id} className="bg-[#E1DABD] custom-shadow rounded-3xl p-6 max-w-4xl w-full relative">
          <div className="absolute -top-12 left-2 z-10">
          <div className="pentagon text-black font-bold flex items-center justify-center text-lg">
            {event.id}
          </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 jaini-font">
  {event.title}
</h2>

            <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={500}
             className="rounded-md md:ml-6 -mt-10 md:-mt-20"
            />
              <div className="ml-3 text-black font-bold">
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
                <button className="bg-[#5d4037] text-white px-7 py-2 rounded-xl italic hover:bg-[#4e342e]">
                  Register now
                </button>
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
 
      <p>Rudransh:-6302573651</p> 
       <p>Yuvraj:-8971728640</p> 
       <p>Manaswini:-8431546867</p> 
  </div>
</footer>
    </div>
  );
}
