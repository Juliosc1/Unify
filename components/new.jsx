import { useState } from "react";
import EventInfoForm from "./EventInfoForm";
import DescriptionInfoForm from "./DescriptionForm";
import PreviewInfoForm from "./PreviewForm";
import style from '../styles/MultiStepForm.module.css'
import Head from 'next/head'
import Link from "next/link";
import Arrow from "./Icons/arrow";

export default function NewPost() {
    const [showBtn, setShowBtn] = useState(true);

    const [page, setPage] = useState(0);
    const [formDatas, setFormDatas] = useState({
        eventName: "",
        date: "",
        time: "",
        category: "",
        location: "",
        textarea: "",
        price: "",
        numbOfParticipants: "",
    });

    const FormTitles = ["Evenemanginfo", "Beskrivning", "Granska evenemang"];

    const PageDisplay = () => {
        if (page === 0) {
          return <EventInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        } else if (page === 1) {
          return <DescriptionInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        } else {
          return <PreviewInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        }
    };

    return (
        <div>
        <Head><title>Unify - Skapa event</title></Head>
        <main>
        <div className={style.flexContainer} >
            <div className={style.form}>
                <div className={style.header}>
                    <div className={style.headerBtn}>
                    <button
                        className={style.backBtn}
                        disabled={page == 0} 
                        onClick={() => {setPage((currPage) => currPage -1);
                            setShowBtn(true)
                        }}
                        ><Arrow /></button>
                        
                    <Link href="/" ><button className={style.cancelBtn}>Avbryt</button></Link>
                    </div>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className={style.body}>{PageDisplay()}</div>
                <div className={style.footer}>
                    <div className={style.progressDots}>
                        <div className={style.progressDot}/>
                        <div className={style.progressDot} style={{background: page >= 1 ? '#DC5027' : '#dc51275d'}}/>
                        <div className={style.progressDot} style={{background: page >= 2 ? '#DC5027' : '#dc51275d'}}/>
                    </div>
                  
                    {(showBtn &&
                    <button
                    onClick={() => {
                        if(page === FormTitles.length -1) {
                            console.log(formDatas)  
                        } else if(page === FormTitles.length -2) {
                            setShowBtn(false)
                        }
                        setPage((currPage) => currPage +1);
                        
                    }}>{page === FormTitles.length -1 ? "Publicera Evenemang" : "Nästa"}</button>
                    )}
  
                </div>
            </div>
        </div>
        </main>
        </div>

    )
}