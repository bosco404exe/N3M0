import z from "zod";
import formSchema from "./formSchema";
import { useForm } from "react-hook-form";

interface FieldProps {
  label: string;
  name: keyof z.infer<typeof formSchema>;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  register: ReturnType<typeof useForm<z.infer<typeof formSchema>>>["register"];
}

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  register,
}: FieldProps) => (
  <div>
    <label className="mb-2 block font-mono text-xs font-bold uppercase text-gray-700">
      {label}
    </label>
    {textarea ? (
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={4}
        className="resize-none w-full border rounded-2xl border-gray-300 px-3 py-2 font-mono text-xs placeholder-gray-400 focus:border-gray-400 focus:outline-none sm:px-4 sm:py-2 sm:text-sm sm:rows-6"
      />
    ) : (
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-xl border-gray-300 px-3 py-2 font-mono text-xs placeholder-gray-400 focus:border-gray-400 focus:outline-none sm:px-4 sm:py-2 sm:text-sm"
      />
    )}
  </div>
);

export default FormField;
