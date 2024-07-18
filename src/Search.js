import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <form>
          <input type="search" placeholder="Enter a city" className="col-9" />
          <input type="submit" value="Search" className="col-3" />
        </form>
      </div>
    </div>
  );
}
