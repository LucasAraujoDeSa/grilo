import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditItemDTO } from "../dtos/edit-item-dto";
import { editItemFormSchema } from "../schemas/edit-item-schema";
import { Item } from "@/@types/item";
import { useState } from "react";
import { useEditItem } from "../hooks/use-edit-item";
import { Loader2Icon } from "lucide-react";

type EditItemFormDialogProps = {
  item: Item;
};

export function EditItemFormDialog({ item }: EditItemFormDialogProps) {
  const [open, setOpen] = useState<boolean>();
  const { mutateAsync, isPending } = useEditItem();
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

  const onSubmit: SubmitHandler<EditItemDTO> = async (data) => {
    console.log(isPending);
    await mutateAsync({ ...data, id: item.id.toString() });
    reset();
    setTimeout(() => {}, 100000000);
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
            className="my-1"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {isPending && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}{" "}
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
