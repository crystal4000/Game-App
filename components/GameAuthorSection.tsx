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
        backgroundColor: "#081624",
        padding: "51px 0",
        overflow: "hidden",
      }}
    >
      <Container>
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
          <div
            className="position-relative overflow-hidden me-md-4 mb-4 mb-md-0"
            style={{
              width: "117px",
              height: "117px",
              borderRadius: "50%",
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
            <h4 className="text-white mb-3">
              Written by:{" "}
              <span style={{ color: "#00a6eb" }}>{author.name}</span>
            </h4>

            <p
              className="m-0"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#fff",
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
