import React from "react";

type Props = {
  htmlFor: string;
  children: React.ReactNode;
  errors?: string;
};

const InputDiv = ({ htmlFor, errors, children }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-sm text-slate-50">
        {errors}
      </label>
      {children}
    </div>
  );
};

export default InputDiv;
