import { UserProvider, useUser } from "@auth0/nextjs-auth0";
import gql from "graphql-tag";
import type { ReactNode, VFC } from "react";
import { createContext } from "react";
import { useSampleQuery } from "src/apollo/graphql";

type Context = {
  user: {
    id: string;
    name: string;
    freeInput: string;
  };
};
export const UserContext = createContext<Context>({
  user: {
    id: "",
    name: "",
    freeInput: "",
  },
});

export const UserContextProvider: VFC<{ children: ReactNode }> = (props) => {
  //   const [userVal, setUserVal] = useState<{
  //     id: string;
  //     name: string;
  //     freeInput: string;
  //   }>({
  //     id: "",
  //     name: "",
  //     freeInput: "",
  //   });
  const { user } = useUser();
  const value = {
    user: { id: "", name: "", freeInput: "" },
  };
  //   if (!user || !user.sub) {
  //     return <UserContext.Provider value={value} {...props} />;
  //   }
  const sub = user?.sub ? user?.sub : "";
  const { data } = useSampleQuery({ variables: { sub } });
  //   useEffect(() => {
  //     setUserVal({
  //       id: data.sample.id,
  //       name: data.sample.name,
  //       freeInput: data.sample.freeInput,
  //     });
  //   }, []);
  if (!data || !data.sample) {
    return <UserContext.Provider value={value} {...props} />;
  }
  const userValue = {
    user: {
      id: data.sample.id,
      name: data.sample.name,
      freeInput: data.sample.freeInput,
    },
  };
  return <UserContext.Provider value={userValue} {...props} />;
};

export const UserContextProviders: VFC<{ children: ReactNode }> = (props) => {
  return (
    <UserProvider>
      <UserContextProvider {...props} />
    </UserProvider>
  );
};

gql`
  query sample($sub: String!) {
    sample(sub: $sub) {
      id
      name
      freeInput
    }
  }
`;
