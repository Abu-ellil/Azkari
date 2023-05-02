import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AzkarData from "./Components/AzkarData";

function App() {

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center ">
          <Col sm="8" className="">
            {/* لديك {Phots.length} مواعيد اليوم */}
          </Col>
        </Row>

        <Row className="justify-content-center my-2">
          <Col sm="8" className="">
            <div className="rectangle p-2">
              <AzkarData/>
           
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center my-2 ">
          <Col sm="8" className="d-flex justify-content-between">
            <button className="btn-style">مسح الكل</button>
            <button className="btn-style">عرض الكل</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
