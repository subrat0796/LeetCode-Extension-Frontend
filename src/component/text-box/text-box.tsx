import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// Todo - Check why error part is not marked in code ?

const TextBox = ({
  stylesFormControl,
  stylesFormLabel,
  stylesInput,
  typeInput,
  formName,
  value,
  onChange,
  isError,
  errorText,
}: {
  stylesFormControl: string;
  stylesFormLabel: string;
  stylesInput: string;
  typeInput: string;
  formName: string;
  value: string;
  onChange: any;
  isError: any;
  errorText: any;
}) => {
  return (
    <FormControl className={stylesFormControl}>
      <FormLabel className={stylesFormLabel}>{formName}</FormLabel>
      <Input
        type={typeInput}
        className={stylesInput}
        value={value}
        onChange={onChange}
      />

      {isError && (
        <FormHelperText
          __css={{
            textColor: "red",
          }}
          className="text-sm"
        >
          {errorText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextBox;
