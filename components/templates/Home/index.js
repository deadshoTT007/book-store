import React from 'react';
import { makeStyles } from '@mui/styles';
import { colors, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PrimaryButton from '@/components/elements/PrimaryButton';
import SecondaryButton from '@/components/elements/SecondaryButton';
import { useRouter } from 'next/dist/client/router';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: '0 24px'
    },
    heroContainer: {
        // backgroundImage: `url(images/hero-section.png), linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))`,
backgroundRepeat:"no-repeat",
backgroundSize:"cover",
background:"linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url(images/hero-section.png)",
        // width: '100%',
        // height: '400px',
        margin: '24px 0px 24px',
        height:"400px",
        marginTop:"90px",
        display:'flex',
        alignItems:"center",
        [theme.breakpoints.down('md')]:{
            marginTop:"150px"
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:"150px"
        }

    },
    heroTextContainer: {
        width: '50%',
        padding: '40px',
        [theme.breakpoints.down('md')]:{
            width:"100%",
            padding:" 40px"
        }
    },
    heroHeader: {
        fontWeight: 700,
        fontSize: '48px',
        color: 'white',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]:{
            fontSize:"32px"
        }
    },
    heroButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    leftImage: {
        // backgroundImage: `url(images/product.png)`,
        background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(images/product.png)",
        // width: '100%',
        backgroundRepeat:"no-repeat",
backgroundSize:"cover",
        height: '500px',
        // marginLeft: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '40px',
        borderRadius:"4px"
    },
    rightImage: {
        background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(images/eye-glass.png)",
        // width: '100%',
        height: '500px',
        backgroundRepeat:"no-repeat",
        borderRadius:"4px",
backgroundSize:"cover",
        // marginRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '40px'
    },
    imageHeader: {
        fontWeight: 700,
        fontSize: '40px',
        color: 'white',
        textTransform: 'capitalize',
        lineHeight: '45px',
        [theme.breakpoints.down('md')]:{
            fontSize:"24px",
            lineHeight:"28px"
        }
    },
    imageDescription: {
        fontWeight: 400,
        fontSize: '20px',
        color: 'white',
        marginTop: '10px',
        [theme.breakpoints.down('md')]:{
            fontSize:"16px",
            lineHeight:"22px"
        }

    },
    homeTryOn: {
        backgroundImage: `url(images/collection.jpg)`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height: '330px',
        marginTop: '24px',
        display: 'flex'
    },
    homeTryOnText: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight:"31px",
        color: 'black',
        margin: '20px auto',
        textTransform: 'capitalize',
        padding:"0px 16px",
        textAlign:"center"
    },
    brandContainerHeader: {
        fontWeight: 700,
        fontSize: '24px',
        color: 'black',
        lineHeight:"31px",
        margin: '32px auto',
        marginTop:"40px",
        textAlign: 'center',
        width: '50%',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]:{
            width:"100%"
        }
    },
    brandContainer: {
        marginBottom:64
    },
    brandItem: {
        display: 'flex',
        flexDirection: 'column',
        // marginLeft:80,
        alignItems:"center",
        justifyContent:"center",
        padding: '10px',
        [theme.breakpoints.down('md')]:{
            alignItems: 'center',
            textAlign:"center"
        }
    },
    tryOnContainer:{
        marginLeft:80,
        [theme.breakpoints.down('md')]:{
            marginLeft:0,
    }
    },

    brandHeaderText:{
        fontWeight: 500,
        fontSize: '32px',
        color: '#0D0D0D',
        lineHeight:"38px",
        textAlign:"center",

    },
    brandSubHeaderText:{
        fontWeight: 500,
        fontSize: '16px',
        color: '#0D0D0D',
        textAlign:"center",
        marginTop:4
    },
    brandItemHeader: {
        fontWeight: 500,
        fontSize: '48px',
        color: '#fff',
        // textAlign: 'center'
    },
    brandItemText: {
        fontWeight: 400,
        fontSize: '20px',
        color: '#fff',
        // textAlign: 'center',
        // width: '80%',
        [theme.breakpoints.down('md')]:{
            textAlign:'center'

        }

    },
    brandItemLogo: {
        height: '100px',
        marginBottom: '24px',
        width:"200px"
    },
    virtualContainer: {
        padding: '20px',
        background:'linear-gradient(49.32deg, #137D27 0%, #03C95D 100%)',
    },
    vitualImage: {
        // height: '330px',
        width:"100%"
    },
    bannerContainer:{
        height:'400px',
        display:'flex',
        alignItems:"center",
        paddingLeft:"40px",
        background:"linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(images/backgroundglass.jpg)",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        margin:"24px 0",
        borderRadius:4

    },
    bannerText:{
        fontSize:"24px",
        fontWeight:"700",
        lineHeight:"31px",
        color:"#fff "
    },
    bannerTextCOntainer:{
width:"40%",
[theme.breakpoints.down('md')]:{
    width:'100%'
    }
    },
    buttonContainer:{
        marginTop:"40px",
        display:'flex'
    }

}));

const HomePage = (props) => {
const router=useRouter()
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.heroContainer}>
                <div className={classes.heroTextContainer}>
                    <Typography className={classes.heroHeader}>Find the sunglass that protect you everytime</Typography>
                    <div className={classes.heroButtonContainer}>
                        <SecondaryButton title={'For Men'} smallStyle={{padding:"8px 24px", fontSize:"12px"}} style={{ marginTop:40,border:`1px solid #fff`,color:"#fff",  marginRight: '24px' }} />
                        <SecondaryButton title={'For Women'} smallStyle={{padding:"8px 24px",fontSize:"12px"}} style={{ marginTop:40,border:`1px solid #fff`,color:"#fff" }} />
                    </div>
                </div>
            </div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <div className={classes.leftImage}>
                        <Typography className={classes.imageHeader}>Iconic Styles with wide range of Sunglasses</Typography>
                        <Typography className={classes.imageDescription}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                        <PrimaryButton actionClick={()=>router.push('/products')} title={'Shop Sunglasses'} parentStyle={{justifyContent:"start"}} style={{ width: '200px', marginTop: '20px',background:"linear-gradient(49.32deg, #137D27 0%, #03C95D 100%)" }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.rightImage}>
                        <Typography className={classes.imageHeader}>Your custom glasses to match your personality</Typography>
                        <Typography className={classes.imageDescription}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                        <PrimaryButton actionClick={()=>router.push('/products')} title={'Shop Eyeglasses'} parentStyle={{justifyContent:"start"}} style={{ width: '200px', marginTop: '20px',background:"linear-gradient(49.32deg, #137D27 0%, #03C95D 100%)" }} />
                    </div>
                </Grid>
            </Grid>
            <div className={classes.bannerContainer}>
                <div className={classes.bannerTextCOntainer}>
                <Typography className={classes.bannerText}>Make you kids happy with their choice of eyewears</Typography>
                <div className={classes.buttonContainer}>
                    <SecondaryButton title="Eyeglass" style={{marginRight:"24px",color:"#fff",border:"1px solid #fff"}}/>
                    <SecondaryButton title="Sunglass" style={{color:"#fff",border:"1px solid #fff"}}/>

                </div>
            </div>
            </div>
            <div className={classes.homeTryOn}>
                <Typography className={classes.homeTryOnText}>Get 5-frames for Home Try-On.</Typography>
            </div>
            <div className={classes.brandContainer}>
                <Typography className={classes.brandContainerHeader}>Shop Premium glasses from world reknowned eye wear companies</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.brandItem}>
                            <img className={classes.brandItemLogo} src={'images/image-1.png'} alt={'sunglasses hut'} />
                            <Typography className={classes.brandHeaderText}>Sun Glass Hut</Typography>
                            <Typography className={classes.brandSubHeaderText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                            <SecondaryButton title={'Buy Sunglass Hut'} style={{ marginTop:24,width: '220px', border: 'solid 1px #000', color: 'black' }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.brandItem}>
                            <img className={classes.brandItemLogo} src={'images/image-2.png'} alt={'sunglasses hut'} />
                            <Typography className={classes.brandHeaderText}>Ray-Ban</Typography>
                            <Typography className={classes.brandSubHeaderText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                            <SecondaryButton title={'Buy Ray Ban'} style={{ marginTop:24,width: '220px', border: 'solid 1px #000', color: 'black' }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.brandItem}>
                            <img className={classes.brandItemLogo} src={'images/image-3.png'} alt={'sunglasses hut'} />
                            <Typography className={classes.brandHeaderText}>Okaley</Typography>
                            <Typography className={classes.brandSubHeaderText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                            <SecondaryButton title={'Buy Okaley'}  style={{ marginTop:24,width: '220px', border: 'solid 1px #000', color: 'black' }} />
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
                        <div className={classes.tryOnContainer}>
                        <Typography className={classes.brandItemHeader}>Virtual Try-On</Typography>
                        <Typography className={classes.brandItemText}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                        <SecondaryButton title={'Virtual Try-On'} smallParentStyle={{justifyContent:"center"}} parentStyle={{justifyContent:"start"}} style={{ marginTop:"24px", border: 'solid 2px #fff', color: '#fff' }} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default HomePage;