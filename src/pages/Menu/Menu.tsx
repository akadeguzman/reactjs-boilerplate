import * as React from 'react';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import { Drawer, AppBar, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ListItems } from './ListItems';

import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const drawerWidth: number = 290;


const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#a72a17',
            contrastText: 'white',
        },
        secondary: {
            main: '#FFFFFF',
        }

    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: "#a72a17",
                }
            }
        }
    }
});


function DashboardContent() {

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [open, setOpen] = React.useState(true);
    const [dropdown, setDropdown] = React.useState(false);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="white"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Daltan
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}>
                    <Toolbar />

                    {/* LIST for the MENU */}
                    <List component="nav" sx={{ p: 1 }}>
                        <ListItemButton component={Link} to='profile'>
                            <ListItemIcon>
                                <AccountCircleIcon style={{ fontSize: 40 }} color="secondary" />
                            </ListItemIcon>
                            <ListItemText secondary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        fontWeight={'bold'}
                                    >
                                        Daltan Super Admin
                                    </Typography>

                                </React.Fragment>
                            }>
                                <Typography color="secondary">
                                    Profile
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='cashIn'>
                            <ListItemIcon>
                                <LocalAtmIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Cash In Request
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='cashOut'>
                            <ListItemIcon>
                                <ReceiptLongIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography color="secondary">
                                    Cash Out Reqeust
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='transactionHistory'>
                            <ListItemIcon>
                                <RestorePageIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Transaction History
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='merchants'>
                            <ListItemIcon>
                                <StorefrontIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Merchants
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton onClick={() => setDropdown(!dropdown)}>
                            <ListItemIcon>
                                <PeopleAltIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Members
                                </Typography>
                            </ListItemText>
                            {dropdown ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                        </ListItemButton>
                        <Collapse in={dropdown} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to='merchantMembers'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Merchant Members
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to='userList'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            User Registration
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={() => setDropdown(!dropdown)}>
                            <ListItemIcon>
                                <AssessmentIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Reports
                                </Typography>
                            </ListItemText>
                            {dropdown ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                        </ListItemButton>
                        <Collapse in={dropdown} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Cash In Request Report
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Cash Out Request Report
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} >
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Volume of Transactions Report
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Divider variant='middle' sx={{ my: 3 }} />

                        <ListItemButton component={Link} to='faq'>
                            <ListItemIcon>
                                <QuizIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    FAQ
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='contactUs'>
                            <ListItemIcon>
                                <ContactlessIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Contact Us
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </List>
                </Drawer>

                {/* MAIN Content Space */}
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}