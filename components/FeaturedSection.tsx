import Image from "next/image";
import Link from "next/link";

const FeaturedSection = () => {
  return (
    <section className="position-relative overflow-hidden">
      <div
        className="position-absolute h-100"
        style={{
          width: "calc(50% - 156px)",
          backgroundImage: "url(/img/featured-bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></div>

      <div
        className="ms-auto bg-white p-5"
        style={{
          width: "calc(50% + 156px)",
          padding: "100px 50px 130px 79px",
          boxShadow: "-10px 0 30px rgba(0, 166, 235, 0.1)",
        }}
      >
        <div className="text-box" style={{ maxWidth: "810px" }}>
          <div
            className="top-meta mb-3"
            style={{ fontSize: "16px", color: "#6c757d" }}
          >
            11.11.18 / in{" "}
            <Link
              href="#"
              style={{
                color: "#00a6eb",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#0a2254";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#00a6eb";
              }}
            >
              Games
            </Link>
          </div>

          <h3
            className="my-4"
            style={{
              fontSize: "48px",
              maxWidth: "100%",
              color: "#0a2254",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            The game you&apos;ve been waiting for is out now
          </h3>

          <p
            className="mb-4"
            style={{
              fontSize: "16px",
              color: "#495057",
              lineHeight: 1.7,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquamet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum posuere porttitor justo id pellentesque. Proin id lacus
            feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque
            vestibulum metus...
          </p>

          <Link
            href="#"
            style={{
              color: "#00a6eb",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#0a2254";
              e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#00a6eb";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            Read More{" "}
            <Image
              src="/img/icons/double-arrow.png"
              alt="#"
              width={20}
              height={10}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
