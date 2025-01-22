import "../../../style/component/card/card.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import formatCurrency from "../formatCuruency";
import { addToCart, addToFav } from "../../../rtk/slices/cart-slice";

export const Card = ({ data, badge, dispatch }) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/SingelItem/${data.id}`);
  };
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 mt-3" key={data.id}>
        <div className="card border-0">
          <div className="container">
            <div className="card-image">
              <img src={data.img} alt={data.title} />
            </div>
            <div className="card-body">
              <h4 className="title">{data.title}</h4>
              <div className="card-price mb-2">
                <span>{formatCurrency(data.price)}</span>
                <p className="badge p-1">{badge}</p>
              </div>
              <div className="card-option">
                <Link onClick={() => dispatch(addToCart(data))}>
                  Add To Cart
                </Link>
                <Link onClick={handleViewDetails}>QUICKVIEW</Link>
                <FaRegHeart
                  className="heart"
                  onClick={() => dispatch(addToFav(data))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
