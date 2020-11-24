import React, {Component} from 'react';
import 'rc-slider/assets/index.css'; //import first to override existing styles if required
import Slider from 'rc-slider';
import './NavBar.css';

class NavBar extends Component{
    render(){
        const {level, changeLevel} = this.props
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
            </header>
        )
    }
}

export default NavBar