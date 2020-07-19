import React, { useState } from 'react';
import { FlexboxGrid, Panel, Col } from 'rsuite';
import PropTypes from 'prop-types';

import updatedDate from '../../functions/updatedDate';

const FlexBoxItemCustom = ({
    item,
    index,
    setThumbnail,
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
            <Panel
                onClick={() => {
                    setModalInfos(item);
                    setIsModalVisible(true);
                }}
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
        </FlexboxGrid.Item>
    );
};

FlexBoxItemCustom.propTypes = {
    item: PropTypes.shape({
        multimedia: PropTypes.shape([]),
        abstract: PropTypes.string,
        title: PropTypes.string,
        updated_date: PropTypes.string,
        byline: PropTypes.string,
    }).isRequired,
    index: PropTypes.string.isRequired,
    setThumbnail: PropTypes.func.isRequired,
    setModalInfos: PropTypes.func.isRequired,
    setIsModalVisible: PropTypes.func.isRequired,
};

export default FlexBoxItemCustom;
