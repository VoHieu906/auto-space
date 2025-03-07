"use client";
import { useFormLogin } from "@autospace/forms/src/login";
import { Form } from "../atoms/Form";
import { HtmlLabel } from "../atoms/HtmlLabel";
import { HtmlInput } from "../atoms/HtmlInput";
import { Button } from "../atoms/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export interface ILoginFormProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoginForm = ({ className }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin();
  console.log(errors);

  const { replace } = useRouter();
  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        const { email, password } = data;
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (result?.ok) {
          replace("/");
        }
        if (result?.error) {
          alert("Failed to login");
        }
      })}
    >
      <HtmlLabel error={errors.email?.message} title="Email">
        <HtmlInput {...register("email")} placeholder="email" />
      </HtmlLabel>
      <HtmlLabel error={errors.password?.message} title="Password">
        <HtmlInput
          {...register("password")}
          type="password"
          placeholder="******"
        />
      </HtmlLabel>
      <Button type="submit">Submit</Button>
      <div className="mt-4 text-sm">
        Do not have an autospace account?
        <br />
        <Link
          href="/register"
          className="font-bold underline underline-offset-4"
        >
          Create one
        </Link>{" "}
        now.
      </div>
    </Form>
  );
};
