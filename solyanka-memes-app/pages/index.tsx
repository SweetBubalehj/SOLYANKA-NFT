import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import "@rainbow-me/rainbowkit/styles.css";
import { Layout, Typography, Col, Row } from "antd";
import { SmileOutlined } from "@ant-design/icons";


const { Header, Content } = Layout;
const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <Layout>
      <Header style={{paddingTop: "12px"}}>
        <Row justify="space-between" align="middle">
          <Col style={{ display: "flex", alignItems: "center" }}>
            <SmileOutlined
              style={{ fontSize: "24px", color: "white", marginRight: "8px" }}
            />
            <Title level={3} style={{ color: "white", margin: 0 }}>
              SOLYANKA MEMES
            </Title>
          </Col>
          <Col>
                <ConnectButton />
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          margin: "0 auto",
          padding: "50px",
          width: "50%",
          minWidth: "750px",
        }}
      >
          {/* Web page file here */}
      </Content>
    </Layout>
  );
};

export default Home;
