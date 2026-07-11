import "../styles/Doctors.css";

const doctors = [
  {
    name: "Dr. Siva Kumar",
    specialization: "Cardiologist",
  },
  {
    name: "Dr. Jayasree",
    specialization: "Neurologist",
  },
  {
    name: "Dr. Ajay Kumar",
    specialization: "Orthopedic",

  },
  {
    name: "Dr. Abhiram",
    specialization: "Pediatrician",
  },
];

function Doctors() {
  return (
    <section className="doctors py-5" id="doctors">
      <div className="container">

        <h2 className="text-center mb-5">
          Meet Our Doctors
        </h2>

        <div className="row">

          {doctors.map((doctor, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="doctor-card">


                <h4>{doctor.name}</h4>

                <p>{doctor.specialization}</p>

                <button className="btn btn-primary">
                  View Profile
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Doctors;