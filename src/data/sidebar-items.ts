import overview from "@/assets/images/svg/overview.svg";
import jobs from "@/assets/images/svg/jobs.svg";
import talentPool from "@/assets/images/svg/talent-pool.svg";
import inbox from "@/assets/images/svg/inbox.svg";
import support from "@/assets/images/svg/support.svg";
import settings from "@/assets/images/svg/settings.svg";

type SidebarItemType = {
  logopath: string;
  title: string;
};

export const sidebarItems: SidebarItemType[] = [
  {
    logopath: overview,
    title: "Overview",
  },
  {
    logopath: jobs,
    title: "Jobs",
  },
  {
    logopath: talentPool,
    title: "Talent Pool",
  },
  {
    logopath: inbox,
    title: "Inbox",
  },
];

export const sidebarBottomItems: SidebarItemType[] = [
  {
    logopath:support,
    title: "Support",
  },
  {
    logopath: settings,
    title: "Settings",
  },
];
