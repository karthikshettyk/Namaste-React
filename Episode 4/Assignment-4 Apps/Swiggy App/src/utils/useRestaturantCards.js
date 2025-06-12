import { useEffect } from "react";
import { RESTATURANT_CARDS_URL } from "../utils/constants";
import RestaturantCard from "../components/RestaturantCard";
import Shimmer from "../components/Shimmer";


const useRestaturantCards = (props) => {
  //Useeffect function will called once the body renders.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(RESTATURANT_CARDS_URL);
        const data = await response.json();
        props.setResList(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        props.setFilteredResList(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  if (reslist.length == 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="res-container">
      {props.filteredResList.map((resItem) => {
        return (
          <RestaturantCard
            key={resItem?.info?.id}
            resItem={resItem}
          ></RestaturantCard>
        );
      })}
    </div>
  );
};

export default useRestaturantCards;
