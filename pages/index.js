import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";
import Projects from "../components/Projects";

export default function Home() {
  const courseRef = useRef(null);
  const scrollToCourse = () =>
    courseRef.current.scrollIntoView({ behavior: "smooth" });
  const courseRef1 = useRef(null);
  const scrollToCourse1 = () =>
    courseRef1.current.scrollIntoView({ behavior: "smooth" });
  const courseRef2 = useRef(null);
  const scrollToCourse2 = () =>
    courseRef2.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="  min-w-full flex-grow   w-full bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800">
        <div className="h-20  bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 fixed flex items-center justify-between mx-auto w-full shadow-xl z-10">
          <div className="flex  items-center gap-4 h-full justify-start pl-24 text-white ">
            <div
              onClick={scrollToCourse2}
              className=" cursor-pointer relative w-16 h-16"
            >
              <Image
                src="/../public/people/busto.jfif"
                alt="justin kim"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>

            <a
              onClick={scrollToCourse2}
              className="font-semibold text-2xl cursor-pointer"
            >
              Justin Kim
            </a>
          </div>
          <div className="flex  items-center gap-6 h-full justify-end pr-24 space-x-5 text-white">
            <a
              onClick={scrollToCourse}
              className="flex cursor-pointer items-center h-full hover:font-medium  hover:border-b-2 transition duration-500 ease-in-out  "
            >
              About Me
            </a>
            <a
              onClick={scrollToCourse1}
              className="flex cursor-pointer items-center h-full hover:font-medium  hover:border-b-2 transition ease-in-out duration-200"
            >
              Projects
            </a>
            <a className="flex items-center h-full hover:font-medium  hover:border-b-2 transition ease-in-out duration-200">
              Resume
            </a>
          </div>
        </div>
        <section
          ref={courseRef2}
          className="min-h-screen w-full mx-auto  pt-40   "
        >
          {" "}
          <div className="text-8xl font-mono text-white text-center pt-20 uppercase  ">
            <a> Hi I&apos;m Justin Kim</a>
          </div>
          <div className="pt-20  text-white  text-2xl font-mono text-center">
            I am a Front End Developer Pursuing a Bachelors Degree in Computer
            Science at Santa Clara Univerity.
          </div>
          <div className="flex gap-4 justify-center items-center text-white mt-10">
            <Link passHref href="https://github.com/justokim">
              <a>
                {" "}
                <FaGithub className=" text-slate-800 w-8 h-8 hover:w-10 hover:h-10 duration-150 ease-in" />
              </a>
            </Link>
            <Link
              passHref
              href="https://www.linkedin.com/in/justin-kim-0314a7197/"
            >
              <a>
                <FaLinkedinIn className="w-8 h-8 text-slate-800  duration-150 ease-in hover:w-10 hover:h-10 " />
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 gap-2 text-white text-xl">
            <a className="font-mono text-2xl">Learn More</a>
            <BsArrowDownCircle className="mt-1 animate-bounce z-0 w-8 h-8 " />
          </div>
        </section>
        <section className="min-h-screen">
          <div className="mx-auto w-full h-full font-mono">
            <a
              ref={courseRef}
              className=" ml-24 text-7xl font-mono text-white border-b-2 "
            >
              About Me
            </a>
            <div className="grid grid-cols-2 mt-20">
              <div className="pl-24 text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus sed viverra tellus in. Bibendum at varius vel pharetra vel
                turpis nunc eget. Risus pretium quam vulputate dignissim
                suspendisse in est. Sed id semper risus in. Dignissim
                suspendisse in est ante in nibh mauris cursus. Urna et pharetra
                pharetra massa massa. Maecenas pharetra convallis posuere morbi
                leo urna. Ultricies integer quis auctor elit. Lacus viverra
                vitae congue eu consequat ac felis. Tristique senectus et netus
                et malesuada fames ac turpis. Aliquam sem et tortor consequat id
                porta nibh venenatis cras. Elit ut aliquam purus sit amet luctus
                venenatis lectus magna. At augue eget arcu dictum varius duis
                at. Est sit amet facilisis magna etiam. Pellentesque diam
                volutpat commodo sed egestas egestas fringilla phasellus
                faucibus. Cras tincidunt lobortis feugiat vivamus at augue eget.
              </div>
              <div className="">
                <Image
                  src="/../public/people/justo.jpg"
                  alt="picture"
                  objectFit="contain"
                  height={500}
                  width={700}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="mx-auto w-full h-full font-mono">
            <a
              ref={courseRef1}
              className=" ml-24 text-7xl font-mono text-white border-b-2 "
            >
              Projects
            </a>
            <Projects />
          </div>
        </section>
        <section className="max-h-full py-24">
          <div className="text-xl text-center text-white font-mono">
            Any Questions? Contact me at
          </div>
          <div className="text-2xl text-center text-blue-500 underline font-mono pt-2">
            <a href="mailto:justinkim707@gmail.com" className="cursor-pointer">
              justinkim707@gmail.com
            </a>
          </div>
          <div className="flex gap-4 justify-center items-center text-white mt-10">
            <Link passHref href="https://github.com/justokim">
              <a>
                {" "}
                <FaGithub className=" text-slate-800 w-8 h-8 hover:w-10 hover:h-10 duration-150 ease-in" />
              </a>
            </Link>
            <Link
              passHref
              href="https://www.linkedin.com/in/justin-kim-0314a7197/"
            >
              <a>
                <FaLinkedinIn className="w-8 h-8 text-slate-800  duration-150 ease-in hover:w-10 hover:h-10 " />
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
