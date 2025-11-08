import Image from "next/image";
import sparkPurple from "../spark-purple.png";
import connect from "./connect.png";
import mentorship from "./mentorship.png";
import jobOpportunities from "./job_opportunities.png";

const Features = () => {
  return (
    <>
      <div className="mt-6 mx-auto max-w-5xl">
        <div className="text-4xl text-light-primary flex flex-row justify-center font-[Dela_Gothic_One]">
          <Image src={sparkPurple} alt="Spark Right" className="mr-4 w-10" />
          <div>Be part of pandesal.dev</div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl mt-10">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col text-[#7DC4E4] flex-1 border border-[#7DC4E4] border-dashed py-8 rounded-3xl relative overflow-clip">
            <div className="flex flex-col px-6">
              <Image src={connect} alt="Connect" className="w-11" />
              <div className="font-[Dela_Gothic_One] text-2xl my-2">
                Connect
              </div>
              <div className="text-xl leading-snug">
                Network, collaborate with the Pandesal Dev community members on
                Discord. Whether you are looking for banter, sharing your
                portfolio, discussing your hobbies or seeking advice, our
                community is here to support and engage with you.
              </div>
            </div>
            <div className="font-extrabold text-[#7DC4E40D] text-[20rem] absolute -bottom-32 -right-10">
              01
            </div>
          </div>
          <div className="flex flex-col text-[#A6DA95] flex-1 border border-[#A6DA95] border-dashed py-8 rounded-3xl relative overflow-clip pt-40">
            <div className="font-extrabold text-[#A6DA950D] text-[20rem] absolute -top-48 -right-17">
              02
            </div>
            <div className="flex flex-col px-6">
              <Image src={mentorship} alt="Mentorship" className="w-11" />
              <div className="font-[Dela_Gothic_One] text-2xl my-2">
                Mentorship
              </div>
              <div className="text-xl leading-snug">
                Explore mentorship avenues in our tech community, where industry
                professionals volunteer their expertise to help individuals with
                mock interview practice, CV improvement, and providing career
                advice. Empower yourself with the guidance you need for career
                growth and skill enhancement.
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#F5A97F] flex-1 border border-[#F5A97F] border-dashed py-8 rounded-3xl relative overflow-clip">
            <div className="flex flex-col px-6">
              <Image src={jobOpportunities} alt="Connect" className="w-11" />
              <div className="font-[Dela_Gothic_One] text-2xl my-2">
                Job Opportunities
              </div>
              <div className="text-xl leading-snug">
                Browse through our community&apos;s comprehensive selection of
                job listings, including opportunities across various industries
                and experience levels. Whether you&apos;re seeking a new career
                path or looking for the perfect candidate, take a look at our
                available job openings here.
              </div>
            </div>
            <div className="font-extrabold text-[#F5A97F0D] text-[20rem] absolute -bottom-32 -right-10">
              03
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
