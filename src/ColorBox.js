import React, {Component} from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';

class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = {copied: false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }
    render(){
        const {name, background, moreUrl, showLink} = this.props;
        const {copied} = this.state;
        const isDarker = chroma(background).luminance() <= 0.3;
        const isLighter = chroma(background).luminance() >= 0.4;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style ={{background: background}} className="ColorBox">
                    <div 
                        style = {{background: background}} 
                        className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p className = {isLighter? "dark-text": undefined}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className = {isDarker? "light-text": undefined}> {name} </span>
                        </div>
                        <button className= {`copy-button ${isLighter? "dark-text":undefined}`}> Copy</button>
                    </div>
                    {showLink && (
                    <Link to={`/palette/${moreUrl}`} onClick = {(e) => e.stopPropagation()}>
                            <span className = {`see-more ${isLighter? "dark-text": ""}`}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;