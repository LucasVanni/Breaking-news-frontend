import React, { useEffect, useState } from 'react';
import 'rsuite/dist/styles/rsuite-dark.css';
import {
  Container,
  Content,
  Footer,
  FlexboxGrid,
  Pagination,
  Header,
} from 'rsuite';
import Lottie from 'lottie-react-web';
import PreloadNews from './components/PreloadNews';
import Item from './components/Item';
import api from './service/api';
import NewsJson from './assets/952-news.json';

function App() {
  const [copyrightMessage, setCopyrightMessage] = useState('');
  // const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    api.get(`news?qtdNews=12&page=${actualPage}`).then((response) => {
      setCopyrightMessage(response.data.copyright);
      // setNews(response.data.results);
      setSearchNews(response.data.results);
      console.log(searchNews);
    });
  }, [actualPage]);

  return (
    <div className="App">
      <Container>
        {searchNews.length === 0 ? (
          <div style={{ padding: 40 }}>
            <PreloadNews />
            <PreloadNews />
            <PreloadNews />
            <PreloadNews />
          </div>
        ) : (
          <>
            <Header>
              <div
                style={{
                  marginRight: 100,
                  display: 'flex',
                }}
              >
                <Lottie
                  options={{
                    animationData: NewsJson,
                    loop: false,
                    autoplay: true,
                  }}
                  height={500}
                />
              </div>
            </Header>
            <Content>
              <FlexboxGrid style={{ padding: 40 }} justify="space-around">
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
                  onSelect={setActualPage}
                />
              </div>
            </Content>
            <Footer>
              <p style={{ textAlign: 'center' }}>{copyrightMessage}</p>
            </Footer>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
