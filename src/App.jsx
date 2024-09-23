import { useState, useEffect } from "react";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import { useDispatch } from "react-redux";
import { getCityData } from "./Store/Slices/WeatherSlice.jsx";

function App() {
  // city state
  const [city, setCity] = useState("Kathmandu");

  //unit state
  const [unit, setUnit] = useState("metric"); //metric = C and imperial = F

  //dispatch
  const dispatch = useDispatch();

  // fetch data
  const fetchData = () => {
    dispatch(
      getCityData({
        city,
        unit,
      })
    ).then((res) => {
      if(!res.payload.error){
        dispatch()
      }
    });
  };

  //initial render

  useEffect(() => {
    fetchData();
  }, []);

  // handle city search
  const handleCitySearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="background">
      <div className="box">
        {/* city search form */}
        <form autoComplete="off" onSubmit={handleCitySearch}>
          <label>
            <Icon icon={search} size={20} />
          </label>
          <input
            type="text"
            className="city-input"
            placeholder="Enter City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
}

export default App;
