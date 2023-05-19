import React from 'react'
import "./MainBody.css"

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

const Home=new pageTemplate("Home","");
const Info=new pageTemplate("Info","I am description for everyone! ");
const About=new pageTemplate("About","I am description for everyone! ");
const Contact=new pageTemplate("Contact","I am description for everyone! ");
const FAQS=new pageTemplate("FAQS","I am description for everyone! ");


const pages=[Home,Info,About,Contact,FAQS];

function MainBody() {
  return (
    <div className="Main-Body-Cont flex-column-evenly">
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
        <div key={props.ind} id={props.pageContent.title} className={(props.ind%2==0?"Main-Color":"Alt-Color")+" Page-Cont flex-column-evenly"}>
            <span className="Page-Title">
                {pageContent.title}
            </span>
                {props.ind%2==0?(<div className="Content-Wrapper flex-row-evenly"><span className="Page-Desc">
                    {pageContent.description}
                </span>
                <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="imgae" /></div>):(<div className="Content-Wrapper flex-row-evenly">
            <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" alt="imgae" /><span className="Page-Desc">
                {pageContent.description}
            </span></div>)}
        </div>
    )
}

export default MainBody