import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbRefresh } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
const serviceData = [
  {
    icon: <MdOutlineLocalShipping size={18} />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon:  <TbRefresh size={18} />,
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <GiPayMoney size={18} />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon:<AiOutlineDollarCircle  size={18}/>,
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

export default serviceData;
