import { useParams, NavLink } from "react-router-dom";
import { getProductData } from "./Api";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ProductDetails.css";
import { StoreContext } from "../Context/Context";
const ProductDetails = () => {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useContext(StoreContext);

  useEffect(() => {
    const productData = getProductData(id);
    productData
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error, "ERROR");
        setLoading(false);
        setError(true);
      });
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <>
        <h2>ERROR: {error.message}</h2>
      </>
    );
  }
  const { title, thumbnail, description, price, rating, discountPercentage } =
    product;
  const handleAdd = () => {
    addToCart(product);
  };
  return (
    <>
      <NavLink to="/" className="backMsg">
        Go Back Home
      </NavLink>
      <div className="productsContainer">
        <div>
          <ul>
            <li>Title: {title}</li>
            <img src={thumbnail} alt={id} className="image" />
            <li>Description: {description}</li>
            <li>Price: {price}</li>
            <li>Rating: {rating}</li>
            <li>Discount Percentage: {discountPercentage}%</li>
          </ul>
        </div>
        <div className="addToCartBtn">
          <button onClick={handleAdd}>Add to cart</button>
        </div>
        <div className="svgIcons">
          {id > 1 && (
            <NavLink to={`/productDetail/${id - 1}`}>
              <FaArrowLeft />
            </NavLink>
          )}
          <NavLink to={`/productDetail/${id + 1}`}>
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
