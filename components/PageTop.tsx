import Link from "next/link";

interface Breadcrumb {
  name: string;
  link: string | null;
}

interface PageTopProps {
  title: string;
  breadcrumb: Breadcrumb[];
  bgImage: string;
}

const PageTop: React.FC<PageTopProps> = ({ title, breadcrumb, bgImage }) => {
  return (
    <section
      className="position-relative py-5"
      style={{
        height: "355px",
        paddingTop: "210px",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />

      {/* Blue Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to right, rgba(10, 34, 84, 0.8) 0%, rgba(0, 166, 235, 0.7) 100%)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div
        className="container mx-auto position-relative"
        style={{
          maxWidth: "1496px",
          paddingLeft: "60px",
          zIndex: 1,
          marginTop: "150px",
        }}
      >
        <h2
          className="text-white mb-2"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {title}
        </h2>
        <div className="text-white">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {item.link ? (
                <>
                  <Link
                    href={item.link}
                    className="text-white me-2"
                    style={{
                      fontWeight: 600,
                      transition: "color 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#00a6eb";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    {item.name}
                  </Link>
                  {index < breadcrumb.length - 1 && (
                    <span className="mx-2">/</span>
                  )}
                </>
              ) : (
                <span
                  style={{
                    fontWeight: 700,
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(0, 166, 235, 0.8)",
                  }}
                >
                  {item.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageTop;
