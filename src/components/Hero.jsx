import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="container">

          <div className="hero-content">

            <h1>Your Health Is Our Priority</h1>

            <p>
              We provide quality healthcare with experienced doctors,
              modern equipment and 24×7 emergency services.
            </p>

            <div className="hero-btns">

              <Link to="/login" className="btn btn-primary btn-lg">
                Login
              </Link>

              <button className="btn btn-outline-primary btn-lg">
                Book Appointment
              </button>

            </div>

          </div>

        </div>

      </section>

      <section className="hero-cards">

        <div className="hero-features">
          <div className="feature-card">
            <h3>👨‍⚕️ Experienced Doctors</h3>
            <p>Highly qualified specialists.</p>
          </div>

          <div className="feature-card">
            <h3>🏥 Modern Equipment</h3>
            <p>Latest diagnostic technology.</p>
          </div>

          <div className="feature-card">
            <h3>🚑 Emergency Care</h3>
            <p>24×7 emergency support.</p>
          </div>

          <div className="feature-card">
            <h3>❤️ Trusted Care</h3>
            <p>Thousands of happy patients.</p>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;