interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface TestimonialsWidgetProps {
  testimonial: Testimonial;
}

const TestimonialsWidget: React.FC<TestimonialsWidgetProps> = ({
  testimonial,
}) => {
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
          TESTIMONIALS
        </h4>

        <div
          className="p-4 rounded position-relative"
          style={{
            backgroundColor: "#f5f9ff",
            boxShadow: "0 3px 10px rgba(0, 166, 235, 0.1)",
          }}
        >
          {/* Quote mark */}
          <div
            className="position-absolute"
            style={{
              top: "15px",
              left: "15px",
              fontSize: "36px",
              color: "#00a6eb",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            &quot;
          </div>

          <p
            className="mb-4 mt-3"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#495057",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            {testimonial.text}
          </p>

          <div
            className="d-flex align-items-center"
            style={{
              borderTop: "1px solid rgba(0, 166, 235, 0.1)",
              paddingTop: "15px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#00a6eb",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <div
                style={{
                  color: "#0a2254",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {testimonial.author}
              </div>
              <div
                style={{
                  color: "#6c757d",
                  fontSize: "12px",
                }}
              >
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsWidget;
