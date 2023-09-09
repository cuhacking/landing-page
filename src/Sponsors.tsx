import React from "react"
import { Row } from "./App";
import { useStyletron } from "baseui";
import { PAST_SPONSOR_IMAGES } from "./cuhacking-past-sponsors/cuHackingPastSponsors";


export const Sponsors = () => {
    const [css, $theme] = useStyletron();

    const images = PAST_SPONSOR_IMAGES;

    /*
        Render all of these images in a grid and have the grid collapse on mobile
    */

    return (
        <div
            className={css({
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gridGap: "1rem",
            })}
        >
            {images.map((image) => {
                return (
                    <div>
                        <Row><img

                            className={css({
                                // try to make the images the same height
                                height: "100%",
                                width: "100%",
                                objectFit: "scale-down",
                            })}

                            src={image} /></Row>
                    </div>
                )
            }
            )}
        </div>
    );
}