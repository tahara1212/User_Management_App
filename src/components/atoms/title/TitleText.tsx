import { Heading } from "@chakra-ui/react";
import { memo } from "react";
import { VFC } from "react";

type Props = {
  children: string;
};

export const TitleText: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Heading
      as="h1"
      size="2xl"
      mt={10}
      ml={10}
      borderLeft="4px"
      borderColor="teal.500"
      paddingLeft={2}
    >
      {children}
    </Heading>
  );
});
