import React from 'react'
import './VacanciesList.scss'
import Contact from './VacanciesContact/Contact'

export default({item, open, close}) => {
    console.log(item)
    return (
        <div className={`${open ? 'open_list' : 'list_page'}`}>
            
                {!item ? null : <div>
                        <h2>{item.title}</h2>

                        <div id="mdiv" onClick={close}>
                            <div className="mdiv">
                                <div className="md"></div>
                            </div>
                        </div>
                        <div className="d-flex">
                        <div className="d-flex flex-column">
                        <div >
                            <h3>Job</h3>
                            <div>
                                <ul>
                                    {item.jobConditions.map((e, i) => {
                                            return (
                                                <li>{e}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>Duties</h3>
                            <div>
                                <ul>
                                    {item.duties.map((e, i) => {
                                            return (
                                                <li>{e}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div>
                            <div>
                                <h3>Requirements</h3>
                                <div>
                                    <ul>
                                        {item.requirements.map((e, i) => {
                                                return (
                                                    <li>{e}</li>
                                                )
                                            })}
                                    </ul>
                                     
                                </div>
                                
                            </div>
                            
                        </div>
                        <div>
                        <Contact />
                    </div>
                        </div>
                       

                    </div>}
                   
            </div>

        
    )
}