import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import GamesSidebar from "@/components/GamesSidebar";
import { Game } from "@/types";

const GamesList = () => {
  const [activePage, setActivePage] = useState(1);

  // Alphabet filter
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Mock games data
  const games: Game[] = [
    {
      id: 1,
      title: "Zombie Appocalipse 2",
      slug: "zombie-appocalipse-2",
      image: "/img/games/1.jpg",
    },
    {
      id: 2,
      title: "Dooms Day",
      slug: "dooms-day",
      image: "/img/games/2.jpg",
    },
    {
      id: 3,
      title: "The Huricane",
      slug: "the-huricane",
      image: "/img/games/3.jpg",
    },
    {
      id: 4,
      title: "Star Wars",
      slug: "star-wars",
      image: "/img/games/4.jpg",
    },
    {
      id: 5,
      title: "Candy land",
      slug: "candy-land",
      image: "/img/games/5.jpg",
    },
    {
      id: 6,
      title: "E.T.",
      slug: "et",
      image: "/img/games/6.jpg",
    },
    {
      id: 7,
      title: "Zombie Appocalipse 2",
      slug: "zombie-appocalipse-2-2",
      image: "/img/games/7.jpg",
    },
    {
      id: 8,
      title: "Dooms Day",
      slug: "dooms-day-2",
      image: "/img/games/8.jpg",
    },
    {
      id: 9,
      title: "The Huricane",
      slug: "the-huricane-2",
      image: "/img/games/9.jpg",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        padding: "108px 0",
        background: "linear-gradient(45deg, #0a2254 0%, #00a6eb 100%)",
      }}
    >
      <Container>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center mb-5">
          {alphabet.map((letter) => (
            <li key={letter} className="m-1">
              <Link
                href={`/games?filter=${letter}`}
                className="d-flex align-items-center justify-content-center rounded-circle text-white"
                style={{
                  width: "40px",
                  height: "34px",
                  backgroundColor: "#0a4780",
                  borderRadius: "17px",
                  transition: "all 0.3s",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#00a6eb";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#0a4780";
                }}
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>

        <Row className="mx-auto mx-md-0">
          <Col xl={9} lg={8} md={7}>
            <Row className="mx-auto mx-md-0">
              {games.map((game) => (
                <Col key={game.id} lg={3} md={6} className="mb-5">
                  <div className="game-item">
                    <div className="mb-3">
                      <Image
                        src={game.image}
                        alt={game.title}
                        width={255}
                        height={255}
                        className="img-fluid"
                      />
                    </div>
                    <h5
                      className="text-white mb-3"
                      style={{ fontSize: "20px" }}
                    >
                      {game.title}
                    </h5>
                    <Link
                      href={`/games/${game.slug}`}
                      className="read-more"
                      style={{
                        fontSize: "15px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        fontStyle: "italic",
                        color: "#00a6eb",
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#00a6eb";
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
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-center mt-4">
              {[1, 2, 3].map((page) => (
                <Link
                  key={page}
                  href={`/games?page=${page}`}
                  className={`d-flex align-items-center justify-content-center rounded-circle text-white mx-1 ${
                    activePage === page ? "active" : ""
                  }`}
                  style={{
                    width: activePage === page ? "44px" : "38px",
                    height: activePage === page ? "44px" : "44px",
                    borderRadius: "50%",
                    fontSize: "16px",
                    fontWeight: 500,
                    border:
                      activePage === page
                        ? "2px solid #00a6eb"
                        : "2px solid transparent",
                    color: activePage === page ? "#00a6eb" : "#fff",
                    transition: "all 0.3s",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage(page);
                  }}
                  onMouseOver={(e) => {
                    if (activePage !== page) {
                      e.currentTarget.style.border = "2px solid #00a6eb";
                      e.currentTarget.style.color = "#00a6eb";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activePage !== page) {
                      e.currentTarget.style.border = "2px solid transparent";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                >
                  {page < 10 ? `0${page}.` : `${page}.`}
                </Link>
              ))}
            </div>
          </Col>

          <Col xl={3} lg={4} md={5} className="sidebar">
            <GamesSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GamesList;
