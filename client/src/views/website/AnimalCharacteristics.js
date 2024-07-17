import React, { useEffect, useState, Image } from 'react'
import { Box, Container, Typography, Paper, Grid } from '@mui/material'
import Header from '../../components/Header'

const AnimalCharacteristic = ({ item }) => {
  return (
    <div>
      <Container maxWidth="md">
        <br />
        <Grid item xs={12}>
          <Paper variant='outlined'>
            <Box p={2}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img
                    src = {item.image}
                    width = {item.imageWidth} height={item.imageHeight}
                    align ="center"
                  ></img>
                </Grid>
                <Grid item xs={8}>
                  <Grid item xs={12}>
                    <Typography variant={"h6"}>{item.title}</Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <Typography variant={"body1"}>{item.text}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Container>
      <br />
    </div>
  )
}
const AnimalCharacteristics = () => {
  const [characteristics, setCharacteristics] = useState([]);
  useEffect(() => {
    setCharacteristics([
      {
        id: "1",
        title: "Habitat loss and fragmentation",
        text: "A large proportion of the panda's habitat has already been lost: logged for timber and fuel wood, or cleared for agriculture and infrastructure to meet the needs of the area's booming population." + 
        "New roads and railways are continuing to cut through the region, further fragmenting the forests. This isolates panda populations and prevents them from breeding.",
        image: "https://images.unsplash.com/photo-1462803966231-b88ec09ff42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        imageWidth: "250",
        imageHeight: "250"
      },
      {
        id: "2",
        title: "Lack of foods",
        text: "Pandas' reliance on bamboo as a primary food source puts them at risk during this plant's characteristic mass synchronous flowering and die-off events, which occur at intervals of 15 to 100 years." + 
        "In the past, pandas could migrate to new areas in search of food. When one bamboo species experienced a die-off, Pandas could easily migrate up or down slope to access a different species that was not affected." + 
        "But nowadays, they are no longer able to ‘follow’ the bamboo which cause Pandas are sometimes put at risk of starvation.",
        image: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageWidth: "220",
        imageHeight: "300"
      },
      {
        id: "3",
        title: "Hunting and Tourism",
        text: "Because of mass tourism, the construction of tourist facilities and the rapidly increasing number of tourists in the forests is causing significant disturbance to pandas and their habitats." + 
        "While it is rare for poachers to intentionally kill a panda, some are accidentally injured or killed by traps and snares set for other animals, such as musk deer and black bears.",
        image: "https://images.unsplash.com/photo-1551910264-be7091a8ae29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageWidth: "250",
        imageHeight: "250"
      },
      {
        id: "4",
        title: "Nutrition and Health",
        text: "Pandas spend most of their time feeding. They can eat for 14 hours a day, mainly bamboo, which is 99% of their diet (though they sometimes eat eggs or small animals too)." + 
        "Bamboo is a poor food source, low in protein and high in lignin and cellulose, and wild Giant Pandas can only digest an average of 17% of dry matter and about 27% of hemi-cellulose." + 
        "Thus, to meet their daily energy requirement, Giant Pandas must consume a large amount of bamboo, up to 12.5 kg per day, and defecate more than 100 times daily." + 
        "However, compared with other herbivores, the Panda has very low digestive efficiency because its digestive tract still resembles that of its carnivorous ancestors." + 
        "The Panda’s feeding strategy emphasizes volume, requiring it to allocate much of its time to foraging ",
        image: "https://images.unsplash.com/photo-1532920161727-344adb090f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        imageWidth: "250",
        imageHeight: "330"
      },
      {
        id: "5",
        title: "Solitary preferences",
        text: "Because pandas are solitary animals, the zoos usually give them own private space." + 
        "Pandas are also homebodies. Although their territory in the zoo can cover up to 6 km, in order to save energy they don’t actually move around much." + 
        "Some days they walk a few hundred metres, but they usually spend their time sleeping, snoozing or eating." + 
        "By the way, because bamboo grows year round, pandas do not need to hibernate.",
        image: "https://images.unsplash.com/photo-1526716121440-dc3b4f254a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        imageWidth: "250",
        imageHeight: "300"
      },
      {
        id: "6",
        title: "Hardness of successful breeding",
        text: "Giant Pandas are a solitary and seasonal-breeding mammal, only coming together during the breeding season, from March to May, for reproductive purposes." + 
        "A female panda has a single estrous cycle once a year, for 2 to 7 of those days, and she’s only actually fertile for 24 to 36 hours. That is a TINY window of opportunity." + 
        "Unfortunately, neither artificial insemination nor natural mating will guarantee a pregnancy." + 
        "Like many other species, pandas experience embryonic diapause, in which the embryo is fertilized, but not yet implanted in the uterine wall." + 
        "The offspring can’t continue to grow until it has implanted, so while the gestation period is around 50 days, some panda pregnancies can stretch out to more than 160 days because of diapause." + 
        "Moreover, female pandas often give birth to twins, but can only effectively care for a single cub." + 
        "In the wild, this means that one of the cubs is simply left to die.",
        image: "https://images.unsplash.com/photo-1599190168482-1c1903520a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageWidth: "250",
        imageHeight: "300"
      }
    ])
    // console.log("getting characteristics")
  }, [])

  // console.log(characteristics);
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4'>Characteristics</Typography>
            <Typography variant='h4'>which impact the survival of Giant Panda</Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={2}>
          {characteristics.map(item => (
            <AnimalCharacteristic item={item} />
          ))}
        </Grid>
        <p style={{textAlign: 'right'}}>
          Credit: 
          <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/giant_panda/problems/">World Wildlife Fund (WWF)</a>,
          <a href="https://www.iucnredlist.org/species/712/121745669">International Union for Conservation of Nature and Natural Resources (IUCN)</a>,
          <a href="https://www.pandasinternational.org/program-areas-2/captive-breeding-program/">Pandas International</a>,
          <a href="https://www.zoo-berlin.de/en/animals/giant-panda">Zoo Berlin</a>
        </p>
      </Container>
    </>
  )
}

export default AnimalCharacteristics