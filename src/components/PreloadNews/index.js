import React from 'react';
import { Placeholder } from 'rsuite';

export default () => {
    const { Paragraph } = Placeholder;

    return (
        <div
            style={{
                display: 'compact',
                margin: 30,
                padding: 50,
                paddingLeft: 100,
                border: `1px solid rgba(128, 128, 128, 0.7)`,
                borderRadius: 20,
            }}
        >
            <Paragraph
                style={{ marginTop: 30, padding: 60 }}
                rows={0}
                graph="image"
                active
            />
            <Paragraph rows={6} rowHeight={10} rowMargin={20} active />
        </div>
    );
};
