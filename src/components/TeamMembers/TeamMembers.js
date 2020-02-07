import React from "react";
import p1 from './img/1.jpg'
import p11 from './img/1.1.jpg'
import p2 from './img/2.jpg'
import p22 from './img/2.2.jpg'
import p3 from './img/3.jpg'
import p33 from './img/3.3.jpg'
import p4 from './img/4.jpg'
import p44 from './img/4.4.jpg'
import p5 from './img/5.jpg'
import p55 from './img/5.5.jpg'
import p6 from './img/6.jpg'
import p66 from './img/6.6.jpg'
import p7 from './img/7.jpg'
import p77 from './img/7.7.jpg'
import p8 from './img/8.jpg'
import p88 from './img/8.8.jpg'
import './TeamMembers.scss'


export default ()=>{
    const members =[
        {id:0,description:'',name:'',job:'',img:p1,hoverimg:p11,hoverColor:''},
        {id:1,description:'',name:'',job:'',img:p2,hoverimg:p22,hoverColor:''},
        {id:2,description:'',name:'',job:'',img:p4,hoverimg:p44,hoverColor:''},
        {id:3,description:'',name:'',job:'',img:p6,hoverimg:p66,hoverColor:''},
        {id:4,description:'',name:'',job:'',img:p5,hoverimg:p55,hoverColor:''},
        {id:5,description:'',name:'',job:'',img:p8,hoverimg:p88,hoverColor:''},
        {id:6,description:'',name:'',job:'',img:p3,hoverimg:p33,hoverColor:''},
        {id:7,description:'',name:'',job:'',img:p7,hoverimg:p77,hoverColor:''}

    ]

        return(
            <div className={' team'}>
                <div className="row">
                    {members.map((e,i)=>{
                        return(
                            <div className={'col-lg-3 team_all '}>
                                <div className={'first'} style={{backgroundImage:`url(${e.img})`}}>
                                    <div className='hovered_img' style={{backgroundImage:`url(${e.hoverimg})`}}>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )

}