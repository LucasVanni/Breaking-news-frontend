import React, { useEffect, useState } from 'react';

import 'rsuite/dist/styles/rsuite-dark.css';
import {
    Container,
    Content,
    Footer,
    FlexboxGrid,
    AutoComplete,
    Icon,
    InputGroup,
    Pagination,
    Header,
} from 'rsuite';
import Lottie from 'lottie-react-web';
import Item from './components/Item';
import api from './service/api';
import JSON from './assets/Logo.json';

function App() {
    const [copyrightMessage, setCopyrightMessage] = useState('');
    // const [news, setNews] = useState([]);
    const [searchNews, setSearchNews] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get(`news?qtdNews=12&page=${actualPage}`).then((response) => {
            const { resultMap } = response.data;

            setCopyrightMessage(response.data.copyright);
            // setNews(response.data.results);
            setSearchNews(resultMap);
            setData(resultMap.map((item) => item.title));
        });
    }, [actualPage]);

    return (
        <div className="App">
            <Container>
                <>
                    <Header>
                        <Lottie
                            options={{
                                animationData: JSON,
                                loop: false,
                                autoplay: true,
                            }}
                            height={300}
                        />
                    </Header>
                    <Content>
                        <div
                            style={{
                                display: 'Flex',
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <InputGroup
                                style={{
                                    marginLeft: 200,
                                    marginRight: 200,
                                }}
                            >
                                <AutoComplete
                                    placeholder="Seach here"
                                    data={data}
                                    onSelect={() => alert('EU')}
                                />
                                <InputGroup.Button
                                    onClick={() => alert('Você')}
                                >
                                    <Icon icon="search" />
                                </InputGroup.Button>
                            </InputGroup>
                        </div>
                        <FlexboxGrid
                            style={{ padding: 40 }}
                            justify="space-around"
                        >
                            <Item searchNews={searchNews} />
                        </FlexboxGrid>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Pagination
                                pages={10}
                                activePage={actualPage}
                                prev
                                last
                                next
                                first
                                size="xs"
                                onSelect={(next) => {
                                    setSearchNews([]);
                                    setActualPage(next);
                                }}
                            />
                        </div>
                    </Content>
                    <Footer>
                        <div
                            style={{
                                display: 'flex',
                                height: 80,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <p style={{ textAlign: 'center' }}>
                                {copyrightMessage}
                            </p>
                        </div>
                    </Footer>
                </>
            </Container>
        </div>
    );
}

export default App;
