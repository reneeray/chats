import React from 'react'
/*import up_arrow from './up_arrow.png';*/
import { FiSend } from "react-icons/fi"

class Textinput extends React.Component {
    state = {
        text: '',

    }
    send = () => {
        this.props.sendMessage(this.state.text)
        this.setState({ text: '' })
    }
    keyPress = (e) => {
        if(e.key==="Enter" && this.state.text){
            this.send()
        }
    }
    render() {
        return (<div className="text-input">
            <input value={this.state.text}
                placeholder="Type your message here..."
                onKeyPress={this.keyPress}
                onChange={e => this.setState({ text: e.target.value })}
            />

            <button onClick={this.send}
                disabled={!this.state.text}>
                
                    <FiSend style={{height:17, width:17}}/>
            
            </button>

        </div>)

    }
}

export default Textinput