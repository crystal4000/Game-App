interface Ratings {
  price: number;
  graphics: number;
  levels: number;
  gameplay: number;
  difficulty: number;
  overall: number;
}

interface RatingWidgetProps {
  ratings: Ratings;
}

const RatingWidget: React.FC<RatingWidgetProps> = ({ ratings }) => {
  return (
    <div className="widget-item mb-4">
      <div style={{ backgroundColor: "#081624", padding: "55px 0 30px" }}>
        <h4
          className="widget-title text-white text-uppercase ps-4 mb-4"
          style={{ fontWeight: 700, fontStyle: "italic" }}
        >
          Ratings
        </h4>

        <ul className="list-unstyled px-4 mb-4">
          <li
            className="d-flex justify-content-between mb-2"
            style={{ fontSize: "16px", color: "#00a6eb", fontWeight: 500 }}
          >
            Price
            <span style={{ color: "#a9b5c5" }}>{ratings.price}/5</span>
          </li>
          <li
            className="d-flex justify-content-between mb-2"
            style={{ fontSize: "16px", color: "#00a6eb", fontWeight: 500 }}
          >
            Graphics
            <span style={{ color: "#a9b5c5" }}>{ratings.graphics}/5</span>
          </li>
          <li
            className="d-flex justify-content-between mb-2"
            style={{ fontSize: "16px", color: "#00a6eb", fontWeight: 500 }}
          >
            Levels
            <span style={{ color: "#a9b5c5" }}>{ratings.levels}/5</span>
          </li>
          <li
            className="d-flex justify-content-between mb-2"
            style={{ fontSize: "16px", color: "#00a6eb", fontWeight: 500 }}
          >
            Gameplay
            <span style={{ color: "#a9b5c5" }}>{ratings.gameplay}/5</span>
          </li>
          <li
            className="d-flex justify-content-between mb-2"
            style={{ fontSize: "16px", color: "#00a6eb", fontWeight: 500 }}
          >
            Difficulty
            <span style={{ color: "#a9b5c5" }}>{ratings.difficulty}/5</span>
          </li>
        </ul>

        <div className="text-end pe-4">
          <h5
            className="text-white"
            style={{ fontSize: "36px", fontWeight: 900 }}
          >
            <i
              style={{
                fontWeight: 500,
                fontSize: "16px",
                fontStyle: "italic",
                color: "#a9b5c5",
                textTransform: "uppercase",
                marginRight: "18px",
              }}
            >
              Rating
            </i>
            <span style={{ color: "#00a6eb" }}>{ratings.overall}</span> / 5
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RatingWidget;
