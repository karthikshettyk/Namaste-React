const TopRatedRestaturant = (props) => {
  return (
    <button
      className="top-rated-res-btn"
      onClick={(e) => {
        let filtResListData =props.resList.filter((resItem) => {
          return resItem?.info?.avgRating > 4.3;
        });
        props.setFilteredResList(filtResListData);
      }}
    >
      Top Rated Restaturant
    </button>
  );
};

export default TopRatedRestaturant;
