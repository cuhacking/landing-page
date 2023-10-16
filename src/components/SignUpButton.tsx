import { useStyletron } from "baseui";
import { Row } from "./util";

export const SignUpButton = (props: {
    children: React.ReactNode;
    onClick?: () => void;
}) => {
    const [css, _$theme] = useStyletron();

    return (
        <div
            onClick={props.onClick}
            className={
                css({
                    width: "auto",
                    height: "60px",
                    borderRadius: "100px",
                    background: "#FF7C7C",
                    boxShadow: "0px 8px 7px 0px rgba(0, 0, 0, 0.25)",
                    cursor: "pointer",
                    ":hover": {
                        boxShadow: "0px 8px 7px 0px rgba(0, 0, 0, 0.25)",
                        transform: "scale(1.05)",
                        transition: "transform 0.2s ",
                    },
                })
            }
        >
            <p className={
                css({
                    display: "flex",
                    height: "100%",
                    flexShrink: 0,
                    padding: "10px",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    letterSpacing: "1.4px",
                })
            }><Row>{props.children}</Row></p>
        </div>
    );
}