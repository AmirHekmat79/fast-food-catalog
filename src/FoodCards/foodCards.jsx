import { HiShoppingCart } from 'react-icons/hi';
import '../FoodCards/foodCards.css';
const FoodCards = ({ name, price, imageUrl, ingredients, delay }) => {
  return (
    <div
      className="card h-100 product-card border-0 pb-1 shadow-sm fade-in-horiz"
      style={{ animationDelay: delay + 's' }}
    >
      <span className="badge badge-end badge-shadow  bg-success fs-md fw-medium">
        قیمت : {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img className="card-img-top" src={imageUrl} alt={'محصولات'} />
      </div>
      <div className="card-body text-center pb-4 pt-3 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
        <div className="text-muted fs-ms fw-bold mb-3">{ingredients}</div>
        <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FoodCards;
