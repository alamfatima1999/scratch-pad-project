import React from 'react';
import { drag } from '../utils/dndUtils';
import computeBlockColor from '../utils/computeBlockColor';
import Icon from './Icon';
import { getTextIcon } from '../utils/stringUtils';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';
import actionParser from '../utils/actionParser';

const ActionItem = ({ title, data }) => {

    const onClickOfNavItem = async (e) =>{
        const htmlString = e?.target?.innerHTML;
        // Create a temporary element to parse the HTML string
        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;
        // Extract text content
        const textContent = tempElement.textContent || tempElement.innerText;
        let finalStr = textContent.trim();
        // command Object
        let cmdObj = {
            cmdID: e?.target.id,
            cmdText: finalStr
        }
        
        await actionParser([cmdObj]);
    }

    return (
        <>
            <div className="font-bold"> {title} </div>

            {data.map((_d, i) => (
                <div onClick={(e) => onClickOfNavItem(e)}
                    draggable
                    onDragStart={drag}
                    id={title + i}
                    key={title + i}
                    className={`flex flex-row flex-wrap bg-${computeBlockColor(
                        title
                    )}-500 text-white px-2 py-1 my-2 text-sm cursor-pointer`}
                >
                    <Wrapper text={getTextIcon(_d, 0)} />
                    {getTextIcon(_d, 1) && (
                        <Icon
                            name={getTextIcon(_d, 1)}
                            size={15}
                            className={`${getTextIcon(_d, 1) === 'flag' ? "text-green-600": ""} mx-2`}
                        />
                    )}
                    <Wrapper text={getTextIcon(_d, 2)} />
                </div>
            ))}
        </>
    );
};

ActionItem.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default ActionItem;
