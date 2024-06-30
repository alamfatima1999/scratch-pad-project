import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drag } from '../utils/dndUtils';
import { switchSpriteTab, appendTab } from './../redux/action';
import toast from 'react-hot-toast';

function TabArea() {
    const tabs = useSelector((state) => state.tabs);
    const currentTab = useSelector((state) => state.currentTab);
    const dispatch = useDispatch();

    const getSpriteName = (id) => {
        const integers = id.match(/(\d+)/);
        return 'Sprite ' + integers[0];
    };

    const onTabChange = (e) => {
        dispatch(switchSpriteTab(e.target.dataset.tab));
    };

    const addANewTab = () => {
        if (tabs.length > 2) {
            toast.error('More than 3 Sprite not allowed', {
                position: 'top-right',
            });
            return;
        }
        dispatch(appendTab());
    };

    return (
        <>
            <div className="relative">
                <div
                    className="w-full flex flex-no-wrap overflow-x-auto items-start scrolling-touch"
                >
                    {tabs.map((tab) => (
                        <button
                            draggable
                            id={'sprite-' + tab}
                            key={tab + 'btn'}
                            onClick={onTabChange}
                            onDragStart={drag}
                            className={`${
                                tab === currentTab
                                    ? 'bg-green-700'
                                    : 'bg-blue-500 hover:bg-black'
                            }  text-white font-bold py-2 px-4 rounded inline-flex items-center`}
                            data-tab={tab}
                        >
                            {getSpriteName(tab)}
                        </button>
                    ))}
                </div>

                <button
                    onClick={addANewTab}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-2"
                >
                   Add New +
                </button>
            </div>
            <p className="text-center bg-purple-100">
                Drop Action Here for {getSpriteName(currentTab)}
            </p>
        </>
    );
}

export default TabArea;
