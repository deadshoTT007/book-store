import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PrimaryButton from '@/components/elements/PrimaryButton';
import SecondaryButton from '@/components/elements/SecondaryButton';

const useStyles = makeStyles(() => ({
    mainContainer: {
        padding: '0 24px'
    },
    heroContainer: {
        backgroundImage: `url(images/hero-section.png), linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))`,

        // width: '100%',
        height: '400px',
        margin: '24px 0px 24px'
    },
    heroTextContainer: {
        width: '50%',
        padding: '80px 10px 20px 40px'
    },
    heroHeader: {
        fontWeight: 700,
        fontSize: '48px',
        color: 'white',
        textTransform: 'capitalize'
    },
    heroButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    leftImage: {
        backgroundImage: `url(images/product.png)`,
        // width: '100%',
        height: '500px',
        // marginLeft: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px'
    },
    rightImage: {
        backgroundImage: `url(images/eye-glass.png)`,
        // width: '100%',
        height: '500px',
        // marginRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px'
    },
    imageHeader: {
        fontWeight: 700,
        fontSize: '40px',
        color: 'white',
        textTransform: 'capitalize',
        lineHeight: '45px'
    },
    imageDescription: {
        fontWeight: 700,
        fontSize: '20px',
        color: 'white',
        marginTop: '10px'
    },
    homeTryOn: {
        backgroundImage: `url(images/ads-section.png)`,
        height: '330px',
        marginTop: '24px',
        display: 'flex'
    },
    homeTryOnText: {
        fontWeight: 700,
        fontSize: '40px',
        color: 'black',
        margin: '20px auto',
        textTransform: 'capitalize',
    },
    brandContainerHeader: {
        fontWeight: 700,
        fontSize: '32px',
        color: 'black',
        margin: '20px auto',
        textAlign: 'center',
        width: '50%',
        textTransform: 'capitalize',
    },
    brandContainer: {

    },
    brandItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px'
    },
    brandItemHeader: {
        fontWeight: 500,
        fontSize: '32px',
        color: 'black',
        textAlign: 'center'
    },
    brandItemText: {
        fontWeight: 400,
        fontSize: '16px',
        color: 'black',
        textAlign: 'center',
        width: '80%'
    },
    brandItemLogo: {
        height: '100px',
        marginBottom: '20px'
    },
    virtualContainer: {
        padding: '20px',
        backgroundColor: '#137D27'
    },
    virtualImage: {
        height: '330px',
    }

}));

const HomePage = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.heroContainer}>
                <div className={classes.heroTextContainer}>
                    <Typography className={classes.heroHeader}>Find the sunglass that protect you everytime</Typography>
                    <div className={classes.heroButtonContainer}>
                        <SecondaryButton title={'For Men'} style={{ width: '160px', marginRight: '30px' }} />
                        <SecondaryButton title={'For Women'} style={{ width: '160px' }} />
                    </div>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={classes.leftImage}>
                        <Typography className={classes.imageHeader}>Iconic Styles with wide range of Sunglasses</Typography>
                        <Typography className={classes.imageDescription}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                        <PrimaryButton title={'Shop Sunglasses'} style={{ width: '200px', marginTop: '20px' }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.rightImage}>
                        <Typography className={classes.imageHeader}>Your custom glasses to match your personality</Typography>
                        <Typography className={classes.imageDescription}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                        <PrimaryButton title={'Shop Eyeglasses'} style={{ width: '200px', marginTop: '20px' }} />
                    </div>
                </Grid>
            </Grid>
            <div className={classes.homeTryOn}>
                <Typography className={classes.homeTryOnText}>Get 5-frames for Home Try-On.</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography className={classes.brandContainerHeader}>Shop Premium glasses from world reknowned eye wear companies</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.brandItem}>
                            <img className={classes.brandItemLogo} src={'images/image-1.png'} alt={'sunglasses hut'} />
                            <Typography className={classes.brandItemHeader}>Sun Glass Hut</Typography>
                            <Typography className={classes.brandItemText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                            <SecondaryButton title={'Buy Sunglass Hut'} style={{ width: '220px', border: 'solid 1px #000', color: 'black' }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.brandItem}>
                            <img className={classes.brandItemLogo} src={'images/image-2.png'} alt={'sunglasses hut'} />
                            <Typography className={classes.brandItemHeader}>Ray-Ban</Typography>
                            <Typography className={classes.brandItemText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                            <SecondaryButton title={'Buy Ray Ban'} style={{ width: '220px', border: 'solid 1px #000', color: 'black' }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.brandItem}>
                            <img className={classes.brandItemLogo} src={'images/image-3.png'} alt={'sunglasses hut'} />
                            <Typography className={classes.brandItemHeader}>Okaley</Typography>
                            <Typography className={classes.brandItemText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                            <SecondaryButton title={'Buy Okaley'} style={{ width: '220px', border: 'solid 1px #000', color: 'black' }} />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.virtualContainer}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <img className={classes.vitualImage} src={'images/girl.png'} alt={'girl glasses'} />

                    </Grid>
                    <Grid item xs={12} md={6} className={classes.brandItem}>
                        <Typography className={classes.brandItemHeader}>Virtual Try-On</Typography>
                        <Typography className={classes.brandItemText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                        <SecondaryButton title={'Virtual Try-On'} style={{ width: '220px', border: 'solid 1px #000', color: 'black' }} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default HomePage;