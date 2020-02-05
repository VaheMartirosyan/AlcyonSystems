import React, {Component} from 'react';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUS/AboutUs'
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";


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
            <section>
                <AboutUs/>
            </section>
            <section>
               <Services/>
            </section>
            <section>
                <Portfolio/>
            </section>
        </div>
    )
  }
}
