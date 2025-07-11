import Search from "./Search";
import { useState } from "react";
import Shimmer from "./Shimmer";
import TopRatedRestaturant from "./TopRatedRestaturant";
import RestaturantCard from "./RestaturantCard";
import useRestaturantCards from "../utils/useRestaturantCards";
import { withPromotedLabel } from "./RestaturantCard";

const Body = () => {
  const [reslist, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useRestaturantCards(reslist, filteredResList, setResList, setFilteredResList);

  const RestataurantCardPromoted = withPromotedLabel(RestaturantCard);

  //Conditional Rendering
  if (reslist.length == 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <TopRatedRestaturant
        resList={reslist}
        setFilteredResList={setFilteredResList}
      ></TopRatedRestaturant>
      <Search
        resList={reslist}
        setFilteredResList={setFilteredResList}
      ></Search>
      <div className="res-container">
        {filteredResList.map((resItem) => {
          return resItem?.info?.avgRating > 4.0 ? (
            <RestataurantCardPromoted
              key={resItem?.info?.id}
              resItem={resItem}
            ></RestataurantCardPromoted>
          ) : (
            <RestaturantCard
              key={resItem?.info?.id}
              resItem={resItem}
            ></RestaturantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
