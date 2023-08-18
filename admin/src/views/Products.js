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
  FormGroup,
  Form,
  Input,
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

const ProductTable = () => {
  return (
    <>
      <Table responsive>
        <thead className="text-primary">
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th className="text-right">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td className="text-right">$36,738</td>
          </tr>
          <tr>
            <td>Minerva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaai-Waas</td>
            <td className="text-right">$23,789</td>
          </tr>
          <tr>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td className="text-right">$56,142</td>
          </tr>
          <tr>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td className="text-right">$38,735</td>
          </tr>
          <tr>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td className="text-right">$63,542</td>
          </tr>
          <tr>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td className="text-right">$78,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td className="text-right">$98,615</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

const ProductForm = () => {
  return (
    <>
      <Row>
        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Add New Product</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Company (disabled)</label>
                      <Input
                        defaultValue="Creative Code Inc."
                        disabled
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="3">
                    <FormGroup>
                      <label>Username</label>
                      <Input
                        defaultValue="michael23"
                        placeholder="Username"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input placeholder="Email" type="email" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue="Chet"
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        defaultValue="Faker"
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        defaultValue="Melbourne, Australia"
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>City</label>
                      <Input
                        defaultValue="Melbourne"
                        placeholder="City"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Country</label>
                      <Input
                        defaultValue="Australia"
                        placeholder="Country"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>Postal Code</label>
                      <Input placeholder="ZIP Code" type="number" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        type="textarea"
                        defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" type="submit">
                      Update Profile
                    </Button>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const products = [1, 2, 3, 4];

const Products = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">Notifications Places</CardTitle>
                      <p className="category">Click to view notifications</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => alert("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => alert("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={() => alert("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <ProductForm />
          </Col>
          <ProductTable />
        </Row>
        <Row>
          <Card>
            <CardBody>
              <Col>
                <Row>
                  {products.map((product) => (
                    <>
                      <ProductCard key={product} />
                    </>
                  ))}
                </Row>
              </Col>
            </CardBody>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default Products;
