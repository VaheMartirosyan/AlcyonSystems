import React,{Component} from "react";
import './Services.scss';
import './MediaServices.scss';
import video from './backgroundVideo/services.png';

export default class Services extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHovered: false,
            titles:['Web Development','Web Design','Ecommerce','QA Testing','Web Maintenance','Responsive Design','SMM'],
            text:[
                {
                    content:'It\'s difficult to imagine a successful business without a good website,' +
                        ' which will best describe your company\'s what, how, why and who. ' +
                        'We are Alcyon team and if you want a web based on unique solutions,' +
                        ' you are in the right place.',
                    hoverColor:'#0bff0a',
                },
                {
                    content:'If you want to attract more customers to your website, you will need solid design to ' +
                        'reach your goal. Our creative designers will breathe life into your website.',
                    hoverColor:'#eaf800',
                },
                {
                    content:'Day by day the ecommerce growth reinforces, which means that there is still' +
                        ' endless opportunity for brands to start-up an ecommerce website and maximise its earnings.' +
                        ' With our ecommerce service you can have the key to the successful online sales.',
                    hoverColor:'#de80d2',
                },
                {
                    content:'Another vital role of complete website is QA testing.' +
                        ' It is meant to increase customer confidence and a company\'s credibility, ' +
                        'while also improving work processes and efficiency. ' +
                        'After the testing you can be ensured that it works without any errors and can go live.',
                    hoverColor:'#00c590',
                },
                {
                    content:'Updating and adding new content to your website will improve its ' +
                        'SEO performance and increase your return on investment. We can take care of your ' +
                        'website maintenance, protection and even content updates! ' +
                        'If you don’t have time or don’t know how to maintain your website, we are here for you.',
                    hoverColor:'#cccccc',
                },
                {
                    content:'Do you know that 63% of web traffic is coming from mobile devices ? It means that if you don`t ' +
                        'have well structured mobile friendly website, then you have a big chance to lose real customers. ' +
                        'With our qualified developers team you`ll ' +
                        'get fast, professional and mobile friendly website which your customers will adore.',
                    hoverColor:'#ff6069',
                },
                {
                    content:'The more specific your strategy is, ' +
                        'the more effective the execution will be. Smart social strategies ' +
                        'are several times more likely to seal a deal․ Do not hesitate to contact us.',
                    hoverColor:'#ffd972',
                },
            ],
            e:'',
            a:''

        };


    }
    handleHover=(e)=>{
        this.setState({
            isHovered: true,
            e:this.state.text[e].content,
            a:this.state.text[e].hoverColor
        });

    }
    hoverOver=()=>{

        this.setState({
            isHovered: false
        });
    }

    render() {
        const btnClass = this.state.isHovered ? "hoverMade" : "hoverStart";
        return(
            <div className={'services d-flex flex-wrap'} style={{backgroundImage:`url(${video})`}}>

                <div className={'services_content col-lg-6' } >
                    <div className={'services_text'}>
                        <h2>Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aperiam debitis ea enim,
                            et exercitationem fuga harum id illo laudantium maxime minima odit perferendis possimus
                            provident ratione repudiandae sunt, ullam!
                        </p>
                    </div>

                        <div style={{background:this.state.a}} className={`${btnClass} hoverPos`}>
                                 <p >{this.state.e}</p>
                        </div>
                </div>
                <div className={'col-lg-6 services_list'} >
                    {this.state.titles.map((e,i)=>{
                                return(
                                     <div key={i} className={`list_item div_hov${i}`}  >
                                            <h2 className={`items${i}`} onMouseEnter={this.handleHover.bind(this,i)} onMouseLeave={this.hoverOver}>{e}</h2>
                                     </div>
                                )})}


                </div>

            </div>
        )
    }
}

