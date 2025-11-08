import Image from "next/image";
import footerLogo from "./footer_logo.png"
import iconFacebook from "./icon_facebook.png";
import iconWebsite from "./icon_website.png";
import iconX from "./icon_x.png";
import iconGithub from "./icon_github.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row mx-auto max-w-5xl mt-10 mb-8">
        <div className="flex-1 flex flex-col gap-4">
          <Image src={footerLogo} alt="Footer Logo" className="w-10" />
          <div className="flex flex-col leading-tight">
            <span className="text-yellow uppercase text-sm font-semibold">
              Get in touch
            </span>
            <span className="text-white text-lg">devteam@gmail.com</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-yellow uppercase text-sm font-semibold">
              Follow us on Social Media
            </span>
            <div className="flex flex-row gap-3 mt-2">
              <Image src={iconFacebook} alt="Facebook" className="w-7 h-7" />
              <Image src={iconGithub} alt="Github" className="w-7 h-7" />
              <Image src={iconWebsite} alt="Website" className="w-7 h-7" />
              <Image src={iconX} alt="X" className="w-7 h-7" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <span className="text-yellow uppercase text-sm font-semibold">
            Menu
          </span>
          <div className="flex flex-row text-white uppercase gap-8 font-semibold mt-2">
            <div className="flex-col flex gap-1">
              <div>home</div>
              <div>features</div>
              <div>stats</div>
              <div>testimonials</div>
            </div>
            <div className="flex-col flex gap-1">
              <div>meet the team</div>
              <div>rules</div>
              <div>contact us</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-white font-bold text-2xl mb-5 leading-tight">
            Join us and let&apos;s knead our skills and explore exciting
            opportunities together!
          </span>
          <button
            type="button"
            className="uppercase border border-white text-white px-1 py-1 rounded-lg w-auto"
          >
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;