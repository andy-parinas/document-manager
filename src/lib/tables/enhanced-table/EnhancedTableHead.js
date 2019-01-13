import React from 'react'

import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { TableSortLabel } from '@material-ui/core';




const EnhancedTableHead = props => {

    const {numSelected, rowCount, onSelectAllClicked, columns, orderBy, order} = props;

    const columnHeaders = columns.map(column => {

        return (
            <TableCell key={column.id}
                    align={column.number? 'right': 'left'}
                    padding={column.disablePadding? 'none' : 'default'}
                    sortDirection={orderBy === column.id ? order : false} >

                <TableSortLabel active={orderBy === column.id}
                    direction={order} >
                    {column.label}
                </TableSortLabel>
            </TableCell>
        )

    })

    return(
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox indeterminate={numSelected > 0 && numSelected < rowCount }
                            checked={numSelected === rowCount} 
                            onChange={onSelectAllClicked} />

                </TableCell>
                { columnHeaders }
            </TableRow>
        </TableHead>
    )

}

export default EnhancedTableHead;

