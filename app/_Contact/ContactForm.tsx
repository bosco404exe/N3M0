"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import formSchema from "./formSchema";
import FormField from "./FormField";

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = () => {
    console.log("Form submitted");
  };

  //   const fields = [
  //     { label: "NAME", name: "name", type: "text", placeholder: "Your name" },
  //     {
  //       label: "EMAIL",
  //       name: "email",
  //       type: "email",
  //       placeholder: "your@email.com",
  //     },
  //     {
  //       label: "SUBJECT",
  //       name: "subject",
  //       type: "text",
  //       placeholder: "Project inquiry",
  //     },
  //     {
  //       label: "MESSAGE",
  //       name: "message",
  //       textarea: true,
  //       placeholder: "Tell me about your project...",
  //     },
  //   ] as const;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <FormField
          label="NAME"
          name="name"
          placeholder="Your name"
          register={register}
        />
        <FormField
          label="EMAIL"
          name="email"
          type="email"
          placeholder="your@email.com"
          register={register}
        />
      </div>

      <FormField
        label="SUBJECT"
        name="subject"
        placeholder="Project inquiry"
        register={register}
      />
      <FormField
        label="MESSAGE"
        name="message"
        placeholder="Tell me about your project..."
        textarea
        register={register}
      />

      <button
        type="submit"
        className="rounded-2xl flex w-full items-center justify-center gap-2 border border-gray-300 px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-gray-50 sm:px-6 sm:py-3 sm:text-sm"
      >
        <Send className="h-4 w-4" />
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
