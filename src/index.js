import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import  './style.css'

function App() {
    return (

        /*<h1>Курс валют
        {Array().foreach(()=>{
            return <li>{data[0].txt}</li>
        })}
        </h1>*/

        <table>
            <h1>Курс валют</h1>
            <tr>
                <th>Назва Валюти</th>
                <th>Умовне позначення</th>
                <th>Курс</th>
            </tr>

            {data.map((el) => (
                <tr>
                    <td>{el.txt}</td>
                    <td>{el.cc}</td>
                    <td>{el.rate.toFixed(2)}</td>
                </tr>
            ))}
        </table>
    )
}

ReactDOM.render(<App />, document.getElementById('body'));
console.dir(data)