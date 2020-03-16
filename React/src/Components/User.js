import React from "react";
import UserMenu from "./UserMenu";


export default class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false
      }
      this.userMenuOpen = this.userMenuOpen.bind(this);
  
    }

    userMenuOpen() {
        if (this.state.clicked) this.setState({clicked: false});
        else this.setState({clicked: true});
    }


    render() {

        if (this.state.clicked) return (
            <div className="user">
               <div className="user-container" onClick={this.userMenuOpen}>
                    <div className="user-avatar">
                        <img src="./img/user_avatar.svg" alt="avatar" />
                    </div>
                    <span className="user-arrow user-arrow-open"></span>
               </div>
               <UserMenu />
            </div>
        ) 

        return (
            <div className="user">
               <div className="user-container" onClick={this.userMenuOpen}>
                    <div className="user-avatar">
                        <img src="./img/user_avatar.svg" alt="avatar" />
                    </div>
                    <span className="user-arrow"></span>
               </div>
               
            </div>
        );
    }
    

}