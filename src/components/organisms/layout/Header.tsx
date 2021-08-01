import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, VFC, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenyIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push("/home");
  }, [history]);

  const onClickUserManagement = useCallback(() => {
    history.push("/home/user_management");
  }, [history]);

  const onClickSetting = useCallback(() => {
    history.push("/home/setting");
  }, [history]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          as="a"
          align="center"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link to="/home/user_management">ユーザー一覧</Link>
          </Box>
          <Link to="/home/setting">設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
