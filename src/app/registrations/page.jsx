import Navbar from "@/components/NavBar";

import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const page = () => {
  return (
    <div
      className={`min-h-screen bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed text-[#5F4A37] ${playfairDisplay.className} scroll-smooth`}
    >
      <div className="sticky top-0 lg:top-4 backdrop-blur-sm bg-[#5F4A37]/10 border border-[#5F4A37]/30 shadow-lg rounded-xl z-40 max-w-5xl mx-auto ">
        <Navbar />
      </div>
      <p className="text-center mt-20">Registrations Opens Soon</p>
    </div>
  );
};

export default page;
