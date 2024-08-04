// components/CheckoutForm.tsx
import { useForm, zodResolver } from "@mantine/form";
import { checkoutSchema, CheckoutData } from "../schemas/checkoutSchema";
import { TextInput, Button } from "@mantine/core";
import { useCartStore } from "../store/cartStore";

const CheckoutForm: React.FC = () => {
  const form = useForm<CheckoutData>({
    initialValues: {
      name: "",
      address: "",
      city: "",
      postalCode: "",
    },
    validate: zodResolver(checkoutSchema),
  });

  const { items } = useCartStore();

  const handleSubmit = (values: CheckoutData) => {
    console.log("Checkout data:", values);
    console.log("Cart items:", items);
    // Implement actual checkout process here
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput label="Name" {...form.getInputProps("name")} />
      <TextInput label="Address" {...form.getInputProps("address")} />
      <TextInput label="City" {...form.getInputProps("city")} />
      <TextInput label="Postal Code" {...form.getInputProps("postalCode")} />
      <Button type="submit">Checkout</Button>
    </form>
  );
};

export default CheckoutForm;
