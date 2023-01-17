import React from "react";
import { FieldHookConfig, useField } from "formik";
import InputMask from "react-input-mask";

interface InputProps {
  mask?: string;
  id: string;
  name: string;
  placeholder: string;
}

const CustomInput = (props: InputProps & (string | FieldHookConfig<any>)) => {
  const { mask, id, placeholder } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <InputMask mask={mask!} id={id} placeholder={placeholder} {...field} />
    </>
  );
};

export { CustomInput };
