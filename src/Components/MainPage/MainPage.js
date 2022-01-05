import React from 'react';
import "./MainPage.css";

const MainPage = () => {
    return(
        <div className='body'>
            <div className='left'>
                <img src="https://uploads-ssl.webflow.com/6036972e08af561b470b4831/6135c64b57cf212f2aa106f1_Peppertype-logo-dark-horizontal.svg" class="logo"></img>
                <div className='leftalign'>
                <p className="hello">Hi Siva 👋</p>
                <h1 className='welcome'>Welcome to Peppertype.ai</h1>
                <p className='content'>Congratulations on taking your first step towards creating content, the modern way!</p>
                <p className='content'>Help us tailor an amazing experience for you by answering these three questions</p>
                <div className='buttons'>
                    <button className='button1'>Skip for now</button>
                    <button className='button2'>Conitnue</button>
                </div>
                <p className='demolink'>Get most out of it - 
                <a href="#" className='link'>Book a live demo</a>
                </p>
                </div>
            </div>
            <div className='right'>
                <p className='rightContent'>
                A few clicks away from an awesome writing experience
                </p>
                <div className='pattern'>
                    <div className='circle one'></div>
                    <div className='circle two'></div>
                    <p className='patternContent'>
                    <strong> 50K+ </strong>
                    Peppertypers <br/>
                    trust us with their content
                    </p>
                        <button className='helpButton'>
                        <img src="/question_icon.svg"></img>
                        <p>Need help</p>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;