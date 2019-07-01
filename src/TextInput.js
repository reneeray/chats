import React from 'react'
import up_arrow from './up_arrow.png';

class Textinput extends React.Component {

    render (){
        return( <div className="text-input">
        <input />

        <button>
        <img className="up_arrow" src={up_arrow} alt="up_arrow"/>
        </button>
   
    </div>)
    
    }
}

export default Textinput