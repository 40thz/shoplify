import React from "react";
import cl from './Typography.module.scss';
import classNames from 'classnames';

export type TSizes = 40 | 32 | 28 | 24 | 20 | 16 | 14 | 12 | 10;
type TFont = 'nunito' | 'montserrat';

export enum EColor {
    black = 'black',
    blue = 'blue',
    orange = 'orange',
    green = 'green',
    white = 'white',
    grayF4 = 'grayF4',
    grayF3 = 'grayF3',
    grayD9 = 'grayD9',
    grayC4 = 'grayC4',
    gray99 = 'gray99',
    gray = 'gray66',
}

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    className?: string,
    children?: React.ReactNode;
    size: TSizes;
    bold?: boolean;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColor;
    font: TFont
    style?: React.CSSProperties;
}

export const Typography = (props: ITextProps) => {
    const {
        As = 'span',
        className,
        children,
        color = EColor.black,
        bold = false,
        size,
        mobileSize,
        desktopSize,
        tabletSize,
        font = 'nunito',
        style
    } = props;

    const classes = classNames(
        className,
        cl[`font-${font}`],
        cl[`s${size}`],
        cl[color],
        { [cl.bold]: bold },
        { [cl[`m${mobileSize}`]]: mobileSize },
        { [cl[`d${desktopSize}`]]: desktopSize },
        { [cl[`t${tabletSize}`]]: tabletSize },
    );

    return (
        <As style={style} className={classes}>
            {children}
        </As>
    )
}