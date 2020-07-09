import React from "react";
import MaterialTable from "material-table";


export default function PendingOrdersTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Product", field: "product" },
      { title: "Id", field: "orderid", type: "numeric" },
      {
        title: "Address",
        field: "address"
      },
      { title: "Pincode", field: "pincode", type: "numeric" },
      { title: "Price", field: "price", type: "numeric" }
    ],
    data: [
      {
        name: "Mehmet",
        product: "Baran",
        orderid: 1987,
        address: "D-1076",
        pincode: 321001,
        price: "250"
      },
      {
        name: "Zerya Betül",
        product: "Baran",
        orderid: 2017,
        address: "34 down town",
        pincode: "321001",
        price: "250"
      }
    ]
  });

  return (
    <MaterialTable
    style={{
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto"
    }}
      options={{
        searchFieldStyle: {
          color: "#7AAFF7",
        },
        actionsColumnIndex: -1
      }}
      title="Pending Orders"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        rowData => ({
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
          disabled: rowData.birthYear < 2000
        })
      ]}   
    />
  );
}
