import React from 'react';
import {
    Content,
    FlexboxGrid,
    AutoComplete,
    InputGroup,
    Pagination,
} from 'rsuite';
import PropTypes from 'prop-types';
import Item from '../Item';

const ContentCustom = ({
    news,
    setSearchNews,
    searchNews,
    setActualPage,
    setIsModalVisible,
    data,
    fullData,
    setModalInfos,
    actualPage,
}) => (
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
                    marginLeft: 40,
                    marginRight: 40,
                }}
            >
                <AutoComplete
                    placeholder="Search here"
                    data={data}
                    onSelect={(item) => {
                        const content = fullData.filter((fData) =>
                            fData.title.includes(item.value)
                        );
                        setSearchNews(content);
                    }}
                    onChange={(texto) => {
                        if (texto === '') {
                            setSearchNews(news);
                        } else {
                            const content = fullData.filter((fData) =>
                                fData.title.includes(texto)
                            );
                            setSearchNews(content);
                        }
                    }}
                />
            </InputGroup>
        </div>
        <FlexboxGrid style={{ padding: 40 }} justify="space-around">
            <Item
                searchNews={searchNews}
                setModalInfos={setModalInfos}
                setIsModalVisible={setIsModalVisible}
            />
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
);

ContentCustom.propTypes = {
    news: PropTypes.shape([]).isRequired,
    searchNews: PropTypes.shape([]).isRequired,
    setSearchNews: PropTypes.func.isRequired,
    setActualPage: PropTypes.func.isRequired,
    setIsModalVisible: PropTypes.func.isRequired,
    data: PropTypes.string.isRequired,
    fullData: PropTypes.shape([]).isRequired,
    actualPage: PropTypes.string.isRequired,
    setModalInfos: PropTypes.func.isRequired,
};

export default ContentCustom;
