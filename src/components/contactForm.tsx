import { Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// Optional: If you're using a custom Field component from shadcn/ui or similar
import { Field } from "@chakra-ui/react"; // Replace or remove if this isn't valid in your setup

interface FormValues {
  firstName: string;
  lastName: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>name</Field.Label>
          <Input {...register("firstName", { required: "First name is required" })} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>e-mail</Field.Label>
          <Input {...register("lastName", { required: "Last name is required" })} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>message</Field.Label>
          <Input {...register("lastName", { required: "Last name is required" })} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Send Message</Button>
      </Stack>
    </form>
  );
}
