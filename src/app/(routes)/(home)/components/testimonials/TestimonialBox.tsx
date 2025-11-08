import Image, { StaticImageData } from "next/image";
import testimonialBoxImage from "./testimonial_box.png";

type TestimonialBoxProps = {
  userImage: StaticImageData;
  text: string;
  user: string;
  userHandle: string;
};

const TestimonialBox: React.FC<TestimonialBoxProps> = ({
  userImage,
  text,
  user,
  userHandle,
}) => {
  return (
    <div className="flex relative">
      <Image src={testimonialBoxImage} alt="Testimonial Box" className="h-60" />
      <div className="text-light-primary absolute flex flex-row gap-4 m-10">
        <Image src={userImage} alt={user} className="rounded-full w-16 h-16" />
        <div className="flex flex-col">
          <div className="font-[Ubuntu_Mono] italic leading-tight">{text}</div>
          <div className="font-[Ubuntu_Mono]">{user}</div>
          <div className="font-[Ubuntu_Mono]">{userHandle}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
