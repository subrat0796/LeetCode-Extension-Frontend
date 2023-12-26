import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import LeftComponent from "@/component/left-component/left-component";
import TextBox from "@/component/text-box/text-box";

const page = () => {
  return (
    <Box width="100%" height={"100vh"} display={"flex"}>
      <LeftComponent />
      <Box
        width={"50%"}
        height={"100%"}
        padding={"50px"}
        mx={"10px"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Box width={"75%"}>
          <Text fontSize={"xx-large"} fontWeight={"bold"} marginBottom={"20px"}>
            Login Account
          </Text>

          <TextBox
            formName="Email Address"
            stylesFormControl="mb-2"
            stylesFormLabel="font-semibold text-sm"
            stylesInput="rounded-md bg-gray-200 border h-10 w-full p-2 hover:bg-transparent focus:bg-transparent"
            typeInput="email"
          />
          <TextBox
            formName="Password"
            stylesFormControl="mb-2"
            stylesFormLabel="font-semibold text-sm"
            stylesInput="rounded-md bg-gray-200 border h-10 w-full p-2 hover:bg-transparent focus:bg-transparent"
            typeInput="password"
          />
          <Button
            backgroundColor={"#678CAC"}
            padding={"10px"}
            width={"100%"}
            className="rounded-md"
            marginTop={"10px"}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
