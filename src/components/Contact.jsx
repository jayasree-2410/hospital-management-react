import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">

        <h2 className="text-center mb-5">Contact Us</h2>

        <div className="row">

          <div className="col-md-6">

            <h4>Hospital Information</h4>

            <p><strong>📍 Address:</strong> Hyderabad, Telangana</p>

            <p><strong>📞 Phone:</strong> +91 9876543210</p>

            <p><strong>📧 Email:</strong> info@hospital.com</p>

            <p><strong>🕒 Working Hours:</strong> 24 × 7</p>

          </div>

          <div className="col-md-6">

            <form>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button className="btn btn-primary">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;