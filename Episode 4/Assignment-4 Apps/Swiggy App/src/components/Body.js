import RestaturantCard from "./RestaturantCard";
import Search from "./Search";
import resData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <button className="top-rated-res-btn" onClick={(e)=>{
      }}>Top Rated Restaturant</button>
      <Search></Search>
      <div className="res-container">
        {
          resData.map((resItem)=>{
            return (
              <RestaturantCard key={resItem.id} resItem={resItem}></RestaturantCard>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
