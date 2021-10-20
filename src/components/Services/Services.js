import { Container, Row } from "react-bootstrap";
import useServices from "../../Hooks/useServices";
import Service from "./Service/Service";
import "./Services.css";
const Services = () => {
  const [services] = useServices();
  return (
    <div className="my-5">
      <Container id="services" className="service-section text-center">
        <div className="m-5">
          <h1 className="title">Services</h1>
          <h4>Energy is for Everyone</h4>
          <p>Believe in the power of a motivating group fitness community.</p>
        </div>
        <div>
          <Row xs={1} md={2} lg={3} className="g-5 mb-5">
            {/* mapping and slicing data to show minimal courses */}
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
