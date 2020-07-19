import React from 'react';
import { Modal, Button } from 'rsuite';
import PropTypes from 'prop-types';
import setThumbnail from '../../functions/setThumbnail';

const NewsModal = ({ modalInfos, isModalVisible, setIsModalVisible }) => {
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
                <Modal.Title>Preview News</Modal.Title>
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
                <div
                    style={{
                        width: 200,
                        marginBottom: 10,
                        flexWrap: 'wrap',
                        fontWeight: 'bold',
                        wordBreak: 'break-word',
                    }}
                >
                    {modalInfos.title}
                </div>
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

NewsModal.propTypes = {
    modalInfos: PropTypes.shape([]).isRequired,
    isModalVisible: PropTypes.bool.isRequired,
    setIsModalVisible: PropTypes.func.isRequired,
};

export default NewsModal;
