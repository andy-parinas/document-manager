import React from 'react';
import BasicTable from '../../lib/tables/BasicTable';

import './ProjectListComponent.css';

const ProjectListComponent = props => {


    return(
        <div className='container'>
            <div className='project-list-content'>
                <div className='project-list-search'>
                    <input type='text' placeholder='Search Project' />
                    <button>Search</button>
                </div>               
                <div className='project-list-table'>
                    <BasicTable />
                </div>
            </div>
        </div>
    )

}

export default ProjectListComponent;