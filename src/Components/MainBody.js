import React from 'react'
import "../uni.css"
import "./MainBody.css"
import { Search } from 'react-bootstrap-icons';


class pageTemplate
{
    title;
    description;
    constructor(title,description)
    {
        this.title=title;
        this.description=description;
    }
};


const Info=new pageTemplate("Info","I am description for everyone! ");
const About=new pageTemplate("About","I am description for everyone! ");
const Contact=new pageTemplate("Contact","I am description for everyone! ");
const FAQS=new pageTemplate("FAQS","I am description for everyone! ");


const pages=[Info,About,Contact,FAQS];

function MainBody() {

    function searchAlert()
    {
        alert("Place to search! Not yet connected to backend.");
    }

  return (
    <div className="Main-Body-Cont flex-c-se-c">
        <div className="Home Page-Cont Main-Color flex-c-se-c">
            {/* Just for background with opacity */}
            <div className="Bg-Cont"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=700&h=-1&s=1" /></div>
            <span className="Quote">Explore the places from all over Nepal.</span>
            <div className="Search-Cont flex-r-se-c"><input type="text" placeholder="Enter the place name here..." /><Search onClick={searchAlert} style={{padding:'0.1rem',margin:'0 1rem',color:'white',fontSize:"2.5rem"}} /></div>
            <span className="Quote">You got the time. We got place for your visit.</span>
            <button className='btn-e1 theme-button'>Explore</button>
        </div>
       { pages.map((val,ind)=>{
            return <Page key={ind} ind={ind} pageContent={val}/>
       })}
    </div>
  )
}

function Page(props)
{
    let pageContent=props.pageContent;
    return (
        <div key={props.ind} id={props.pageContent.title} className={(props.ind%2==0?"Main-Color":"Alt-Color")+" Page-Cont flex-c-se-c"}>
            <span className="Page-Title">
                {pageContent.title}
            </span>
                {props.ind%2==0?(<div className="Content-Wrapper flex-r-se-c"><span className="Page-Desc">
                    {pageContent.description}
                </span>
                <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="imgae" /></div>):(<div className="Content-Wrapper flex-r-se-c">
            <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="imgae" /><span className="Page-Desc">
                {pageContent.description}
            </span></div>)}
        </div>
    )
}

export default MainBody