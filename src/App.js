import React, {Component} from 'react';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import './App.css'

export default class App extends Component{
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

        </div>
    )
  }
}
