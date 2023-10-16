import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

export const Column = (props: { children: React.ReactNode; $style?: StyleObject }) => {
    const [css, _$theme] = useStyletron();

    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                ...props.$style,
            })}
        >
            {props.children}
        </div>
    );
};


export const Subheading = (props: { children: React.ReactNode; $style?: StyleObject }) => {
    const [css, _$theme] = useStyletron();

    return (
        <p
            className={css({
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "-0.88px",
                ...props.$style,
            })}
        >
            {props.children}
        </p>
    );
}

export const Subheading2 = (props: { children: React.ReactNode; $style?: StyleObject }) => {
    const [css, _$theme] = useStyletron();

    return (
        <p
            className={css({
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "normal",
                letterSpacing: "-0.88px",
                ...props.$style,
            })}
        >
            {props.children}
        </p>
    );
}


export const Row = (props: { children: React.ReactNode; $style?: StyleObject }) => {
    const [css, _$theme] = useStyletron();

    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                ...props.$style,
            })}
        >
            {props.children}
        </div>
    );
};