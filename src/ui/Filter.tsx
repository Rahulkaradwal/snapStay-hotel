import { useSearchParams } from "react-router-dom";

type FilterProps = {
  filterField: string;
  options: { value: string; option: string }[];
};

const ButtonClass = "bg-golden-800 text-black";

function Filter({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  const handleClick = (value: string) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-lightDark flex gap-1 rounded-md shadow-lg">
      {options.map((option) => (
        <button
          className={`m-1 rounded-md p-1 px-2 transition-all duration-300 hover:bg-golden-800 hover:text-black ${
            option.value === currentFilter ? ButtonClass : ""
          }`}
          onClick={() => handleClick(option.value)}
          key={option.value}
        >
          {option.option}
        </button>
      ))}
    </div>
  );
}

export default Filter;
