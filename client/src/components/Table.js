import React from "react";
import Row from "./RowData";


function Table() {
    // Setting the initial state of the Counter component
    return ( <div>
      <div className="container">

<table className="table table-sm">
<thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Number</th>
    <th scope="col">Birthday</th>
  </tr>
</thead>
<Row>

</Row>

</table>
</div>
</div>
    );
}

export default Table;