import ArcadeIcon from "@/components/icon/ArcadeIcon";
import AdvancedIcon from "@/components/icon/AdvancedIcon";
import ProIcon from "@/components/icon/ProIcon";
export const plans = [
  {
    id: 1,
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    icon: ArcadeIcon,
  },
  {
    id: 2,
    name: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    icon: AdvancedIcon,
  },
  {
    id: 3,
    name: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    icon: ProIcon,
  },
];
