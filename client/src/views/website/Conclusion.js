import * as React from 'react';
import { styled } from '@mui/material/styles';
import { red, blue, green, orange } from '@mui/material/colors';
import { Container, Typography, Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Icon, Rating } from '@mui/material';
import Header from '../../components/Header';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

const Conclusion = props => {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };

    return (
      <div>
        <Header />
        <Container maxWidth="md" sx={{ pt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>Conclusion</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h6'>Social license of zoos evaluation</Typography>
                </Grid>

                {/* 1 zoo 
                <Grid item xs={12}>
                    <Card fullWidth>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: blue[500] }} aria-label="zoo">
                                    M
                                </Avatar>
                            }                        
                            title="Melbourne Zoo"
                            subheader="November 03, 2020"
                        />
                        <CardMedia
                            component="img"
                            height="500"
                            image="https://images.unsplash.com/photo-1611337844228-002c53c2b2a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="melbourne zoo"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Quis imperdiet massa tincidunt nunc pulvinar. Dui faucibus in ornare quam viverra orci. 
                                Imperdiet proin fermentum leo vel orci. 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2">Evaluation result:</Typography>
                            <Rating name="rating" defaultValue={2.0} precision={0.5} readOnly />
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <Icon>expand_more</Icon>
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph variant="body1">Animal's welfare response to captivity:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis imperdiet massa tincidunt nunc pulvinar. 
                                    Dui faucibus in ornare quam viverra orci. 
                                </Typography>
                                
                                <Typography paragraph variant="body1">Community engagement with animals in the zoo:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Turpis egestas sed tempus urna et pharetra pharetra massa. 
                                    Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. 
                                    Condimentum lacinia quis vel eros.
                                </Typography>

                                <Typography paragraph variant="body1">Conservation trends and decisions:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et. 
                                    Vitae congue eu consequat ac felis. 
                                    Aliquam sem et tortor consequat id porta. 
                                    Orci eu lobortis elementum nibh tellus.
                                </Typography>

                                <Typography paragraph variant="body1">Evaluation based on the sixth mass extinction characteristics:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Vestibulum lorem sed risus ultricies. Sed euismod nisi porta lorem mollis. 
                                    Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
                                    Pulvinar elementum integer enim neque volutpat ac. 
                                    Enim nunc faucibus a pellentesque. 
                                    Imperdiet dui accumsan sit amet nulla.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                */}

                {/* 4 zoos */}
                {/* Zoo 1 */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="zoo">
                                    V
                                </Avatar>
                            }                        
                            title="Victoria Zoo"
                            subheader="September 14, 2020"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1559523091-7ab99db823dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                            alt="victoria zoo"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Quis imperdiet massa tincidunt nunc pulvinar. Dui faucibus in ornare quam viverra orci. 
                                Imperdiet proin fermentum leo vel orci. 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2">Evaluation result:</Typography>
                            <Rating name="rating" defaultValue={2.5} precision={0.5} readOnly />
                            <ExpandMore
                                expand={expanded1}
                                onClick={handleExpandClick1}
                                aria-expanded={expanded1}
                                aria-label="show more"
                            >
                                <Icon>expand_more</Icon>
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph variant="body1">Animal's welfare response to captivity:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis imperdiet massa tincidunt nunc pulvinar. 
                                    Dui faucibus in ornare quam viverra orci. 
                                </Typography>
                                
                                <Typography paragraph variant="body1">Community engagement with animals in the zoo:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Turpis egestas sed tempus urna et pharetra pharetra massa. 
                                    Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. 
                                    Condimentum lacinia quis vel eros.
                                </Typography>

                                <Typography paragraph variant="body1">Conservation trends and decisions:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et. 
                                    Vitae congue eu consequat ac felis. 
                                    Aliquam sem et tortor consequat id porta. 
                                    Orci eu lobortis elementum nibh tellus.
                                </Typography>

                                <Typography paragraph variant="body1">Evaluation based on the sixth mass extinction characteristics:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Vestibulum lorem sed risus ultricies. Sed euismod nisi porta lorem mollis. 
                                    Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
                                    Pulvinar elementum integer enim neque volutpat ac. 
                                    Enim nunc faucibus a pellentesque. 
                                    Imperdiet dui accumsan sit amet nulla.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>

                {/* Zoo 2 */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: blue[500] }} aria-label="zoo">
                                    M
                                </Avatar>
                            }                        
                            title="Melbourne Zoo"
                            subheader="November 03, 2020"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1611337844228-002c53c2b2a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="melbourne zoo"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Quis imperdiet massa tincidunt nunc pulvinar. Dui faucibus in ornare quam viverra orci. 
                                Imperdiet proin fermentum leo vel orci. 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2">Evaluation result:</Typography>
                            <Rating name="rating" defaultValue={2.0} precision={0.5} readOnly />
                            <ExpandMore
                                expand={expanded2}
                                onClick={handleExpandClick2}
                                aria-expanded={expanded2}
                                aria-label="show more"
                            >
                                <Icon>expand_more</Icon>
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph variant="body1">Animal's welfare response to captivity:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis imperdiet massa tincidunt nunc pulvinar. 
                                    Dui faucibus in ornare quam viverra orci. 
                                </Typography>
                                
                                <Typography paragraph variant="body1">Community engagement with animals in the zoo:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Turpis egestas sed tempus urna et pharetra pharetra massa. 
                                    Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. 
                                    Condimentum lacinia quis vel eros.
                                </Typography>

                                <Typography paragraph variant="body1">Conservation trends and decisions:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et. 
                                    Vitae congue eu consequat ac felis. 
                                    Aliquam sem et tortor consequat id porta. 
                                    Orci eu lobortis elementum nibh tellus.
                                </Typography>

                                <Typography paragraph variant="body1">Evaluation based on the sixth mass extinction characteristics:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Vestibulum lorem sed risus ultricies. Sed euismod nisi porta lorem mollis. 
                                    Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
                                    Pulvinar elementum integer enim neque volutpat ac. 
                                    Enim nunc faucibus a pellentesque. 
                                    Imperdiet dui accumsan sit amet nulla.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>

                {/* Zoo 3 */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: green[500] }} aria-label="zoo">
                                    S
                                </Avatar>
                            }                        
                            title="Sydney Zoo"
                            subheader="October 23, 2019"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1627981440910-552a0b1d7450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="sydney zoo"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Quis imperdiet massa tincidunt nunc pulvinar. Dui faucibus in ornare quam viverra orci. 
                                Imperdiet proin fermentum leo vel orci. 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2">Evaluation result:</Typography>
                            <Rating name="rating" defaultValue={3.5} precision={0.5} readOnly />
                            <ExpandMore
                                expand={expanded3}
                                onClick={handleExpandClick3}
                                aria-expanded={expanded3}
                                aria-label="show more"
                            >
                                <Icon>expand_more</Icon>
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded3} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph variant="body1">Animal's welfare response to captivity:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis imperdiet massa tincidunt nunc pulvinar. 
                                    Dui faucibus in ornare quam viverra orci. 
                                </Typography>
                                
                                <Typography paragraph variant="body1">Community engagement with animals in the zoo:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Turpis egestas sed tempus urna et pharetra pharetra massa. 
                                    Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. 
                                    Condimentum lacinia quis vel eros.
                                </Typography>

                                <Typography paragraph variant="body1">Conservation trends and decisions:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et. 
                                    Vitae congue eu consequat ac felis. 
                                    Aliquam sem et tortor consequat id porta. 
                                    Orci eu lobortis elementum nibh tellus.
                                </Typography>

                                <Typography paragraph variant="body1">Evaluation based on the sixth mass extinction characteristics:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Vestibulum lorem sed risus ultricies. Sed euismod nisi porta lorem mollis. 
                                    Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
                                    Pulvinar elementum integer enim neque volutpat ac. 
                                    Enim nunc faucibus a pellentesque. 
                                    Imperdiet dui accumsan sit amet nulla.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>

                {/* Zoo 4 */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: orange[500] }} aria-label="zoo">
                                    A
                                </Avatar>
                            }                        
                            title="Australia Zoo"
                            subheader="March 15, 2020"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1590692995054-b15a9e80a8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="australia zoo"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Quis imperdiet massa tincidunt nunc pulvinar. Dui faucibus in ornare quam viverra orci. 
                                Imperdiet proin fermentum leo vel orci. 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2">Evaluation result:</Typography>
                            <Rating name="rating" defaultValue={3.0} precision={0.5} readOnly />
                            <ExpandMore
                                expand={expanded4}
                                onClick={handleExpandClick4}
                                aria-expanded={expanded4}
                                aria-label="show more"
                            >
                                <Icon>expand_more</Icon>
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded4} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph variant="body1">Animal's welfare response to captivity:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis imperdiet massa tincidunt nunc pulvinar. 
                                    Dui faucibus in ornare quam viverra orci. 
                                </Typography>
                                
                                <Typography paragraph variant="body1">Community engagement with animals in the zoo:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Turpis egestas sed tempus urna et pharetra pharetra massa. 
                                    Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. 
                                    Condimentum lacinia quis vel eros.
                                </Typography>

                                <Typography paragraph variant="body1">Conservation trends and decisions:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et. 
                                    Vitae congue eu consequat ac felis. 
                                    Aliquam sem et tortor consequat id porta. 
                                    Orci eu lobortis elementum nibh tellus.
                                </Typography>

                                <Typography paragraph variant="body1">Evaluation based on the sixth mass extinction characteristics:</Typography>
                                <Typography paragraph variant="body2" color="text.secondary">
                                    Vestibulum lorem sed risus ultricies. Sed euismod nisi porta lorem mollis. 
                                    Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. 
                                    Pulvinar elementum integer enim neque volutpat ac. 
                                    Enim nunc faucibus a pellentesque. 
                                    Imperdiet dui accumsan sit amet nulla.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </div>
    )
}
  
export default Conclusion