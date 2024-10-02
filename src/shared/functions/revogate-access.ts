import Cookies from "js-cookie";

export const revogateAccess = () => {
  Cookies.remove("@username");
  Cookies.remove("@access_token");
  Cookies.remove("@refresh_token");
};
