import { Center } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";
import { TitleText } from "../atoms/title/TitleText";
import { HomeUserCard } from "../organisms/user/HomeUserCard";

export const Home: VFC = memo(() => {
  const { loginUser } = useLoginUser();

  return (
    <>
      <TitleText>HOME</TitleText>
      <Center p={{ base: 4, md: 10 }}>
        <HomeUserCard
          imageUrl={"https://source.unsplash.com/random"}
          userName={loginUser?.username}
          fullName={loginUser?.name}
          email={loginUser?.email}
          phone={loginUser?.phone}
          website={loginUser?.website}
        />
      </Center>
    </>
  );
});
