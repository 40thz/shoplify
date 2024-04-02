import { FC, PropsWithChildren } from "react";
import { ArrowIcon } from "../../icons/Arrow";
import { EColor, Typography } from "../Typography";
import styles from "./Button.module.scss";

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
