import React from "react";

type inputType = "checkbox" | "textArea" | "input";

type FormValues = {
  startDate: string;
  endDate: string;
  numGuests: number;
  breakfast: boolean;
  observations: string;
};

type Props = {
  name: string;
  formValues: FormValues;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  inputType: inputType;
};

const FormInput = ({
  inputType,
  name,
  formValues,
  handleInputChange,
}: Props) => {
  if (inputType === "checkbox") {
    return (
      <label className="block text-golden-800">
        <input
          name={name}
          type="checkbox"
          checked={formValues.breakfast}
          onChange={handleInputChange}
          className="mr-4 cursor-pointer bg-ligthDark p-2 checked:bg-golden-800 focus:outline-golden-800"
        />
        Add Breakfast
      </label>
    );
  }

  if (inputType === "textArea") {
    return (
      <textarea
        name={name}
        value={formValues.observations}
        onChange={handleInputChange}
        placeholder="Add Observations"
        className="border-none bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
    );
  }

  if (inputType === "input") {
    return (
      <input
        name={name}
        type="number"
        value={formValues.numGuests}
        onChange={handleInputChange}
        placeholder="Number of Guests"
        className="relative mr-4 w-full bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
    );
  }

  return null;
};

export default FormInput;
