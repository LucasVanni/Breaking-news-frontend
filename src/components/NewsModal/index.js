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
            style={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 80,
                justifyContent: 'center',
            }}
            show={isModalVisible}
            onHide={() => setIsModalVisible(false)}
        >
            <Modal.Header>
                <Modal.Title>{modalInfos.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{ display: 'flex', flex: 1, justifyContent: 'center' }}
            >
                <img style={{ width: 200 }} src={url} alt={modalInfos.title} />

                <p style={{ marginLeft: 20 }}>{modalInfos.abstract}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button href={modalInfos.url} appearance="primary">
                    Read News
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
