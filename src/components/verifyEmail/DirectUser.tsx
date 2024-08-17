import { Link } from "react-router-dom";

type Props = {
  message: string;
  link: string;
  name: string;
};

function DirectUser({ message, link, name }: Props) {
  return (
    <div className="z-30 flex flex-col items-center gap-6 p-10">
      <h1 className="text-white md:text-2xl md:font-bold">{message}</h1>
      <Link
        to={`/${link}`}
        className="rounded-md bg-golden-800 px-4 py-2 text-white md:text-2xl md:font-bold"
      >
        {name}
      </Link>
    </div>
  );
}

export default DirectUser;
