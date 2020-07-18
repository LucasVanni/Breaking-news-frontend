/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FlexboxGrid, Panel, Col } from 'rsuite';

export default ({
    item,
    index,
    setThumbnail,
    updatedDate,
    setModalInfos,
    setIsModalVisible,
}) => {
    const [mouseOver, setMouseOver] = useState(true);

    return (
        <FlexboxGrid.Item
            style={{
                display: 'inline-block',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: 20,
            }}
            componentClass={Col}
            lg={70}
            key={index}
        >
            <a
                onClick={() => {
                    setModalInfos(item);
                    setIsModalVisible(true);
                }}
            >
                <Panel
                    className="Panel"
                    shaded
                    bodyFill
                    bordered
                    style={{
                        display: 'inline-block',
                        width: 400,
                        height: 520,
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
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        src={setThumbnail(item.multimedia)}
                        alt={item.abstract}
                    />
                    <Panel
                        header={item.title}
                        style={{
                            display: 'Flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <p>
                            {item.abstract.length > 120
                                ? `${item.abstract.substr(
                                      0,
                                      120
                                  )}... Click here and see more`
                                : item.abstract}
                        </p>
                        <p
                            style={{
                                display: 'Flex',
                                marginTop: 10,
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <small>{updatedDate(item.updated_date)}</small>
                            <small>{item.byline}</small>
                        </p>
                    </Panel>
                </Panel>
            </a>
        </FlexboxGrid.Item>
    );
};
