import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
};

let id = 0;
function createData(name, sex, floor, age, onDuty) {
  id += 1;
  return { id, name, sex, floor, age, onDuty };
}

const data = [
  createData("tanghw", "male", 5, 24, 4.0),
  createData("wangjiajia", "female", 5, 37, 4.3),
  createData("zhouboliang", "male", 5, 24, 6.0)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>sex</TableCell>
            <TableCell numeric>floor</TableCell>
            <TableCell numeric>age</TableCell>
            <TableCell>onDuty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>{n.sex}</TableCell>
                <TableCell numeric>{n.floor}</TableCell>
                <TableCell numeric>{n.age}</TableCell>
                <TableCell>{n.onDuty}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
