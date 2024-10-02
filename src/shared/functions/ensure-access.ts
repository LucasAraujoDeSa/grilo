import Cookies from "js-cookie";

export const ensureAccess = ({
  username,
  accessToken,
  refreshToken,
}: {
  username: string;
  accessToken: string;
  refreshToken: string;
}) => {
  Cookies.set("@username", username, {
    secure: true,
    sameSite: "strict",
  });
  Cookies.set("@access_token", accessToken, {
    secure: true,
    sameSite: "strict",
    refreshToken: refreshToken,
  });
  Cookies.set("@refresh_token", refreshToken, {
    secure: true,
    sameSite: "strict",
  });
};
