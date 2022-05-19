import Link from 'next/link';
import React from 'react'
import style from '../styles/Event.module.css'
import ShowUpBtn from './ShowUp';
import Image from 'next/dist/client/image';
import CategorySelector from './CategorySelector';


const Event = ({events}) =>{
 
    // const events = props.events;

    function categoryColors (category) {

        let outerBorder = "";
        let innerBorder = "";
        let categoryBox = "";
        let showUpBtn = "";
        let eventImage = "";

        if(category == "Konsert, Quiz & Uteliv") {
            outerBorder= "#DACAEF";
            innerBorder = "#C2A7E4";
            categoryBox = "#DACAEF";
            showUpBtn = "#C2A7E4";
            eventImage = <Image className={style.categoryImage} src="/konsertquizuteliv.png" alt='konsertquizuteliv' width="500" height="334"/>
        }
        else if(category == "Kultur & Livsstil"){
            outerBorder = "#F7CDC9";
            innerBorder = "#F1ACA5";
            categoryBox = "#F7CDC9";
            showUpBtn = "#F1ACA5";
            eventImage = <Image className={style.categoryImage} src="/kulturlivsstil.png" alt='kulturlivstil' width="582" height="388"/>
        }
        else if(category == "Sport & Fritid"){
            outerBorder = "#C1D8EB";
            innerBorder = "#97BEDD";
            categoryBox = "#C1D8EB";
            showUpBtn = "#97BEDD";
            eventImage = <Image className={style.categoryImage} src="/sport.png" alt='sport' width="500" height="333"/>
        }
        else if(category == "Mat & Dryck"){
            outerBorder = "#DBE6C9";
            innerBorder = "#C3D5A5";
            categoryBox = "#DBE6C9";
            showUpBtn = "#C3D5A5";
            eventImage = <Image className={style.categoryImage} src="/matdryck.png" alt='matdryck' width="500" height="334"/>
        }
        else if(category == "Konst & Hantverk"){
            outerBorder = "#FFE9C1";
            innerBorder = "#FFDB97";
            categoryBox = "#FFE9C1";
            showUpBtn = "#FFDB97";
            eventImage = <Image className={style.categoryImage} src="/konsthantverk.png" alt='konsthantverk' width="500" height="333"/>
        }
        else{
            outerBorder = "#808080";
            innerBorder = "#636363";
            categoryBox = "#808080";
            showUpBtn = "#0b4341";
        }

        return {outerBorder, innerBorder, categoryBox, showUpBtn, eventImage};
        
    }
    return(
        
        <div className={style.container}>
            {events.map((events) =>(
                <div key={events.id} className={style.eventbox} style={{background: categoryColors(events.category).outerBorder}}>{/* outerBorder */}
                    <div className={style.innerBorder} style={{background: categoryColors(events.category).innerBorder}}> {/* innerBorder */}
                        <div className={style.eventimg}> {/* place for img (currently just gray box) */}
                            <div className={style.imgWrapper}>
                                {categoryColors(events.category).eventImage}
                            </div>
                            <div className={style.categoryBox} style={{background: categoryColors(events.category).categoryBox}}> {/* the small categoryBox */}
                                <p className={style.categoryText}>{events.category}</p>
                            </div>
                            <div className={style.event}> {/* white box with event text */}
                                <p className={style.title}>{events.eventName}</p>
                                <p className={style.description}>{events.date} kl {events.time} </p>
                                <p className={style.description}>{events.description}</p>
                               <ShowUpBtn color={CategorySelector(events.category).showUpBtn}/>
                               <Link href={`/posts/${events.id}`}>
                                <a className={style.readmore}>Läs mer...</a>
                                </Link>
                            </div>
                        </div>
                     </div>
                </div>

            ) )}

        </div>
    )
}

export default Event;




