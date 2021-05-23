import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import Header from "./Header";
import TheTable from "./TheTable";
import API from "./API";

function Dashboard() {
  const [clients, setClients] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    API.get().then((response) => {
      setClients(response.data);
      setTableData(response.data);
    });
  }, []);

  const handleSearchByName = (name) => {
    if (name === "") {
      setTableData(clients);
    } else {
      const regexExpression = new RegExp(name, "gi");
      const filteredClients = clients.filter((client) => {
        return regexExpression.test(client.clientName);
      });
      setTableData(filteredClients);
    }
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid container item md={12} lg={8} justify="center">
        <Header searchByName={handleSearchByName} />
      </Grid>

      <Grid container item md={12} lg={8} justify="center">
        <TheTable data={tableData} />
      </Grid>
    </Grid>
  );
}

export default Dashboard;