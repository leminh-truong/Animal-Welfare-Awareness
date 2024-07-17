import React from 'react'
import { Box, Container, Typography, Grid, Paper, ButtonBase } from '@mui/material'
import Header from '../../components/Header'
import EmbedVideo from '../../components/EmbedVideo';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const Home = props => {

  const images = [
    {
      //Image source - https://www.nbcnews.com/news/world/giant-pandas-are-no-longer-endangered-n643336
      url: process.env.PUBLIC_URL + '/resources/CharacteristicsBackground.jpg',
      title: 'Charactertistics that threaten Giant Panda',
      width: '50%',
    },
    {
      // Image source - https://trends.archiexpo.com/archiexpo-e-magazine/project-156461-266821.html
      url: process.env.PUBLIC_URL + '/resources/EvaluationBackground.jpg',
      title: 'Evaluation of Zoo\'s Social License',
      width: '50%',
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  let navigate = useNavigate();

  function onClickButton(title) {
    console.log("title")
    console.log(title)
    if (title === "Charactertistics that threaten Giant Panda") {
      navigate('/animalCharacteristics');
    }
    else {
      navigate('/conclusion');
    }
  }

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <br />
        <Grid container item xs={12} alignItems="center" justifyContent="center"><Typography variant='h3'>Giant Pandas</Typography></Grid>
        <br />
        <Grid item xs={12}>
          <Paper variant='outlined'>
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                <img 
                  src="https://images.unsplash.com/photo-1617910879258-2aff8026515d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
                  width="300" height="480"
                ></img>
                </Grid>
                <Grid item xs={7}>
                  <p><b>INTRODUCTION</b> - The panda, with its distinctive black and white coat, is adored by the world and considered a national treasure in China.</p>
                  <p>They live mainly in temperate forests high in the mountains of southwest China, where they subsist almost entirely on bamboo. They must eat around 26 to 84 pounds of it every day, depending on what part of the bamboo they are eating. They use their enlarged wrist bones that function as opposable thumbs.</p>
                  <p>A newborn panda is about the size of a stick of butter—about 1/900th the size of its mother—but females can grow up to about 200 pounds, while males can grow up to about 300 pounds as adults. These bears are excellent tree climbers despite their bulk.</p>
                  <p><b>FACTS on current situation</b></p>
                  <p>There are only 1,864 Giant padas in the wild and their extinction risk is considered as 'Vulnerable'.</p>
                  <p>
                    The survival of these pandas is impacted by many factors such as habitat loss or food shortage. 
                    You can find more detail about this in our related articles. 
                    Feel free to join our comunity to support our work in raising awareness about these pandas's welfare and extinction risks.
                    Let's protect them together! 
                  </p>
                  <p style={{textAlign: 'right'}}>
                    Credit: 
                    <a href="https://www.worldwildlife.org/species/giant-panda">World Wildlife Fund (WWF)</a>
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '75vh' }}
        >
          <EmbedVideo url="https://www.youtube.com/watch?v=dqT-UlYlg1s" />
        </Grid>
        <br />
        <br />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              onClick={() => onClickButton(image.title)}
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
        <br />
        <br />
        <Grid container item xs={12} alignItems="center" justifyContent="center"><Typography variant='h6'>Research Conclusion</Typography></Grid>
        <br />
        <Grid item xs={12}>
          <Paper variant='outlined'>
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  Lorem Ipsum Fis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <br />
        <br />
      </Container>
    </div>
  )
}


export default Home