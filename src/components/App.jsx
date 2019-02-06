import React, { Component } from "react";
import GeneratorButton from "./GeneratorButton";
import GeneratorInput from "./GeneratorInput";
import Sorting from "./Sorting";
import Counter from "./Counter";
import ClearButton from "./ClearButton";
import DownLoadButton from "./DownLoadButton";
import saveAs from "file-saver";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import './app.css'

class App extends Component {
  state = {
    generateNumber: "",
    randomPhoneNumbers: [],
    sort: "",
    generatedNumbers: [],
    max: null,
    min: null,
    total: null,
    error: null
  };
  randomGenerator = () => {
    let Generated = new Set();
    let uniqueNumber;
    const { generatedNumbers, generateNumber } = this.state;

    if (generateNumber <= 0 || generateNumber > 10000) {
      this.setState({ error: "Input is above or below limit" });
    }

    while (Generated.size < generateNumber) {
      let randomNumber =
        Math.floor(Math.random() * 9999999999 + 100000000) + 100000000;

      if (String(randomNumber).length === 10) {
        Generated.add(`0${randomNumber}`);
      }
      uniqueNumber = Array.from(Generated);
    }
    this.setState({
      randomPhoneNumbers: uniqueNumber,
      generatedNumbers: generatedNumbers.concat(uniqueNumber)
    });
    // this.setCounterValues();
  };

  renderPhoneNumbers = () => {
    const { randomPhoneNumbers, generateNumber } = this.state;
    if (randomPhoneNumbers && generateNumber > 0) {
      return randomPhoneNumbers.map((UniqueNumber, id) => {
        return (
          <TableRow key={id}>
            <TableCell>{UniqueNumber}</TableCell>
          </TableRow>
        );
      });
    }
  };
  downloadNumbers = () => {
    const { generatedNumbers } = this.state;
    if (generatedNumbers.length > 0) {
      saveAs(
        new Blob(generatedNumbers, { type: "text/plain;charset=utf-8" }),
        "generatedNumbers.csv"
      );
    }
  };

  sortGenerated = () => {
    const { sort, randomPhoneNumbers } = this.state;
    if (randomPhoneNumbers.length > 0) {
      if (sort === "ascending") {
        this.setState({
          randomPhoneNumbers: randomPhoneNumbers.sort(this.sortAscendingNumber)
        });
      } else if (sort === "descending") {
        this.setState({
          randomPhoneNumbers: randomPhoneNumbers.sort(this.sortDescendingNumber)
        });
      }
    } else {
      this.setState({ error: "No phone number have been generated" });
    }
  };

  sortDescendingNumber = (a, b) => {
    if (a > b) {
      return -1;
    }
  };

  sortAscendingNumber = (a, b) => {
    if (a < b) {
      return -1;
    }
  };



  clearNumbers = () => {
    this.setState({ randomPhoneNumbers: [], generateNumber: "" });
  };

  numberInputChange = event => {
    if (event.target.value <= 10000) {
      this.setState({ generateNumber: event.target.value });
    }
  };

  // setCounterValues = () => {
  //   const { generatedNumbers } = this.state;
  //   console.log(this.state, 'nnnnnnn')
  //   if (generatedNumbers.length > 0) {
  //     console.log('ddddd')
  //     this.setState({
  //       min: Math.min(...generatedNumbers),
  //       max: Math.max(...generatedNumbers),
  //       total: generatedNumbers.length
  //     });
  //   }
  // };

  setSort = event => {
    event.preventDefault();
    this.setState({ sort: event.target.value },
      () => this.sortGenerated());
    
  };

  render() {
    const {
      generatedNumbers,
      generateNumber,
      error,
      sort,
      randomPhoneNumbers
    } = this.state;
    let max;
    let min;
    let total;
    if (generatedNumbers.length > 0) {
      max = Math.max(...generatedNumbers);
      min = Math.min(...generatedNumbers);
      total = generatedNumbers.length;
    } else {
      max = 0;
      min = 0;
      total = 0;
    }

    return (
      <Grid container justify="center" >
      <Grid item xs={11} >
       <Paper elevation={24}>
       <div className="container">
        <Grid container justify="center">
          <h3>Random Phone Number Generator</h3>
        </Grid>
        <Grid container >
          <Grid item xs={8}>
            <GeneratorInput
              onChange={this.numberInputChange}
              input={generateNumber}
            />
          </Grid>

          <Grid item xs={3}>
            <GeneratorButton
              length={generateNumber}
              onClick={this.randomGenerator}
            />
          </Grid>
        </Grid>
        
        <Grid container justify="center">
          <br />
          <span>{error}</span>
          <br />
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Sorting sorted={sort} onChange={this.setSort} />
          </Grid>
          <Grid item xs={3}>
        <DownLoadButton
            onClick={this.downloadNumbers}
            randomPhoneNumbers={randomPhoneNumbers}
          />
        </Grid>
        <Grid item xs={3} >
          <ClearButton
            onClick={this.clearNumbers}
            randomPhoneNumbers={randomPhoneNumbers}
          />
        </Grid>
          
        </Grid>
        <Grid container>
        <Grid item xs={6}>
            <Counter min={min} max={max} total={total} />
          </Grid>
         
        </Grid>

        <Grid container >
        <Table>
          <TableBody>
{this.renderPhoneNumbers()}
          </TableBody>
        </Table>
        </Grid>
        </div>
        </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
