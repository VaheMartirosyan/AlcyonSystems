import React,{Component} from 'react'
import './Vacancies.scss'
import back from './VacanciesBackground/back.gif'
import VacanciesList from './VacanciesList/VacanciesList'

export default class Vacancies extends Component{
   state={
        careersList: ['Senior Creator','Creator','Communicatio⁢ns Strategist','SM Strategist','Senior SM⁢ Manager',
        'SM Manager','Account Group Head'],
        listItem:''
   }
      

   careersPageHandler = (e,i) =>{
       
       this.setState({
           listItem:e
       })
       
   }

   render(){
    return(
        <div className='vacancies d-flex flex-wrap' style={{backgroundImage:`url(${back})`}}>
            <div className={'col-lg-6 careers_text'}>
                <h2>Careers</h2>
                <p>
                What matters to us is who we work with, what are our goals and principles. 
                We believe that JAMI is a place where one can realize his full potential in various projects,
                 take enjoyment 
                in working and to be on truly friendly terms with colleagues and just make a world a better place.
                </p>
            </div>
            <div className={'col-lg-6 careers_list'}>
                {this.state.careersList.map((e,i)=>{
                    return(
                        <div key={i} className={'careers_list_text'} onClick={this.careersPageHandler.bind(this,e)}>
                            <p href="" style={{cursor:'pointer'}}>{e}</p>
                            <span></span>
                        </div>
                    )
                })}
            </div>
            <VacanciesList item={this.state.listItem}/>
        </div>
    )
   }
}