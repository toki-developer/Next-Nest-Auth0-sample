import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import { getuser } from "src/pages";

const afterCallback = (req, res, session, state) => {
  const user = "toki";
  return {
    ...session,
    user: {
      sub: session.user.sub,
      name: user,
    },
  };
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
