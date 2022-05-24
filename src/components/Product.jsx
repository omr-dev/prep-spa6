import { useContext } from "react";
import { AppContext } from "../AppProvider";
export const Product = () => {
  const { theme } = useContext(AppContext);
  return <p>This is product. Theme:{theme}</p>;
};
