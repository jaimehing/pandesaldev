import Image from "next/image";
import plane from "./plane.png";

const HeroSubtitle = () => {
  return (
    <div className="mx-auto max-w-4xl flex flex-row justify-center relative">
      <Image src={plane} alt="Plane" className="w-12 absolute left-38 top-4" />
      <div className="text-center text-light-primary font-semibold mt-4">
        Pandev is where the fun tech talks take place
      </div>
    </div>
  );
};

export default HeroSubtitle;
