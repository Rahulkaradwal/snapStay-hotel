export const getToken = (): string => {
  return localStorage.getItem("TOKEN_KEY") || "";
};
