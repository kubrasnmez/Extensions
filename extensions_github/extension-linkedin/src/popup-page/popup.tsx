import React, {FC, useEffect, useState} from 'react'
import {render} from 'react-dom';

interface IProps{

}
export const  Popup: FC<IProps> = () => {

    const [content, setContent] = useState('N/A');

    useEffect(() => {
        chrome.tabs.query({currentWindow:true, active:true}, tabs =>{
            const currentTabId = tabs.length === 0 ? 0 : tabs[0].id!;
            chrome.tabs.sendMessage(currentTabId, "", response =>{
                 setContent(response);
            });
        });
    }, []);


    return (
        <div>
            <br/>
            <h4>
           {content}
           </h4>
    </div>
    )
}

render(<Popup />, document.getElementById("popup"));