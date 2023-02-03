import { Card, Col, Row } from 'antd';
import React from 'react';

const { Meta } = Card;

type CardType ={
    name:string,
    dimension:string
}

const AndNuevo: React.FC<CardType> = ({name,dimension}) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        <Meta 
        title={name}
        description={dimension}
            />
      </Card>
    </Col>
  </Row>
);

export default AndNuevo;