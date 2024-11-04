import InputField from "@/components/shared/input-field";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const useAddDialog = ({ onConfirm = () => {}, title = "Add Items" ,fields}) => {
  const [args, setArgs] = useState(null);
  const handleOpen = (...params) => {
    setArgs([...params]);
  };
  const { register, handleSubmit, formState: { errors } } = useForm(); // Corrected hook usage
  

  const dialog = (
    <Dialog>
      <DialogTrigger asChild className="mt-[93px]">
        <div className="flex justify-end items-center ">
          <Button
            variant="outline"
            className="rounded-full bg-primary text-[#fff] h-[39px] w-[39px] flex justify-center"
          >
            <Plus size={32} />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-primary text-lg font-medium">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 pt-[35px] pb-[29px]">
          {fields.map((field) => (
            <div className="grid grid-cols-1 items-center gap-4" key={field}>
              <InputField
                name={field.name}
                type={field.type}
                id={field.id}
                label={field.label}
                placeholder={field.placeholder}
                
              />
            </div>
          ))} 
        </div>
        <DialogFooter className="flex items-center justify-between gap-6 md:gap-[60px] ">
          <DialogClose asChild>
            <Button className={"cancel-button w-full"} variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            className={"confirm-button w-full"}
            type="submit"
            onClick={() => {
              onConfirm(...args);
            }}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  return [handleOpen, dialog];
};
