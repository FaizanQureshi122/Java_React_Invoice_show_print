import { Box, TextField, Typography, Button } from '@mui/material'
import {React, useState} from 'react'
import { saveInvoice } from '../services/api'
const defaultObj = {
        vendor: '',
        product: '',
        amount: 0,
        date: '',
        action: 'pending'
}
const AddInvoice = ({ setAddInvoice }) => {

      const [invoice , setInvoice ] = useState(defaultObj)

      const onValueChange = (e) =>{
        setInvoice({ ...invoice, [e.target.name]: e.target.value})
      } 

      const  addNewInvoice =async () => {
       await saveInvoice({...invoice, amount: Number(invoice['amount']) });
      // setAddInvoice(false)  
      }
  return (
    <Box>
      <Typography style={{ fontSize: 25, marginTop: 10, marginBottom: 20 }}>
        AddInvoice
      </Typography>
      <Box>
        <TextField
          style={{ marginRight: 20 }}
          variant="standard"
          placeholder="add vendor name"
          onChange={(e) => onValueChange(e)}
          name="vendor"
        />
        <TextField
          style={{ marginRight: 20 }}
          variant="standard"
          placeholder="add Product name"
          onChange={(e) => onValueChange(e)}
          name="product"
        />
        <TextField
          style={{ marginRight: 20 }}
          type="number"
          variant="standard"
          placeholder="add Amount name"
          onChange={(e) => onValueChange(e)}
          name="amount"
        />
        <TextField
          style={{ marginRight: 20 }}
          type="date"
          variant="standard"
          placeholder="add Date name"
          onChange={(e) => onValueChange(e)}
          name="date"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addNewInvoice()}
        >
          Add Invoice
        </Button>
      </Box>
    </Box>
  );
}

export default AddInvoice