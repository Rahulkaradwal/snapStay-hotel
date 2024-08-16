type selectProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
function Select({ options, value, onChange }: selectProps) {
  return (
    <select
      className="min-w-80 rounded-md border-none bg-ligthDark p-2 outline-none placeholder:text-slate-50/45 focus:outline-none"
      value={value}
      //   {...props}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
