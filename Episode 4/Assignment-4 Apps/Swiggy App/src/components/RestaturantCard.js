import { SWIGGY_CARDS_URL } from "../utils/constants";
const RestaturantCard = (props) => {
  const { name,desc,rating } = props.resItem;
  return (
    <div className="res-card">
      <img src={SWIGGY_CARDS_URL} className="res-card-logo"></img>
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <h4>{rating}</h4>
    </div>
  );
};

export default RestaturantCard;
