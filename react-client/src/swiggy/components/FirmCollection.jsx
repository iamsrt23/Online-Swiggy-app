import React, { useState, useEffect } from "react";
import { API_PATH } from "../api";
import { Link } from "react-router-dom";

const FirmCollection = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_PATH}vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
      console.log("FirmData:", newFirmData);
    } catch (error) {
      alert("FirmData not Fetched");
      console.error("Firm data is not fetched");
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <>
      <h3>Resturants with Online Food Delivery In Hyderabad</h3>
      <div className="filterButtons">
        <button
          onClick={() => filterHandler("All", "all")}
          className={activeCategory === "all" ? "activeButton" : ""}
        >
          All
        </button>
        <button
          onClick={() => filterHandler("south-indian", "south-indian")}
          className={activeCategory === "south-indian" ? "activeButton" : ""}
        >
          south-indian
        </button>
        <button
          onClick={() => filterHandler("north-indian", "north-indian")}
          className={activeCategory === "north-indian" ? "activeButton" : ""}
        >
          north-indian
        </button>
        <button
          onClick={() => filterHandler("chinese", "chinese")}
          className={activeCategory === "chinese" ? "activeButton" : ""}
        >
          chinese
        </button>
        <button
          onClick={() => filterHandler("bakery", "bakery")}
          className={activeCategory === "bakery" ? "activeButton" : ""}
        >
          bakery
        </button>
      </div>

      <section className="firmSection">
        {firmData.map((apple) => {
          return apple.firm.map((item) => {
            if (
              selectedRegion === "All" ||
              item.region.includes(selectedRegion.toLocaleLowerCase())
            ) {
              return (
                <Link
                  to={`products/${item._id}/${item.firmName}`}
                  className="link"
                >
                  <div className="firmGroupBox">
                    <div className="firmGroup">
                      <img
                        src={`${API_PATH}uploads/${item.image}`}
                        alt={item.image}
                      />
                      <div className="firmOffer">{item.offer}</div>
                    </div>
                    <div className="firmDetails">
                      {/* <p>{item._id}</p> */}
                      <strong>{item.firmName}</strong>
                      <div className="firmArea">{item.region.join(",")}</div>
                      <div className="firmArea">{item.area}</div>
                    </div>
                  </div>
                </Link>
              );
            }
          });
          return null;
        })}
      </section>
    </>
  );
};

export default FirmCollection;
