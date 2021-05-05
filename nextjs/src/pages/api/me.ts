import { Auth0 } from "src/utils/auth/auth0";

export const me = async (req: any, res: any) => {
  try {
    await Auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
};
