import React, {Component} from 'react';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import './App.scss'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import TeamMembers from './components/TeamMembers/TeamMembers'

export default class App extends Component{





    constructor(props){
        super(props)
                this.myRef = React.createRef();
                this.myAboutRef = React.createRef();
                this.myPortfolioRef = React.createRef();
                this.myTeamRef = React.createRef();
                this.myServicesRef = React.createRef();
                this.myContactRef = React.createRef();
        this.state = {
            h:0,
            a:0

        }
    }



    handleScrollToElement =(e,i)=> {
        console.log(e)
        if (e === 0 ){
            window.scrollTo(0, this.myRef.current.offsetTop)
        }
        else if(e === 1){
            window.scrollTo(0, this.myAboutRef.current.offsetTop)
        }
        else if(e === 2){
            window.scrollTo(0, this.myPortfolioRef.current.offsetTop)
        }
        else if(e === 3){
            window.scrollTo(0, this.myTeamRef.current.offsetTop)
        }
        else if(e === 4){
            window.scrollTo(0, this.myServicesRef.current.offsetTop)
        }
        else if(e === 5){
            window.scrollTo(0, this.myContactRef.current.offsetTop)
        }
        else if(e === 6){
            window.scrollTo(0, this.myRef.current.offsetTop)
        }
            }





  render() {
    return(
        <div>
            <section  ref={this.myRef}>
                <header>
                    <Header scroll={this.handleScrollToElement}/>
                </header>
                
            </section>
                <i className="fa fa-long-arrow-up  scroll_to_top" onClick={this.handleScrollToElement.bind(this,6)}></i>

            
            <section  ref={this.myAboutRef}>
                <About/>
            </section>
            <section ref={this.myPortfolioRef}>
                <Portfolio/>
            </section>
            <section ref={this.myTeamRef}>
                <TeamMembers />
            </section>
            <section ref={this.myServicesRef}>
                <Services />
            </section>
            <section ref={this.myContactRef}>
                <Contact />
            </section>
            
        </div>
    )
  }
}
