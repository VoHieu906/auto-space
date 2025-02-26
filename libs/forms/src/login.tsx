import { z } from "zod";
import { formSchemaLogin } from "./schemas";
import { useForm } from "react-hook-form";

export type FormTypeLogin = z.infer<typeof formSchemaLogin>;
