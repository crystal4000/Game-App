import Link from "next/link";

interface SidebarItem {
  name: string;
  slug: string;
}

interface SidebarWidgetProps {
  title: string;
  items: SidebarItem[];
}

const SidebarWidget: React.FC<SidebarWidgetProps> = ({ title, items }) => {
  return (
    <div className="widget-item mb-4">
      <div
        className="categories-widget"
        style={{
          background: "#081624",
          opacity: 0.6,
          padding: "30px 20px 10px",
        }}
      >
        <h4
          className="widget-title text-white text-uppercase ps-4 mb-4"
          style={{ fontWeight: 800, fontStyle: "italic" }}
        >
          {title}
        </h4>

        <ul className="list-unstyled px-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={`/category/${item.slug}`}
                className="d-inline-block position-relative mb-3"
                style={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  paddingRight: "19px",
                  backgroundImage: "url(/img/icons/double-arrow.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -120% center",
                  backgroundSize: "11px",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#00a6eb";
                  e.currentTarget.style.backgroundPosition = "right center";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundPosition =
                    "right -120% center";
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarWidget;
