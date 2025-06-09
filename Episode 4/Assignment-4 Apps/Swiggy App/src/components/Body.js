import RestaturantCard from "./RestaturantCard";
import Search from "./Search";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [reslist, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  //Useeffect function will called once the body renders.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        console.log("the data",data?.data);
        setResList(data?.data);
        setFilteredResList(data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //Conditional Rendering
  if (reslist.length == 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="body">
      <button
        className="top-rated-res-btn"
        onClick={(e) => {
          let filtResListData = reslist.filter((resItem) => {
            return resItem.rating > 4;
          });
          setFilteredResList(filtResListData);
        }}
      >
        Top Rated Restaturant
      </button>
      <Search
        resList={reslist}
        setFilteredResList={setFilteredResList}
      ></Search>
      <div className="res-container">
        {filteredResList.map((resItem) => {
          return (
            <RestaturantCard
              key={resItem.id}
              resItem={resItem}
            ></RestaturantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
