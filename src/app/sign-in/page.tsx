"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

import LeftComponent from "../../component/left-component/left-component";
import TextBox from "../../component/text-box/text-box";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReduxer";
import { useRouter } from "next/navigation";
import useAuth from "../../hooks/useAuth";
import isEmail from "validator/lib/isEmail";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector((state: RootState) => state.auth);

  const { handleSignInUser } = useAuth();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSuccess = () => {
    router.push("/dashboard");
  };

  const isEmailError = !isEmail(email),
    isPasswordError = password.length === 0;

  const handleSubmit = () => {
    if (isEmail(email) && password.length > 0)
      handleSignInUser(email, password, onSuccess);
  };

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
            value={email}
            onChange={handleEmailChange}
            errorText={"Please enter your email"}
            isError={isEmailError}
          />
          <TextBox
            formName="Password"
            stylesFormControl="mb-2"
            stylesFormLabel="font-semibold text-sm"
            stylesInput="rounded-md bg-gray-200 border h-10 w-full p-2 hover:bg-transparent focus:bg-transparent"
            typeInput="password"
            value={password}
            onChange={handlePasswordChange}
            errorText={"Please enter your password"}
            isError={isPasswordError}
          />

          <Button
            backgroundColor={"#678CAC"}
            padding={"10px"}
            width={"100%"}
            className="rounded-md"
            marginTop={"10px"}
            marginBottom={"10px"}
            isLoading={loading}
            onClick={handleSubmit}
          >
            Submit
          </Button>

          <Link href="/sign-up" className="text-sm text-center text-blue-300">
            Not Login ? Click Here To Go To Create Account Page
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
