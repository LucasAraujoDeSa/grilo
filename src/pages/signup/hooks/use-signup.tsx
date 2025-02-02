import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/signup-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "@/shared/services/api";
import { ensureAccess } from "@/shared/functions/ensure-access";

export function useSignup() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signup,
    mutationKey: ["account"],
    onSuccess: (result) => {
      toast.dismiss();
      if (result.isSuccess) {
        const firstName = result.content.name.split(" ")[0];
        ensureAccess({
          accessToken: result.content.accessToken,
          refreshToken: result.content.refreshToken,
          username: firstName,
        });
        toast.success(result.message);
        api.defaults.headers.Authorization = `Bearer ${result.content.accessToken}`;
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
