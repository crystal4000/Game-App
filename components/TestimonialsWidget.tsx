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
      <div style={{ backgroundColor: "#081624", padding: "55px 0 50px" }}>
        <h4
          className="widget-title text-white text-uppercase ps-4 mb-4"
          style={{ fontWeight: 700, fontStyle: "italic" }}
        >
          Testimonials
        </h4>

        <div className="px-4">
          <p
            className="mb-4"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#a9b5c5",
              lineHeight: 1.8,
            }}
          >
            {testimonial.text}
          </p>

          <h6 className="ps-3" style={{ color: "#a9b5c5" }}>
            <span style={{ color: "#00a6eb" }}>{testimonial.author},</span>{" "}
            {testimonial.role}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsWidget;
