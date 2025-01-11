import logo from '../assets/logo.svg'
import downarrow from '../assets/downarrow.svg'
import profielogo from '../assets/profilelogo.svg'
import naving from '../assets/naving.svg'
export function Navbar(){
 return(
  <>
  <div className='flex flex-row justify-between px-8 pt-1'>
    <div className='lg:flex lg:flex-row items-center gap-10 hidden'>
      <img src={logo}/>
      <div><a href="#">Home</a></div>
      <div className='flex flex-row items-center'><a href="#" >Products</a><img src={downarrow} className='w-5 h-5'/></div>
      <div className='flex flex-row  items-center'><a href="#" >Resources</a><img src={downarrow} className='w-5 h-5'/></div>
      <div className='flex flex-row  items-center'><a href="#" >Pricing</a><img src={downarrow} className='w-5 h-5'/></div>
    </div>
    <div>
      <img src={profielogo} className='lg:flex hidden '/>
    </div>
    <div className='flex flex-row justify-between w-full p-0 pt-1 lg:hidden'>
      <img src={logo}/>
      <img src={naving}/>
    </div>
  </div>
  </>
 )
}