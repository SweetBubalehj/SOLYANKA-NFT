import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import "@rainbow-me/rainbowkit/styles.css";
import { Layout, Typography, Col, Row } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import NFTCard from "./ntf-cards";
import { useAccount } from "wagmi";
import React, { useState, useEffect } from "react";
import { NFTs } from "../contract/contract";

const { Header, Content } = Layout;
const { Title } = Typography;


const Home: NextPage = () => {
  const [isConnected, setIsConnected] = useState(false);

  const { address: userAddress } = useAccount();
  const addressIsConnected = userAddress !== undefined;

  useEffect(() => {
    if (addressIsConnected) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [addressIsConnected]);

  return (
    <Layout style={{ minWidth: "750px" }}>
      <Header style={{ paddingTop: "12px" }}>
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
          maxWidth: "1000px",
        }}
      >
        <Row gutter={[0, 45]}>
          {NFTs.map((nfts) => (
            <Col key={nfts.id} span={24}>
              <NFTCard
                id={nfts.id}
                imageSrc={nfts.imageSrc}
                title={nfts.title}
                isConnected={isConnected}
              />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
