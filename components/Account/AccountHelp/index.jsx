import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import PrimaryButton from '@/components/elements/PrimaryButton'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Divider from '@/components/elements/Divider';
import Pagination from '@/components/Pagination';
const data=[
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
    {
        question:"Questions",
        answer:"Lyricist and musician is Sambhujit Baskota. This song was broadcasted in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold."
    },
]
const useStyles=makeStyles(theme=>({
helpTextContainer:{
    background:colors.background,
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    // height:"105px",
    padding:'16px 40px',
    [theme.breakpoints.down('md')]:{
        // height:"auto"
    }
},
headerText:{
    fontWeight:500,
    fontSize:20,
    margin:"24px 0",
    lineHeight:"25px",
    color:colors.black,
    borderRadius:4

},
mainContainer:{
    padding:"24px",
    background:colors.background,
    borderRadius:4,
    margin:"24px 0"
},
askText:{
    fontSize:16,
    fontWeight:500,
    lineHeight:"19px"
},
input:{
    marginTop:16,
    width:"100%",
    borderRadius:4,
    padding:"8px 8px 8px 12px",
    fontSize:16,
    lineHeight:"22px",
    color:colors.gray
},
faqMainContainer:{
    marginTop:"40px"
},
faqText:{
    fontWeight:500,
    fontSize:16,
    lineHeight:'19px',
    color:colors.black
},
faqContainer:{
    margin:"16px 0",
},
questionContainer:{
    display:"flex",
    // boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.1)",
    justifyContent:"space-between",
    padding:"16px",
    background:"#fff",
},
questionText:{
    fontSize:16,
    lineHeight:"22px",
    color:colors.black
},
answersContainer:{
    // marginTop:"1px"
},
answersText:{
    fontSize:16,
    padding:16,
    lineHeight:"22px",
    color:colors.black,
    background:"#fff"
},
icon:{
    cursor:"pointer",
    padding:2
},
questionsContainer:{
    minHeight:"370px"
}


}))
const AccountHelp = () => {
    const classes=useStyles()
    const [value,setValue]=useState("")
    const [showMore,setShowMore]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const iconClickHandler=(value)=>{
        setValue(value)
        setShowMore(!showMore)
    }
    const listsPerPage=5;
    const indexOFLastPost = currentPage * listsPerPage;
    const indexOfFirstPost = indexOFLastPost - listsPerPage;
    const currentList = data.slice(indexOfFirstPost, indexOFLastPost)
    const pageChangeNext=()=>{
        if(currentPage>=Math.ceil(data.length/listsPerPage)){
            return;
        }
        console.log("pagina")
        setCurrentPage(currentPage+1)
        // currentPage ++;
    }
    const pageChangePrev=()=>{
        if(currentPage<=1){
            return;
        }
        setCurrentPage(currentPage-1)
    }
    return (
        <div className={classes.main}>
            <div className={classes.helpTextContainer}>
                <div className={classes.headerText}>Help</div>
            </div>
            <div className={classes.mainContainer}>
                <div className={classes.askText}>Ask Question</div>
                <textarea placeholder="Ask question" rows="5" className={classes.input}></textarea>
                <PrimaryButton title="Submit" style={{marginTop:24}} parentStyle={{justifyContent:"flex-start"}}/>
            <div className={classes.faqMainContainer}>
                <div className={classes.faqText}>FAQ</div>
                <div className={classes.questionsContainer}>
                {currentList.map((eachData,index)=>{
                    return(
            <div key={index} className={classes.faqContainer}>
                <div className={classes.questionContainer}>
                    <div className={classes.questionText}>Questions</div>
         {(index===value && showMore) ? <ExpandLessOutlinedIcon className={classes.icon} onClick={()=>iconClickHandler(index)}/>:<ExpandMoreOutlinedIcon  className={classes.icon} onClick={()=>iconClickHandler(index)}/>}   
                </div>
             {(index===value && showMore) && 
             <div className={classes.answersContainer}>
             <Divider style={{background:"rgba(0, 0, 0, 0.1)"}}/>
     <div className={classes.answersText}>Lyricist and musician is Sambhujit Baskota. This song was broadcasted
     in 2033. Original Singer is Depak Kharel. As new couldn't be diamond as the old is gold.</div>
         </div>
             }   
            </div>

        )
    })}
    </div>
    <Pagination listsPerPage={listsPerPage} totalLists={data.length} currentPage={currentPage} pageChangeNext={pageChangeNext} pageChangePrev={pageChangePrev}/>
</div>
            </div>
        </div>
    )
}

export default AccountHelp
