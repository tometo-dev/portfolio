import aptus from "@/assets/company/aptus.png";
import fletch from "@/assets/company/fletch.png";
import ik from "@/assets/company/ik.svg";
import paytm from "@/assets/company/paytm.png";

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Aptus Data Labs",
    icon: aptus,
    iconBg: "#ffffff",
    date: "July 2019 - August 2021",
    points: ["TBD"],
  },
  {
    title: "Software Engineer, Frontend",
    company_name: "Paytm",
    icon: paytm,
    iconBg: "#FBEAFF",
    date: "August 2021 - November 2021",
    points: ["TBD"],
  },
  {
    title: "Full Stack Developer",
    company_name: "Interview Kickstart",
    icon: ik,
    iconBg: "#ffffff",
    date: "November 2021 - November 2022",
    points: ["TBD"],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Fletch",
    icon: fletch,
    iconBg: "#B39CD0",
    date: "Jan 2023 - Present",
    points: ["TBD"],
  },
];

export type Experiences = typeof experiences;
