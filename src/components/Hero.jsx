import screen from '../assets/screen.svg';
import bolt from '../assets/boltshift.svg';
import featuredev from '../assets/featuredev.svg';
import global from '../assets/globalbank.svg';
import light from '../assets/lightbox.svg';
import niet from '../assets/nietzsche.svg';
import spherula from '../assets/spherule.svg';

export  function Hero() {

  return (
    <>
    <div className='flex flex-col justify-center items-center flex-nowrap gap-16'>
        <div className="flex flex-col justify-center w-full h-1/2 items-center mt-16 gap-8 flex-nowrap">
            <div className='flex flex-row items-center border-2 border-red-400 text-red-500 rounded-3xl py-0.5 pl-2.5 pr-2.5  gap-3 box flex-shrink flex-nowrap'><span className='border-2 border-red-400 rounded-2xl py-0.5 pl-2.5 pr-2.5 my-0.5'>New Feature</span>Check out the team dashboard</div>
            <div className='font-semibold text-5xl text-center'>Beautiful analytics to grow smarter</div>
            <div className='flex flex-col items-center text-xl text-slate-600 text-center'>
                <div >Powerful, self-serve product and growth analytics to help you convert,engage, </div>
                <div > and retain more users. Trusted by over 4,000 startups.</div>
            </div>
            <div className='container flex-row gap-3'>
                <div className='w-28 h-12 w-full md:w-auto border-2 border-inherit py-3 px-5 rounded-3xl text-center'>Demo</div>
                <div className='w-28 h-12  w-full md:w-auto border-2 font-semibold py-3 px-5 rounded-3xl bg-red-600 text-white text-center'>Sign up</div>
                </div>
            
        </div>
        <div><img src={screen} className={screen}/></div>
        <div className='flex flex-col justify-center gap-8 items-center justify-around'>
            <div className='text-base text-slate-600 font-medium'>Join 4,000+ companies already growing</div>
            <div className='flex flex-row gap-6'>
                <img src={bolt}/>
                <img src={light}/>
                <img src={featuredev}/>
                <img src={spherula}/>
                <img src={global}/>
                <img src={niet}/>
            </div>
        </div>
    </div>
    </>
  )
}