import React from "react";

export const TableCtx = React.createContext({});

class Table extends React.Component {
  state = {
    expandedRows: {}
  };

  onToggleClick = rowId => {
    this.setState(state => ({
      expandedRows: {
        ...state.expandedRows,
        [rowId]: !state.expandedRows[rowId]
      }
    }));
  };

  render() {
    return (
      <TableCtx.Provider
        value={{
          expandedRows: this.state.expandedRows,
          onToggleClick: this.onToggleClick
        }}
      >
        <table>{this.props.children}</table>
      </TableCtx.Provider>
    );
  }
}

export default Table;
