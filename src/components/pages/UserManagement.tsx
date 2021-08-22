/* eslint-disable react-hooks/exhaustive-deps */
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { TitleText } from "../atoms/title/TitleText";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  // ユーザー情報
  const { getUsers, loading, users } = useAllUsers();
  // 初期表示時のみユーザー情報を取得する
  useEffect(() => getUsers(), []);

  const { loginUser } = useLoginUser();

  // chakra HooksのuseDisclosureから展開
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { onSelectUser, selectedUser } = useSelectUser();
  // ユーザークリック時
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <TitleText>USERS</TitleText>
          <Wrap p={{ base: 4, md: 10 }} justify="center">
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
        </>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
