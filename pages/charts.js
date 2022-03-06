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
import { timeParse } from "d3-time-format";
import { tsv } from "d3-request";
import { scaleTime } from "d3-scale";
import { format } from "d3-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { createVerticalLinearGradient, hexToRGBA } from "react-stockcharts/lib/utils";

//import { restClient } from "@polygon.io/client-js";
const apiKey = "VtcpqXV5Mv3g2HR2epTXgy095RwFe06v";
const baseURL = "https://api.polygon.io/v2/aggs/ticker/"
async function getStockData(ticker, tr1, tr2, sep) {
    var finalURL = baseURL+ticker+"/range/1/minute/"+tr1+"/"+tr2+"?adjusted=true&sort=asc&limit=120&apiKey="+apiKey;
    const a = await fetch(finalURL);
    const json = await a.json();
    console.log(json);
    var results = json["results"];
    var finalData = [];
    var parseDate = timeParse("%Y-%m-%d");
    for (var i = 0; i< results?.length; i++){
      var date = new Date(results[i]["t"]);
      var closePrice = results[i]["c"];
      var dataElement = {"date": date, "close":closePrice}
      finalData.push(dataElement)
    }
    return(finalData);
}

function TickerChart({data, ticker}) {
      <div>
      <ChartCanvas width={400} height={400}
        margin={{ left: 50, right: 50, top:10, bottom: 30 }}
        seriesName={ticker}
        data={data} type="svg"
        xAccessor={d => d.date} xScale={scaleTime()}
        xExtents={[new Date(2022, 3, 3), new Date(2022, 3, 3)]}>
    <Chart id={0} yExtents={d => d.close}>
        <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
        <YAxis axisAt="left" orient="left" />
        <AreaSeries yAccessor={(d) => d.close}/>
    </Chart>
    </ChartCanvas>  
    </div>
    return(<div><h1></h1></div>)
}

  //const {address, chainId} = useWeb3();
  //setData(getStockData("AAPL", "2022-03-03", "2022-03-03", 1));

  //console.log(data2);
  //<TickerChart data={data2}></TickerChart>
  async function getData(ticker){
    const data = await getStockData({ticker},"2022-03-04","2022-03-04",1);
    return data;
  }
export default function chartPicture(){
const [ticker, setTicker] = useState("AAPL");
var actualData = null;
    return (
      <div className="chartContainer">  

        <Button onClick={() => {actualData = getData(ticker)}}>YO</Button>
        <Button onClick={() => {console.log(actualData)}}>YOop</Button>

        <input value={ticker}   name="Ticker" onChange={e => setTicker(e.target.value)} />
        <TickerChart data={actualData} ticker={ticker}></TickerChart>
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
