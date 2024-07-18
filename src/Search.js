import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
        <form>
          <input type="search" placeholder="Enter a city" className="search-input" autofocus="on" />
          <input type="submit" value="Search" className="search-btn" />
        </form>
    </div>
  );
}
