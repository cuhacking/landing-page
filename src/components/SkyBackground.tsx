import { useStyletron } from "baseui";
import { SignUpButton } from "./SignUpButton";
import { CampusSkyline, Clouds } from "./icons/CampusSkyline";
import { Wordmark } from "./icons/Wordmark";
import { Row, Column, Subheading, Subheading2 } from "./util";

export const SkyBackground = () => {
    const [css, _$theme] = useStyletron();

    return (
        <div
            className={css({
                height: "100vh",
                width: "100vw",
            })}
        >
            <div
                className={
                    css({
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                    })
                }
            >
                <Row>
                    <Column $style={
                        {
                            width: "400px",
                            height: "400px",
                        }
                    }>
                        <div
                            className={
                                css({
                                    paddingBottom: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                })
                            }
                        >

                            <Wordmark width="400px" />
                            <Subheading>March 1st-3rd 2024</Subheading>
                            <Subheading2>Carleton's Official Hackathon</Subheading2>
                            <SignUpButton
                                onClick={
                                    () => {
                                        window.open("https://forms.gle/DswuFCy1NvBG5m6Z6", "_blank");
                                    }
                                }
                            >Join our Team!</SignUpButton>
                        </div>
                    </Column>
                </Row>
            </div>
            <Row
                $style={
                    {
                        overflow: "hidden",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                    }
                }>
                <div
                    className={css({
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 0,
                        maxWidth: "1200px",
                        width: "100%",
                        minWidth: "600px",
                    })}
                >
                    <CampusSkyline />
                </div>
            </Row>


            {/* Clouds layer */}
            <div
                className={css({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    overflow: "hidden",
                })}
            >
                <Clouds />
            </div>

        </div >
    );
};