import React from 'react'
import './Services.scss'
import jpg1 from './photos/pexel.jpg'

export default () => {
    return(
        <div className="services">
          <div className={'our'}>
              <div>
                  <h2>Our</h2>
                  <h2>Services</h2>
              </div>
              <div>
                  <i></i>
                  <p>Web Development</p>
                  <p>
                      It's difficult to imagine a successful business without a good website,
                      which will best describe your company's what,
                      how, why and who.
                      We are Alcyon team and if you want a web based on unique solutions,
                      you are in the right place.
                  </p>
              </div>
          </div>
            <div className={'services_bar'}>
               <div className={'bar_one'}>
                   <div className={'bar_div'}>
                       <i></i>
                       <p>Web Design</p>
                       <p>
                           If you want to attract more customers to your website,
                           you will need solid design to reach your goal.
                           Our creative designers will breathe life into your website.
                       </p>
                   </div>
                   <div  className={'bar_div'}>
                       <i></i>
                       <p>Ecommerce</p>
                       <p>
                           Day by day the ecommerce growth reinforces, which means that there is
                           still endless opportunity for brands to start-up an ecommerce
                           website and maximise its earnings.
                           With our ecommerce service you can have the key to the successful online sales.
                       </p>
                   </div>
                   <div  className={'bar_div'}>
                       <i></i>
                       <p>QA Testing</p>
                       <p>
                           Another vital role of complete website is QA testing.
                           It is meant to increase customer confidence and a company's credibility,
                           while also improving work processes and efficiency.
                           After the testing you can be ensured that it works without any errors and can go live.
                       </p>
                   </div>
               </div>

                <div className={'bar_two'}>
                    <div  className={'bar_div'}>
                        <i></i>
                        <p>Web Maintenance</p>
                        <p>
                            Updating and adding new content to your website will improve its
                            SEO performance and increase your return on investment.
                            We can take care of your website maintenance, protection and even content updates!
                            If you don’t have time or don’t know how to maintain your website, we are here for you.
                        </p>
                    </div>
                    <div  className={'bar_div'}>
                        <i></i>
                        <p>Responsive Design</p>
                        <p>
                            Do you know that 63% of web traffic is coming from mobile devices ?
                            It means that if you don't have well structured mobile friendly website,
                            then you have a big chance to lose real customers.
                            With our qualified developers team you'll get fast,
                            professional and mobile friendly website which your customers will adore.
                        </p>
                    </div>
                    <div  className={'bar_div'}>
                        <i></i>
                        <p>Social Media</p>
                        <p>
                            The more specific your strategy is, the more effective the execution will be.
                            Smart social strategies are several times more likely to seal a deal․
                            Do not hesitate to contact us.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}