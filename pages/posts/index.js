import React from "react";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";
import { Card } from "react-bootstrap";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`posts/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Get static data from api
export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

export default Posts;
