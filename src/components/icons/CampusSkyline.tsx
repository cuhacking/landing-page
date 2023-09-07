import { useStyletron } from "baseui";
import React, { useEffect, useState } from "react";
import skyline from "./skyline.svg";
import cloud1 from "./clouds/cloud1.svg";
import cloud2 from "./clouds/cloud2.svg";
import cloud3 from "./clouds/cloud3.svg";
import cloud4 from "./clouds/cloud4.svg";
import { nanoid } from "nanoid";

const CLOUDS = [
    cloud1,
    cloud2,
    cloud3,
    cloud4,
];

export const CampusSkyline = () => {
    const [css, $theme] = useStyletron();

    return (
        <img
            src={skyline}
            className={css({
                width: "100%",
                overflow: "hidden",

            })}
        />
    );
}

interface CloudProps {
    top: string;
    left: string;
    cloud: string;
    blurry?: boolean;
}

export const Cloud = (props: CloudProps) => {
    // pick a random cloud
    const [leftPosition, setLeftPosition] = useState(props.left);
    const imageRef = React.useRef<HTMLImageElement>(null);

    const width = imageRef.current?.clientWidth || 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftPosition((prev) => {
                const newLeft = parseInt(prev) + 1;

                if (newLeft > window.innerWidth) {
                    return `${-width}px`;
                }

                return `${newLeft}px`;
            });
        }, Math.floor(Math.random() * 100) + 100);
        return () => clearInterval(interval);
    }, []);

    const [css, $theme] = useStyletron();

    return (
        <img
            ref={imageRef}
            key={nanoid()}
            className={
                css({
                    position: "absolute",
                    top: props.top,
                    left: leftPosition,
                    transition: "left 1s linear",
                    filter: props.blurry ? "blur(2px)" : "blur(0px)",
                })
            }
            src={props.cloud}
        />
    );
}



export const Clouds = () => {
    const [css, $theme] = useStyletron();

    const cloudsProps = [
        {
            top: "10%",
            left: "10%",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "20%",
            left: "20%",
            blurry: true,
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "30%",
            left: "30%",
        },
        {
            top: "50%",
            left: "80%",
        },
        {
            top: "40%",
            left: "40%",
        },
        {
            top: "304px",
            left: "140px",
            blurry: true,
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "59px",
            left: "787px",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "92px",
            blurry: true,
            left: "1332px",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        }
    ]

    return (
        <>
            {cloudsProps.map((cloudProps) => {
                return <Cloud {...cloudProps} />
            })
            }
        </>
    );
}
