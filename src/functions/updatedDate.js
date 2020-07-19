export default (dateItem) => {
    const ano = dateItem.substr(0, 4);
    const mes = dateItem.substr(5, 2);
    const dia = dateItem.substr(8, 2);

    const hora = dateItem.substr(11, 7);

    return `Last updated: ${mes}/${dia}/${ano} ${hora}`;
};
