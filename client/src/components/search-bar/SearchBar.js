import React, { useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import Product from "../product/Product";
import "./SearchBar.scss";
import "../../assets/search.png";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchnew();
  }, [search]);

  async function fetchnew() {
    const url = `https://starpi-live-service.onrender.com/api/products?filters[title][$containsi]=${search}&populate=*`;
    const response = await axiosClient.get(url);
    setProducts(response.data.data);
  }
  return (
    <div className="searchBarSection">
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search Pirate-Kart"
          className="inps"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        {/* <button type="submit" className="search-button">
          <img className="imgbtn" src={require("../../assets/search.png")} />
        </button> */}
      </div>
      <div
        className="products-box"
        style={{
          display: "flex",
          flex: "4",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
