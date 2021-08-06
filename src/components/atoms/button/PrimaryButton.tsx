import { Button } from "@chakra-ui/react";
import { memo, VFC, ReactNode } from "react";

type Props = {
       children: ReactNode;
       disabled?: boolean;
       loading?: boolean;
       onClick: () => void;
}

export const PrimaryButton:VFC<Props> = memo((props) => {

       const { children, disabled = false, loading = false, onClick } = props;

       return (
              <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} disabled={disabled || loading} isLoading={loading} onClick={onClick}>{children}</Button>
       )
})