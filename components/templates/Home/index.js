import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PrimaryButton from '@/components/elements/PrimaryButton';
import SecondaryButton from '@/components/elements/SecondaryButton';
import { useRouter } from 'next/dist/client/router';
import Tabs from '@/components/Tabs';
import { colors } from '@/utils/index';
import Product from '@/components/modules/Product';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesList } from '@/store/actions/categories';
import { getProductsList } from '@/store/actions/products';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: '0 24px'
    },
    heroContainer: {
        // backgroundImage: `url(images/hero-section.png), linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: "url(images/hero.jpg)",
        // width: '100%',
        // height: '400px',
        margin: '24px 0px 24px',
        height: "700px",
        marginTop: "90px",
        display: 'flex',
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            marginTop: "150px"
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "150px"
        }

    },
    heroTextContainer: {
        width: '700px',
        padding: '40px',
        marginLeft: "10%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            padding: " 40px",
            marginLeft: "0%"
        },
        '& p': {
            color: "#000",
            fontWeight: 500,
            fontSize: 32
        }
    },
    heroHeader: {
        fontWeight: 700,
        fontSize: '48px',
        color: 'white',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
            fontSize: "32px"
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
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(images/product.png)",
        // width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '500px',
        // marginLeft: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '40px',
        borderRadius: "4px"
    },
    rightImage: {
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(images/eye-glass.png)",
        // width: '100%',
        height: '500px',
        backgroundRepeat: "no-repeat",
        borderRadius: "4px",
        backgroundSize: "cover",
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
        [theme.breakpoints.down('md')]: {
            fontSize: "24px",
            lineHeight: "28px"
        }
    },
    imageDescription: {
        fontWeight: 400,
        fontSize: '20px',
        color: 'white',
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
            lineHeight: "22px"
        }

    },
    homeTryOn: {
        backgroundImage: `url(images/collection.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '330px',
        marginTop: '24px',
        display: 'flex'
    },
    homeTryOnText: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: "31px",
        color: 'black',
        margin: '20px auto',
        textTransform: 'capitalize',
        padding: "0px 16px",
        textAlign: "center"
    },
    brandContainerHeader: {
        fontWeight: 700,
        fontSize: '24px',
        color: 'black',
        lineHeight: "31px",
        margin: '32px auto',
        marginTop: "40px",
        textAlign: 'center',
        width: '50%',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
            width: "100%"
        }
    },
    brandContainer: {
        marginBottom: 64
    },
    brandItem: {
        display: 'flex',
        flexDirection: 'column',
        // marginLeft:80,
        alignItems: "center",
        justifyContent: "center",
        padding: '10px',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
            textAlign: "center"
        }
    },
    tryOnContainer: {
        marginLeft: 80,
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        }
    },

    brandHeaderText: {
        fontWeight: 500,
        fontSize: '32px',
        color: '#0D0D0D',
        lineHeight: "38px",
        textAlign: "center",

    },
    brandSubHeaderText: {
        fontWeight: 500,
        fontSize: '16px',
        color: '#0D0D0D',
        textAlign: "center",
        marginTop: 4
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
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'

        }

    },
    brandItemLogo: {
        height: '100px',
        marginBottom: '24px',
        width: "200px"
    },
    virtualContainer: {
        padding: '20px',
        background: 'linear-gradient(49.32deg, #137D27 0%, #03C95D 100%)',
    },
    vitualImage: {
        // height: '330px',
        width: "100%"
    },
    bannerContainer: {
        height: '400px',
        display: 'flex',
        alignItems: "center",
        paddingLeft: "40px",
        background: "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(images/backgroundglass.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "24px 0",
        borderRadius: 4

    },
    bannerText: {
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "31px",
        color: "#fff "
    },
    bannerTextCOntainer: {
        width: "40%",
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    buttonContainer: {
        marginTop: "40px",
        display: 'flex'
    },
    heroTitle: {
        fontSize: '60px',
        fontWeight: 700,
        lineHeight: "66px",
        color: "#d14031",
        marginTop: "20px",
    },
    newArrivalContainer: {
        margin: "80px 0",
        textAlign: "center",
    },
    arrivalText: {
        fontSize: "40px",
        fontWeight: "700",
        marginBottom: 20
    },
    divider: {
        background: colors.primary,
        height: '5px',
        width: "80px",
        margin: "0 auto",
        marginBottom: "20px"
    },
    tabContainer: {
        width: "60%",
        margin: "0 auto",
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
    productContainer: {
        marginTop: '60px',
        display: "grid",
        width: "85%",
        margin: "0 auto",
        // flexWrap:"wrap",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridRowGap: "40px",
        gridColumnGap: "20px",
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "repeat(1, 1fr)",
            width: "100%"
        }
        // rowGap:"20px"
    }

}));

const HomePage = (props) => {
    const router = useRouter()
    const classes = useStyles();
    const categoriesList = useSelector(state => state.categories.categoriesList)
    const productsList = useSelector(state => state.products.productsList)
    const [specificCategory, setSpecificCategory] = useState(null)
    console.log(specificCategory,"spec")
    useEffect(()=>{
        if(categoriesList.length>0)
        setSpecificCategory(categoriesList[0].id)
    },[categoriesList])
    console.log(specificCategory,"specific")
    const dispatch = useDispatch()
    const tabData = [
        { title: "All" },
        { title: "Cook Book" },
        { title: "History" },
        { title: "Fantacy" },
        { title: "Romance" }
    ]

    useEffect(() => {
        dispatch(getProductsList())
    }, [])

     const categoryChooseHandler = (id) =>{
        setSpecificCategory(id)
     }


    return (
        <>
        { ( categoriesList.length>0 && productsList.length>0 ) ?
         <div className={classes.mainContainer}>
         <div className={classes.heroContainer}>
             <div className={classes.heroTextContainer}>
                 <Typography className={classes.heroHeader}>Year end sale</Typography>
                 <div className={classes.heroTitle}>Get 70% Off for All Design Books</div>
                 <PrimaryButton parentStyle={{ marginTop: "40px" }} title="Shop Now" />
             </div>
         </div>
         <Grid container spacing={4}>
             <Grid item xs={12} md={6}>
                 <div className={classes.leftImage}>
                     <Typography className={classes.imageHeader}>Iconic Styles with wide range of Sunglasses</Typography>
                     <Typography className={classes.imageDescription}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                     <PrimaryButton actionClick={() => router.push('/products')} title={'Shop Sunglasses'} parentStyle={{ justifyContent: "start" }} style={{ width: '200px', marginTop: '20px', background: "linear-gradient(49.32deg, #137D27 0%, #03C95D 100%)" }} />
                 </div>
             </Grid>
             <Grid item xs={12} md={6}>
                 <div className={classes.rightImage}>
                     <Typography className={classes.imageHeader}>Your custom glasses to match your personality</Typography>
                     <Typography className={classes.imageDescription}>Stand out and let your light shine with this collection of bold and bright sunglasses</Typography>
                     <PrimaryButton actionClick={() => router.push('/products')} title={'Shop Eyeglasses'} parentStyle={{ justifyContent: "start" }} style={{ width: '200px', marginTop: '20px', background: "linear-gradient(49.32deg, #137D27 0%, #03C95D 100%)" }} />
                 </div>
             </Grid>
         </Grid>
         <div className={classes.newArrivalContainer}>
             <div className={classes.arrivalText}>New Arrivals</div>
             <div className={classes.divider}></div>
             <div className={classes.tabContainer}>
                 {categoriesList.length > 0 && categoriesList.map((cat, index) => {
                     return (
                         <Tabs actionClick={()=>categoryChooseHandler(cat.id)}  specificCategory={specificCategory && specificCategory} key={cat.id} id={cat.id} title={cat.category_name} />
                     )
                 })}
                
             </div>
             <div className={classes.productContainer}>
                 {productsList.filter((product)=>product.id===specificCategory).map((product, index) => {
                     return (
                         <Product />
                     )
                 })}
             </div>
         </div>
     </div>
    :
    ""}
       
</>
    )
}

export default HomePage;