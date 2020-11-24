import React, {Component} from 'react';
import 'rc-slider/assets/index.css'; //import first to override existing styles if required
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import './NavBar.css';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {format: "hex", open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }
    handleFormatChange(event){
        this.setState({format: event.target.value, open: true});
        this.props.handleChange(event.target.value);
        
    }
    closeSnackBar(){
        this.setState({open: false})
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
                    <Select value ={format} onChange = {this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open = {this.state.open}
                    autoHideDuration = {3000}
                    message = {<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
                    ContentProps = {{
                        "aria-describedby": "message-id"
                    }}
                    onClose = {this.closeSnackBar}
                    action = {[
                        <IconButton onClick={this.closeSnackBar} color="inherit" key = "close">
                            <CloseIcon />
                        </IconButton>
                    ]}
                    />
            </header>
        )
    }
}

export default NavBar