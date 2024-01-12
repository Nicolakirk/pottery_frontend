import { fetchCategories } from "../utils/api";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryButtons = () => {
  const [categoriesList, SetCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchCategories().then((categories) => {
      SetCategoriesList(categories);
    });
  });
  return (
    <div className="mb-3">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="categoryDropdown">
          {selectedCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to={`/store`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Dropdown.Item>
          {categoriesList.map((category) => (
            <Dropdown.Item
              key={category.slug}
              as={Link}
              to={`/products/categories/${category.slug}`}
              // onClick={() => setSelectedCategory(category.slug)}
            >
              {category.slug}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default CategoryButtons;
