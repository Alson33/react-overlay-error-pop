import React from 'react';
import { useMessageStore } from '../hooks/useMessageStore';
import NormalPop from './NormalPop';

const MessageDisplayer = () => {
    const [messages, _] = useMessageStore()

    if(messages.length===0) return <></>
    
    return (
        <div className='popup-holder'>
            {
                messages instanceof Array && messages.map(message => {
                    if(message.message instanceof String){
                        return <NormalPop message={message.message} type={message.type} delay={message.delay}  />
                    }
                    return null;
                })
            }
        </div>
    );
};

export default MessageDisplayer;
