import Link from "next/link";
import { Category } from "@/types";

interface CategoriesWidgetProps {
  categories: Category[];
}

const CategoriesWidget: React.FC<CategoriesWidgetProps> = ({ categories }) => {
  return (
    <div className="widget-item mb-5">
      <div style={{ backgroundColor: "#081e40", padding: "55px 0 25px" }}>
        <h4
          className="widget-title text-white text-uppercase ps-4 mb-4"
          style={{ fontWeight: 700, fontStyle: "italic" }}
        >
          Categories
        </h4>
        <ul className="list-unstyled px-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className="d-inline-block position-relative mb-3"
                style={{
                  fontSize: "16px",
                  color: "#68647d",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  paddingRight: "19px",
                  backgroundImage: "url(/img/icons/double-arrow.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -120% center",
                  backgroundSize: "11px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#00a6eb";
                  e.currentTarget.style.backgroundPosition = "right center";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#68647d";
                  e.currentTarget.style.backgroundPosition =
                    "right -120% center";
                }}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesWidget;
