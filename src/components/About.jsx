import "../styles/About.css";

function About() {
  return (
    <section className="about py-5" id="about">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
              alt="Hospital"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">

            <h2>About Our Hospital</h2>

            <p>
              Our Hospital Management System is designed to provide
              efficient healthcare services through modern technology.
            </p>

            <p>
              We offer high-quality patient care with experienced doctors,
              advanced laboratories, digital medical records, and
              24×7 emergency support.
            </p>

            <button className="btn btn-primary">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;