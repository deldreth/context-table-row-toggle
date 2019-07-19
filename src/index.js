import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Table from "./Table/Table";
import Row from "./Table/Row";
import Cell from "./Table/Cell";
import Toggle from "./Table/Toggle";

function TogglingRow({ forRow }) {
  return (
    <Row>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
      <Cell>
        <Toggle forRow={forRow}>Show</Toggle>
      </Cell>
    </Row>
  );
}

function App() {
  return (
    <div className="App">
      <Table>
        <tbody>
          <TogglingRow forRow="row-1" />
          <Row id="row-1" expandable>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
          </Row>
          <TogglingRow forRow="row-2" />
          <Row id="row-2" expandable>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
          </Row>
        </tbody>
      </Table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
