
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Card, CardContent } from '@material-ui/core';
    
const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
    height: '80%',
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  card: {
    height: '50%',
    minWidth: 275,
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
  

const TableView = ({classes, rows }) => (
  <React.Fragment>
    <Card className={classes.card}>
      <CardContent>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Type</CustomTableCell>
                <CustomTableCell numeric>Amout</CustomTableCell>
                <CustomTableCell numeric>Percentage (%)</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow className={classes.row} key={index}>
                    <CustomTableCell component="th" scope="row">
                      {row.name}
                    </CustomTableCell>
                    <CustomTableCell numeric>{row.amount}</CustomTableCell>
                    <CustomTableCell numeric>{row.percentage}</CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </CardContent>
    </Card>
  </React.Fragment>
);
    
export default withStyles(styles)(TableView);