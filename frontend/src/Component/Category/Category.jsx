import { Link } from "react-router-dom";
import "./Category.css";
const Category = () => {
  return (
    <>
      <Link to={"/category/all"}>
        <button className="btn-Category">All</button>
      </Link>
      <Link to={"/category/all"}>
        <button className="btn-Category">thời trang nữ</button>
      </Link>
      <Link to={"/category/all"}>
        <button className="btn-Category">thời trang nam</button>
      </Link>
    </>
  );
};

export default Category;
