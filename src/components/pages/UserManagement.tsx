/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  // 初期表示時のみユーザー情報を取得する
  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
        ) : (
        <Wrap p={{base: 4, md:10}} justify="center">
              {users.map((user) => (
                <WrapItem key={user.id}>
                    <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} />
                </WrapItem>
              ))}
        </Wrap>
      )}
    
    </>
  );
});
