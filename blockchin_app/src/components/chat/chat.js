
import React from 'react';

import ChatWin from './chatWindow';
import SendButton from './sendButton';
import FilterSelactor from './filterSelactor';

const Chat=()=> {
    return  (
        <div id='Chat'>
            <FilterSelactor/>
            <ChatWin/>
            <SendButton/>
        </div>
    );
};

export default Chat;