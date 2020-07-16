/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FlexboxGrid, Panel, Col } from 'rsuite';

export default ({ item, index, setThumbnail, updatedDate }) => {
  const [mouseOver, setMouseOver] = useState(true);

  return (
    <FlexboxGrid.Item
      style={{ marginBottom: 10 }}
      componentClass={Col}
      colspan={24}
      md={6}
      key={index}
    >
      <a href={item.url}>
        <Panel
          shaded
          bodyFill
          bordered
          style={{
            display: 'inline-block',
            width: 400,
            height: 490,
            cursor: 'pointer',
            opacity: mouseOver ? 0.8 : 1,
            boxShadow: mouseOver
              ? '0px 0px 0px transparent'
              : '1px 4px 1px #9E9E9E',
          }}
          onMouseOver={() => setMouseOver(false)}
          onMouseOut={() => setMouseOver(true)}
        >
          <img
            src={setThumbnail(item.multimedia)}
            width="400"
            height="280"
            alt={item.abstract}
          />
          <Panel header={item.title}>
            <p>
              {item.abstract.length > 120
                ? `${item.abstract.substr(0, 120)}... Click here and see more`
                : item.abstract}
            </p>
            <p
              style={{
                position: 'absolute',
                display: 'fixed',
                bottom: 20,
              }}
            >
              <small>{updatedDate(item.updated_date)}</small>
            </p>

            <p
              style={{
                position: 'absolute',
                display: 'fixed',
                bottom: 40,
              }}
            >
              <small>{item.byline}</small>
            </p>
          </Panel>
        </Panel>
      </a>
    </FlexboxGrid.Item>
  );
};
