import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  // id: number;
  imageUrl: string;
  userName: string | undefined;
  fullName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  website: string | undefined;
};

export const HomeUserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, email, phone, website } = props;

  return (
    <Box
      w={{ base: "300px", md: "500px" }}
      h={{ base: "360px", md: "600px" }}
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={10}
    >
      <Stack textAlign="center" lineHeight="9">
        <Image
          boxSize={{ base: "160px", md: "260px" }}
          borderRadius="full"
          m="auto"
          src={imageUrl}
          alt={userName}
        />
        <Text fontSize={{ base: "lg", md: "3xl" }} fontWeight="bold">
          Username:{userName}
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Fullname:{fullName}
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Email:{email}
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Phone:{phone}
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Website:{website}
        </Text>
      </Stack>
    </Box>
  );
});
