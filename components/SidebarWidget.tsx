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
          background: "#ffffff",
          padding: "25px 20px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
        }}
      >
        <h4
          className="widget-title mb-4"
          style={{
            color: "#0a2254",
            fontWeight: 700,
            borderLeft: "3px solid #00a6eb",
            paddingLeft: "15px",
          }}
        >
          {title}
        </h4>

        <ul className="list-unstyled px-2">
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                borderBottom: "1px solid #f0f0f0",
                padding: "8px 0",
              }}
            >
              <Link
                href={`/category/${item.slug}`}
                className="d-inline-block position-relative"
                style={{
                  fontSize: "15px",
                  color: "#495057",
                  fontWeight: 500,
                  transition: "all 0.3s",
                  paddingRight: "19px",
                  backgroundImage: "url(/img/icons/double-arrow.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -120% center",
                  backgroundSize: "11px",
                  textDecoration: "none",
                  display: "block",
                  padding: "3px 0",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#00a6eb";
                  e.currentTarget.style.backgroundPosition = "right center";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#495057";
                  e.currentTarget.style.backgroundPosition =
                    "right -120% center";
                  e.currentTarget.style.transform = "translateX(0)";
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
