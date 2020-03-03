import React, {Component} from 'react'
import './Vacancies.scss'
import back from './VacanciesBackground/back.gif'
import VacanciesList from './VacanciesList/VacanciesList'
import './MediaVacancies.scss'



export default class Vacancies extends Component {
    state = {
        careersList: [
            {
                id: 0,
                title: 'Senior Creator',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)','Supervising Skills','Presentation skills','Teamwork skills']},
              {
                id: 1,
                title: 'Creator',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)',
              'Supervising Skills','Presentation skills','Teamwork skills']},
              {
                id: 2,
                title: 'Account Group Head',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)',
              'Supervising Skills','Presentation skills','Teamwork skills']},
              {
                id: 3,
                title: 'Communicatio⁢ns Strategist',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)',
              'Supervising Skills','Presentation skills','Teamwork skills']},
              {
                id: 4,
                title: 'SM Strategist',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)',
              'Supervising Skills','Presentation skills','Teamwork skills']},
              {
                id: 5,
                title: 'Senior SM⁢ Manager',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)',
              'Supervising Skills','Presentation skills','Teamwork skills']},
              {
                id: 6,
                title: 'SM Manager',
                jobConditions: ['Salary is discussed individually, motivating bonus system, verified', 
                    'Work in a friendly team that shares universal values', 
                    'Big clients, creative advertising campaigns, solid strategies, serious SMM and favorite production. And the media, where without her',
                    'Greate office in the center of Yerevan'],
                 duties:['Managing a group of complex digital projects (strategy, creative, SMM and Media, special projects, analytics)',
                  'Supervising the implementation of creative projects', 'Work in a creative couple','Work with the client: briefing and presentation of ideas','Collaboration with Related Departments: Briefing and Domestic Sales'
              ],
              requirements:['Experience in the advertising business as a senior creator from 5 years - DIGITAL','Skills for creating ideas (knowledge and use of methodologies)',
              'Supervising Skills','Presentation skills','Teamwork skills']},
                  
                  
             ],
        liststyle: '',
        openList: false
    }

    careersPageHandler = (e, i) => {

        this.setState({listItem: e, openList: true})
        console.log(e)

    }
    closeListHandler = ()=>{
        this.setState({openList:false})
    }

    render() {
        return (
            <div
                className='vacancies d-flex flex-wrap'
                style={{
                backgroundImage: `url(${back})`
            }}>
                <div className={'col-lg-6 careers_text'}>
                    <h2>Careers</h2>
                    <p>
                        What matters to us is who we work with, what are our goals and principles. We
                        believe that JAMI is a place where one can realize his full potential in various
                        projects, take enjoyment in working and to be on truly friendly terms with
                        colleagues and just make a world a better place.
                    </p>
                </div>
                <div className={'col-lg-6 careers_list'}>
                    {this
                        .state
                        .careersList
                        .map((e, i) => {
                            return (
                                <div
                                    key={i}
                                    className={'careers_list_text'}
                                    onClick={this
                                    .careersPageHandler
                                    .bind(this, e)}>
                                    <p
                                        href=""
                                        style={{
                                        cursor: 'pointer'
                                    }}>{e.title}</p>
                                    <div className='bottom_hover'></div>
                                </div>
                            )
                        })}
                </div>

                <VacanciesList item={this.state.listItem} close = {this.closeListHandler} open={this.state.openList}/>
            </div>

        )
    }
}