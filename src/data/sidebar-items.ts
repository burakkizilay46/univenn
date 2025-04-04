type SidebarItemType = {
  logopath: string;
  title: string;
};

export const sidebarItems: SidebarItemType[] = [
  {
    logopath: "@/assets/images/svg/overview.svg",
    title: "Overview",
  },
  {
    logopath: "@/assets/public/images/svg/jobs.svg",
    title: "Jobs",
  },
  {
    logopath: "@/assets/public/images/svg/talent-pool.svg",
    title: "Talent Pool",
  },
  {
    logopath: "@/assets/public/images/svg/inbox.svg",
    title: "Inbox",
  },
];

export const sidebarBottomItems: SidebarItemType[] = [
  {
    logopath: "@/assets/public/images/svg/support.svg",
    title: "Support",
  },
  {
    logopath: "@/assets/public/images/svg/settings.svg",
    title: "Settings",
  },
];
