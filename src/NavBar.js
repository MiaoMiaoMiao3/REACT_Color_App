import React, {Component} from 'react';
import 'rc-slider/assets/index.css'; //import first to override existing styles if required
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import './NavBar.css';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {format: "hex"};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({format: event.target.value});
        this.props.handleChange(event.target.value);
    }
    render(){
        const {level, changeLevel} = this.props;
        const {format} = this.state;
        return(
            <header className="NavBar">
                <div className="logo">
                    <a href="#">react color picker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
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
                            onAfterChange={changeLevel}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select value ={format} onChange = {this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default NavBar