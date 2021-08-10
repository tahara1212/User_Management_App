import { Box,Image,Text, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
       imageUrl: string;
       userName: string;
       fullName: string;
}

export const UserCard:VFC<Props> = memo((props) => {

       const { imageUrl, userName, fullName } = props;

       return (
              <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{cursor: "pointer", opacity: 0.8}}>
                     <Stack textAlign="center">
                            <Image boxSize="160px" borderRadius="full" m="auto" src={imageUrl} alt={userName}/>
                     <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                     <Text fontSize="sm" color="grey">{fullName}</Text>
                     </Stack>
              </Box>
       )
})