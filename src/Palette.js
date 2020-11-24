import React, {Component} from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css'; //import first to override existing styles if required
import './Palette.css'
import Slider from 'rc-slider';


class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500}
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(newLevel){
        this.setState({level: newLevel});
    }
    render(){
        const {colors} = this.props.palette
        const {level} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ))
        return(
            <div className = "Palette">
                <div className = "slider">
                    <Slider defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        trackStyle={{backgroundColor: 'transparent'}}
                        handleStyle={{backgroundColor: '#76ced7', 
                            outline: 'none',
                            border: '2px solid #76ced7',
                            boxShadow: 'none',
                            width: '13px',
                            height: '13px',
                            marginLeft: '-7px',
                            marginTop: '-2px'}}
                        railStyle={{height: '10px'}}
                        onAfterChange={this.changeLevel}/>
                </div>
                {/* navbar goes here */}
                <div className = "Palette-colors">
                {colorBoxes}
                </div>
                {/* footer eventually */}
            </div>
        )
    }
}

export default Palette