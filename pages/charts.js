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
    var finalURL = baseURL+ticker+"/range/minute/"+tr1+"/"+tr2+"?adjusted=true&sort=asc&limit=120&apiKey="+apiKey;
    await fetch(finalURL).then(response => response.json()).then(data => console.log(data));
}

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c8hpqsiad3iearbtrs70"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote("AAPL", (error, data, response) => {
  console.log(data)
});

export default class chartPicture extends React.Component {
  render() {
    return (
      <div className="chartContainer">
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
        <Button onClick={() => {getStockData("AAPL","2022-03-04","2022-03-04",1)}}>YO</Button>
      </div>
    );
  }
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
