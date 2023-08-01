/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  CardText,
  CardImg,
} from "reactstrap";

const ProductCard = () => {
  return (
    <>
      <Card style={{ width: "20rem", marginRight: "12px" }}>
        <CardImg
          top
          src="https://th.bing.com/th/id/OIP.6XLx8coDdFw1qAhrn6qPIgHaFj?pid=ImgDet&rs=1"
          alt="..."
        />
        <CardBody>
          <CardTitle>{"Title here"}</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button color="primary">Go somewhere</Button>
        </CardBody>
      </Card>
    </>
  );
};

const products = [1, 2, 3, 4];

const Products = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Row>
              {products.map((product) => (
                <>
                  <ProductCard key={product} />
                </>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
