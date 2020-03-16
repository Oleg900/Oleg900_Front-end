import React from "react";
import Select from "./Select";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            value: ""
        };

        this.inputAdd = this.inputAdd.bind(this);
        this.buttonDisabled = this.buttonDisabled.bind(this);
    }

    inputAdd(e) {
        if (this.state.clicked) {
            this.setState({clicked: false});
            this.setState({value: e.target.value});
            this.props.cn(e.target.value, this.props.name);
        }
        else {
            this.setState({clicked: true});
            this.setState({value: ""});
        }
    }

    buttonDisabled() {
        if (this.props.select === undefined) return true;

        for (let i = 1; i <= localStorage.length; i++) {
            if (localStorage.getItem(i + " " + this.props.select))  return true;
        }
        
    }

    render() {
        const {clicked} = this.state;

        //localStorage.clear();

        if (clicked) {
            if (this.props.name === "backlog") {
                return (
                    <>
                        <input onBlur={this.inputAdd} className="task-input" type="text"/>
                        <button onClick={this.inputAdd} className="task-button task-button-active">+ Add card</button>
                    </>
                )
            } else {
                return (
                    <>
                        <select onChange={this.inputAdd}>
                            <Select name={this.props.select}/>
                        </select>
                        
                        <button onClick={this.inputAdd} className="task-button task-button-active">+ Add card</button>
                    </>
                )
            }
        }


        if (this.buttonDisabled()) {
            return (
                <>
                    <button onClick={this.inputAdd} className="task-button task-button-active">+ Add card</button>
                </>
            )
        } else {
            return (
                <>
                    <button disabled onClick={this.inputAdd} className="task-button task-button-disabled">+ Add card</button>
                </>
            )
        }
        

        

    }

}