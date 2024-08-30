import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function NavBar() {
  const Array = [
    {
      Image: "https://st.hzcdn.com/simgs/37e1bd44006702f8_14-5316/home-design.jpg",
      Title: "Lorem ipsum ",
      Description:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      Image: "https://www.thehousedesigners.com/images/plans/01/JAA/bulk/4422/4422-front-final_0308_tt_m.webp",
      Title: "Lorem ipsum dolor",
      Description:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      Image: "https://i.pinimg.com/originals/45/d9/22/45d922baf9989c8d8431e3002128894b.jpg",
      Title: "Lorem dolor",
      Description:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      Image: "https://i.pinimg.com/originals/f1/bf/9a/f1bf9a23fd7393e11522199187014e51.jpg",
      Title: "ipsum dolor",
      Description:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      Image: "https://homedesignwala.com/wp-content/uploads/2023/02/sundar-ghar-ka-design.webp",
      Title: "Lorem ipsumers",
      Description:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      Image: "https://pinoyhousedesigns.com/wp-content/uploads/2017/07/SHD11.jpg",
      Title: "Lorem  dollor ",
      Description:
        " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    }
  ];

  return (
    <Grid container  xs={12}>
      <Grid container item xs={12} justifyContent="center">
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontSize: { xs: "40px", md: "50px" },
            padding: { xs: "30px 0", md: "40px 0" },
          }}
        >
          Material UI Responsive Card
        </Typography>
      </Grid>

      {Array.map((item) => (
        <Grid item  xs={12}  md={4}>
          <Card Image={item.Image} Title={item.Title} Description={item.Description} />
        </Grid>
      ))}
    </Grid>
  );
}

function Card(Props) {
  return (
    <Grid container justifyContent="center">
      <Grid container item xs={10} sx={{ justifyContent: "center", borderRadius: "10px", margin: "30px 0" }}>
        <Grid container item xs={12}>
          <img
            src={Props.Image}
            alt="not found"
            style={{ height: "210px", width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ padding: "10px 0", display: "flex", justifyContent:"flex-start" }}>
          <Typography  sx={{fontSize:{xs:"25px",md:"30px"}}}>{Props.Title}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: {xs:"left",md:"center"},  padding: "0 0 10px 0px", display: "flex", justifyContent: "flex-start" }}>
          <Typography    sx={{fontSize:{xs:"15px",md:"20px"}}}>{Props.Description}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", marginBottom: "15px" }}>
          <Button variant="contained" sx={{ marginRight: "10px" }}>SHARE</Button>
          <Button variant="contained">READ MORE</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;
