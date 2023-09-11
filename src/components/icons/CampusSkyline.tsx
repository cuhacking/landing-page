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
    const [css, _$theme] = useStyletron();

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
                prev = prev.slice(0, -2);

                const newLeft = parseInt(prev) + 1;

                if (newLeft > window.innerWidth) {
                    return `${-width}px`;
                }

                return `${newLeft}px`;
            });
        }, Math.floor(Math.random() * 100) + 100);
        return () => clearInterval(interval);
    }, []);

    const [css, _$theme] = useStyletron();

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

    const cloudsProps: CloudProps[] = [
        {
            top: "10px",
            left: "20px",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "220px",
            left: "220px",
            blurry: true,
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "330px",
            left: "330px",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "550px",
            left: "800px",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
        },
        {
            top: "440px",
            left: "440px",
            cloud: CLOUDS[Math.floor(Math.random() * CLOUDS.length)],
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
