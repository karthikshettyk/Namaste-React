import { Link } from "react-router-dom";
import { SWIGGY_CLOUDINARY_URL } from "../utils/constants";

const RestaturantCard = (props) => {

  const { name, locality, cloudinaryImageId, avgRating } = props.resItem?.info;

  const resIdLists = [
    {
      547809:"Theobroma",
      "KFC": 17104,
      "Pizza Hut": 23707,
      "McDonald's": 24613,
      "Wow! Momo": 360967,
      "Burger King": 32129,
      "Chinese Wok": 986926,
      "California Burrito": 108986,
    },
  ];

  let ressid;
  ressid=resIdLists.filter((resName)=>{
    name==resName
    ;
  })

  console.log("res id",ressid[0])

  return (
    <div>
      <Link to={`/restaturantmenucard/${ressid[0]}`} className="res-card">
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

export default RestaturantCard;
