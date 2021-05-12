import { useUser } from "@auth0/nextjs-auth0";
import gql from "graphql-tag";
import { useSampleQuery } from "src/apollo/graphql";

const Home = () => {
  const { user } = useUser();
  console.log(user);
  const sub = user?.sub ? user.sub : "a";
  const { data, loading } = useSampleQuery({ variables: { sub: sub } });
  return (
    <>
      {!loading && (
        <>
          <p>{data?.sample?.id}</p>
          <p>{data?.sample?.name}</p>
          <p>{data?.sample?.freeInput}</p>
        </>
      )}
      <p>{user?.name}</p>
      {!user ? (
        <button>
          <a href="/api/auth/login" data-testid="login">
            Login
          </a>
        </button>
      ) : (
        <button>
          <a href="/api/auth/logout" data-testid="logout">
            Logout
          </a>
        </button>
      )}
      {user && (
        <>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.sub}</p>
            <p>{user.picture}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Home;

gql`
  query sample($sub: String!) {
    sample(sub: $sub) {
      id
      name
      freeInput
    }
  }
`;
