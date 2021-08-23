import { Box, Button, Center, FormControl, FormLabel, Stack, Switch, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { TitleText } from "../atoms/title/TitleText";

export const Setting: VFC = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "gray.50");

  return (
    <>
      <TitleText>SETTINGS</TitleText>
      <Center p={{ base: 4, md: 10 }}>
    <Box
      w={{ base: "300px", md: "500px" }}
      h={{ base: "360px", md: "600px" }}
          bg={bg}
          color="black"
      borderRadius="10px"
      shadow="md"
      p={10}
        m={30}
      >
        
      <Stack textAlign="left" lineHeight="9">
        <Text fontSize={{ base: "lg", md: "3xl" }} fontWeight="bold">
          Username
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Fullname
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Email
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} color="grey">
          Phone
            </Text>
            <FormControl display="flex" alignItems="center">
  <FormLabel htmlFor="dark-mode" mb="0">
    dark mode?
  </FormLabel>
  <Switch id="dark-mode" onChange={toggleColorMode} />
</FormControl>

        <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
          </Stack>
    </Box>
          </Center>
    </>
  )
});
