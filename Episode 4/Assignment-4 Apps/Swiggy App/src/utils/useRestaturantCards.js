import { useEffect } from "react";
import { RESTATURANT_CARDS_URL } from "../utils/constants";


const useRestaturantCards = (reslist,filteredResList,setResList,setFilteredResList) => {

  //Useeffect function will called once the body renders.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(RESTATURANT_CARDS_URL);
        const data = await response.json();
        setResList(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredResList(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

};

export default useRestaturantCards;
