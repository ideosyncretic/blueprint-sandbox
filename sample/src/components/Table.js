import React, { Component } from 'react'
import * as Blueprint from '@blueprintjs/core'
import { Table, Column } from "@blueprintjs/table";


class TableExample extends Component {
  constructor (props) {
    super (props);

    this.state = {
      tableRows: 2
    }
  }
  addRow () {
    var currentNumRows = this.state.tableRows;
    this.setState({
      tableRows: currentNumRows += 1
    });
  }

  removeLastRow () {
    var currentNumRows = this.state.tableRows;
    this.setState({
      tableRows: currentNumRows -= 1
    });
  }

  clearRows () {
    this.setState({
      tableRows: 0
    });
  }

  render () {
    return (
      <div className="table">
        <Blueprint.Button iconName="add" text="Add Row" intent={Blueprint.Intent.PRIMARY} onClick={this.addRow.bind(this)} />
        <Blueprint.Button iconName="remove" text="Clear Rows" intent={Blueprint.Intent.DANGER} onClick={this.clearRows.bind(this)} />

        <Table numRows={this.state.tableRows} fillBodyWithGhostCells={true}>
            <Column />
            <Column />
            <Column />
        </Table>
      </div>
    )
  }
}

export default TableExample
