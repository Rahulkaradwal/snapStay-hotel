import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex gap-1 rounded-md bg-ligthDark shadow-lg">
      {options.map((option) => (
        <button
          className="m-1 rounded-md p-1 px-2 transition-all duration-300 hover:bg-golden-800 hover:text-black"
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={(option.value == currentFilter).toString()}
        >
          {option.option}
        </button>
      ))}
    </div>
  );
}

export default Filter;
