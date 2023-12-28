// @ts-nocheck
"use client";
import TableContent from "@/component/table-content/table-content";
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
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const getTableContent = (submissionSet: any, tableBody: any) => {
  return tableBody.questions.map((question: any) => {
    if (submissionSet.has(question.questionId)) {
      return {
        isSolved: true,
        questionLink: question.questionLink,
      };
    } else {
      return {
        isSolved: false,
        questionLink: question.questionLink,
      };
    }
  });
};

const Page = () => {
  const router = useRouter();
  const { handleGetUserDetails } = useUser();
  const { handleGetAllQuestions } = useQuestions();
  const userState = useSelector((state: RootState) => state.user);
  const questionState = useSelector((state: RootState) => state.question);

  const [tabIndex, setTabIndex] = useState(0);

  const submissionSet = new Set();

  userState?.matchedUserSubmissions?.forEach((submission: any) => {
    submissionSet.add(submission.submissions.questionLink);
  });
  let SDESubmissions, Last79Submission, A2ZSubmissions;
  if (questionState.questions !== null) {
    SDESubmissions = getTableContent(submissionSet, questionState.questions[0]);
    Last79Submission = getTableContent(
      submissionSet,
      questionState.questions[1]
    );
    A2ZSubmissions = getTableContent(submissionSet, questionState.questions[2]);
  }

  const onFailure = () => {
    localStorage.clear();
    router.push("/sign-in");
  };

  useEffect(() => {
    handleGetUserDetails(onFailure);
    handleGetAllQuestions();
  }, [handleGetAllQuestions, handleGetUserDetails, onFailure]);

  if (
    userState.loading ||
    questionState.loading ||
    questionState.questions === null ||
    userState.matchedUser === null
  ) {
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

          <Stack
            display={"flex"}
            justifyContent={"space-evenly"}
            width={"100%"}
          >
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

              <Link
                href={`https://leetcode.com/${userState.matchedUser.username}`}
              >
                <Text py="2">
                  LeetCode Profile Name : {userState.matchedUser?.username}
                </Text>
              </Link>
            </CardBody>

            <CardFooter className="w-9/12 gap-10">
              <Link
                href={`https://leetcode.com/${userState.matchedUser.username}`}
              >
                <Button variant="solid" className="bg-blue-300 p-4 rounded-lg">
                  Check Out Profile On LeetCode
                </Button>
              </Link>
            </CardFooter>

            <Text className="text-sm text-red-300">
              Just solve questions and in every 5 minutes our backend will get
              an idea which question you have solved
            </Text>
          </Stack>
        </Card>
      </Box>

      <Box height={"max-content"} padding={"10px"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          gap={"10"}
          className="border p-4"
        >
          <Tabs
            onChange={(index) => setTabIndex(index)}
            variant="enclosed"
            className="w-full"
          >
            <TabList>
              <Tab padding={"2rem"}>SDE Sheet</Tab>
              <Tab padding={"2rem"}>79 Last</Tab>
              <Tab padding={"2rem"}>A2Z Sheet</Tab>
            </TabList>
            <TabPanels
              p="2rem"
              className="w-full flex justify-center items-center"
            >
              <TabPanel>
                <TableContent
                  submissionArr={SDESubmissions}
                  tableCaption="Questions in Striver SDE Sheet"
                  tableHeadPart1="Question Solved"
                  tableHeadPart2="Question Link"
                />
              </TabPanel>
              <TabPanel>
                <TableContent
                  submissionArr={Last79Submission}
                  tableCaption="Questions in Striver 79 Last Sheet"
                  tableHeadPart1="Question Solved"
                  tableHeadPart2="Question Link"
                />
              </TabPanel>
              <TabPanel>
                <TableContent
                  submissionArr={A2ZSubmissions}
                  tableCaption="Questions in Striver A2Z Sheet"
                  tableHeadPart1="Question Solved"
                  tableHeadPart2="Question Link"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Box>
    </Box>
  );
};

export default Page;
