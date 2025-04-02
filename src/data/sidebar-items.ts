type SidebarItemType = {
  logopath: string;
  title: string;
};

export const sidebarItems: SidebarItemType[] = [
  {
    logopath: "@/../public/images/svg/overview.svg",
    title: "Overview",
  },
  {
    logopath: "@/../public/images/svg/jobs.svg",
    title: "Jobs",
  },
  {
    logopath: "@/../public/images/svg/talent-pool.svg",
    title: "Talent Pool",
  },
  {
    logopath: "@/../public/images/svg/inbox.svg",
    title: "Inbox",
  },
];

export const sidebarBottomItems: SidebarItemType[] = [
  {
    logopath: "@/../public/images/svg/support.svg",
    title: "Support",
  },
  {
    logopath: "@/../public/images/svg/settings.svg",
    title: "Settings",
  },
];
