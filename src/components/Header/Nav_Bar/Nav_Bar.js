import React from "react";
import './Nav_Bar.scss'


export default ({scroll,active,close,lang})=>{

   


        return(
            <div className="containers">
                <ul className={`menu ${active ? 'active_menu' : ''}`} onClick={() => close()}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <div className={`item_menu`}>
                    <div onClick={scroll.bind(this,0)} className={`item ${active ? 'active_item' : ''}`} ><span>{lang("headerMenu.1")}</span></div>
                    <div onClick={scroll.bind(this,1)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.2")}</span></div>
                    <div onClick={scroll.bind(this,2)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.3")}</span></div>
                    <div onClick={scroll.bind(this,3)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.4")}</span></div>
                    <div onClick={scroll.bind(this,5)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.5")}</span></div>
                    <div onClick={scroll.bind(this,4)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.6")}</span></div>
                    <div onClick={scroll.bind(this,6)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.7")}</span></div>
                </div>
                <div className={` ${active ? 'mobile_active_item' : 'mobile_item'}`}>
                    <div onClick={scroll.bind(this,0)} className={`item ${active ? 'active_item' : ''}`} ><span>{lang("headerMenu.1")}</span></div>
                    <div onClick={scroll.bind(this,1)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.2")}</span></div>
                    <div onClick={scroll.bind(this,2)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.3")}</span></div>
                    <div onClick={scroll.bind(this,3)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.4")}</span></div>
                    <div onClick={scroll.bind(this,5)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.5")}</span></div>
                    <div onClick={scroll.bind(this,4)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.6")}</span></div>
                    <div onClick={scroll.bind(this,6)} className={`item ${active ? 'active_item' : ''}`}><span>{lang("headerMenu.7")}</span></div>

                </div>
            </div>
        )


}
