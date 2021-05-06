import { useUser } from "@auth0/nextjs-auth0";
import gql from "graphql-tag";
import { useSampleQuery } from "src/apollo/graphql";

const Home = () => {
  const { data, loading } = useSampleQuery({ variables: { id: 2 } });
  const { user } = useUser();
  console.log(user);
  return (
    <>
      {!loading && (
        <>
          <p>{data?.sample?.id}</p>
          <p>{data?.sample?.name}</p>
          <p>{data?.sample?.freeInput}</p>
        </>
      )}
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
    </>
  );
};

export default Home;

gql`
  query sample($id: Int!) {
    sample(id: $id) {
      id
      name
      freeInput
    }
  }
`;
