import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [cityName, setCityName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    console.log("cityName:", cityName);
    // Redirect to another component and pass form data as props
    navigate("/weather", { state: { cityName } });
  };

  return (
    <div className="row text-center">
      <h1>Weather Website</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="me-3 mt-3" htmlFor="cityName">
            City Name:
          </label>
          <input
            type="text"
            id="cityName"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <button className="btn btn-sm btn-info px-3 my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
