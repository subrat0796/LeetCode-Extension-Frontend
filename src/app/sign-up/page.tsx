"use client";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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
import isURL from "validator/lib/isURL";

const Page = () => {
  const router = useRouter();
  const { handleSignUpUser } = useAuth();
  const { loading, token, message, error } = useSelector(
    (state: RootState) => state.auth
  );
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [leetCodeProfileUrl, setLeetCodeProfileUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Errors
  const isEmailError = !isEmail(email),
    isPasswordError = password.length === 0,
    isConfirmPasswordError =
      confirmPassword.length === 0 || confirmPassword != password,
    isLeetCodeProfileUrlError = !isURL(leetCodeProfileUrl),
    isFirstNameError = firstName.length === 0;

  // Handle state functions
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  const handleLeetCodeProfileUrlChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setLeetCodeProfileUrl(event.target.value);
  };
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  // On success
  const onSuccess = () => {
    router.push("/dashboard");
  };

  const handleSubmit = () => {
    if (
      isEmail(email) &&
      password.length > 0 &&
      password === confirmPassword &&
      isURL(leetCodeProfileUrl) &&
      firstName.length > 0
    ) {
      handleSignUpUser(
        email,
        password,
        (firstName + " " + lastName).trim(),
        leetCodeProfileUrl,
        onSuccess
      );
    }
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
            Create Account
          </Text>
          <FormControl gap={10} display={"flex"} marginBottom={"10px"}>
            <Box width={"50%"}>
              <FormLabel className="font-semibold text-sm">
                First Name
              </FormLabel>
              <Input
                type="text"
                className="rounded-md bg-gray-200 border p-2 h-10 w-full  hover:bg-transparent"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {isFirstNameError && (
                <FormHelperText className="text-sm">
                  {"Please enter your name"}
                </FormHelperText>
              )}
            </Box>
            <Box width={"50%"}>
              <FormLabel className="font-semibold text-sm">Last Name</FormLabel>
              <Input
                type="text"
                className="rounded-md bg-gray-200 border p-2 h-10 w-full hover:bg-transparent"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Box>
          </FormControl>
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
          <TextBox
            formName="Confirm Password"
            stylesFormControl="mb-2"
            stylesFormLabel="font-semibold text-sm"
            stylesInput="rounded-md bg-gray-200 border h-10 w-full p-2 hover:bg-transparent focus:bg-transparent"
            typeInput="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorText={"Please check your password with entered password"}
            isError={isConfirmPasswordError}
          />
          <TextBox
            formName="LeetCode Profile Url"
            stylesFormControl="mb-2"
            stylesFormLabel="font-semibold text-sm"
            stylesInput="rounded-md bg-gray-200 border h-10 w-full p-2 hover:bg-transparent focus:bg-transparent"
            typeInput="text"
            value={leetCodeProfileUrl}
            onChange={handleLeetCodeProfileUrlChange}
            errorText={"Please enter a valid leetcode profile url"}
            isError={isLeetCodeProfileUrlError}
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

          <Link href="/sign-in" className="text-sm text-center text-blue-300">
            Not Create Account ? Click Here To Go To Login Page
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
