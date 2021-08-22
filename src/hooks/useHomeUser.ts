import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number | undefined;
  users: Array<User>;
};

// 選択したユーザー情報を特定し、モーダルを表示するカスタムフック
export const useHomeUser = () => {
  // 選択したユーザー
  const [homeUser, setHomeUser] = useState<User | null>(null);
  const showHomeUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);
    console.log(targetUser);
    setHomeUser(targetUser ?? null);
  }, []);
  return { showHomeUser, homeUser };
};
