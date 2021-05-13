import { useContext } from "react";
import { UserContext } from "src/contexts/userContext";

const Home = () => {
  // const { user } = useUser();
  // const sub = user?.sub ? user.sub : "a";
  // const { data, loading } = useSampleQuery({ variables: { sub: sub } });
  const user = useContext(UserContext);
  return (
    <>
      <button>
        <a href="/api/auth/login" data-testid="login">
          Login
        </a>
      </button>
      <button>
        <a href="/api/auth/logout" data-testid="logout">
          Logout
        </a>
      </button>
      <p>{user.user.name}</p>
      <p>{user.user.id}</p>
      <p>{user.user.freeInput}</p>
    </>
  );
};

export default Home;
