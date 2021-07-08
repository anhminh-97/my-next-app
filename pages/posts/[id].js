import React from "react";
import { getPostId, getPostsById } from "../../lib/post";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import Layout from "../../components/Layout";

const PostDetail = ({ post }) => {
  return (
    <Layout>
      <Card key={post.id} className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts" passHref>
            <Button type="primary">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostId();
  return {
    paths,
    fallback: false, // nếu ko tìm thấy path sẽ về trang 404;
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostsById(params.id);
  return { props: { post } };
};

export default PostDetail;
