import Image from "next/image";
import NavBar from "@/components/NavBar";
import '../font.css'; // adjust path if needed


const events = [
  {
    id: 1,
    title: "Pencil/Graphic Sketching",
    description:
      "Bring your artistic visions to life with detailed pencil or graphic sketches. Whether traditional or digital, showcase your creativity and attention to detail.",
    rules: [
      "Individual event.",
      "Performance duration: 2.5 minutes.",
      "On-the-spot theme provided.",
    ],
    date: "15/04/2025",
    time: "02:30",
    fee: "₹ 300",
    prize1: "₹ 3000",
    prize2: "₹ 1500",
    image: "/assets/clubevents/aakriti/pencil_sketching.svg",
  },
  {
    id: 2,
    title: "Face & Body Painting",
    description:
      "Turn faces and bodies into vibrant canvases to express the spirit of VIRASAT. Creativity and technique will set you apart in this artistic challenge.",
    rules: [
      "Teams of 2 members.",
      "Time limit: 2.5 hours.",
      "Bring your own materials.",
    ],
    date: "15/04/2025",
    time: "02:30",
    fee: "₹ 300",
    prize1: "₹ 3000",
    prize2: "₹ 1500",
    image: "/assets/clubevents/aakriti/face_painting.svg",
  },
  {
    id: 3,
    title: "Ceramic Doodling",
    description:
      "Transform plain ceramics into masterpieces by adding intricate and vibrant doodles. A perfect blend of creativity and craftsmanship.",
    rules: [
      "Individual event.",
      "Performance duration: 2.5 minutes.",
      "Ceramic pieces will be provided.",
    ],
    date: "15/04/2025",
    time: "02:30",
    fee: "₹ 250",
    prize1: "₹ 2000",
    prize2: "₹ 1000",
    image: "/assets/clubevents/aakriti/ceramic.svg",
  },
  {
    id: 4,
    title: "Treasure from Trash",
    description:
      "Turn discarded materials into artistic treasures that reflect creativity and innovation. Prove that art has no boundaries.",
    rules: [
      "Teams of 2-3 members.",
      "Performance duration: 3 Hours.",
      "Materials will be provided.",
    ],
    date: "15/04/2025",
    time: "02:30",
    fee: "₹ 250",
    prize1: "₹ 4000",
    prize2: "₹ 2000",
    image: "/assets/clubevents/aakriti/treasure.svg", // Add this image to public/assets/clubevents/aakriti/
  },
  {
    id: 5,
    title: "Rangoli Rachana",
    description:
      "Celebrate Indian traditions by crafting stunning rangoli designs with vibrant colors. Showcase your skills and bring your designs to life.",
    rules: [
      "Individual or team participation (max 2 members).",
      "Performance duration: 2.5 hours.",
      "Bring your own materials.",
    ],
    date: "15/04/2025",
    time: "02:30",
    fee: "₹ 150",
    prize1: "₹ 1500",
    prize2: "₹ 800",
    image: "/assets/clubevents/aakriti/rangoli.svg", // Add this image to public/assets/clubevents/aakriti/
  },
];


export default function AakritiPage() {
  return (
    <div className="bg-[#F9F4D7] text-[#5F4A37] font-serif min-h-screen pb-10">
      <NavBar/>


      {/* Title */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-6 text-center">
          <Image
            src="/assets/clubevents/aakriti/aakriti_logo.svg"
            alt="Aakriti"
            width={80}
            height={80}
            className="w-20 h-20 md:w-30 md:h-30"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide jaini-font">
            AAKRITI
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
    <p>Aditya: 6361931910</p>
    <p>Pushpanjali: 9353361331</p>
  </div>
</footer>
    </div>
  );
}
