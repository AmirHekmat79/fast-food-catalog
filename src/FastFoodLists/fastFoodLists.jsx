import FoodCards from '../FoodCards/foodCards';
const FastFoodLists = ({ fastFoodItems }) => {
  let delay = 0.1;
  return (
    <div className="row">
      {fastFoodItems.map((fastFoodItem) => {
        delay += 0.03;
        return (
          <div
            key={fastFoodItem.id}
            className="col-md-4 col-sm-6 mb-grid-gutter"
          >
            <FoodCards {...fastFoodItem} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodLists;
