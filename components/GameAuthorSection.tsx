import Image from "next/image";
import { Container } from "react-bootstrap";

interface Author {
  name: string;
  image: string;
  bio: string;
}

interface GameAuthorSectionProps {
  author: Author;
}

const GameAuthorSection: React.FC<GameAuthorSectionProps> = ({ author }) => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "51px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(0, 166, 235, 0.1)",
        borderBottom: "1px solid rgba(0, 166, 235, 0.1)",
      }}
    >
      <Container>
        <div
          className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-4 p-md-5 rounded"
          style={{
            backgroundColor: "#f5f9ff",
            boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
          }}
        >
          <div
            className="position-relative overflow-hidden me-md-4 mb-4 mb-md-0"
            style={{
              width: "117px",
              height: "117px",
              borderRadius: "50%",
              border: "4px solid #ffffff",
              boxShadow: "0 5px 15px rgba(0, 166, 235, 0.2)",
            }}
          >
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="117px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="pt-2">
            <h4
              style={{
                color: "#0a2254",
                fontWeight: 700,
              }}
              className="mb-3"
            >
              Written by:{" "}
              <span style={{ color: "#00a6eb" }}>{author.name}</span>
            </h4>

            <p
              className="m-0"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#495057",
                lineHeight: 1.8,
              }}
            >
              {author.bio}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GameAuthorSection;
