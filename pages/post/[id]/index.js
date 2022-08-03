import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { Avatar, List, Button } from "antd";

const Title = styled.div`
  width: 60%;
  text-align: center;
  padding: 30px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const PostContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid;
  border-radius: 30px;
`;

const PostBody = styled.div`
  padding: 20px 0px 0px 0px;
`;

const Post = ({ posts, comments }) => {
  return (
    <>
      <Title>
        <h1>Post</h1>
        <Link href="/">
          <Button style={{ float: "right" }}>뒤로 가기</Button>
        </Link>
      </Title>
      <PostContainer>
        <div style={{ textAlign: "center" }}>
          <h2>{posts.title}</h2>
        </div>
        <div style={{ textAlign: "right" }}>작성자 : {posts.userId}</div>

        <hr />

        <PostBody>
          <h3>{posts.body}</h3>
          <div style={{ textAlign: "right" }}>댓글 {comments.length}개</div>
        </PostBody>

        <hr />

        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.name}
                description={item.body}
              />
            </List.Item>
          )}
        />
      </PostContainer>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res_posts = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const res_comments = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
  );

  const posts = res_posts.data;
  const comments = res_comments.data;

  return { props: { posts, comments } };
}

export default Post;
