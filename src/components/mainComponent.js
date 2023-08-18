import React, { useState } from "react";
import Table from "../components/table";
import Footer from "../components/footer";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography} from "@material-ui/core";
import calcul from '../images/calcul.svg';
import ReactFlagsSelect from "react-flags-select";
import { Grid } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createData } from "../components/table";
import { rows } from "../components/table";

const useStyles = makeStyles((theme) => ({
        section1 : 
        {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'left',
        padding: '100px',
        flexWrap:"wrap",
        backgroundColor : "white",
        },

         section1_div_h1 : 
        {
            fontSize: '3.5vw',
            background: "linear-gradient(#002233, #009473)",
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor : "transparent",
            fontWeight :"bolder",
            marginBottom:"20px",
            [theme.breakpoints.down('sm')]: {
                display: 'none',
                },
        },

        section1_div_h3 : 
        {
        fontSize: '2vw',
        background: "linear-gradient(#002233, #009473)",
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor : "transparent",
        marginBottom:"20px",
        width : "100%",
        [theme.breakpoints.down('sm')]: {
        display: 'none',
        },

        whiteSpace:"nowrap",
        overflow:"hidden",
        animation : "$typing 3s, $cursor .4s step-end infinite alternate"},
        '@keyframes typing': {
        '0%': {
            width: 0,
            },
            '100%': {
            width: '100%',
            },
        },
        '@keyframes cursor': {
            '0%': {
            borderBottomWidth: 2,
            },
            '100%': {
            borderBottomWidth: 0,
            },
        },

 
  }));

const Home = () =>
{
    const [selectedCountrySend, setSelectedCountrySend] = useState("FR");
    const [selectedCountryReceive, setSelectedCountryReceive] = useState("SN");
    const [tableKey, setTableKey] = useState(0);

    function updateTable(value)
    {
        rows.push(createData(value, 305, 3.7, 67, 4.3))
        console.log('done')
        setTableKey(prevKey => prevKey + 1);
    }

    function updateTableSecond(value)
    {
        rows.push(createData(value, 305, 3.7, 67, 4.3))
        console.log('done')
        setTableKey(prevKey => prevKey + 1);
    }

    const classes = useStyles();
    return(

        <div>

            <Box>
                 <Grid backgroundColor="#f9fafb" padding="50px" display="flex" justifyContent="center" flexDirection="column" alignContent="center" alignItems="center" gap="25px">

                            <div alignContent="center" alignItems="center">
                                <FormControl height="50px" sx={{width: { xs: '60%', md: 'auto' }}}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Montant Envoyé</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Montant Envoyé"
                                        placeholder="1€"
                                    />
                                </FormControl>
                                <>
                                    <ReactFlagsSelect
                                    selected={selectedCountrySend}
                                    searchable={false}
                                    onSelect={(code) => setSelectedCountrySend(code) & updateTable(selectedCountrySend)}
                                    showOptionLabel={true}
                                    showSelectedLabel={false}
                                    showSecondaryOptionLabel={false}
                                    showSecondarySelectedLabel={false}
                                    optionsSize={16}
                                    selectedSize={30}
                                    fullWidth={false}
                                    alignOptionsToRight={true}
                                    countries={["US", "GB", "FR", "DE", "IT", "NG"]}
                                />
                                </>
                            </div>

                            <div alignContent="center" alignItems="center">
                                <FormControl height="50px" sx={{ width: { xs: '60%', md: 'auto' }}}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Montant Reçu</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Montant Reçu"
                                        placeholder="655FCFA"
                                    />
                                </FormControl>
                                <>
                                    <ReactFlagsSelect
                                        selected={selectedCountryReceive}
                                        onSelect={(code) => setSelectedCountryReceive(code) & updateTableSecond(selectedCountryReceive)}
                                        showOptionLabel={true}
                                        showSelectedLabel={false}
                                        showSecondaryOptionLabel={false}
                                        showSecondarySelectedLabel={false}
                                        optionsSize={16}
                                        selectedSize={30}
                                        fullWidth={false}
                                        alignOptionsToRight={true}
                                    />
                                </>
                            </div>

                    </Grid>

                    <Table key={tableKey}/>

                    <Grid className={classes.section1}>

                        <img src={`${calcul}`} height="300px" width="350px" alt="svg medecin"/>

                        <Box>
                            
                            <Typography variant="h1" className={classes.section1_div_h1}>Company Title</Typography>

                            <Typography variant="h3" className={classes.section1_div_h3}>Texte descriptif</Typography>

                            <Typography variant="h3" className={classes.section1_div_h3}>Texte descriptif</Typography>

                        </Box>


                    </Grid>

                <Box>
                    
                </Box>
            </Box>

            <Footer/>
        </div>
    );
};

export default Home;