import { useStyletron } from "baseui";
import { PAST_SPONSOR_IMAGES } from "./cuHackingPastSponsors";

export const PastSponsors = () => {
  const [css, _$theme] = useStyletron();

  // list of image url strings
  const images = PAST_SPONSOR_IMAGES;

  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",

        gridAutoRows: "auto",
        gridAutoFlow: "row",

        gap: "1rem",
        padding: "1rem",
      })}
    >
      {images.map((image, index) => (
        <img
          key={index}
          className={css({
            objectFit: "contain",
            width: "100%",
            height: "200px",
            borderRadius: "14px",
          })}
          src={image}
        />
      ))}
    </div>
  );
};
