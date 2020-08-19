import React from "react";
import { Card, Icon } from "antd";

const { Meta } = Card;

function CardComponent(props) {
  return (
    <Card
      style={{ width: 300 }}
      /*             cover={
                <img
                    alt={props.cardInfo.fields.description.stringValue}
                    src={props.cardInfo.fields.image.stringValue} />
            } */
      actions={[
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.cardInfo.fields.text.stringValue}
        >
          <Icon type="ellipsis" key="ellipsis" />
        </a>,
      ]}
    >
      <Meta
        title={props.cardInfo.fields.name.stringValue}
        description={props.cardInfo.fields.type.stringValue}
      />
    </Card>
  );
}

export default CardComponent;
