import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import { Avatar, List } from "antd";

const HomeContainer = styled.div`
  width: 60%;
  // height: 100%;
  // position: absolute;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // margin: auto;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid;
  border-radius: 30px;
`;

const Home = ({ data }) => {
  return (
    <>
      <div style={{ textAlign: "center", padding: 30 }}>
        <h1>심플한 게시판</h1>
      </div>
      <HomeContainer>
        <List
          itemLayout="horizontal"
          dataSource={data}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
            style: { textAlign: "center", marginBottom: 20 },
          }}
          renderItem={(item) => (
            <Link href="/post/[id]" as={`/post/${item.id}`}>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={"작성자 : " + item.userId}
                  description={<h4>{item.title}</h4>}
                />
              </List.Item>
            </Link>
          )}
          style={{ cursor: "pointer" }}
        />
      </HomeContainer>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const data = res.data;

  return { props: { data } };
}

export default Home;
