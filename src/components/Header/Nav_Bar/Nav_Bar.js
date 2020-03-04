import React from "react";
import './Nav_Bar.scss'

export default ({scroll,active,close})=>{



        return(
            <div className="containers">
                <ul className={`menu ${active ? 'active_menu' : ''}`} onClick={() => close()}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className={`item_menu`}>
                    <div onClick={scroll.bind(this,0)} className={`item ${active ? 'active_item' : ''}`} ><span>Home</span></div>
                    <div onClick={scroll.bind(this,1)} className={`item ${active ? 'active_item' : ''}`}><span>About</span></div>
                    <div onClick={scroll.bind(this,2)} className={`item ${active ? 'active_item' : ''}`}><span>Services</span></div>
                    <div onClick={scroll.bind(this,3)} className={`item ${active ? 'active_item' : ''}`}><span>Portfolio</span></div>
                    <div onClick={scroll.bind(this,5)} className={`item ${active ? 'active_item' : ''}`}><span>Vacancies</span></div>
                    <div onClick={scroll.bind(this,4)} className={`item ${active ? 'active_item' : ''}`}><span>Team</span></div>
                    <div onClick={scroll.bind(this,6)} className={`item ${active ? 'active_item' : ''}`}><span>Contact</span></div>
                </div>
                <div className={` ${active ? 'mobile_active_item' : 'mobile_item'}`}>
                    <div onClick={scroll.bind(this,0)} className={`item ${active ? 'active_item' : ''}`} ><span>Home</span></div>
                    <div onClick={scroll.bind(this,1)} className={`item ${active ? 'active_item' : ''}`}><span>About</span></div>
                    <div onClick={scroll.bind(this,2)} className={`item ${active ? 'active_item' : ''}`}><span>Services</span></div>
                    <div onClick={scroll.bind(this,3)} className={`item ${active ? 'active_item' : ''}`}><span>Portfolio</span></div>
                    <div onClick={scroll.bind(this,5)} className={`item ${active ? 'active_item' : ''}`}><span>Vacancies</span></div>
                    <div onClick={scroll.bind(this,4)} className={`item ${active ? 'active_item' : ''}`}><span>Team</span></div>
                    <div onClick={scroll.bind(this,6)} className={`item ${active ? 'active_item' : ''}`}><span>Contact</span></div>
                </div>
            </div>
        )


}
