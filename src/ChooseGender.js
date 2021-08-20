import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import BoyIcon from "./assets/boy_icon.png";
import GirlIcon from "./assets/girl_icon.png";

export default function ChooseGender() {
  const history = useHistory();
  return (
    <article>
      <h1>Choose your Hostel</h1>
      <section className="cardContainer">
        <div
          onClick={() => {
            history.push("/bookHostel/G");
          }}
          className="girlCard"
        >
          <div className="iconCircle">
            <img src={GirlIcon} alt="" />
          </div>
          <h3>Girls Hostels</h3>
        </div>

        <div
          onClick={() => {
            history.push("/bookHostel/B");
          }}
          className="boyCard"
        >
          <div className="iconCircle">
            <img src={BoyIcon} alt="" />
          </div>
          <h3>Boys Hostel</h3>
        </div>
      </section>
    </article>
  );
}
