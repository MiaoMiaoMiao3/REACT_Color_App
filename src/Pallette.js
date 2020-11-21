import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Pallette.css'

class Pallette extends Component{
    render(){
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ))
        return(
            <div className = "Pallette">
                {/* navbar goes here */}
                <div className = "Pallette-colors">
                {colorBoxes}
                </div>
                {/* footer eventually */}
            </div>
        )
    }
}

export default Pallette