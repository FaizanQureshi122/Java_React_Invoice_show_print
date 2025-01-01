import React, { useState } from 'react'
import Header from '../components/Header'
import {Box, Typography} from "@mui/material";
import Button from '@mui/material/Button'
import AddInvoice from '../components/AddInvoice';
import Invoices from '../components/Invoices';
import { useEffect } from 'react';
import { deleteInvoice, getAllInvoices } from '../services/api';


const Home = () => {
          const [addInvoice, setAddInvoice] = useState(false);
          const [invoices, setInvoices ] = useState([]);

          useEffect(()=>{
                const getData = async()=>{
                  const response = await getAllInvoices();
            response && response.data && setInvoices(response.data);
            console.log(response.data)
                }
                getData();
          },[addInvoice])
                
          const toggleInvoice = () =>{
                        setAddInvoice(true);
                }
          const removeInvoice =async (id) => {
               await deleteInvoice(id);

        const updatedInvoices = invoices.filter((invoice) => invoice.id !== id);
                setInvoices(updatedInvoices)
          }      
  return (
        <>
    <Header />
        <Box>
                <Typography variant="h4" color="initial">Pending Invoices</Typography>
               
               {!addInvoice &&
                 <Button 
                 variant="contained" color="primary" style={{ marginTop: 15}}
                 onClick={()=>toggleInvoice()}
                 > Add Invoice         
                </Button>
                }
               {
                    addInvoice && <AddInvoice setaddInvoice={setAddInvoice} />
               }
        </Box>

        <Box>
                <Invoices invoices={invoices}
                removeInvoice={removeInvoice}
                />

        </Box>
        
        </>
  )
}

export default Home