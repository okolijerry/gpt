

import { Google, Slack, Atlassian, Shopify, Dropbox } from "../brand/index"
import "./brand.css"

const Brand = () => {
  return (
    <>

    <div className="gpt3__brand section__padding">
      <div>
        <img src={Google} alt="" />
      </div>
      <div>
        <img src={Slack} alt="" />
      </div>
      <div>
        <img src={Atlassian} alt="" />
      </div>
      <div>
        <img src={Shopify} alt="" />
      </div>
      <div>
        <img src={Dropbox} alt="" />
      </div>
    </div>


    
    
    </>
  )
}

export default Brand