import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/images/emptycard.jpg";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2x1 font-bold mb-6 text-center">Shop</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div><img src={NoProduct} alt="" /></div>
      )}
    </div>
  );
};

export default FilterData;
