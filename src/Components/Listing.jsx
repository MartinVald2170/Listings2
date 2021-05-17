import React from 'react'
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from "react";
import {TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


const Listing = () => {
    const classes = useStyles();
    const [listing, setListing] = useState([])
    const [search, setSearch] = useState("") 


    const getListingData = async () => {
        try {
            const data = await axios.get("http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby");
            console.log(data.data);
            setListing(data.data);
        }
        catch(e) {
            console.log(e);
        }
    };

    useEffect(()=> {
        getListingData();
    },[]);

    return (
        <div>
             <SearchIcon/>
            <TextField 
            type="text" 
            placeholder="Search here"
            onChange={e=> {
                setSearch(e.target.value);
            }} 
            
            />
            

{/* const columns = [
  {field: "clientID", hide: true},
  {field: 'clientName', headerName: "Client Name", width: 160}, 
  {field: 'clientEmail', headerName: "Email", width: 200},
  {field: 'clientWorkPhone', headerName: "Phone", width: 130},
  {field: 'clientIndustry', headerName: "Industry", width: 130},
  {field: 'clientPocName', headerName: "Point of Contact", width: 160},
  {field: 'clientWebsite', headerName: "Website", width: 160}

] */}

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Client Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Point of Contact</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {listing.filter(item => {
               if (item.clientName.toLowerCase().includes(search.toLowerCase())){
                    return item
                }
            }).
            map((item)=> {
                return (
           
            <TableRow key={listing.clientID}
            >
              <TableCell component="th" scope="row">
             {item.clientName} 
              </TableCell>
              <TableCell align="right">{item.clientEmail}</TableCell>
              <TableCell component="th" scope="row">
             {item.clientWorkPhone} 
              </TableCell>
              <TableCell component="th" scope="row">
             {item.clientIndustry} 
              </TableCell>
              <TableCell component="th" scope="row">
             {item.clientPocName} 
              </TableCell>
              <TableCell component="th" scope="row">
             {item.clientWebsite} 
              </TableCell>
   
            </TableRow>
         ); })} 
        </TableBody>
      </Table>
    </TableContainer>
   





        </div>
    );
};

export default Listing
