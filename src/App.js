import React, {Component} from 'react';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUS/AboutUs'
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Vacancies from './components/Vacancies/Vacancies';
import Client from './components/Client/Client'
import Slider from './components/slider/Slider'
import Footer from './components/Footer/Footer';


export default class App extends Component{





    constructor(props){
        super(props)
                this.homeRef = React.createRef();
                this.myAboutRef = React.createRef();
                this.myServicesRef = React.createRef();
                this.myPortfolioRef = React.createRef();
                this.myTeamRef = React.createRef();
                this.myVacanciesRef = React.createRef();
                this.myContactRef = React.createRef();
        this.state = {
            h:0,
            a:0,
            load: true

        }
    }




    componentDidMount() {
        this.setState({load: false})
    }

    handleScrollToElement =(e,i)=> {
        console.log(e)
        if (e === 0 ){
            window.scrollTo({behavior:'smooth',top:this.homeRef.current.offsetTop})
        }
        else if(e === 1){
            window.scrollTo({behavior:'smooth',top:this.myAboutRef.current.offsetTop})
        }
        else if(e === 2){
            window.scrollTo({behavior:'smooth',top:this.myServicesRef.current.offsetTop})
        }
        else if(e === 3){
            window.scrollTo({behavior:'smooth',top:this.myPortfolioRef.current.offsetTop})
        }
        else if(e === 4){
            window.scrollTo({behavior:'smooth',top:this.myTeamRef.current.offsetTop})
        }
        else if(e === 5){
            window.scrollTo({behavior:'smooth',top:this.myVacanciesRef.current.offsetTop})
        }
        else if(e === 6){
            window.scrollTo({behavior:'smooth',top:this.myContactRef.current.offsetTop})
        }
            }





  render() {
  
   
    return(
             <div>
                 {this.state.load ? <h1>LOADING.....</h1> :  <div>
                    <section  ref={this.homeRef}>
                <header>
                    <Header scroll={this.handleScrollToElement}/>
                </header>
            </section>
            <section ref={this.myAboutRef}>
                <AboutUs/>
            </section>
            <section ref={this.myServicesRef}>
               <Services/>
            </section>
            <section ref={this.myPortfolioRef}>
                <Portfolio/>
            </section>
            <section ref={this.myTeamRef}>
                <TeamMembers />
            </section>
            <section ref={this.myVacanciesRef}>
                <Vacancies/>
            </section>
            {/* <section>
                <Client />
            </section> */}
            {/* <section>
                <Slider />
            </section> */}
            <section>
                <Footer />
            </section>
            </div>   }
            
        
        </div>
       
        
    )
  }
}
