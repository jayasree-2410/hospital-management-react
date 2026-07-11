import {
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaFlask,
  FaPills,
  FaXRay,
} from "react-icons/fa";

import "../styles/Services.css";

function Services() {
  const services = [
    {
      icon: <FaUserMd />,
      title: "General Medicine",
      description: "Expert consultation and treatment.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      description: "Advanced heart care and diagnosis.",
    },
    {
      icon: <FaFlask />,
      title: "Laboratory",
      description: "Accurate diagnostic testing.",
    },
    {
      icon: <FaPills />,
      title: "Pharmacy",
      description: "24×7 medicine availability.",
    },
    {
      icon: <FaXRay />,
      title: "Radiology",
      description: "Modern X-Ray and scanning services.",
    },
    {
      icon: <FaAmbulance />,
      title: "Emergency",
      description: "Emergency care available 24×7.",
    },
  ];

  return (
    <section className="services py-5" id="services">
      <div className="container">

        <h2 className="text-center mb-5">
          Our Services
        </h2>

        <div className="row">

          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;