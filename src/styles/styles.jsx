const classNames = {
  container: "container max-w-full h-screen bg-[#8886D9]",
  container_fill_relative: "w-full h-full relative",
  container_fill: "w-full h-full",
  container_fill_padding: "w-full h-full px-[5%]",
  container_fill_center: "w-full h-full flex items-center justify-center",
  container_fill_column_center: "w-full h-full flex flex-col items-center",
  container_fill_column_full_center:
    "w-full h-full flex flex-col items-center justify-center",
  container_fit_center: "w-fit h-fit flex items-center justify-center",
  container_fit_column_center: "w-fit h-fit flex flex-col items-center",
  button:
    "px-[3rem] py-[0.5rem] bg-[#D8D7FF] rounded-[2rem] cursor-pointer select-none w-fit h-fit text-center",
  button_light:
    "px-[2.3rem] py-[0.5rem] bg-[#D8D7FF]/[0.5] rounded cursor-pointer select-none w-fit h-fit text-center",
  mobile_display: "sm:flex md:hidden",
  desktop_display: "hidden md:block",
};

export default classNames;
