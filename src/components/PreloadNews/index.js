import React from 'react';
import { Placeholder } from 'rsuite';

export default () => {
    const { Paragraph } = Placeholder;

    return (
        <div
            style={{
                display: 'compact',
                margin: 50,
                padding: 50,
                border: '1px solid #ccc',
            }}
        >
            <Paragraph
                style={{ marginTop: 30, padding: 60 }}
                rows={0}
                graph="image"
                active
            />
            <Paragraph rows={6} rowHeight={10} rowMargin={30} active />
        </div>
    );
};
