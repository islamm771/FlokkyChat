import { useState } from "react";
import Select from "../select/Select";
import "./FilterBar.css";

const countries = [
  { id: 1, value: "Egypt" },
  { id: 2, value: "United Arab Emirates" },
  { id: 3, value: "Bahrain" },
  { id: 4, value: "Saudi" },
];

const industries = [
  { id: 1, value: "Technology" },
  { id: 2, value: "Healthcare" },
  { id: 3, value: "Finance" },
  { id: 4, value: "Real Estate" },
];

const universities = [
  { id: 1, value: "AUC" },
  { id: 2, value: "GUC" },
  { id: 3, value: "Cairo University" },
  { id: 4, value: "Alexandria University" },
];

const FilterBar = ({
  numberOfItems,
  setNumberOfItems,
  withSearch = true,
  withFilter = true,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="filter-bar">
      <div className="filter-bar-top">
        {withSearch && (
          <div className="filter-bar-search">
            <button className="button primary filter-bar-search-icon">
              <svg fill="currentColor">
                <use xlinkHref="#svg-magnifying-glass"></use>
              </svg>
            </button>

            <input
              type="text"
              className="filter-bar-search-input"
              placeholder="Search"
            />
          </div>
        )}

        <div className="filter-bar-view">
          <div className={`number-of-results`}>
            <button
              className={`${numberOfItems === 32 ? "active" : ""}`}
              onClick={() => setNumberOfItems(32)}
            >
              32
            </button>
            <button
              className={`${numberOfItems === 64 ? "active" : ""}`}
              onClick={() => setNumberOfItems(64)}
            >
              64
            </button>
            <button
              className={`${numberOfItems === 128 ? "active" : ""}`}
              onClick={() => setNumberOfItems(128)}
            >
              128
            </button>
          </div>

          <div className="grid-view">
            <button className="grid-view-button active">
              <svg>
                <use xlinkHref="#svg-small-grid-view"></use>
              </svg>
            </button>

            <button className="grid-view-button">
              <svg>
                <use xlinkHref="#svg-list-grid-view"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="filter-bar-container">
        {/* <p className="number-of-results">
          <span>234,556</span> Found
        </p> */}

        <Select
          defaultValue={"University"}
          optionsArray={universities}
          setValue={setValue}
        />

        <Select
          defaultValue={"Country"}
          optionsArray={countries}
          setValue={setValue}
        />

        <Select
          defaultValue={"Industry"}
          optionsArray={industries}
          setValue={setValue}
        />

        <button className="button white">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
