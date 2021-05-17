import React from 'react'
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from "react";
import {TextField} from "@material-ui/core";

const Listing = () => {
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
            {listing.filter(item => {
                if (search == "") {
                    return item;
                }
                else if (item.clientName.toLowerCase().includes(search.toLowerCase())){
                    return item
                }
            }).
            map((item)=> {
                return (<p>{item.clientName}</p>);
            })}
        </div>
    );
};

export default Listing
