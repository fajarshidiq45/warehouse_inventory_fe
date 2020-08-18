import React from 'react'
import { Link } from 'react-router-dom'
import warehouse from './warehouse.svg'
import Collapse from '@material-ui/core/Collapse'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'



const Navbar: react.FC = () => {
    // const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(!open)
    }



    return (

        // <List component="nav"  className={classes.appMenu} disablePadding>

        // <ListItem button className={classes.menuItem}>
        //         <ListItemIcon className={classes.menuItemIcon}>
        //             <IconDashboard />
        //         </ListItemIcon>
        //         <ListItemText primary="Dashboard" />
        //     </ListItem>
        //     <ListItem button onClick={handleClick} className={classes.menuItem}>
        //         <ListItemIcon className={classes.menuItemIcon}>
        //             <IconLibraryBooks />
        //         </ListItemIcon>
        //         <ListItemText primary="Manipulasi Barang" />
        //         {open ? <IconExpandLess /> : <IconExpandMore />}
        //     </ListItem>
        //     <Collapse in={open} timeout="auto" unmountOnExit>
        //         <Divider />
        //         <List component="div" disablePadding>
        //             <ListItem button className={classes.menuItem}>
        //                 <ListItemText inset primary="Barang" />
        //             </ListItem>
        //             <ListItem button className={classes.menuItem}>
        //                 <ListItemText  inset primary="Barang Masuk" />
        //             </ListItem>
        //         </List>
        //     </Collapse>

        //     <ListItem button className={classes.menuItem}>
        //         <ListItemIcon className={classes.menuItemIcon}>
        //             <IconBarChart />
        //         </ListItemIcon>
        //         <ListItemText primary="Reports" />
        //     </ListItem>
        // </List>

        <body className="body">
            <nav className="navbar-vertical navbar navbar-light navbar-glass navbar-expand-x1 nav">
                <div className="d-flex align-items-center ">
                    <button className="navbar-toggler nav-line" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <button type="button" id="toggleNavigationTooltip" className="navbar-toggler-humburger-icon navbar-vertical-toggle btn btn-link"> */}
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <span className="navbar-brand text-decoration-none text-left icon-warehouse" to="/">
                        <div className="d-flex align-items-center py-3">
                            <img className="mr-2" src={warehouse} alt="logo" width="40" />
                            <span className="text-sans-serif"></span>
                        </div>
                    </span>
                </div>

                <div className="scrollbar navbar-collapse" id="navbarNav" >
                    <div class="l-navbar" id="navbar" >
                        <div class="nav__brand">
                            <h1 className="nav__logo">Warehouse</h1>
                        </div>
                        <ul className="navbar-nav flex-column nav__link nav__logo">
                            <li className="nav-item" >

                                <Link to="/dashboard"><ion-icon name="home"></ion-icon> Dashboard  </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav flex-column nav__link nav__logo">
                            <li className="nav-item" button onClick={handleClick} >

                                <Link  ><ion-icon name="construct"></ion-icon> Manipulasi Barang {open ? <IconExpandLess /> : <IconExpandMore />}</Link>
                            </li>
                        </ul>
                        <div className="nav__sublink" >
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <ul >
                                    <li className=" nav__link">
                                        <Link to="/barang"><ion-icon name="cube-outline"></ion-icon> Barang</Link>
                                    </li>
                                    <li className="nav__link">

                                        <Link to="/barangmasuk"><ion-icon name="enter-outline"></ion-icon> Barang Masuk</Link>
                                    </li>

                                    <li className=" nav__link">
                                        <Link to="/barangkeluar"><ion-icon name="exit-outline"></ion-icon> Barang Keluar</Link>
                                    </li>
                                    <li className=" nav__link">
                                        <Link to="/rak"><ion-icon name="server-outline"></ion-icon> Rak</Link>
                                    </li>
                                    <li className="nav__link ">
                                        <Link to="/kategori"><ion-icon name="share-social-outline"></ion-icon> Kategori</Link>
                                    </li>
                                </ul>
                            </Collapse>
                           
                        </div>
                        <div className="nav__logo ">
                                <ul className="navbar-nav flex-column nav__link ">
                                    <li  >

                                        <Link  ><ion-icon name="receipt-outline" ></ion-icon> Laporan </Link>
                                    </li>

                                </ul>
                                <ul className="navbar-nav flex-column nav__link ">
                                    <li className="nav-item " >

                                        <Link  ><ion-icon name="paper-plane-outline"></ion-icon> Suplier </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="nav__admin">

                                <h1 className="nav__logo"><ion-icon name="person"></ion-icon> Role Admin</h1>
                            </div>
                            <div className="nav__logo ">
                                <ul className="nav__link">
                                    <li >

                                        <Link  ><ion-icon name="key"></ion-icon> Ganti Password</Link>
                                    </li>
                                </ul>
                                <ul className="nav__link ">
                                    <li >

                                        <Link  ><ion-icon name="log-out"></ion-icon> Log Out </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </nav>
        </body >
    )
}
// const drawerWidth = 240

// const useStyles = makeStyles(theme =>
//     createStyles({
//         appMenu: {
//             width: '100%',
//         },
//         navList: {
//             width: drawerWidth,
//         },
//         menuItem: {
//             width: drawerWidth,
//         },
//         menuItemIcon: {
//             color: '#97c05c',
//         },
//     }),


export default Navbar
