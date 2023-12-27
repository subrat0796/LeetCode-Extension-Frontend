"use client";
import useQuestions from "@/hooks/useQuestions";
import useUser from "@/hooks/useUser";
import { RootState } from "@/redux/rootReduxer";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { handleGetUserDetails } = useUser();
  const { handleGetAllQuestions } = useQuestions();
  const userState = useSelector((state: RootState) => state.user);
  const questionState = useSelector((state: RootState) => state.question);

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    handleGetUserDetails();
    handleGetAllQuestions();
  }, []);

  console.log("User State : ", userState);
  console.log("Question State : ", questionState);

  if (userState.loading || questionState.loading) {
    return (
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button isLoading={userState.loading || questionState.loading} />
      </Box>
    );
  }

  return (
    <Box width="100%" height={"100vh"}>
      <Box height={"max-content"} padding={"10px"}>
        {/* Show all the user details */}
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          gap={"10"}
          className="border p-4"
        >
          {userState.matchedUser && userState.matchedUser.profile && (
            <Image
              objectFit="contain"
              width={"200px"}
              maxW={{ base: "100%", sm: "200px" }}
              src={userState.matchedUser.profile.userAvatar!}
              alt="User Image"
              className="rounded-lg"
            />
          )}

          <Stack display={"flex"} justifyContent={"space-evenly"}>
            <CardBody>
              <Heading size="md">
                Name : {userState.matchedUser?.profile?.realName}
              </Heading>

              <Text py="2">
                About Me : {userState.matchedUser?.profile?.aboutMe}
              </Text>

              <Text py="2">
                Ranking : {userState.matchedUser?.profile?.ranking}
              </Text>

              <Text py="2">
                LeetCode Profile Name : {userState.matchedUser?.username}
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" className="bg-blue-300 p-4 rounded-lg">
                Check Out Profile On LeetCode
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      <Box height={"max-content"} padding={"10px"}>
        {/* Show all the user details */}
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          gap={"10"}
          className="border p-4"
        >
          <Tabs onChange={(index) => setTabIndex(index)} variant="enclosed">
            <TabList>
              <Tab padding={"2rem"}>SDE Sheet</Tab>
              <Tab padding={"2rem"}>79 Last</Tab>
              <Tab padding={"2rem"}>A2Z Sheet</Tab>
            </TabList>
            <TabPanels p="2rem">
              <TabPanel>{}</TabPanel>
              <TabPanel>{}</TabPanel>
              <TabPanel>{}</TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Box>
    </Box>
  );
};

export default Page;
