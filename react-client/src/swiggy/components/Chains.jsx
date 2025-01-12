import React, { useState, useEffect } from "react";
import { API_PATH } from "../api.js";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPositon, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_PATH}vendor/all-vendors`);
      const newData = await response.json();

      setVendorData(newData);
      console.log("This is API Data", newData);
      setLoading(false);
    } catch (error) {
      alert("Failed to Fetch Data");
      console.error("Failed to Fetch data");
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);
  // We have to scroll the Top resturant chians using left and right button
  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 300;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mediaChainSection">
      <div className="loaderSection">
        {loading && (
          <>
            <div className="loader">You 🍲 is Loading </div>
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </>
        )}
      </div>

      <div className="btnSection">
        <button onClick={() => handleScroll("left")}>
          <FaArrowCircleLeft className="btnIcons" />
        </button>
        <button onClick={() => handleScroll("right")}>
          <FaArrowCircleRight className="btnIcons" />
        </button>
      </div>
      <h3>Top Restuarants In Hyderabad</h3>

      <section
        className="chainSection"
        id="chainGallery"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {/* if VendorsData in Vendors Table True Then map the vendor with firmname */}
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <div className="vendorBox">
                {vendor.firm.map((item) => {
                  return (
                    <>
                      <div>{item.firmName}</div>
                      <Link
                        to={`/products/${item._id}/${item.firmName}`}
                        className="link"
                        key={item._id}
                      >
                        <div className="firmImage">
                          <img src={`${API_PATH}uploads/${item.image}`} />
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Chains;
