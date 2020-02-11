import React,{Component} from 'react'
import './Slider.scss'

export default class Slider extends Component{
    state={
        slider1:['one','two','three','four'],
        slider2:['one','two','three','four'],
        margin:-20,
    }
    toRight=()=>{
        this.setState({
            margin:this.state.margin+1
        })
        if(this.state.margin > 100){
            this.setState({
                margin:-20
            })
        }
    }
    componentDidMount(){
      
    }
    render(){
        return(
            <div onMouseUp={this.toRight} style={{marginLeft:`${this.state.margin}vh`}}>
                {this.state.slider1.map((e,i)=>{
                    return(
                        <div>
                        <p>{e}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}