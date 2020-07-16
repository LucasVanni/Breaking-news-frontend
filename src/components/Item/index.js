import React from 'react';

import FlexBoxItemCustom from '../FlexBoxItemCustom';

const imageNYT = require('../../assets/LogoNTY.jpg');

export default ({ searchNews }) => {
  const setThumbnail = (multimedia) => {
    let url = '';

    if (multimedia !== null) {
      multimedia.forEach((element) => {
        if (element.width === 440) {
          url = element.url;
        }
      });
    } else {
      url = imageNYT;
    }

    return url;
  };

  const updatedDate = (dateItem) => {
    const ano = dateItem.substr(0, 4);
    const mes = dateItem.substr(5, 2);
    const dia = dateItem.substr(8, 2);

    const hora = dateItem.substr(11, 7);

    return `Last updated: ${mes}/${dia}/${ano} ${hora}`;
  };

  return searchNews.map((item, index) => (
    <FlexBoxItemCustom
      updatedDate={updatedDate}
      setThumbnail={setThumbnail}
      item={item}
      index={index}
    />
  ));
};
