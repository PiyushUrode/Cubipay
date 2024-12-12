
import { Link } from 'react-router-dom';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-[#090909] z-10 rounded-t-3xl">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">
                        <div className="flex flex-col gap-5 mb-6 max-w-[35%] tablet:max-w-[100%] tablet:items-center md:mb-0">
                            <a href="" className="flex items-center">
                                <img src="/" className="h-[50px] me-3" alt="FlowBite Logo" />
                            </a>
                            <p className="tablet:text-center text-white w-[60%]" >
                            SMART BC Token (SBC) is a versatile BEP-20 token empowering staking, e-commerce, NFTs, and metaverse applications with future integration on its own Blitz Blockchain for scalability and transparency.
                            </p>
                            <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm sm:text-center text-[#88FADE]">© {currentYear} Smart BC Concept. All Rights Reserved.</span>
                    </div>

                        </div>
                        <div className="mt-16 flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Important Link</h2>
                                <ul className="text-gray-400 font-medium">
                                <ul className="gap-4 flex flex-col">
    <li className=" tablet:text-center">
        <a href="#about">About Us</a>
    </li>
    <li className="tablet:text-center">
        <a href="https://smartbcconceepts-organization.gitbook.io/smart-bc-token/">White Paper</a>
    </li>
    <li className="tablet:text-center">
        <a href="#roadmap">Roadmap</a>
    </li>
    <li className="tablet:text-center">
        <a href="#token">Tokenomics</a>
    </li>
    
    
</ul>

                                </ul>
                            </div>

                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">About us</h2>
                                <ul className="text-gray-400 font-medium flex flex-col gap-4">

                                    <li className="tablet:text-center">
  <a href="https://smartbcconcept.net/MemberPanel/Login.aspx" target="_blank" rel="noopener noreferrer">Sign In</a>
</li>
<li className="tablet:text-center">
  <a href="https://smartbcconcept.net/" target="_blank" rel="noopener noreferrer">Sign Up</a>
</li>
                                </ul>
                            </div>

                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Privacy</h2>
                                <ul className="text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">Terms & condition</li>
                                    {/* <li >Privacy Policy</li> */}
                                    <li className="tablet:text-center">
  <a href="/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
</li>

                                </ul>
                            </div>

                            <div className="flex flex-col tablet:items-center">
                                <h2 className="text-primary-gradient mb-6 text-sm font-semibold uppercase text-white">Social Media</h2>
                                <ul className="text-gray-400 font-medium gap-4 flex flex-col">
  <li className=" flex items-center gap-2 tablet:text-center">
    <img src="/" alt="Terms & Conditions" className="w-6 h-6" />
    <span> Instagram </span>
  </li>
  <li className="flex items-center gap-2 tablet:text-center">
    <img src="/" alt="Privacy Policy" className="w-6 h-6" />
    <span>Facebook</span>
  </li>
  <li className="flex items-center gap-2 tablet:text-center">
    <img src="/" alt="Privacy Policy" className="w-6 h-6" />
    <span>Twitter</span>
  </li>

  <li className="flex items-center gap-2 tablet:text-center">
    <img src="/" alt="Privacy Policy" className="w-6 h-6" />
    <span>Telegram</span>
  </li>





</ul>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </footer>
        </>
    )
}

export default Footer;
