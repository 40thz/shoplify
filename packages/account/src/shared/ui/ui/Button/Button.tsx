import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import { EColor, Typography } from "../Typography";
import { ArrowIcon } from "../../icons/Arrow";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className={styles.button}>
      <Typography size={20} font="nunito" color={EColor.white}>
        {children}
      </Typography>
      <ArrowIcon />
    </button>
  );
};
