import React from 'react'
import "./Cards.css"
import { useState,useEffect } from 'react';

const cardsTitles=[];
const cardsURL=["https://c.myholidays.com/blog/blog/content/images/2021/04/Kathmandu.jpg","https://c.myholidays.com/blog/blog/content/images/2021/04/Kathmandu.jpg","https://c.myholidays.com/blog/blog/content/images/2021/04/Kathmandu.jpg","https://c.myholidays.com/blog/blog/content/images/2021/04/Kathmandu.jpg"];
const cardsDesc=["Kathmandu has beautiful places","Pokhara is very far from kathmandu","chitwan has wildlife","I am added new in the cards"];

function Cards() {
    const [cardsTitles,setCardsTitles]=useState(["Place in Ktm","Place in Pokhara","Place in Chitwan"])
    const [NumberOfCards,setNumberOfCards]=useState(3);
    function showMore()
    {
        const newTitles=[...cardsTitles];
        newTitles.push("I am new");
        setCardsTitles(newTitles);
    }

    useEffect(()=>setNumberOfCards(cardsTitles.length),[cardsTitles]);


  return (
    <>
        <div className="Cards-Container flex-row-evenly">
            {cardsTitles.map((title,ind)=>
            {
                return <Card title={title} Desc={cardsDesc[ind]} src={cardsURL[ind]} />
            })}
        </div>
        <div className='flex-row-evenly'>
        <button className='Button' onClick={showMore}>Add</button>
        </div>
        <span className='Card-Title'>{NumberOfCards}</span>
            </>
  )
}

function Card(props)
{
    
    return (
        <div  className="Card flex-column-evenly">
            <span className="Card-Title">{props.title}</span>
            <div className="Img-Cont"><img src={props.src} /></div>
            <span className="Card-Desc">{props.Desc}</span>

        </div>
    )
}

export default Cards