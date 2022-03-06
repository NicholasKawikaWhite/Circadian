import react from "react";
import { Container, Card, Nav, Navbar, NavDropdown, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-google-charts";
import {ListGroup, Form, Table, InputGroup, FormControl, Text} from "react-bootstrap";
import {useState, useEffect} from "react";




const Charts = () => {

    const [ticker, setTicker] = useState("AAPL");
    const [actualData, setData] = useState();
    const data = [
        ["Day", "Open Price"],
        ["03/04/22", 164.49],
        ["03/03/22", 168.47],
        ["03/02/22",	164.39],
        ["03/01/22",	164.695],
        ["02/28/22",	163.06],
        ["02/25/22",	163.84],
        ["02/24/22",	152.58],
        ["02/23/22",	165.54],
        ["02/22/22",	164.98],
        ["02/18/22",	169.82],
        ['02/17/22',	171.03],
        ['02/16/22',	171.85],
        ['02/15/22',	170.97],
        ['02/14/22',	167.37],
        ['02/11/22',	172.33],
        ['02/10/22',	174.14],
        ['02/09/22',	176.05],
        ['02/08/22',	171.73],
        ['02/07/22',	172.86],
        ['02/04/22',	171.68],
        ['02/03/22',	174.48],
        ['02/02/22',	174.745],
        ['02/01/22',	174.01],
        ['01/31/22',	170.16],
        ['01/28/22',	165.71],
        ['01/27/22',	162.45],
        ['01/26/22',	163.50],
        ['01/25/22',	158.98],
        ['01/24/22',	160.02],
        ['01/21/22',	164.415],
        ['01/20/22',	166.98],
        ['01/19/22',	170.00],
        ['01/18/22',	171.51],
        ['01/14/22',	171.34],
        ['01/13/22',	175.78],
        ['01/12/22',	176.12],
        ['01/11/22',	172.32],
        ['01/10/22',	169.08],
        ['01/07/22',	172.89],
        ['01/06/22',	172.70],
        ['01/05/22',	179.61],
        ['01/04/22',	182.63],
        ['01/03/22',	177.83],
        ['12/31/21',	178.085],
        ['12/30/21',	179.47],
        ['12/29/21',	179.33],
        ['12/28/21',	180.16],
        ['12/27/21',	177.085],
        ['12/23/21',	175.85],
        ['12/22/21',	173.04],
        ['12/21/21',	171.555],
        ['12/20/21',	168.28],
        ['12/17/21',	169.93],
        ['12/16/21',	179.28],
        ['12/15/21',	175.11],
        ['12/14/21',	175.25],
        ['12/13/21',	181.115],
        ['12/10/21',	175.205],
        ['12/09/21',	174.91],
        ['12/08/21',	172.125],
        ['12/07/21',	169.08],
        ['12/06/21',	164.29],
      ];
/*
03/04/22	164.49	
03/03/22	168.47	
03/02/22	164.39	
03/01/22	164.695	
02/28/22	163.06	
02/25/22	163.84	
02/24/22	152.58	
02/23/22	165.54	
02/22/22	164.98	
02/18/22	169.82	
02/17/22	171.03	
02/16/22	171.85	
02/15/22	170.97	
02/14/22	167.37	
02/11/22	172.33	
02/10/22	174.14	
02/09/22	176.05	
02/08/22	171.73	
02/07/22	172.86	
02/04/22	171.68	
02/03/22	174.48
*/      
    const options = {
        legend: "none",
        title: "Apple Stock Price",
        hAxis: { title: "Day", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 120 },
        chartArea: { width: "80%", height: "70%" },
      };
    return (
        <div>
        <div className="inputTable">
            <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Ticker Symbol
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
     <Button>
          Search
      </Button>
      </InputGroup>
        </div>
        <Chart
      chartType="AreaChart"
      width="100%"
      height="600px"
      data={data}
      options={options}
    />
    <div className="buySell">

    <Button className="greenButton">Buy</Button>
    <Button className="redButton">Sell</Button>
    </div>
        </div>
      );

}

export default Charts;
//      <Component {...pageProps} /> 