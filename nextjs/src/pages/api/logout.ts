import { Auth0 } from "src/utils/auth/auth0";

export const logout = async (req: any, res: any) => {
  try {
    await Auth0.handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
};
