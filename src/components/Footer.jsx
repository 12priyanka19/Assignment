import logo from '../assets/logo.svg'
export function Footer(){
    return(
        <>
        <div className="flex flex-col gap-16 items-center">
            <div className='w-full  bg-slate-100 py-16 lg:py-24 '>
                <div className='flex flex-col  flex-nowrap items-center gap-8'>
                    <div className='text-xl font-semibold'>Start your free trial</div>
                    <div className='font-normal text-xl text-slate-600 fontchange text-center'>Join over 4,000+ startups already growing with Untitled.</div>
                    <div className="flex lg:flex-row gap-3 justify-center flex-col  w-64">
                        <button className=" h-12 w-full rounded-md bg-white border-slate-300 border">Learn more</button>
                        <button className=' h-12 w-full bg-red-600 text-white rounded-md'>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="items-center gap-12 font-semibold grid grid-cols-2 lg:flex lg:flex-row text-slate-600 justify-between w-9/12">
                <div className="flex flex-col gap-3 ">
                    <div className="text-slate-500 text-sm">Product</div>
                    <div>Overview</div>
                    <div>Features</div>
                    <div>Solutions</div>
                    <div>Tutorials</div>
                    <div>Pricing</div>
                    <div>Releases</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-slate-500 text-sm">Company</div>
                    <div>About us</div>
                    <div>Careers</div>
                    <div>Press</div>
                    <div>News</div>
                    <div>Media kit</div>
                    <div>Contact</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-slate-500 text-sm">Resources</div>
                    <div>Newsletter</div>
                    <div>Blog</div>
                    <div>Events</div>
                    <div>Help centre</div>
                    <div>Tutorials</div>
                    <div>Support</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-slate-500 text-sm">Use cases</div>
                    <div>Startups</div>
                    <div>Enterprise</div>
                    <div>Government</div>
                    <div>SaaS centre</div>
                    <div>Marketplaces</div>
                    <div>Ecommerce</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-slate-500 text-sm">Social</div>
                    <div>Twitter</div>
                    <div>LinkedIn</div>
                    <div>Facebook</div>
                    <div>GitHub</div>
                    <div>AngelList</div>
                    <div>Dribbble</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-slate-500 text-sm">Legal</div>
                    <div>Terms</div>
                    <div>Privacy</div>
                    <div>Cookies</div>
                    <div>Licenses</div>
                    <div>Settings</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-x-6 w-9/12 justify-between'>
                <div><img src={logo}/></div>
                <div className='text-slate-400'>© 2077 zysktechnologies. All rights reserved.</div>
            </div>
        </div>
        </>
    )
}