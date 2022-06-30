import { useState, useEffect } from "react";
// import SearchEvents from "./SearchEvents"
// const api_key="https://tlv-events-app.herokuapp.com/events/uk/london"
import NewSearchbar from "./NewSearchbar";
import Button from "@mui/material/Button";

const Events = () => {
  const [eventinfo, setEventinfo] = useState(null);

  // const[time,setime]=useState("")

  const handleDelete = (id) => {
    const newEvents = eventinfo.filter((item) => item._id !== id);
    setEventinfo(newEvents);
  };

  const addToCart = (item) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const updatedCart = cart.split(",").push(item);
      localStorage.setItem("cart", updatedCart);
    } else {
      localStorage.setItem("cart", [item]);
    }
  };
  useEffect(() => {
    fetch(process.env.REACT_APP_MY_API)
      // fetch("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEventinfo(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="event-display">
      <div className="serach-filter">
      <h2>Search Your Events</h2>
        <NewSearchbar eventinfo={eventinfo} />
      </div>
      {eventinfo &&
        eventinfo.map((item) => {
          return (
            <div className="event-display-desc" key={item.id}>
              <h3>{item.date}</h3>
              {/* <a href="#">{item.flyerFront}</a> */}
              <a href={item.venue.direction} target="_blank">
                <img src={item.flyerFront} width="300px" alt="pic" />
              </a>
              <div className="item-discription">
                <h1>{item.artist}</h1>
                <h2>{item.title}</h2>
                <h2>{item.city}</h2>
                <h2>{item.country}</h2>
                <h4>{item.attending}</h4>
                <p>{item.startTime}</p>
                <p>{item.endTime}</p>
                <a href="https://www.google.com/maps/dir//Colour+Factory+london">
                  {item.venue.direction}
                </a>
                <Button
                  variant="contained"
                  eventinfo={eventinfo}
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  eventinfo={eventinfo}
                  onClick={() => addToCart(item)}
                >
                  AddToCart
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Events;
