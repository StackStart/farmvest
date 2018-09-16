import React, { Component } from 'react';
import { Typography, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';

class InvestmentsBreakdown extends Component {
  constructor(params) {
    super(params);
    this.state = {
      productionCost: 0,
      yieldInKg: 0,
      pricePerKg: 0,
      netReturns: 0,
      netProfit: 0,
      netProfitCostRatio: 0,
      investors: [],
      stakeHolders: [],
      cycle: {
        farmName: '',
        date: '',
      },
    };
  }

  componentDidMount() {
    const productionCost = 46685;
    const netProfit = 68101;
    const netProfitCostRatio = 0.46;
    const yieldInKg = 3964;
    const pricePerKg = 17.18;
    const netReturns = 21416;
    const investors = [
      {
        _id: '1',
        name: 'Rave Arevalo',
        amountInvested: 25000,
        roi: 53.55,
        netProfit: 32820,
        gain: 7820
      },
      {
        _id: '2',
        name: 'Tristan Macadangdang',
        amountInvested: 5000,
        roi: 10.71,
        netProfit: 6564.16,
        gain: 1564.16
      },
      {
        _id: '3',
        name: 'Sian Paul Lasaga',
        amountInvested: 10000,
        roi: 21.42,
        netProfit: 13128.31,
        gain: 3128.31
      },
      {
        _id: '4',
        name: 'Israel Calderon',
        amountInvested: 2000,
        roi: 4.28,
        netProfit: 2625.68,
        gain: 625.68
      },
      {
        _id: '5',
        name: 'Karl Hisole',
        amountInvested: 4685,
        roi: 10.04,
        netProfit: 6150.66,
        gain: 1465.66
      },
    ];
    const stakeHolders = [
      {
        _id: 'a',
        name: 'Cooperative',
        pct: 2.5,
        amount: 1703
      },
      {
        _id: 'b',
        name: 'Farmer',
        pct: 7.5,
        amount: 5108
      },
      {
        _id: 'c',
        name: 'Investors',
        pct: 90,
        amount: 61290
      },
    ];
    const cycle = {
      farmName: 'Lacienda Farmvest',
      date: 'Apr 4, 2018 to Aug 1, 2018'
    };
    this.setState({ cycle, netProfitCostRatio, productionCost, yieldInKg, pricePerKg, netReturns, netProfit, investors, stakeHolders });
  }

  render() {
    const { cycle, investors, stakeHolders, productionCost, netProfit, netProfitCostRatio, yieldInKg, pricePerKg, netReturns } = this.state;
    return (
      <div style={{ width: 'auto', marginLeft: '10%', marginRight: '10%', marginTop: '7.5%' }}>
        <Grid style={{ textAlign: 'center' }}>
          <Typography variant="display3" align="center" gutterBottom>Investment Results</Typography>
          <h1 style={{ marginBottom: '1%' }}>{cycle.farmName}</h1>
          <h4>{cycle.date}</h4>
        </Grid>
        <Grid container style={{ flexDirection: 'row', textAlign: 'center', marginTop: '4%' }}>
          <Grid item xs={9} style={{ flexDirection: 'column' }}>
            <h2 style={{ textAlign: 'left' }}>Summary</h2>
            <Paper style={{ maxWidth: '750px', overflowX: 'auto', margin: '5%' }}>
              <Table>
                <TableHead style={{ backgroundColor: '#EEEEEE'}}>
                  <TableRow>
                    <TableCell>Production Cost</TableCell>
                    <TableCell>Yield</TableCell>
                    <TableCell>Price per kg</TableCell>
                    <TableCell>Net Profit</TableCell>
                    <TableCell>Net returns</TableCell>
                    <TableCell>Net-profit cost ratio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{productionCost.toFixed(2)}</TableCell>
                    <TableCell>{yieldInKg} kg</TableCell>
                    <TableCell>{pricePerKg.toFixed(2)}</TableCell>
                    <TableCell>{netProfit.toFixed(2)}</TableCell>
                    <TableCell>{netReturns.toFixed(2)}</TableCell>
                    <TableCell>{netProfitCostRatio}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{ maxWidth: '320px', overflowX: 'auto', margin: '2.5%' }}>
              <Table>
                <TableHead style={{ backgroundColor: '#EEEEEE'}}>
                  <TableRow>
                    <TableCell>Stakeholders</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    stakeHolders.map(stakeHolder => (
                      <TableRow key={stakeHolder._id}>
                        <TableCell>{`${stakeHolder.name} (${stakeHolder.pct}%)`}</TableCell>
                        <TableCell>{stakeHolder.amount.toFixed(2)}</TableCell>
                      </TableRow>
                    ))
                  }
                  <TableRow style={{ backgroundColor: '#F8F7F7'}}>
                    <TableCell>Total</TableCell>
                    <TableCell>{netProfit.toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
        <Grid container style={{ flexDirection: 'column'}}>
          <h2>Investors Fund Distribution</h2>
          <Paper style={{ margin: '0 auto', width: '100%', maxWidth: '1150px', marginTop: '1.5%', marginBottom: '5%' }}>
            <Table>
              <TableHead style={{ backgroundColor: '#EEEEEE'}}>
                <TableRow>
                  <TableCell>Investor</TableCell>
                  <TableCell>Amount Invested</TableCell>
                  <TableCell>ROI</TableCell>
                  <TableCell>Net Profit</TableCell>
                  <TableCell>Gain</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  investors.map(investor => (
                    <TableRow key={investor._id}>
                      <TableCell>{investor.name}</TableCell>
                      <TableCell>{investor.amountInvested}</TableCell>
                      <TableCell>{investor.roi} %</TableCell>
                      <TableCell>{investor.netProfit.toFixed(2)}</TableCell>
                      <TableCell>{investor.gain.toFixed(2)}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid style={{ textAlign: 'center', marginBottom: '5%' }}>
          <Button variant="contained" color="primary" style={{ color: 'white' }}>Distribute Funds</Button>
        </Grid>
      </div>
    );
  }
}

export default InvestmentsBreakdown;
