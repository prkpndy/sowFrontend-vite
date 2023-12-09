import {
  IconFileFilled,
  IconUser,
  IconSettings,
  IconBook,
  IconTag,
  IconFileDescription,
  IconReceiptTax,
  IconClipboardList,
  IconCloudUpload,
  IconLogout,
  IconCreditCard,
  IconCircleX,
} from "@tabler/icons-react";
import { NavLink as Link } from "react-router-dom";

import "./styles/menubar.css";
// import Logout from "./Logout";

const collections = [
  { emoji: <IconFileFilled color="#54cfff" />, label: "Invoices", link: "" },
  { emoji: <IconUser color="#28ffc1" />, label: "Customer", link: "client" },
  {
    emoji: <IconSettings color="#54cfff" />,
    label: "My Business",
    link: "server",
  },
  {
    emoji: <IconBook color="#5ae2ff" />,
    label: "Invoice Journal",
    link: "extra",
  },
  {
    emoji: <IconTag color="#ffb257" />,
    label: "Price List",
    link: "dashboard/pricelist",
  },
  {
    emoji: <IconFileDescription color="#54cfff" />,
    label: "Multiple Invoicing",
    link: "",
  },
  {
    emoji: <IconCircleX color="#ff4b97" />,
    label: "Unpaid Invoices",
    link: "",
  },
  { emoji: <IconReceiptTax color="#f7c90b" />, label: "Offer", link: "" },
  {
    emoji: <IconClipboardList color="#16ceff" />,
    label: "Inventory Control",
    link: "",
  },
  {
    emoji: <IconCreditCard color="#1b9aff" />,
    label: "Member Invoicing",
    link: "",
  },
  {
    emoji: <IconCloudUpload color="#82b1ff" />,
    label: "Import / Export",
    link: "",
  },
  {
    emoji: <IconLogout color="#16ceff" />,
    label: "Logout",
    link: "",
  },
];

// Component function to display the Menubar
// No Link will perform any function as it is just for testing
export default function MenuBar() {
  // List of everything to be displayed in the Menubar
  const collectionLink = collections.map((collection) => (
    <Link href={"/" + collection.link} key={collection.label} className="">
      <span
        className={
          "flex gap-3 hover:bg-[#ede7f6] rounded-lg duration-700 hover:text-[#7754bd] font-[300] mb-7 tracking-wide"
        }
      >
        {collection.emoji}
        <p className="text-sm mt-[0.7px] text-black">{collection.label}</p>
      </span>
    </Link>
  ));

  return (
    <aside className="shadow-md h-full sidebar">
      <h2 className="pt-10 text-center text-lg font-light text-black">Menu</h2>
      <div className="bg-[#80bee2] w-[80%] m-auto h-[1.5px]"></div>
      <div className="px-8 py-6">
        {collectionLink}
        {/* <Logout /> */}
      </div>
    </aside>
  );
}
