import React from 'react';

import FlexBoxItemCustom from '../FlexBoxItemCustom';
import PreloadNews from '../PreloadNews';

import setThumbnail from '../../functions/setThumbnail';

export default ({ searchNews, setModalInfos, setIsModalVisible }) => {
    if (searchNews.length === 0) {
        return (
            <>
                <>
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                    <PreloadNews />
                </>
            </>
        );
    }
    return searchNews.map((item, index) => (
        <FlexBoxItemCustom
            setModalInfos={setModalInfos}
            setIsModalVisible={setIsModalVisible}
            setThumbnail={setThumbnail}
            item={item}
            index={index}
        />
    ));
};
