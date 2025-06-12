import useRestaturantCards from "../utils/useRestaturantCards";
import Search from "./Search";
import { useState, useEffect } from "react";
//import Shimmer from "./Shimmer";
//import { RESTATURANT_CARDS_URL } from "../utils/constants";
import TopRatedRestaturant from "./TopRatedRestaturant";

const Body = () => {
  const [reslist, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  //Useeffect function will called once the body renders.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(RESTATURANT_CARDS_URL);
  //       const data = await response.json();
  //       setResList(
  //         data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants
  //       );
  //       setFilteredResList(
  //         data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants
  //       );
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //Conditional Rendering
  

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
     <useRestaturantCards reslist={reslist} setResList={setResList} filteredResList={filteredResList} setFilteredResList={setFilteredResList} ></useRestaturantCards>
    </div>
  );
};

export default Body;
