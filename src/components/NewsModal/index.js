/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Button } from 'rsuite';
import setThumbnail from '../../functions/setThumbnail';

export default ({ modalInfos, isModalVisible, setIsModalVisible }) => {
    let url;
    if (modalInfos.multimedia !== undefined) {
        url = setThumbnail(modalInfos.multimedia);
    }
    return (
        <Modal
            full
            style={{
                minWidth: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            show={isModalVisible}
            onHide={() => setIsModalVisible(false)}
        >
            <Modal.Header>
                <Modal.Title>
                    <div
                        style={{
                            width: 200,
                            flexWrap: 'wrap',
                            wordBreak: 'break-word',
                            textAlign: 'justify',
                        }}
                    >
                        {modalInfos.title}
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 200,
                }}
            >
                <img
                    style={{ width: 200, marginBottom: 10 }}
                    src={url}
                    alt={modalInfos.title}
                />

                <p>{modalInfos.abstract}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button href={modalInfos.url} appearance="primary">
                    Read News
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
