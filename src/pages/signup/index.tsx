import { InputWithLabel } from "@/shared/components/input-with-label";
import { Navbar } from "@/shared/components/navbar";
import { Button } from "@/shared/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupSchema } from "./schemas/signup-schema";
import { SignupDTO } from "./dtos/signup-dto";
import { useSignup } from "./hooks/use-signup";
import { Loader2Icon } from "lucide-react";

export function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDTO>({
    resolver: zodResolver(signupSchema),
  });
  const { mutateAsync, isPending } = useSignup();

  const onSubmit: SubmitHandler<SignupDTO> = async (data) => {
    await mutateAsync(data);
  };

  return (
    <>
      <Navbar hasAside={false} />
      <main className="flex w-screen h-screen justify-center items-center">
        <form
          className="flex-1 max-w-80 space-x-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center space-x-2">
            <h1 className="fluid-2xl font-semibold">Welcome to </h1>
            <h1 className="text-green-600 fluid-2xl font-semibold">Grilo</h1>
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
              placeholder="name"
              type="text"
              name="name"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div>
            <InputWithLabel
              register={register}
              placeholder="password"
              type="password"
              name="password"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <div>
            <InputWithLabel
              register={register}
              placeholder="passwordConfirmation"
              type="password"
              name="passwordConfirmation"
            />
            {errors.passwordConfirmation && (
              <span className="text-red-600">
                {errors.passwordConfirmation.message}
              </span>
            )}
          </div>
          <div>
            <Button type="submit" className="w-full mt-4">
              {isPending && (
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              )}{" "}
              Submit
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
