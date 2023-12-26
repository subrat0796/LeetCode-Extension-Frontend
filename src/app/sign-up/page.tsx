import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import LeftComponent from "@/component/left-component/left-component";

// Todo - Import textbox and clear the huddle here

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
            Create Account
          </Text>
          <FormControl gap={10} display={"flex"} marginBottom={"10px"}>
            <Box width={"50%"}>
              <FormLabel className="font-semibold text-sm">
                First Name
              </FormLabel>
              <Input
                type="text"
                className="rounded-md bg-gray-200 border h-10 w-full hover:bg-transparent"
              />
            </Box>
            <Box width={"50%"}>
              <FormLabel className="font-semibold text-sm">Last Name</FormLabel>
              <Input
                type="text"
                className="rounded-md bg-gray-200 border h-10 w-full hover:bg-transparent"
              />
            </Box>
          </FormControl>
          <FormControl marginBottom={"10px"}>
            <FormLabel className="font-semibold text-sm">
              Email Address
            </FormLabel>
            <Input
              type="email"
              className="rounded-md bg-gray-200 border h-10 w-full hover:bg-transparent"
            />
          </FormControl>
          <FormControl marginBottom={"10px"}>
            <FormLabel className="font-semibold text-sm">Password</FormLabel>
            <Input
              type="password"
              className="rounded-md bg-gray-200 border h-10 w-full hover:bg-transparent focus:bg-transparent"
            />
          </FormControl>
          <FormControl marginBottom={"10px"}>
            <FormLabel className="font-semibold text-sm">
              Confirm Password
            </FormLabel>
            <Input
              type="password"
              className="rounded-md bg-gray-200 border h-10 w-full hover:bg-transparent"
            />
          </FormControl>
          <FormControl marginBottom={"10px"}>
            <FormLabel className="font-semibold text-sm">
              LeetCode Profile Url
            </FormLabel>
            <Input
              type="url"
              className="rounded-md bg-gray-200 border h-10 w-full hover:bg-transparent"
            />
          </FormControl>
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
