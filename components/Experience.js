import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Vo2",
      desc: "A blockchain based platform that allows for athlete monetization through tokens for exclusive and engaged fans",
      link: "/cover/vo2.png",
      site: "https://www.vo2.fans/",
    },
    {
      name: "Inspired Earth",
      desc: "An E-commerce site that has full functionality using, HTML,CSS, JS, PHP, and Stripe API to buy products ",
      link: "/cover/inspired.png",
      site: "https://inspired.earth/",
    },

    {
      name: "Lexicode",
      desc: "A coding academy website using the MERN stack where students can learn to code through a variety of topics and track assignments",
      link: "/cover/lexicode.png",
      site: "https://lexicode.org",
    },
  ];
  return (
    <div className="mx-24 mt-20">
      <div className="grid grid-cols-3 gap-8  place-content-center place-items-center ">
        {projects.map((item) => (
          <div key={item.key} className="col-span-1">
            <div className="text-3xl text-white uppercase text-center mb-8 ">
              <a className="border-b-2 tracking-wide">{item.name}</a>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-xl  ">
              <Image
                src={item.link}
                alt={item.name}
                width={550}
                height={300}
                className="rounded-lg "
              />

              <div className="text-slate-400 text-center">{item.desc}</div>
              <Link passHref href={item.site}>
                <a
                  target="_blank"
                  className="text-blue-500 text-lg font-mono p-1 font-medium underline justify-center items-center flex mt-4"
                >
                  Check out the website here
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
