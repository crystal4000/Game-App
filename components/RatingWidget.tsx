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
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px 25px",
          borderRadius: "10px",
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
          RATINGS
        </h4>

        <ul className="list-unstyled mb-4">
          {[
            { name: "Price", value: ratings.price },
            { name: "Graphics", value: ratings.graphics },
            { name: "Levels", value: ratings.levels },
            { name: "Gameplay", value: ratings.gameplay },
            { name: "Difficulty", value: ratings.difficulty },
          ].map((item, index) => (
            <li
              key={index}
              className="d-flex justify-content-between mb-2 pb-2"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                borderBottom: index < 4 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <span style={{ color: "#0a2254" }}>{item.name}</span>
              <div>
                <span style={{ color: "#00a6eb", fontWeight: 700 }}>
                  {item.value}
                </span>
                <span style={{ color: "#6c757d" }}>/5</span>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="text-center p-3 rounded"
          style={{
            backgroundColor: "#f5f9ff",
            boxShadow: "0 3px 10px rgba(0, 166, 235, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#6c757d",
              textTransform: "uppercase",
              marginBottom: "5px",
            }}
          >
            Overall Rating
          </div>
          <h5
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#0a2254",
              margin: 0,
            }}
          >
            <span style={{ color: "#00a6eb" }}>{ratings.overall}</span>
            <span style={{ fontSize: "22px", fontWeight: 500 }}> / 5</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RatingWidget;
