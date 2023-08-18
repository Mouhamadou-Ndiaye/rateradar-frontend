import React from "react";
import Footer from "../components/footer";
import transfert from '../images/transfert.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
          section: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "50px",
    backgroundColor: "#f9fafb",
  },
  imageBox: {
    flex: "1 1 50%", // Adjust the width of the image box as needed
    padding: "20px",
    textAlign: "center",
  },
  textBox: {
    flex: "1 1 50%", // Adjust the width of the text box as needed
    padding: "20px",
  },
  image: {
    maxWidth: "500px",
    maxHeight: "300px",
    borderRadius: "10px",
  },

 
  }));

const About = () =>
{

    const classes = useStyles();

    return(

        <div>
            <section className={classes.section}>
        <Box className={classes.imageBox}>
          <img
            src={`${transfert}`}
            alt="Mission"
            className={classes.image}
          />
        </Box>
        <Box className={classes.textBox}>
          <Typography variant="h3"style={{marginBottom:"20px"}}>Qu'est ce que Company Title</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </section>
            <Footer/>
        </div>
    );
};

export default About;