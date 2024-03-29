import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "Splitty",
      desc: "A crypto splitting app that calculates your percentage of the bill and sends a SMS message using Twilio to pay and gives an NFT of the receipt",
      link: "/cover/splitty.png",
      site: "https://la-hacks-2022.vercel.app/",
    },
    {
      name: "Dapper",
      desc: "Meta-NFT handshake collectibles based on Ethereum that provides iconic handshakes from the web available to mint",
      link: "/cover/dapper.png",
      site: "https://dappr-fs.vercel.app/",
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
