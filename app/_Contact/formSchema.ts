import { email, object, string } from "zod";

const formSchema = object({
  name: string({ error: "Name is required" })
    .min(1, "Name is required")
    .max(20, "Name must be less than 20 characters"),
  email: email({ error: "Email is required" }).min(
    4,
    "A valid email is required"
  ),
  subject: string().optional,
  message: string({ error: "Message should be at least 10 characters" }).min(
    10,
    "Message should be at least 10 characters"
  ),
});

export default formSchema;
