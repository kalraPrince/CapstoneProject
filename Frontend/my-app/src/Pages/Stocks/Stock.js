// import React from "react";
// import stockdata from "./Stockdata";

// import DraftsIcon from '@mui/icons-material/Drafts';

// function StockTable(){
//     return(
//         <div>
                
//                 <h3 className="s-head">Stock Report</h3>
//                 <div className="s-table">
                
//                     <table className="table table-hover ">
//                         <thead>
//                             <tr>
                                
//                                 <th>Product Title</th>
//                                 <th>Quantity</th>
//                                 <th>Email</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 stockdata.map((item)=>(
//                                     <tr>
                                       
//                                         <td>{item.title}</td>
//                                         <td>{item.quantity}</td>
//                                         <td><DraftsIcon></DraftsIcon></td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
                    
//                 </div>
                
//             </div>
            

//     )
// }   
// export default StockTable


import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from  "@mui/material"
import stockdata from "./Stockdata";
import DraftsIcon from '@mui/icons-material/Drafts';
import "../../Styles/Stock.css"
import { Fragment } from "react";
import { Helmet } from "react-helmet";



function StockTable(){
    return (
        <Fragment>
            <Helmet><title>Stock</title></Helmet>
            <h2 className="heading">Stock Report</h2>
        <TableContainer component={Paper} className="stock-Paper">
            <Table  aria-label='simple table' sx={{
    "& .MuiTableRow-root:hover": {
      backgroundColor: 'rgb(211,211,211)'
    }
  }}>
                <TableHead className="stock-head">
                    <TableRow>
                        
                        <TableCell align="center" fontWeight="bold">Product Title</TableCell>
                        <TableCell align="center" fontWeight="bold">Quantity</TableCell>
                        <TableCell align="center" fontWeight="bold">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        stockdata.map(row=>(
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th':{border: 0 }}}>
                                
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                
                                <TableCell  align="center"><DraftsIcon></DraftsIcon></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
</Fragment>
    )
}
export default StockTable

