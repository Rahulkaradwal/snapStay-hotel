type Props = {
  type: string;
  // value: string;
  label: string;
  register: any;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput = ({ register, type, label }: Props) => {
  return (
    <div>
      <label className="block text-golden-800">{label}</label>
      <input
        required
        {...register}
        type={type}
        // value={value}
        // onChange={onChange}
        className="mt-1 block w-full cursor-pointer border-none bg-ligthDark p-2 text-slate-50/45 shadow-sm focus:outline-none focus:ring-golden-500"
      />
    </div>
  );
};

export default DateInput;
