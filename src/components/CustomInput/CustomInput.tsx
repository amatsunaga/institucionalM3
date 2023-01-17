import React from "react";
import { useField } from "formik";
import InputMask from "react-input-mask";

interface InputProps {
  mask?: string;
  id: string;
  name: string;
  placeholder: string;
}

const CustomInput = (props: InputProps) => {
  const { mask } = props;
  const [field] = useField(props);

  return (
    <>
      <InputMask mask={mask!} {...field} />
    </>
  );
};

export { CustomInput };
