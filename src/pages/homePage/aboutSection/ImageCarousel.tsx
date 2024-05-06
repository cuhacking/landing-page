import { useStyletron } from "baseui";
import React, { useLayoutEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

export interface ImageDisplayProps {
  image: string;
  alt: string;
}

export const ImageDisplay = (props: ImageDisplayProps) => {
  const [css] = useStyletron();

  return (
    <img
      className={css({
        objectFit: "contain",
        maxHeight: "400px",
        width: "auto",
        background: "rgba(249, 251, 254, 0.6)",
        borderRadius: "14px",
        marginRight: "64px",
      })}
      src={props.image}
      alt={props.alt}
    />
  );
};

export const ImageCarousel = () => {
  const images = [
    { src: "cat-test/big1.png", alt: "big1" },
    { src: "cat-test/big2.jpg", alt: "big2" },
    { src: "cat-test/big3.jpg", alt: "big3" },
    { src: "cat-test/big1.png", alt: "big1" },
    { src: "cat-test/big2.jpg", alt: "big2" },
    { src: "cat-test/big3.jpg", alt: "big3" },
    { src: "cat-test/big1.png", alt: "big1" },
    { src: "cat-test/big2.jpg", alt: "big2" },
    { src: "cat-test/big3.jpg", alt: "big3" },
  ];

  return (
    <div
      style={{
        display: "flex",
        width: "2000px",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        gap: "64px",
        scrollbarWidth: "none", // hide scrollbar
      }}
    >
      <Marquee>
        {images.concat(images, images).map((image, index) => (
          <ImageDisplay key={index} image={image.src} alt={image.alt} />
        ))}
      </Marquee>
    </div>
  );
};
