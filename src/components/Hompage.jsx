import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Container align="center" className="p-3">
        <img
          align="center"
          class="img-fluid"
          src="https://images.pexels.com/photos/1675993/pexels-photo-1675993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <p className="p-3" align="center">
          Welcome to my Pottery store. I am a potter living in the northwest of
          England.{" "}
        </p>
        <Link to="/store">
          <Button variant="outline-dark" size="lg">
            Store
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Homepage;
