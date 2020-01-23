import React, {Component} from 'react';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import './App.css'
import Services from './components/Services/Services'

export default class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            h:0

        }
    }
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.h);
        }
        window.scroll(0, window.pageYOffset - 8 );
    }


    scrollhandler = () => {

        let h = setInterval(this.scrollStep.bind(this), .00001)
        this.setState({h:h})

    }
  render() {
    return(
        <div>
            <section>
                <header>
                    <Header/>
                </header>
            </section>
            <section>
                <About/>
            </section>
            <section>
                <Services />
            </section>
            <i className="fa fa-arrow-up  scroll_to_top" onClick={this.scrollhandler}></i>
        </div>
    )
  }
}
