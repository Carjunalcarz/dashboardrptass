import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
// import TableOne from '../components/Tables/TableOne';
// import TableThree from '../components/Tables/TableThree';
import Building_Location from '../components/Tables/Building_Location';
// import TableTwo from '../components/Tables/TableTwo';

import {getBuildingLocations, getLength} from '../../public/api/bldg_location_api';
import Pagination from '../components/Tables/pagination';

const Tables = () => {
  const [page , setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  
  const location_data = getBuildingLocations(page, limit); // Call the function to get the data


  

  return (
    <>
      <Breadcrumb pageName="Building Location" />

      <div className="flex flex-col gap-10">
        {/* <TableOne />
        <TableTwo /> */}
        <Building_Location location_data={location_data} /> {/* Pass the data */}
        <Pagination/>
      </div>
    </>
  );
};

export default Tables;
