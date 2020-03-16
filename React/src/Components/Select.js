import React from "react";

export default function Select(props) {

    let option = [<option></option>];

    for (let i = 0; i <= localStorage.length; i++) {
        if (localStorage.getItem(i + " " + props.name)) {
            option.push(
                <option value={i + " " + props.name}>
                    {localStorage.getItem(i + " " + props.name)}
                </option>);
        }
    }

    return option;

}