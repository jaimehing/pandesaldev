import Image from "next/image";
import discord from "./discord.png";

const DiscordCtaButton = () => {
  return (
    <div className="mx-auto max-w-4xl flex flex-row justify-center">
      <button
        type="button"
        className="flex flex-row border border-[#FFFFFF4F] text-white bg-linear-to-t to-[#7A52B3] from-[#523878] rounded-full px-6 py-2 items-center gap-2 justify-center mt-6"
      >
        <Image
          src={discord}
          alt="Discord"
          className="w-5 h-4 justify-center mt-1"
        />
        <span className="font-semibold">Join Discord</span>
      </button>
    </div>
  );
};

export default DiscordCtaButton;
