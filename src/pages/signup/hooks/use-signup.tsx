import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/signup-service";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signup,
    mutationKey: ["account"],
    onSuccess: (result) => {
      toast.dismiss();
      if (result.isSuccess) {
        const firstName = result.content.name.split(" ")[0];
        Cookies.set("@username", `${firstName}`);
        toast.success(result.message);
        navigate("/dashboard");
      } else {
        toast.error(result.message);
      }
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message);
    },
  });

  return mutation;
}
