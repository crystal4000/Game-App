import Image from "next/image";
import Link from "next/link";
import { TrendingPost } from "@/types";

interface TrendingWidgetProps {
  posts: TrendingPost[];
}

const TrendingWidget: React.FC<TrendingWidgetProps> = ({ posts }) => {
  return (
    <div className="widget-item mb-5">
      <h4
        className="widget-title text-white text-uppercase ps-4 mb-4"
        style={{ fontWeight: 700, fontStyle: "italic" }}
      >
        Trending
      </h4>
      <div className="trending-widget">
        {posts.map((post) => (
          <div key={post.id} className="d-flex mb-4">
            <div className="me-3">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={80}
                className="img-fluid"
              />
            </div>
            <div>
              <div
                style={{ color: "#68647d", fontSize: "12px" }}
                className="mb-1"
              >
                {post.date} / in{" "}
                <Link href="#" style={{ color: "#00a6eb" }}>
                  {post.category}
                </Link>
              </div>
              <h5 style={{ fontSize: "18px", color: "#fff", lineHeight: 1.5 }}>
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
