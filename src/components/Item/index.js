import React from 'react';

import FlexBoxItemCustom from '../FlexBoxItemCustom';
import PreloadNews from '../PreloadNews';

import setThumbnail from '../../functions/setThumbnail';

export default ({ searchNews, setModalInfos, setIsModalVisible }) => {
    const updatedDate = (dateItem) => {
        const ano = dateItem.substr(0, 4);
        const mes = dateItem.substr(5, 2);
        const dia = dateItem.substr(8, 2);

        const hora = dateItem.substr(11, 7);

        return `Last updated: ${mes}/${dia}/${ano} ${hora}`;
    };

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
            updatedDate={updatedDate}
            setThumbnail={setThumbnail}
            item={item}
            index={index}
        />
    ));
};
