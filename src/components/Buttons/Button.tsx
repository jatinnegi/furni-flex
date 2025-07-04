import { FC, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button type="button">{children}</button>;
};

export default Button;
