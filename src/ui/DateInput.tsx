import React from "react";

type Props = {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = ({ type, label, name, value, onChange }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-slate-50/45">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="md:text-md w-28 rounded-sm border-none bg-ligthDark p-2 text-xs outline-none placeholder:text-slate-50/45 focus:outline-none md:w-fit"
      />
    </div>
  );
};

export default DateInput;
