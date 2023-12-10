import Image from "next/image";
import Link from "next/link";
import CompareSlider from "@/components/CompareSlider";

export default function Home() {
  return (
    <main className="mx-auto flex gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around items-center">
      <div className="flex relative max-w-xl flex-col items-center gap-5 gradient-bg">
        <h1 className="text-white text-5xl font-bold text-center">
          Redesign rooms in seconds{" "}
          <span className="text-blue-700">using AI.</span>
        </h1>
        <p className="text-gray-500 text-lg text-center">
          Take a picture of a room and instantly redesign it in 8+ differernt
          themes. Join thousands of happy customers!
        </p>
        <Link
          href={"/room"}
          className="bg-blue-500 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg"
        >
          <button>Redesign Your Room</button>
        </Link>
      </div>
      <div>
        <CompareSlider />
      </div>
    </main>
  );
}
