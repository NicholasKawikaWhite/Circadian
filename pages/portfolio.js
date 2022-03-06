import react from "react";
import { Container, Card, Nav, Navbar, NavDropdown, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-google-charts";
import {ListGroup, Form, Table} from "react-bootstrap";
import {useState, useEffect} from "react";

  export const options = {
    legend: "none",
    pieSliceText: "label",
  };

const Portfolio = () => {
    const [percent1, setPercent1] = useState(11);
    const [percent2, setPercent2] = useState(12);
    const [percent3, setPercent3] = useState(6);
    const [percent4, setPercent4] = useState(6);
    const [percent5, setPercent5] = useState(6);

    const data = [
        ["Stock", "% of Portfolio"],
        ["Microsoft(MSFT)", 11],
        ["Apple(AAPL)", 12],
        ["Tesla(TSLA)", 6],
        ["Coca Cola(KO)", 6],
        ["3M(MMM)", 6],
      ];
      
    return ( 

<div className="centered">

<Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
    <Table responsive="sm" borderless="true" striped="true">
    <thead>
      <tr>
        <th>Active</th>
        <th>Stock</th>
        <th>Weighted Average Percent of Portfolio</th>
        <th>Current Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><Form.Check aria-label="option 1" /></td>
        <td>Microsoft (MSFT)</td>
        <td><input value={percent1}   name="p1" onChange={a => setPercent1(a.target.value)} /></td>
        <th>$</th>
      </tr>
      <tr>
        <td><Form.Check aria-label="option 1" /></td>
        <td>Apple (AAPL)</td>
        <td><input value={percent2}   name="p2" onChange={b => setPercent2(b.target.value)} /></td>
        <th>$</th>
      </tr>
      <tr>
        <td><Form.Check aria-label="option 1" /></td>
        <td>Tesla (TSLA)</td>
        <td><input value={percent3}   name="p3" onChange={c => setPercent3(c.target.value)} /></td>
        <th>$</th>
      </tr>
      <tr>
        <td><Form.Check aria-label="option 1" /></td>
        <td>Coca Cola (KO)</td>
        <td><input value={percent4}   name="p4" onChange={d => setPercent4(d.target.value)} /></td>
        <th>$</th>
      </tr>
      <tr>
        <td><Form.Check aria-label="option 1" /></td>
        <td>3M (MMM)</td>
        <td><input value={percent5}   name="p5" onChange={e => setPercent5(e.target.value)} /></td>
        <th>$</th>
      </tr>
    </tbody>
  </Table>

    </div>

     );
}
 
export default Portfolio;
//      <Component {...pageProps} />