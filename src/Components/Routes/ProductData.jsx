import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductData.css";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
const ProductData = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default sort");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productsUrl = "https://dummyjson.com/products";
    axios
      .get(productsUrl)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setLoading(false);
        setError(true);
      });
  }, []);
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="errorMsg">
        <h2>Error fetching products. Please try again later</h2>
      </div>
    );
  }

  const filterSearchProduct = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  if (sort === "price") {
    filterSearchProduct.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === "name") {
    filterSearchProduct.sort((a, b) => {
      return a.title < b.title ? -1 : 1;
    });
  }
  return (
    <div className="productContainer">
      <div className="optionContainer">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Enter Products.."
            value={query}
            onChange={handleQuery}
            className="search"
          />
          <select className="selectOption" onClick={handleSort}>
            <option value="default">default sort</option>
            <option value="price">sort by price</option>
            <option value="name">sort by name</option>
          </select>
        </div>
      </div>
      <div>
        <div className="productData">
          {filterSearchProduct.length > 0 ? (
            filterSearchProduct.map(
              ({ id, title, price, thumbnail, discountPercentage, rating }) => (
                <ul key={id}>
                  <h4 className="productName">Product: {title}</h4>
                  <li className="productPrice">Price: {price}</li>
                  <img src={thumbnail} alt={title} className="productImage" />
                  <li className="discount">Discount: {discountPercentage}</li>
                  <li className="rating">Rating: {rating}</li>
                  <NavLink to={`/productDetail/${id}`}>
                    <button className="productDetails">View Details</button>
                  </NavLink>
                </ul>
              )
            )
          ) : (
            <>
              <img
                src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?resize=840x630&vertical=center"
                alt="notfound"
                className="notFoundMsg"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
