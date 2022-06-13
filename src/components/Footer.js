import React from "react";
import '../style.css'

export default function Footer(){
    return (
        <div className="footer--container">
            <span className="footer--container--copyright">
                <i className="fas fa-copyright"></i>
                <p className="footer--container--copyright--name">Archishman Ghosh</p>
                <p>2022</p>
            </span>
            <span className="footer--container--social">
                <a href='https://twitter.com/ar_chi_es' className='fab fa-twitter footer--container--social--brand-icon'></a>
                <a href='https://www.facebook.com/profile.php?id=100011552236202' className='fab fa-facebook footer--container--social--brand-icon'></a>
                <a href='https://www.instagram.com/ar_chi_es/' className='fab fa-instagram footer--container--social--brand-icon'></a>
                <a href='https://github.com/archishmanghos' className='fab fa-github footer--container--social--brand-icon'></a>
            </span>
        </div>
    )
}