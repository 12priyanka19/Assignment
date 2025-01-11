import msg from '../assets/msg.svg';
import blink from '../assets/blink.svg';
import spark from '../assets/spark.svg';
import smily from '../assets/smily.svg';
import design from '../assets/design.svg';
import notify from '../assets/notify.svg';

export function Feature(){

    return(
        <>
        <div className="flex flex-col items-center gap-16   feature">
            <div className="flex flex-col items-center gap-8">
                <div className="text-red-600">Features</div>
                <div className="font-semibold lg:text-4xl text-3xl">Analytics that feel like its from the future</div>
                <div className="flex flex-col items-center font-normal text-xl text-slate-600">
                    <div>Powerful, self-serve product and growth analytics to help you convert,engage, </div>
                    <div> and retain more users. Trusted by over 4,000 startups.</div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col  justify-center flex-nowrap gap-8 lg:px-0 '>
                <div className='lg:w-3/12 flex flex-col justify-center items-center gap-5'>
                    <img src={msg} className='w-12 h-12'/>
                    <div className='font-semibold text-xl'>Share team inboxes</div>
                    <div className='text-center text-base text-slate-600'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone
                         on the same page and in the loop.</div>
                </div>
                <div className='lg:w-3/12 flex flex-col justify-center items-center gap-5'>
                    <img src={spark} alt="" className='w-12 h-12'/>
                    <div className='font-semibold text-xl'>Deliver instant answers</div>
                    <div className='text-center text-base text-slate-600'>An all-in-one customer service platform that helps you balance 
                        everything your customers need to be happy.</div>
                </div>
                <div className='lg:w-3/12 flex flex-col justify-center items-center gap-5'>
                    <img src={blink} className='w-12 h-12'/>
                    <div className='font-semibold text-xl'>Manage your team with reports</div>
                    <div className='text-center text-base text-slate-600'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export,
                         and drilldown on the data in a couple clicks.</div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-center flex-nowrap gap-8'>
                <div className='lg:w-3/12 flex flex-col justify-center items-center gap-5'>
                    <img src={smily} className='w-12 h-12'/>
                    <div className='font-semibold text-xl'>Connect with customers</div>
                    <div className='text-center text-base text-slate-600'>Solve a problem or close a sale in real-time with chat. If no one is available, 
                        customers are seamlessly routed to email without confusion.</div>
                </div>
                <div className='lg:w-3/12 flex flex-col justify-center items-center gap-5'>
                    <img src={design} className='w-12 h-12'/>
                    <div className='font-semibold text-xl'>Connect the tools you already use</div>
                    <div className='text-center text-base text-slate-600'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. 
                        Plus, our extensive developer tools.</div>
                </div>
                <div className='lg:w-3/12 flex flex-col justify-center items-center gap-5'>
                    <img src={notify} className='w-12 h-12'/>
                    <div className='font-semibold text-xl   '>Our people make the difference</div>
                    <div className='text-center text-base text-slate-600'>We’re an extension of your customer service team, and all of our resources are free. 
                        Chat to our friendly team 24/7 when you need help.</div>
                </div>
            </div>
        </div>
        </>
    )
}