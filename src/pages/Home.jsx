import { categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/images/feature-image-info.jpg";
import InfoSections from "../components/InfoSections";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2 ">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImage} alt="" className="h-full ml-32 w-auto" />
          <div className="absolute bottom-20 left-48">
            <button className="border border-black w-28 h-12 bg-red-600 text-white hover:bg-red-700 transform translate-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <InfoSections />
      </div>
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2x1 font-bold mb-6 text-center">Top Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0, 5).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
