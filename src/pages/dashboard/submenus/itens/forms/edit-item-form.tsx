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
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { updateItem } from "../services/item-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditItemDTO } from "../dtos/edit-item-dto";
import { editItemFormSchema } from "../schemas/edit-item-schema";
import { Item } from "@/@types/item";
import { useState } from "react";

type EditItemFormDialogProps = {
  item: Item;
};

export function EditItemFormDialog({ item }: EditItemFormDialogProps) {
  const [open, setOpen] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditItemDTO>({
    resolver: zodResolver(editItemFormSchema),
    mode: "onChange",
    defaultValues: {
      id: item.id.toString(),
      price: item.price,
      quantity: item.quantity,
      title: item.title,
    },
  });
  const query = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateItem,
    mutationKey: ["itens"],
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["itens"] });
    },
  });

  const onSubmit: SubmitHandler<EditItemDTO> = async (data) => {
    mutation.mutate({ ...data, id: item.id.toString() });
    toast.success("Item updated successfully");
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
        <p className="cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          Edit
        </p>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit item</DialogTitle>
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
