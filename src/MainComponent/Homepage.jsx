import React from 'react'
import Hero from "../Homepagesection/S1Hero.jsx"
import About from "../Homepagesection/S2About.jsx"
import Usecase from "../Homepagesection/S3Usecase.jsx"
import Tokenomics from "../Homepagesection/S4Tokenomics.jsx"
import Roadmap from "../Homepagesection/S5Roadmap.jsx"
import Howtobuy from "../Homepagesection/S6Howtobuy.jsx"
import Schedule from "../Homepagesection/S8Schedule.jsx"
import ContractAddress from "../Homepagesection/S7Contractaddress.jsx"
// import Token2 from '../Homepagesection/S9Token2.jsx'
// import Referralsystem from '../Homepagesection/S10Referralsystem.jsx'
const Homepage = () => {
  return (
<>
<div className=''>
<Hero />
<About  />
<Usecase/>
<Howtobuy/>
<Roadmap/>
<Tokenomics />
{/* <Token2/> */}
{/* <Referralsystem/> */}

<Schedule/>
<ContractAddress/>
</div>

</>
  )
}

export default Homepage