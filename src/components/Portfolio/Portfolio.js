import React from "react";
import './Portfolio.scss'
import img1 from './PortfolioImg/works1.jpg'
import img2 from './PortfolioImg/works2.jpg'
import img3 from './PortfolioImg/works3.jpg'
import img4 from './PortfolioImg/works4.jpg'

//moskovyan 3/2

export default class Portfolio extends React.Component{
    state = {
        navBar:[
            {id:15,name:'SHOW ALL',img:['img1','img2','img3','img4']},
            {id:0,name:'text1',img:'img1'},
            {id:1,name:'text2',img:'img2'},
            {id:2,name:'text3',img:'img3'},
            {id:3,name:'text4',img:'img4'},
        ],
        indexLi:0,
    }





    render() {
        return (
            <div className="SecPortfolio">
                <div className="Skills">
                    <div className="opsit">
                        <div className={'OurProj'}>
                            <p className={'OurP'}>OUR</p>
                            <p className={'proj'}>PROJECTS</p>
                        </div>
                        <div className={'navSkills'}>
                            <div className={'skilsImg'}>

                            </div>
                            <div className={'navSkill'}>
                                <ul>{
                                    this.state.navBar.map((e,i)=>{
                                        return <li onClick={()=>this.setState({indexLi:i})}>{e.name}</li>
                                    })
                                }

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="projectImg">{this.state.indexLi == 0 ?this.state.navBar[this.state.indexLi].img.map(e=>{return e}):this.state.navBar[this.state.indexLi].img}</div>
            </div>
        )
    }


}