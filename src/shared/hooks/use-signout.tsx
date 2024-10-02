import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signout } from "../services/signout-service";
import { revogateAccess } from "../functions/revogate-access";

export function useSignout() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signout,
    mutationKey: ["account"],
    onSuccess: (result) => {
      toast.dismiss();
      if (result.isSuccess) {
        revogateAccess();
        toast.success(result.message);
        navigate("/signin");
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
