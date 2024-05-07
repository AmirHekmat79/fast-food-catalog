import './App.css';
import Header from './Header/header';
import CategoryList from './CategoryList/categoryList';
import FastFoodLists from './FastFoodLists/fastFoodLists';
import Loading from './Loading/loading';
import { useState } from 'react';
import SearchFilter from './SearchFilter/searchFilter';
import NotFound from './assets/images/404.png';
import useAxios from './useAxios';
const App = () => {
  const [url, setUrl] = useState('/FastFood/list');
  const [fastFoodLists, , loading] = useAxios({
    url
  });

  const filterSpecificFood =  (term) => {
    setUrl(`/FastFood/search${term ? '?term=' + term : ''}`);
  };

  const filterFoods = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? '?categoryId=' + categoryId : ''}`);
  };
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (fastFoodLists.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ آیتمی یافت نشد
          </div>
          <img
            className="mx-auto mt-5 d-block fade-in-horiz"
            src={NotFound}
            alt={'not-found'}
          />
        </>
      );
    }
    return <FastFoodLists fastFoodItems={fastFoodLists} />;
  };
  return (
    <>
      <div className="bg-faded-dark wrapper">
        <Header />
        <CategoryList filterFoods={filterFoods}>
          <SearchFilter filterSpecificFood={filterSpecificFood} />
        </CategoryList>
        <div className="container py-5 mt-4">{renderContent()}</div>
      </div>
    </>
  );
};
export default App;
