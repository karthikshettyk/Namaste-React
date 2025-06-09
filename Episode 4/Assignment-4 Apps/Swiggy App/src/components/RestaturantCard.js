import { SWIGGY_CLOUDINARY_URL } from "../utils/constants";

const RestaturantCard = (props) => {
  const { name, locality, cloudinaryImageId, avgRating } = props.resItem?.info;

  return (
    <div className="res-card">
      <img
        src={SWIGGY_CLOUDINARY_URL + cloudinaryImageId}
        className="res-card-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaturantCard;
