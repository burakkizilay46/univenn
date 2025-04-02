import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { sidebarBottomItems, sidebarItems } from "@/data/sidebar-items";
import avatar from "@/../public/images/png/avatar.png"

const Sidebar = () => {
  return (
    <div className="px-6 w-[290px] max-h-screen flex flex-col justify-between mb-[126px]">
      {/* Sidebar Header */}
      <div className="flex w-full h-[52px] border rounded-lg items-center px-4 justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-[#9600D7] size-8 rounded-lg"></div>
          <p className="font-medium text-base">Hrpanda</p>
        </div>
        <p className="rotate-90">{">"}</p>
      </div>

      {/* Sidebar Menu */}
      <div className="pt-6 flex flex-col gap-4 flex-1">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <img src={item.logopath} alt={item.title} className="size-6" />
            <p className="text-base font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Bottom Items */}
      <div className="pt-6 flex flex-col gap-4">
        {sidebarBottomItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <img src={item.logopath} alt={item.title} className="size-6" />
            <p className="text-base font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* User Profile Section */}
      <div className="border-t flex items-center gap-3 p-4 mt-4">
        <Avatar>
          <AvatarImage src={avatar} />
        </Avatar>
        <div>
          <p className="text-sm font-medium">Olivia Rhye</p>
          <p className="text-xs text-gray-500">oliviarhye@hrpanda.co</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
