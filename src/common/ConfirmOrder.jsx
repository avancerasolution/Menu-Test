import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hNo, sethNo] = useState("");
  const [country, setcountry] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "addSippinginfo",
      payload: {
        hNo,
        country,
        phoneNo,
        pinCode,
        state,
        city,
      },
    });
    localStorage.setItem(
      "ShippingInfo",
      JSON.stringify({
        hNo,
        country,
        phoneNo,
        pinCode,
        state,
        city,
      })
    );
    navigate("/confirmorder");
  };
  return (
    <section className="contact1 contact">
      <main>
        <form onSubmit={handleSubmit}>
          <h2>Shipping Details </h2>
          <div>
            <input
              type="text"
              value={hNo}
              onChange={(e) => sethNo(e.target.value)}
              placeholder="Enter House No"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              placeholder="Enter City"
              required
            />
          </div>
          <div>
            <select
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required
            >
              <option value="">Country</option>
              {Country.getAllCountries().map((i) => (
                <option value={i.isoCode} key={i.isoCode}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          {country && (
            <div>
              <select value={state} onChange={(e) => setstate(e.target.value)}>
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option id={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div>
            <input
              required
              type="text"
              placeholder="Enter Pin Code"
              value={pinCode}
              onChange={(e) => setpinCode(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              type="text"
              value={phoneNo}
              onChange={(e) => setphoneNo(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>
          <button type="submit">Confirm Order </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
