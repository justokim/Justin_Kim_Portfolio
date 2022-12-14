import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {
  return (
    <div className="h-20  bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 fixed flex items-center justify-between mx-auto w-full shadow-xl z-10">
      <div className="flex  items-center gap-4 h-full justify-start pl-24 text-white ">
        <div className="relative w-16 h-16">
          <Link passHref={true} href="/">
            <Image
              src="/../public/people/busto.jfif"
              alt="justin kim"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </Link>
        </div>
        <Link passHref={true} href="/">
          <a className="font-semibold text-2xl"> Justin Kim</a>
        </Link>
      </div>
      <div className="flex  items-center gap-6 h-full justify-end pr-24 space-x-5 text-white">
        <Link passHref={true} href="/">
          <a className="flex items-center h-full hover:font-medium  hover:border-b-2 transition ease-in-out duration-200  ">
            Home
          </a>
        </Link>
        {/* <a className="flex items-center h-full hover:font-medium  hover:border-b-2 transition ease-in-out duration-200">
          Projects
        </a> */}
        <a
          className="flex items-center h-full hover:font-medium  hover:border-b-2 transition ease-in-out duration-200"
          href="https://docs.google.com/document/d/1vZ4b3zLn4J_s2EN8nzMZzOCzhmjWCJzl8-6Dig-6kfs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
export default Navbar;
