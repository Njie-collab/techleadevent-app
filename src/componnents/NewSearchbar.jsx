import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const NewSearchbar = ({ eventinfo }) => {
  const [filterdata, setfilterData] = useState([]);

  const handleFilter = (e) => {
    const searchWords = e.target.value;
    const neweventInfo = eventinfo.filter((value) => {
      return value.title.toLowerCase().includes(searchWords.toLowerCase());
    });
    if (searchWords === 0) {
    } else {
      setfilterData(neweventInfo);
    }
  };

  return (
    <div className="re_search">
      <div className="serchbarinput">
        <input
          type="text"
          placeholder="Search like a Pro"
          onChange={handleFilter}
        />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>

      {filterdata.length != 0 && (
        <div className="data-result">
          {eventinfo &&
            filterdata.slice(0, 20).map((val) => {
              return (
                <a className="data-links" href="val.link" target="_blank">
                  <h2>{val.title}</h2>
                  <h2>{val.date}</h2>
                  <h2>{val.city}</h2>
                  <h3>{val.direction}</h3>
                </a>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default NewSearchbar;
