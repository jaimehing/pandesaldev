import Image from "next/image";
import sparkPurple from "../spark-purple.png";
import sparkGreen from "../spark-green.png";
import TestimonialBox from "./TestimonialBox";
import testi1Image from "./testi_1.png";
import testi2Image from "./testi_2.png";
import testi3Image from "./testi_3.png";
import testi4Image from "./testi_4.png";

const Testimonials = () => {
  return (
    <>
      <div className="mt-8 mx-auto max-w-5xl">
        <div className="text-4xl text-light-primary flex flex-row justify-center font-[Dela_Gothic_One]">
          <div>Testimonials</div>
          <Image
            src={sparkPurple}
            alt="Spark Orange"
            className="ml-4 mt-4 w-8 h-8"
          />
          <Image src={sparkGreen} alt="Spark Greent" className="w-12 h-12" />
        </div>
      </div>
      <div className="mt-6 mx-auto max-w-5xl flex flex-col relative">
        <div className="flex flex-row gap-8 mb-8">
          <TestimonialBox
            userImage={testi1Image}
            text="Pandev Community has been a great place to connect, have fun,
                  and learn alongside other IT professionals. Even with years of
                  experience in the industry, I enjoy sharing knowledge and
                  growing together with this vibrant community"
            user="May"
            userHandle="@_username"
          />
          <TestimonialBox
            userImage={testi2Image}
            text="Pandev Community has been a great place to connect, have fun,
                  and learn alongside other IT professionals. Even with years of
                  experience in the industry, I enjoy sharing knowledge and
                  growing together with this vibrant community"
            user="Ivan"
            userHandle="@_username"
          />
        </div>
        <div className="flex flex-row gap-8">
          <TestimonialBox
            userImage={testi3Image}
            text="Pandev Community has been a great place to connect, have fun,
                  and learn alongside other IT professionals. Even with years of
                  experience in the industry, I enjoy sharing knowledge and
                  growing together with this vibrant community"
            user="Kyle"
            userHandle="@_username"
          />
          <TestimonialBox
            userImage={testi4Image}
            text="Pandev Community has been a great place to connect, have fun,
                  and learn alongside other IT professionals. Even with years of
                  experience in the industry, I enjoy sharing knowledge and
                  growing together with this vibrant community"
            user="Derrick"
            userHandle="@_username"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
