import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";
import React from "react";

export const Section = (props: { children: React.ReactNode; $style?: StyleObject; title: string }) => {
    const [css, _$theme] = useStyletron();

    return <div
        className={css({
            width: "100%",
            height: "100%",
            paddingLeft: "150px",
            paddingRight: "150px",
            "@media screen and (max-width: 1300px)": {
                paddingLeft: "3%",
                paddingRight: "3%",
            },

        })}
    >
        <h1
            className={
                css({
                    color: "#000",
                    fontSize: "36px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                })
            }
        >{props.title}</h1>
        <div>
            {props.children}
        </div>
    </div >
}