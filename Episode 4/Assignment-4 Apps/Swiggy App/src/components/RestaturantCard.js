import { Link } from "react-router-dom";
import { SWIGGY_CLOUDINARY_URL } from "../utils/constants";

const RestaturantCard = (props) => {


  const { name, locality, cloudinaryImageId, avgRating } = props.resItem?.info;

  const resIdLists = [
    547809, 17104, 23707, 24613, 360967, 32129, 986926, 108986,
  ];

  const resId = Math.floor(Math.random() * resIdLists.length);

  return (
    <div>
      <Link
        to={`/restaturantmenucard/${resIdLists[resId]}`}
        className="res-card"
      >
        <img
          src={SWIGGY_CLOUDINARY_URL + cloudinaryImageId}
          className="res-card-logo"
        ></img>
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>{avgRating}</h4>
      </Link>
    </div>
  );
};

export const withPromotedLabel =(RestaturantCard)=>{
  return (props)=>{
    return (
      <div>
        <label>Promoted</label>
        <RestaturantCard {...props}/>
      </div>
    );
  }
}



export default RestaturantCard;
