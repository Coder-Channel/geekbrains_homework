import React, { Component } from "react";
import ReactDOM from "react-dom";

import Menu from "components/menu";
import LoginButton from "components/loginbutton";
import LoginWindow from "components/loginwindow";

class App extends Component {
    render() {
        return <div>
            <Menu />
            <LoginButton />
            <LoginWindow />
            <div className="context">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a felis malesuada, pellentesque lorem et, facilisis dolor. Donec dictum leo risus, non rutrum magna dapibus id. Sed orci nisl, tincidunt nec diam ut, tincidunt dapibus magna. Donec id justo nunc. Vivamus lacinia lacus id ex suscipit malesuada. Vivamus eget pulvinar sem, tincidunt maximus sapien. Ut quis ultrices justo. Quisque tempus ipsum justo, id viverra diam scelerisque fringilla. Maecenas venenatis erat accumsan, fermentum mi vestibulum, fermentum odio. Ut pulvinar, arcu sit amet tempor dapibus, elit nisi pretium nibh, sed eleifend mauris ex eu lacus. Praesent eget sagittis est. Sed vitae placerat velit. Aenean sit amet lectus et augue finibus hendrerit non vel orci. Cras tellus libero, dignissim in semper in, mollis eget orci. Nulla sed posuere dolor. Curabitur quis tellus id lacus auctor mollis et a nunc.
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("body"))