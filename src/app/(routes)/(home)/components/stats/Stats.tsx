const Stats = () => {
  return (
    <div className="mt-6 mx-auto max-w-2xl flex flex-row justify-center bg-[#181926] border-2 border-[#C6A0F6] rounded-full p-4 text-white divide-x divide-[#C6A0F6] w-full mb-16">
      <div className="flex flex-row items-center gap-4 px-5">
        <div className="text-3xl">1k+</div>
        <div className="flex flex-col leading-4 text-lg">
          <span>Active</span>
          <span>Members</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 px-5">
        <div className="text-3xl">20+</div>
        <div className="flex flex-col leading-4 text-lg">
          <span>Meetups &</span>
          <span>Events</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 px-5">
        <div className="text-3xl">10+</div>
        <div className="flex flex-col leading-4 text-lg">
          <span>Raffles &</span>
          <span>Giveaways</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
