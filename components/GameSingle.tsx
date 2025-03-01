import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import RatingWidget from "@/components/RatingWidget";
import TestimonialsWidget from "@/components/TestimonialsWidget";

interface GameRatings {
  price: number;
  graphics: number;
  levels: number;
  gameplay: number;
  difficulty: number;
  overall: number;
}

interface GameContent {
  gameplay: string;
  conclusion: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Author {
  name: string;
  image: string;
  bio: string;
}

interface Game {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  ratings: GameRatings;
  content: GameContent;
  testimonial: Testimonial;
  author: Author;
}

interface GameSingleProps {
  game: Game;
}

const GameSingle: React.FC<GameSingleProps> = ({ game }) => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f5f9ff 0%, #e1f0ff 100%)",
        padding: "104px 0",
      }}
    >
      <Container>
        <div
          className="mb-5 rounded overflow-hidden"
          style={{
            boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
          }}
        >
          <Image
            src={game.image}
            alt={game.title}
            width={1200}
            height={600}
            className="img-fluid w-100"
          />
        </div>

        <Row className="g-4">
          <Col xl={9} lg={8} md={7}>
            <div
              className="bg-white p-4 p-md-5 rounded"
              style={{
                boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
              }}
            >
              <div
                className="mb-3"
                style={{ fontSize: "16px", color: "#6c757d" }}
              >
                {game.date} / in{" "}
                <Link
                  href="#"
                  style={{
                    color: "#00a6eb",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#0a2254";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#00a6eb";
                  }}
                >
                  {game.category}
                </Link>
              </div>

              <h2
                className="mb-4"
                style={{
                  fontSize: "48px",
                  color: "#0a2254",
                  fontWeight: 700,
                }}
              >
                {game.title}
              </h2>

              <h4
                className="mb-3"
                style={{
                  color: "#00a6eb",
                  fontWeight: 700,
                }}
              >
                Gameplay
              </h4>
              <p
                className="mb-4"
                style={{ fontSize: "16px", color: "#495057", lineHeight: 1.8 }}
              >
                {game.content.gameplay}
              </p>

              <h4
                className="mb-3"
                style={{
                  color: "#00a6eb",
                  fontWeight: 700,
                }}
              >
                Conclusion
              </h4>
              <p
                className="mb-4"
                style={{ fontSize: "16px", color: "#495057", lineHeight: 1.8 }}
              >
                {game.content.conclusion}
              </p>

              <div
                className="d-flex align-items-center pt-4 mt-4"
                style={{
                  borderTop: "1px solid #e1f0ff",
                }}
              >
                <p className="me-3 mb-0" style={{ color: "#6c757d" }}>
                  Share:
                </p>
                {[
                  "pinterest",
                  "facebook",
                  "twitter",
                  "dribbble",
                  "behance",
                ].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="d-inline-flex align-items-center justify-content-center rounded-circle ms-2"
                    style={{
                      width: "32px",
                      height: "32px",
                      fontSize: "12px",
                      backgroundColor: "#e1f0ff",
                      color: "#00a6eb",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#00a6eb";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#e1f0ff";
                      e.currentTarget.style.color = "#00a6eb";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <i className={`fa fa-${social}`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </Col>

          <Col xl={3} lg={4} md={5} className="sidebar">
            <div>
              <RatingWidget ratings={game.ratings} />
              <TestimonialsWidget testimonial={game.testimonial} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GameSingle;
