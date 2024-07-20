import { Button as MuiButton } from "@material-tailwind/react";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg" | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      size={props.size}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
