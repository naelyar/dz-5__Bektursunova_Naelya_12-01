import React , {useState} from "react";
import News from "../../components/news/News";
import classes from "./mainPage.module.css";



function MainPage () {
    const [news , setNews] = useState ([]);


    const getNews = (e) => {
        e.preventDefault();
        setNews (["lorem" ,"lorem","lorem","lorem"])


    }

    return (
        <div className={classes.mainN}>
            <h1>MainPage</h1>
            <News propNews={news} getNewsProp = {getNews}/>

        </div>
    )

}
export default MainPage;