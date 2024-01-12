import * as m from 'zod';

export const UserValidation = m.object({
    profile_photo: m.string().url().nonempty(),
    name: m
        .string()
        .min(3, { message: "Minimum 3 characters." })
        .max(30, { message: "Maximum 30 caracters." }),
    username: m
        .string()
        .min(3, { message: "Minimum 3 characters." })
        .max(30, { message: "Maximum 30 caracters." }),
    bio: m
        .string()
        .min(3, { message: "Minimum 3 characters." })
        .max(1000, { message: "Maximum 1000 caracters." }),
})