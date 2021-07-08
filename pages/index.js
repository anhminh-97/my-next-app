import Layout from "../components/Layout";
import { Jumbotron, Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Link href="/posts" passHref>
            <Button variant="primary">Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
