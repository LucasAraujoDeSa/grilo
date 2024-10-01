import { UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type InputWithLabelProps = {
  type?: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
};

export function InputWithLabel({
  placeholder,
  type,
  name,
  register,
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
      <Label className="capitalize">{name}</Label>
      <Input
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
}
