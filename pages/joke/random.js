import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getRandomJoke } from "../../lib/joke";
import Link from "next/link";
import Layout from "../../components/Layout";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg="4">
          <Card className="my-3 shadow">
            <Card.Img
              variant="top"
              src={joke.icon_url}
              style={{ width: "100px" }}
            />
            <Card.Body>
              <Card.Title>This a joke</Card.Title>
              <Card.Text>{joke.value}</Card.Text>
              <Card.Text>Created at: {joke.created_at}</Card.Text>
              <Card.Text>Updated at: {joke.updated_at}</Card.Text>
              <Link href="/" passHref>
                <Button type="primary">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  return { props: { joke } };
};

export default Random;
