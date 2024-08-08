import { useSearchParams } from "react-router-dom";
import Select from "./Select";

type SortByProps = {
  options: { value: string; label: string }[];
};

function SortBy({ options }: SortByProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sortBy", e.target.value);
    setSearchParams(newSearchParams);
  };

  return <Select value={sortBy} options={options} onChange={handleChange} />;
}

export default SortBy;
