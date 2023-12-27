import {
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

/*
  tableBody
  {
  "_id": "65887846b9b153be8746146d",
  "tableName": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
  "tableUrl": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
  "questions": [
      {
          "questionId": "65887846b9b153be8746146f",
          "questionLink": "https://leetcode.com/problems/set-matrix-zeroes/"
      },
      {
          "questionId": "65887846b9b153be87461470",
          "questionLink": "https://leetcode.com/problems/pascals-triangle/"
      }
    ]
  }

  submissions : [
      {
            "_id": "65887846b9b153be8746146d",
            "tableName": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
            "tableUrl": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
            "__v": 0,
            "questions": {
                "_id": "65887846b9b153be87461471",
                "questionTable": "65887846b9b153be8746146d",
                "questionLink": "https://leetcode.com/problems/next-permutation/",
                "__v": 0
            },
            "submissions": {
                "_id": "65898cc2fbe73dbbdde5f8e7",
                "questionLink": "65887846b9b153be87461471",
                "userId": "65884c1384445603a1e68c73",
                "__v": 0
            }
        },
  ]
*/

const TableContent = ({
  tableCaption,
  tableHeadPart1,
  tableHeadPart2,
  submissionArr,
}: {
  tableCaption: string;
  tableHeadPart1: string;
  tableHeadPart2: string;
  submissionArr: any;
}) => {
  return (
    <TableContainer className="max-w-min">
      <Table className="w-9/12">
        <TableCaption className="text-sm mt-4">{tableCaption}</TableCaption>
        <Thead>
          <Th>{tableHeadPart1}</Th>
          <Th>{tableHeadPart2}</Th>
        </Thead>
        <Tbody>
          {submissionArr.map((content: any, index: any) => {
            return (
              <Tr key={index} className="text-center">
                <Td
                  className={
                    content.isSolved === true
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {content.isSolved ? "Solved" : "Not Attempted"}
                </Td>
                <Td>
                  <Link href={content.questionLink}>
                    {content.questionLink.split("/")[4]}
                  </Link>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
