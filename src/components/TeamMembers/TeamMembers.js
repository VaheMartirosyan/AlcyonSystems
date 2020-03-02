import React from "react";

import './TeamMembers.scss'


export default ()=>{
    const members =[
        {id:0,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/1_gughrc.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/1.1_ihatlo.jpg',hoverColor:''},
        {id:1,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/2_uknkbf.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/2.2_druxur.jpg',hoverColor:''},
        {id:2,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/4_nhz3ng.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/4.4_cbfcqd.jpg',hoverColor:''},
        {id:3,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/6_lqmskv.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/6.6_wgetzo.jpg',hoverColor:''},
        {id:4,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/5_uuk6l3.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/5.5_zxjsbr.jpg',hoverColor:''},
        {id:5,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139940/AlcyonSystems/Team/8_dkshh8.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139940/AlcyonSystems/Team/8.8_vcukmd.jpg',hoverColor:''},
        {id:6,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/3_fzs8tj.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139939/AlcyonSystems/Team/3.3_bruyyf.jpg',hoverColor:''},
        {id:7,description:'',name:'',job:'',img:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139940/AlcyonSystems/Team/7_zjpn34.jpg',hoverimg:'https://res.cloudinary.com/alcyonsystems/image/upload/v1583139940/AlcyonSystems/Team/7.7_qlol7i.jpg',hoverColor:''}

    ]

        return(
            <div className={' team'}>
                <div className="row">
                    {members.map((e,i)=>{
                        return(
                            <div className={'col-lg-3 team_all '} key={i}>
                                <div className={'first'} style={{backgroundImage:`url(${e.img})`}}>
                                    <div className='hovered_img' style={{backgroundImage:`url(${e.hoverimg})`}}>
                                            <p></p>
                                            <p></p>
                                    </div>
                
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )

}