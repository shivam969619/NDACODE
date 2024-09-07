import { useSelector } from "react-redux";

export const useUserAuth = () => {
  const { user } = useSelector((state:any) => state.auth);

  return user ? true : false;
};
