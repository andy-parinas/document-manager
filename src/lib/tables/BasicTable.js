import React, {Component} from 'react'

import './BasicTable.css';

class BasicTable extends Component{

    render(){

        return (
            <table className='table basic-table'>
               <thead classNam='table-header' >
                    <tr className='table-row basic-table-row'>
                        <th> Column 1</th>
                        <th> Column 2</th>
                        <th> Column 3</th>
                        <th> Column 4</th>
                    </tr>
               </thead>
               <tbody className='table-body'>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
               </tbody>
            </table>
        )
    }

}

export default BasicTable;