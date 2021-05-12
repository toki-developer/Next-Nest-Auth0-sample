import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";

type Context = {
  user: {
    id: string;
    name: string;
  };
};
export const UserContext = createContext<Context>({
  user: {
    id: "",
    name: "",
  },
});

export const UserContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [user, setUser] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });
  useEffect(() => {
    setUser({
      id: "tokitoki",
      name: "toki",
    });
  }, []);
  const value = {
    user,
  };
  return <UserContext.Provider value={value} {...props} />;
};
