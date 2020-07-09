import React from "react";
import MaterialTable from "material-table";


export default function OrdersTable() {
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
        }
      }}
      title="Orders"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
