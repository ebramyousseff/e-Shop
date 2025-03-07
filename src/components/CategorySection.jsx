import mancategory from "../assets/images/men-categories.jpg";
import womancategory from "../assets/images/woman-category.jpg";
import kidscategory from "../assets/images/kids-category.jpg";

const categories = [
  {
    title: "Men",
    imageURL: mancategory,
  },
  {
    title: "Women",
    imageURL: womancategory,
  },
  {
    title: "Kids",
    imageURL: kidscategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => {
        return (
          <div key={index} className="relative h-64 transform translate-transform duration-300 hover:scale-105 cursor-pointer">
            <img src={category.imageURL} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
            <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <button className="border border-black w-28 h-12 bg-red-600 text-white hover:bg-red-700 transform translate-transform duration-300 hover:scale-105">View All</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
