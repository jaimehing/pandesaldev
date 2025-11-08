import Image from "next/image";
import logo from "./logo.png";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 items-center">
        <Image src={logo} alt="Pandesal.dev Logo" className="w-32 mt-3" />
        <div className="flex flex-row gap-4">
          {/* TODO: must be dynamic based on the hyperlink */}
          <Link href="/" className="text-[#F5A97F] text-xl">
            Home
          </Link>
          <Link href="/" className="text-white text-xl">
            About Us
          </Link>
          <Link href="/" className="text-white text-xl">
            Team
          </Link>
          <Link href="/" className="text-white text-xl">
            Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
