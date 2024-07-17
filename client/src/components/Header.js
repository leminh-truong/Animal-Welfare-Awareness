import React from 'react'
import { AppBar, Box, Button, Toolbar, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('userInfo');
        navigate('/login');
    }

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        } else if (event.key === 'Escape') {
          setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Button color="inherit" href='./'>Home</Button>
                    <Button color="inherit" href='./posts'>Posts</Button>
                   
                    {userInfo && userInfo.token && userInfo.role == 'admin' ?
                        <Button
                            ref={anchorRef}
                            id="adminButton"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleToggle}
                        >    
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                        transformOrigin:
                                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}
                                    >
                                        <Paper elevation={3} variant="outlined">
                                            <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="adminButton"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem onClick={handleClose} component={Link} href="./admin">User Management</MenuItem>
                                                <MenuItem onClick={handleClose} component={Link} href='./candidatePosts'>Candidate Posts</MenuItem>
                                            </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                            Admin
                        </Button>
                        :
                        <Button></Button>
                    }
                </Box>
                {userInfo && userInfo.token ?
                    <Button color="inherit" onClick={logout}>Logout</Button>
                    :
                    <Button color="inherit" href='./login'>Login</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header