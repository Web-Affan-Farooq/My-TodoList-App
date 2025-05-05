import z from "zod";

const LoginFormSchema = z.object({
    userName:z.string({message:"Incorrect username"}).min(14, "Enter atleast 14 characters").max(14, "Too long"),
    password: z.string({ message: "Please enter password wisely" }).min(11).max(11).regex(/^(?=(.*[0-9]){3,})(?=(.*[a-z]){5,}).{11,}$/
        , "Password doesn't match the correct format"),
}).strict();

export default LoginFormSchema;