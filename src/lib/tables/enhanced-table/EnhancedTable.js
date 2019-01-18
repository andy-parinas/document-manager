import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';



import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolBar from './EnchancedTableToolbar';



const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
      },
      tableWrapper: {
        overflowX: 'auto',
      },
      table: {
        minWidth: 800
      },
      clickable: {
          cursor: 'pointer'
      }
})

class EnhancedTable extends Component {

    state = {
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        page: 0,
        rowsPerPage: 5,
      };


    handleSelectionClicked = id => {
        console.log('Selected ', id)

        const {selected} = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = []

        console.log('SelectedIndex ', selectedIndex);

        if(selectedIndex === -1){
            newSelected = newSelected.concat(selected, id);
        }else if(selectedIndex === 0){
            newSelected = newSelected.concat(selected.slice(1))
        }else if(selectedIndex === selected.length -1){
            newSelected = newSelected.concat(selected.slice(0, -1))
        }else if(selectedIndex > 0){
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
        }

        this.setState({
            ...this.state,
            selected: [...newSelected]
        })
   
    }

    handleSelectAllClicked = () => {

    }

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render(){
        const {classes, columns,  data} = this.props;
        const { order, orderBy, selected} = this.state;

        const rows = data.map(d => {

            const isSelected = this.isSelected(d.id)

            const cells = columns.map(c => {
                return (
                    <TableCell className={classes.clickable} 
                                component="th" 
                                scope="row" 
                                key={`${d.id}-${c.id}`} onClick={() => this.props.onRowSelected(d.id)} >
                        { d[c.id] }
                    </TableCell>
                )
            })

            return (
                <TableRow hover tabIndex={-1} key={d.id} >
                    <TableCell padding='checkbox' onClick={() => this.handleSelectionClicked(d.id)} role="checkbox" aria-checked={isSelected} >
                        <Checkbox checked={isSelected} />
                    </TableCell >
                    { cells }
                </TableRow>
            );
        });


        return(
            <Paper className={classes.root}>
                <EnhancedTableToolBar numSelected={selected.length} tableTitle='Projects' />
                <div className={classes.tableWrapper} >
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead  numSelected={selected.length} columns={columns}
                                            order={order}
                                            orderBy={orderBy}
                                            onSelectAllClick={this.handleSelectAllClick}
                                            onRequestSort={this.handleRequestSort}
                                            rowCount={data.length} />
                            
                        <TableBody>
                            { rows }
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        )
    }

}

export default withStyles(styles)(EnhancedTable)