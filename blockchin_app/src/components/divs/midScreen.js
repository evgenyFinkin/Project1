
import React from 'react';

import Chat from '../chat/chat';
import HotTopics from '../selector/hotTopics';

const MidScreen=()=>   {
    return  (
        <div id='mid-screen'>
            <Chat/>
            <HotTopics/>
        </div>
    );
}
export default MidScreen;