const Header = () => {
  return (
    <div className="grid grid-cols-3 p-6">
      <div className="flex flex-row gap-2.5 items-center">
        <div className="bg-[#F38BA8] rounded-[100%] w-4 h-4" />
        <div className="bg-[#A6E3A1] rounded-[100%] w-4 h-4" />
        <div className="bg-[#89B4FA] rounded-[100%] w-4 h-4" />
      </div>
      <span className="text-[#FFFFFF73] font-[DM_Mono] text-xl text-center">
        ./pandev
      </span>
    </div>
  );
};

export default Header;
