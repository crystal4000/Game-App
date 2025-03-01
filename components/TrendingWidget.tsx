import Image from "next/image";
import Link from "next/link";
import { TrendingPost } from "@/types";

interface TrendingWidgetProps {
  posts: TrendingPost[];
}

const TrendingWidget: React.FC<TrendingWidgetProps> = ({ posts }) => {
  return (
    <div
      className="widget-item mb-5"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "25px 20px",
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
        TRENDING
      </h4>
      <div className="trending-widget">
        {posts.map((post) => (
          <div
            key={post.id}
            className="d-flex mb-4"
            style={{
              transition: "all 0.3s ease",
              padding: "10px",
              borderRadius: "8px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f9ff";
              e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <div className="me-3">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={80}
                className="img-fluid rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div
                style={{ color: "#6c757d", fontSize: "12px" }}
                className="mb-1"
              >
                {post.date} / in{" "}
                <Link
                  href="#"
                  style={{
                    color: "#00a6eb",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#0a2254";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#00a6eb";
                  }}
                >
                  {post.category}
                </Link>
              </div>
              <h5
                style={{
                  fontSize: "16px",
                  color: "#0a2254",
                  lineHeight: 1.5,
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {post.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingWidget;
