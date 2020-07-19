import React, { useEffect, useState } from 'react';
import 'rsuite/dist/styles/rsuite-dark.css';
import { Container } from 'rsuite';
import ContentCustom from './components/ContentCustom';

import HeaderCustom from './components/HeaderCustom';
import NewsModal from './components/NewsModal';

import api from './service/api';
import FooterCustom from './components/FooterCustom';

export default () => {
    const [copyrightMessage, setCopyrightMessage] = useState('');
    const [news, setNews] = useState([]);
    const [searchNews, setSearchNews] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [modalInfos, setModalInfos] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        api.get(`news?qtdNews=12&page=${actualPage}`).then((response) => {
            const { resultMap } = response.data;
            setCopyrightMessage(response.data.copyright);
            setNews(resultMap);
            setSearchNews(resultMap);
            setData(resultMap.map((item) => item.title));
            setFullData(resultMap.map((item) => item));
        });
    }, [actualPage]);

    return (
        <div className="App">
            <Container>
                <>
                    <HeaderCustom />
                    <NewsModal
                        modalInfos={modalInfos}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                    />
                    <ContentCustom
                        news={news}
                        setActualPage={setActualPage}
                        searchNews={searchNews}
                        setSearchNews={setSearchNews}
                        setModalInfos={setModalInfos}
                        setIsModalVisible={setIsModalVisible}
                        data={data}
                        fullData={fullData}
                        actualPage={actualPage}
                    />
                    <FooterCustom copyrightMessage={copyrightMessage} />
                </>
            </Container>
        </div>
    );
};
