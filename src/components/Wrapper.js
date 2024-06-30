import React from 'react';
import PropTypes from 'prop-types';

function Wrapper({ text }) {
    if (text.includes('$')) {
        const finalStr = text.split('$');
        const toHide = finalStr.pop();
        const JSXText = (
            <>
                {finalStr.join('')}
                <span className="hidden">{toHide}</span>
            </>
        );
        return JSXText;
    }
    return text;
}

Wrapper.propTypes = {
    text: PropTypes.string
};

export default Wrapper;
