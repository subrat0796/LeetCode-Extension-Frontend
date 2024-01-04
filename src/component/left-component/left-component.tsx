import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import OnBoardingImage from "../../assets/authpage.png";

const LeftComponent = () => {
  return (
    <Box
      width={"50%"}
      height={"100%"}
      __css={{
        display: "flex",
        flexDir: "column",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"16"}
      backgroundColor={"#678CAC"}
      gap={"20"}
    >
      <Image src={OnBoardingImage} alt="On Boarding Image" />
      <Text fontSize={"x-large"} color={"black"}>
        Welcome to Practice Coders
      </Text>
    </Box>
  );
};

export default LeftComponent;
