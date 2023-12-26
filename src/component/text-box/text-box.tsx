import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const TextBox = ({
  stylesFormControl,
  stylesFormLabel,
  stylesInput,
  typeInput,
  formName,
}: {
  stylesFormControl: string;
  stylesFormLabel: string;
  stylesInput: string;
  typeInput: string;
  formName: string;
}) => {
  return (
    <FormControl className={stylesFormControl}>
      <FormLabel className={stylesFormLabel}>{formName}</FormLabel>
      <Input type={typeInput} className={stylesInput} />
    </FormControl>
  );
};

export default TextBox;
