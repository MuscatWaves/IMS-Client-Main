import { MdWorkOutline } from "react-icons/md";

export const dashboardOperationOptions = [
  {
    id: 1,
    icon: MdWorkOutline,
    title: "Recruitment",
    path: "https://ims-recruitment.netlify.app/client",
    description: "Application for Recruitment Division",
  },
  {
    id: 2,
    icon: MdWorkOutline,
    title: "Accounting",
    path: "https://ims-accounting.netlify.app/client",
    description: "Application for Recruitment Division",
  },
];

export const dashboardSupportOptions = [
  {
    id: 1,
    icon: MdWorkOutline,
    title: "Support test",
    path: "loginSelection/recruitment/1",
    description: "Application for Recruitment Division",
    users: [],
  },
];

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  show: {
    opacity: 1,
    y: "0px",
    delay: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 9,
    },
  },
};
