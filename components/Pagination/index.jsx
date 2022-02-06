import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const useStyles=makeStyles(theme=>({
    pagination:{
display:"flex",
alignItems:"center",
justifyContent:"flex-end",
marginTop:24
    },
button:{
    outline:"none",
    border:`1px solid ${colors.black}`,
    borderRadius:25,
    cursor:"pointer",
    padding:"8px 16px",
    background:"transparent",
    margin:"0 16px",
    '&:last-child':{
        margin:0,
        marginLeft:16
    }
},
icon:{
    fontSize:16
},
currentPage:{
    fontSize:16,
    color:colors.primary,
    marginRight:8,
    lineHeight:"22px"

},
totalPage:{
    fontSize:16,
    lineHeight:"22px",
    color:colors.black,
    marginLeft:8
}
}))
const Pagination = (props) => {
    const {listsPerPage,totalLists,currentPage,pageChangeNext,pageChangePrev}=props;
    console.log(currentPage,"current")
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalLists / listsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers,"page")
    const classes=useStyles()
    return (
        <div className={classes.pagination}>
            <button className={classes.button} onClick={pageChangePrev}><ArrowBackIosNewOutlinedIcon className={classes.icon}/></button>
            <div classname={classes.paginationTextContainer}>
                <div className={classes.paginationText}>
<span className={classes.currentPage}>{currentPage}</span>
<span>/</span>
<span className={classes.totalPage}>{pageNumbers[pageNumbers.length-1]}</span>
                </div>
            </div>
                <button className={classes.button} onClick={pageChangeNext}><ArrowForwardIosOutlinedIcon className={classes.icon} /></button>



        </div>
    )
}

export default Pagination
