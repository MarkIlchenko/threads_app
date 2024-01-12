import * as m from "zod";

export const ThreadValidation = m.object({
  thread: m.string().nonempty().min(3, { message: "Minimum 3 characters." }),
  accountId: m.string(),
});

export const CommentValidation = m.object({
  thread: m.string().nonempty().min(3, { message: "Minimum 3 characters." }),
});