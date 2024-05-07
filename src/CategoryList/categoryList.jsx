import './categoryList.css';
import Loading from '../Loading/loading';
import useAxios from '../useAxios';
const CategoryList = ({ filterFoods, children }) => {
  const [categories , , loading] = useAxios({
    url : '/FoodCategory/categories'
  })

  const renderContent = () => {
    if (loading) {
      return <Loading theme={'primary'} />;
    }
    return categories.map((category) => {
      return (
        <li
          className="nav-item"
          key={category.id}
          onClick={() => {
            filterFoods(category.id);
          }}
        >
          <a className="nav-link" href="#">
            {category.name}
          </a>
        </li>
      );
    });
  };
  return (
    <>
      <nav className="container  my-n5">
        <div className="d-flex justify-content-between ps-3 align-items-center bg-white shadow-lg py-4 categories rounded-3">
          <ul className="nav">
            <li
              className="nav-item"
              onClick={() => {
                filterFoods();
              }}
            >
              <a className="nav-link" href="#">
                همه فست فود ها
              </a>
            </li>
            {renderContent()}
          </ul>
          {children}
        </div>
      </nav>
    </>
  );
};
export default CategoryList;
