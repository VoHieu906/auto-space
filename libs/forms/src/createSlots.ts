import { z } from "zod";
import { formSchemaCreateSlot } from "./createGarage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export type FormTypeCreateManySlots = z.infer<typeof formSchemaCreateSlot>;

export const useFormCreateManySlots = () =>
  useForm<FormTypeCreateManySlots>({
    resolver: zodResolver(formSchemaCreateSlot),
  });
