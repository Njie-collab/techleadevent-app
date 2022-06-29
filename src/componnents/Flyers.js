import { useState, useEffect } from "react";
// const imageUrl = "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1 ";

const Flyers = () => {
  const [showImages, setShowImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1463949-1809552-front.jpg?dateUpdated=1634114327453"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowImages(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {showImages &&
        showImages.map((items) => {
          return (
            <div className="event-display-desc" key={items.id}>
              <img src="https://static.ra.co/images/events/flyer/2021/10/uk-1016-1463949-1809552-front.jpg?dateUpdated=1634114327453" alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default Flyers;
