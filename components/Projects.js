import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Dapper",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lacus sed viverra tellus in. Bibendum at varius vel pharetra velturpis nunc eget. Risus pretium quam vulputate dignissimsuspendisse in est. Sed id semper risus in. Dignissim",
      link: "/../public/cover/dapper.png",
      site: "https://dappr-fs.vercel.app/",
    },
    {
      name: "Splitty",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lacus sed viverra tellus in. Bibendum at varius vel pharetra velturpis nunc eget. Risus pretium quam vulputate dignissimsuspendisse in est. Sed id semper risus in. Dignissim",
      link: "/../public/cover/splitty.png",
      site: "https://la-hacks-2022.vercel.app/",
    },
    {
      name: "Inspired Earth",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lacus sed viverra tellus in. Bibendum at varius vel pharetra velturpis nunc eget. Risus pretium quam vulputate dignissimsuspendisse in est. Sed id semper risus in. Dignissim",
      link: "/../public/cover/inspired.png",
      site: "inspired.earth/",
    },
    {
      name: "Lexicode",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lacus sed viverra tellus in. Bibendum at varius vel pharetra velturpis nunc eget. Risus pretium quam vulputate dignissimsuspendisse in est. Sed id semper risus in. Dignissim",
      link: "/../public/cover/lexicode.png",
      site: "lexicode.org",
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
                alt="dapper"
                width={550}
                height={300}
                className="rounded-lg"
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
