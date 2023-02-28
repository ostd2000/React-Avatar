import "./App.scss";

import AvatarC from "./components/AvatarC";

import UserImage from "./assets/pics/user.jpg";

function App() {
    return (
        <div className="app">
            <div className="app__c1">
                <AvatarC src={UserImage} outlined>
                    کاوه
                </AvatarC>

                <AvatarC offline outlined />

                <AvatarC online outlined>
                    کاوه
                </AvatarC>

                <AvatarC src={UserImage} offline outlined>
                    کاوه
                </AvatarC>
            </div>
        </div>
    );
}

export default App;
