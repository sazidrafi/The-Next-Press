import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center">
      <Image
        src={logo}
        alt="logo"
        width={300}
        height={200}
        className="mx-auto"
      />
      <p className="text-gray-400">Journalism without fear or favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
