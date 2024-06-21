import { PAST_SPONSOR_IMAGES } from "./cuHackingPastSponsors";

export const PastSponsors = () => {
  // list of image url strings
  const images = PAST_SPONSOR_IMAGES;

  return (
    <div className="w-5/6 mx-auto grid grid-cols-2 md:grid-cols-5 gap-x-14 gap-y-14 place-items-center">
          {images.map((image, index) => (
          <div>
          <img
            className="max-h-24 w-auto"
            src={image}
            key={index}
          />
          </div>
        ))}
      </div>
  );
};
