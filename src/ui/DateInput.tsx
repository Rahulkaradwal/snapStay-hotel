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
        className="bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
    </div>
  );
};

export default DateInput;
