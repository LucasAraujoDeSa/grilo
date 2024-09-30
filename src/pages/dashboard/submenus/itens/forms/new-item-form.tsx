import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { newItemFormSchema } from "../schemas/new-item-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewItemDTO } from "../dtos/new-item-dto";
import { toast } from "react-toastify";
import { createItem } from "../services/item-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function NewItemFormDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewItemDTO>({
    resolver: zodResolver(newItemFormSchema),
  });
  const query = useQueryClient();

  const mutation = useMutation({
    mutationFn: createItem,
    mutationKey: ["itens"],
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["itens"] });
    },
  });

  const onSubmit: SubmitHandler<NewItemDTO> = async (data) => {
    mutation.mutate(data);
    toast.success("Item saved successfully");
    reset();
    setOpen(false);
  };
  const onCancel = () => {
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600">Add</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New item</DialogTitle>
        </DialogHeader>
        <div>
          <form>
            <div className="my-4">
              <Input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600">{errors.title.message}</span>
              )}
            </div>
            <div className="my-4">
              <Input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-600">{errors.price.message}</span>
              )}
            </div>
            <div className="my-4">
              <Input
                type="number"
                placeholder="Quantity"
                {...register("quantity", { required: true })}
              />
              {errors.quantity && (
                <span className="text-red-600">{errors.quantity.message}</span>
              )}
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button className="bg-gray-400 my-1" onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 my-1"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
