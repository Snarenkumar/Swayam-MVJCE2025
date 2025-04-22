import Image from "next/image";
import NavBar from "@/components/NavBar";
import '../font.css'; // adjust path if needed
import Link from "next/link";
import { ClubEvent } from "@/types/events";


const saahityaEvents: ClubEvent[] = [
    {
      id: "jam",
      title: "JAM (Just A Minute)",
      description:
        "Test your wit and spontaneity in this fast-paced speaking challenge. Keep your thoughts sharp, your words sharper, and impress the audience in JUST A MINUTE.",
      rules: [
        "Individual event.",
        "Time limit: 1 minute.",
        "Avoid hesitation, repetition, or deviation.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 150",
      prize1: "₹ 4000",
      prize2: "₹ 2000",
      image: "/assets/clubevents/saahitya/jam.svg",
    },
    {
      id: "slam-poetry",
      title: "Slam Poetry",
      description:
        "Showcase your lyrical mastery and rhythmic creativity in this electrifying rapping and beatboxing competition. Let your beats reflect the pulse of tradition meeting innovation.",
      rules: [
        "Individual event.",
        "3-minute performance limit.",
        "No explicit content.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 200",
      prize1: "₹ 2000",
      prize2: "₹ 1000",
      image: "/assets/clubevents/saahitya/slam_poetry.svg",
    },
    {
      id: "air-crash",
      title: "Air Crash",
      description:
        "One parachute, one chance to plead. The weight of survival, your words must lead. With wit and charm, you stake your claim. Convince them now or lose the flame.",
      rules: [
        "Individual event.",
        "Time limit: 2 minutes per participant.",
        "Stay in character throughout.",
      ],
      date: "15/04/2025",
      time: "02:30",
      fee: "₹ 150",
      prize1: "₹ 3000",
      prize2: "₹ 1500",
      image: "/assets/clubevents/saahitya/air_crash.svg",
    }, {
        id: "literary-treasure-hunt",
        title: "Literary Treasure Hunt",
        description:
          "Embark on a thrilling adventure through words and riddles. Crack literary clues and solve mystery challenges to uncover hidden treasures where time is the ultimate judge.",
        rules: [
          "Teams of 3 participants.",
          "Clues provided progressively.",
          "Complete within the allotted time.",
        ],
        date: "15/04/2025",
        time: "02:30",
        fee: "₹ 500",
        prize1: "₹ 5000",
        prize2: "₹ 3000",
        image: "/assets/clubevents/saahitya/literary_treasure_hunt.svg",
      },
      {
        id: "team-debate",
        title: "Team Debate",
        description:
          "Engage in lively intellectual battles, where every argument sharpens your wit. Join forces to tackle critical topics, presenting perspectives with structure and precision. It's a stage to reason, refute, and redefine the narrative.",
        rules: [
          "Teams of 3 participants.",
          "Time limit: 5 minutes per round.",
          "Topics provided in advance.",
        ],
        date: "15/04/2025",
        time: "02:30",
        fee: "₹ 300",
        prize1: "₹ 5000",
        prize2: "₹ 3000",
        image: "/assets/clubevents/saahitya/team_debate.svg",
      },
      {
        id: "sensory-writing",
        title: "Sensory Writing Challenge",
        description:
          "From pen to paper, now from perception to prose, writing demands more than fleeting feelings in your mind. Don't let your senses deceive you; go beyond impressions, unearthing truths that lie beneath. To be a writer is to shape raw sensations into vivid, unforgettable creations.",
        rules: [
          "Individual event.",
          "Time limit: 30 minutes.",
          "Use provided prompts effectively.",
        ],
        date: "15/04/2025",
        time: "02:30",
        fee: "₹ 150",
        prize1: "₹ 2000",
        prize2: "₹ 1000",
        image: "/assets/clubevents/saahitya/sensory_writing.svg",
      },
      {
        id: "poets-auction",
        title: "The Poet's Auction",
        description:
          "Step into a world where words become currency, and poetry finds its power through a bidding frenzy. Auction for words to craft your verses, choose wisely as every syllable carries weight. Blend creativity with persuasion, captivating hearts and minds with your poetic flair.",
        rules: [
          "Individual event.",
          "Participants must auction their work.",
          "Time limit: 5 minutes.",
        ],
        date: "15/04/2025",
        time: "02:30",
        fee: "₹ 400 / team",
        prize1: "₹ 3000",
        prize2: "₹ 2000",
        image: "/assets/clubevents/saahitya/poets_auction.svg",
      },{
        id: "design-domino",
        title: "Design Domino",
        description:
          "Unleash your inner designer to create stunning narratives through visuals. Build upon each domino for a unique chain of ideas.",
        rules: [
          "Teams of 2-4 participants.",
          "Time limit: 90 minutes.",
          "Materials provided on the spot.",
        ],
        date: "15/04/2025",
        time: "02:30",
        fee: "₹ 300 / team",
        prize1: "₹ 4000",
        prize2: "₹ 2500",
        image: "/assets/clubevents/saahitya/design_domino.svg",
      },
      {
        id: "enact-journalism",
        title: "Enact Journalism",
        description:
          "Immerse yourself in the dynamic realm of reporting, where every headline springs to life on stage. Recreate pivotal news events with dramatic expression, blending storytelling.",
        rules: [
          "Teams of 4-6 participants.",
          "Time limit: 6 minutes.",
          "Use props and costumes effectively.",
        ],
        date: "15/04/2025",
        time: "02:30",
        fee: "₹ 400 / team",
        prize1: "₹ 6000",
        prize2: "₹ 3000",
        image: "/assets/clubevents/saahitya/enact_journalism.svg",
      },
      {
        id: "model-united-nations",
        title: "Model United Nations",
        description:
          "Step into the shoes of world diplomats, navigating the intricate web of global challenges. Engage in thought-provoking discussions, negotiate impactful resolutions, and represent nations with conviction. Display leadership, teamwork, and diplomacy as you work to craft a better tomorrow.",
        rules: [
          "Individual participation.",
          "Sessions divided into opening statements, moderated caucus, and resolutions.",
          "Stay in character of your assigned country.",
        ],
        date: "dd/mm/yyyy",
        time: "hour : min",
        fee: "₹ 500 / team",
        prize1: "₹ 5000",
        prize2: "₹ 3000",
        image: "/assets/clubevents/saahitya/model_united_nations.svg",
      },
      {
        id: "murder-mystery",
        title: "Murder Mystery Solving",
        description:
          "Put on your detective hat and solve a thrilling murder mystery. Gather clues, interrogate suspects, and uncover the truth.",
        rules: [
          "Teams of 3-5 participants.",
          "Time limit: 2 hours.",
          "Logical reasoning and teamwork are key.",
        ],
        date: "dd/mm/yyyy",
        time: "hour : min",
        fee: "₹ 500 / team",
        prize1: "₹ 6000",
        prize2: "₹ 4000",
        image: "/assets/clubevents/saahitya/murder_mystery.svg",
      },
  ];

export default function SaahityaPage() {
  return (
    <div className="bg-[#F9F4D7] text-[#5F4A37] font-serif min-h-screen pb-10">
      <NavBar/>


      {/* Title */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 text-center">
          <Image
            src="/assets/clubevents/saahitya/saahitya_logo.svg"
            alt="SAAHITYA"
            width={80}
            height={80}
            className="w-20 h-20 md:w-30 md:h-30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide jaini-font">
          SAAHITYA
          </h1>
        </div>


      {/* Events */}
      <div className="flex flex-col gap-15 items-center px-4 md:px-16 ">
        {saahityaEvents.map((event) => (
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
              height={400}
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
                <Link href={`/events/saahitya/${event.id}/register`}>
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
    <p>Usha: 7022633144</p>
    <p>Harshini: 6362109518</p>
    <p>Nikhil: 9686623539</p>
  </div>
</footer>
    </div>
  );
}
