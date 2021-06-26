import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
    <ChatEngine
        height = "100vh"
        projectID = "21dfe8be-2eab-4fd5-9c33-61da73d2adf4"
        userName = "itachi100"
        userSecret = "sharingan"
        renderChatFeed = {
            (chatAppProps) => <ChatFeed {... chatAppProps} />
        }


    />
    )
}

export default App;