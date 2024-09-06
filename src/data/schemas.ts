import { z } from "zod";

export const feedbackSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(1, {
    message:
      "The feedback Message cannot be empty. It's a form for your feedback .. duh",
  }),
});

export type Feedback = z.infer<typeof feedbackSchema>;
