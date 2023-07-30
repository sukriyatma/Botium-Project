import React from "react";
import './Login.css';
import discordIcon from '../../assets/discord_icon.png'

class LoginComponent extends React.Component {
    
    render() {
        return (
            <div className="LoginContainer">
                <div className="LoginBox">
                    <div className="title">
                        <p className="titleMain">Botium</p>
                        <p className="titleDesc" >Welcome, Enter your token to get sign in to monitoring the bots</p>    
                    </div>
                    <div className="inputBox">
                        <input className="inputBoxToken" type="text" placeholder="Enter Token"/> <br />
                        <a href="http://yatma.xyz" className="buttonNoToken" >Don't have token?</a>
                    </div>
                    <input type="button" className="buttonSignin" id="btnSignin" value="Sign in" />
                    <button className="buttonSignin" id="btnSigninDiscord"> 
                        <img src={discordIcon} className="imgSigninDiscord" alt="" /> 
                        <p>Sign in with Discord</p>
                        </button>
                </div>
            </div>
        )
    }
}


export default LoginComponent;