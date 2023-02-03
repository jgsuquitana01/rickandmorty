import { Card, Col, Row } from 'antd';
import React from 'react';

const { Meta } = Card;

type CardType ={
    name:string,
    episode:string
}

const AndEpisode: React.FC<CardType> = ({name,episode}) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        <Meta 
        title={name}
        description={episode}
            />
      </Card>
    </Col>
  </Row>
);

export default AndEpisode;