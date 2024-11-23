import { InputWithLabel } from "@/shared/components/input-with-label";
import { Navbar } from "@/shared/components/navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupDTO } from "../signup/dtos/signup-dto";
import { signinSchema } from "./schemas/signin-schema";
import { Button } from "@/shared/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { SigninDTO } from "./dtos/signin-dto";
import { useSignin } from "./hooks/use-signin";
import { revogateAccess } from "@/shared/functions/revogate-access";

export function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDTO>({
    resolver: zodResolver(signinSchema),
  });
  const { mutateAsync, isPending } = useSignin();

  const onSubmit: SubmitHandler<SigninDTO> = async (data) => {
    revogateAccess();
    await mutateAsync(data);
  };

  return (
    <>
      <Navbar hasAside={false} />
      <main className="flex justify-center items-center w-screen h-screen">
        <form
          className="flex-1 max-w-80 space-x-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center space-x-2">
            <h1 className="fluid-2xl font-semibold">Welcome </h1>
            <h1 className="text-green-600 fluid-2xl font-semibold">Back</h1>
          </div>
          <div>
            <InputWithLabel
              register={register}
              placeholder="email"
              type="email"
              name="email"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div>
            <InputWithLabel
              register={register}
              placeholder="password"
              type="password"
              name="password"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div>
            <Button type="submit" className="w-full mt-4">
              {isPending && (
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              )}{" "}
              Submit
            </Button>

            <div className="mt-2">
              <span>
                <a href="/signup">Create account</a>
              </span>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
