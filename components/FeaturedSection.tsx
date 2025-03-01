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
        }}
      >
        <div className="text-box" style={{ maxWidth: "810px" }}>
          <div
            className="top-meta mb-3"
            style={{ fontSize: "18px", color: "#68647d" }}
          >
            11.11.18 / in{" "}
            <Link href="#" style={{ color: "#b01ba5" }}>
              Games
            </Link>
          </div>

          <h3
            className="my-4"
            style={{
              fontSize: "60px",
              maxWidth: "100%",
            }}
          >
            The game you&apos;ve been waiting for is out now
          </h3>

          <p className="mb-4" style={{ fontSize: "16px" }}>
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

          <Link href="#" className="read-more" style={{ color: "#251e2f" }}>
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
