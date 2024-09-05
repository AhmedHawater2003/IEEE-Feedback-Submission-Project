import { z } from "zod";
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(1, {
    message:
      "The feedback Message cannot be empty. It's a form for your feedback .. duh",
  }),
});

export const tableSchema = formSchema.extend({
  id: z.number(),
});

export type Feedback = z.infer<typeof formSchema>;
export type TableData = z.infer<typeof tableSchema>;
