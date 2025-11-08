import Image from "next/image";
import sparkPurple from "../spark-purple.png"
import sparkYellow from "../spark-yellow.png"

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto my-3">
      <div className="flex flex-col font-[Dela_Gothic_One] items-center text-6xl text-light-primary gap-1">
        <div className="flex flex-row justify-center">
          <Image
            src={sparkPurple}
            alt="Purple Spark"
            className="mr-4 w-14 self-center"
          />
          A Comm<span className="text-[#C6A0F6]">unity</span>&nbsp;of
        </div>
        <div>
          <span className="text-[#A6DA95]">Filipino</span>&nbsp;Software
        </div>
        <div className="flex flex-row">
          Developers
          <Image
            src={sparkYellow}
            alt="Yellow Spark"
            className="mt-2 ml-4 w-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;