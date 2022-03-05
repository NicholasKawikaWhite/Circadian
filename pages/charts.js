import { useState, useEffect } from "react";
import React from "react";
import {
  Container,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import { restClient } from "@polygon.io/client-js";

const apiKey = "VtcpqXV5Mv3g2HR2epTXgy095RwFe06v";
const baseURL = "https://api.polygon.io/v2/aggs/ticker/"
async function getStockData(ticker, tr1, tr2, sep) {
    var finalURL = baseURL+ticker+"/range/1/minute/"+tr1+"/"+tr2+"?adjusted=true&sort=asc&limit=120&apiKey="+apiKey;
    a = await fetch(finalURL);
    json = await a.json();
    console.log(json);
}

function TickerChart({ticker, date1, date2}) {
    return(
        <div>
            <h1></h1>
        </div>
    );

}

export default function chartPicture(){

  const [ticker, setTicker] = useState("APPL");

    return (
      <div className="chartContainer">


        
        <Button onClick={() => {getStockData({ticker},"2022-03-04","2022-03-04",1)}}>YO</Button>
        <input value={ticker}   name="Ticker" onChange={e => setTicker(e.target.value)} />
<Table striped bordered hover>
          <thead>
            <tr>
              <th>{"#"}</th>
              <th>{"High"}</th>
              <th>{"Low"}</th>
              <th>{"Day Change"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"Ticker Symbol"}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{"Ticker Symbol"}</td>
              <td></td>
              <td></td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>{"Ticker Symbol"}</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        
      </div>
    );
  }
/*
<Table striped bordered hover>
          <thead>
            <tr>
              <th>{"#"}</th>
              <th>{"High"}</th>
              <th>{"Low"}</th>
              <th>{"Day Change"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"Ticker Symbol"}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{"Ticker Symbol"}</td>
              <td></td>
              <td></td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>{"Ticker Symbol"}</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
*/
