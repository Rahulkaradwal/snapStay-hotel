import { Link } from "react-router-dom";

type Props = {
  slide: {
    img: string;
    title: string;
    description: string;
  };
};

const Card = ({ slide }: Props) => {
  return (
    <div className="card group relative z-[1] flex h-[400px] w-[280px] flex-col justify-end gap-[0.5em] overflow-hidden rounded-[1.5em] p-[1.5em]">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl opacity-70">
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:blur-sm"
          src={slide.img}
          alt="image"
        />
      </div>

      <div className="container relative z-[2] flex flex-col gap-[0.5em] text-black">
        <div className="h-fit w-full">
          <p className="text-2xl font-bold text-white">Room Name</p>

          <p className="text-md font-bold text-white">Discount</p>
        </div>

        <div className="flex h-fit w-fit items-center justify-center gap-[0.5em]">
          {["Luxury", "Relax", "Family"].map((tag) => (
            <div
              key={tag}
              className="font-nunito cursor-pointer rounded bg-golden-800 px-[0.5em] py-[0.05em] text-[1em] font-normal text-white duration-300 hover:bg-white hover:text-[#222222]"
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-nunito relative h-[0em] overflow-hidden font-light leading-[1.2em] text-white duration-500 group-hover:h-[7em]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          nesciunt sed. Voluptatibus sunt doloremque dolorum facere dignissimos
          rerum hic vitae architecto ut, nihil quas velit eveniet aliquid totam
          voluptate nulla.
          <br />
          <span className="absolute bottom-2">
            <Link
              className="z-50 rounded bg-golden-800 p-2 font-semibold text-white transition duration-500 hover:text-black"
              to="/booking"
            >
              See Details
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
