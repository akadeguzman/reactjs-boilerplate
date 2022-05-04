import { Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, Typography, Divider, FormLabel, TextField, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Accordion, AccordionDetails, AccordionSummary, Stack, AccordionActions, Paper, TableContainer, tableCellClasses, styled, FormControl, MenuItem, Select, IconButton, Chip } from '@mui/material';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Outlet } from 'react-router-dom';

//Icons
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewSuperAdmin from './ViewSuperAdmin';
import AddSuperAdmin from './AddSuperAdmin';
import UpdateSuperAdmin from './UpdateSuperAdmin';

//Custom Style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E5E5E5",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


//Mock Data
function createData(
    idNumber: number,
    username: string,
    member: string,
    status: string,
) {
    return { idNumber, username, member, status};
}

const rows = [
    createData(
        59487,
        'alovelace',
        'Ada Lovelace',
        'Active'),
    createData(
        34175,
        'ghopper',
        'Grace Hopper',
        'Active'),
    createData(
        62439,
        'mhamilton',
        'Margaret Hamilton',
        'Inactive'),
    createData(
        27965,
        'jclarke',
        'Joan Clarke',
        'Active'),

];

const getColor = (status: string) => {
    if (status === "Active") return 'success';
    else return 'error';
};

export default function SuperAdmins() {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'transparent',
                my: 1,
                mx: 3,
                px: 2,
                pt: 0,
                pb: 2,
            }}
        >
            <React.Fragment>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Super Admins
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            size='small'
                            placeholder="Search"
                            type="search"
                            id="cashInSearch"
                        />
                    </Grid>
                    <Grid item xs={7} />
                    <Grid item xs={2}>
                        <Button variant="contained" startIcon={<AddIcon />} sx={{ borderRadius: 20, width: 250 }} color='success' component={Link} to='addMerchant'>
                            Add New Super Admin
                        </Button>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", gap: "1rem" }}>
                        <Typography>
                            Total Super Admins:
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            4
                        </Typography>
                    </Grid>
                    <Grid item xs={5} />
                    <Grid item xs={2.5} style={{ display: "flex", gap: "1rem", marginRight: 5 }}>
                        <Typography noWrap width={80} paddingTop={1}>
                            Sort by:
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                size='small'
                                name="sortBy"
                                placeholder="select"
                            >
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>ID Number</StyledTableCell>
                                        <StyledTableCell align='center'>Username</StyledTableCell>
                                        <StyledTableCell align='center'>Member</StyledTableCell>
                                        <StyledTableCell align='center'>Status</StyledTableCell>
                                        <StyledTableCell align='center'>Actions</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.idNumber}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {row.idNumber}
                                            </TableCell>
                                            <TableCell align='center'>{row.username}</TableCell>
                                            <TableCell align='center'>{row.member}</TableCell>
                                            <TableCell align='center'>
                                                <Chip size='small' color={getColor(row.status)} label={
                                                    <Typography fontSize={13}>
                                                        {row.status}
                                                    </Typography>
                                                } />
                                            </TableCell>
                                            <TableCell align='center'>
                                                <React.Fragment>
                                                    <IconButton>
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                    <IconButton color='info'>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton color='error'>
                                                        <DoDisturbOnIcon />
                                                    </IconButton>
                                                </React.Fragment>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    
                    <ViewSuperAdmin />
                    <AddSuperAdmin />
                    <UpdateSuperAdmin />                                


                </Grid>
            </React.Fragment>
            <Outlet />
        </Box>
    );
}