
import blog1 from '../assets/blog1.svg';
import blog2 from '../assets/blog2.svg';
import blog3 from '../assets/blog3.svg';
import pheonix from '../assets/phoenix.svg';
import lana from '../assets/lana.svg';
import arrow from '../assets/arrow.svg'
import profilelogo from '../assets/profilelogo.svg'
export function Blogs(){
    return(
        <>
        <div className="flex flex-col gap-10  justify-center items-center lg:py-24 px-4 blog">
            <div className="flex flex-row  w-3/4  justify-between ">
                <div className="flex flex-col gap-5">
                    <div className="text-red-500 font-semibold">Our blog</div>
                    <div className="text-4xl font-semibold">Lastest blog posts</div>
                    <div className="font-normal text-xl text-slate-600">Tool and strategies modern teams need to help their companies grow.</div>
                </div>
                <div className="w-32 h-12  bg-red-600 text-white rounded-md p-3 hidden lg:block">
                        View All posts
                </div>
            </div>
            <div className='flex flex-col gap-8 lg:p-0 p-4 flex-nowrap lg:flex-row justify-between'>
                <div className='flex flex-col gap-6 max-w-sm'>
                    <img src={blog1} className='w-96 h-60'/>
                    <div className='text-red-500 font-semibold'>Design</div>
                    <div className='flex flex-row justify-between'><span className='font-semibold text-2xl'>UX review presentations</span><img src={arrow} className='w-6 h-6'/></div>
                    <div className='text-slate-600'>How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                    <div className='flex flex-row items-center gap-3'>
                        <img src={profilelogo} className='w-10 h-10'/>
                        <div className='flex flex-col'>
                            <div>Olivia Rhye</div>
                            <div className='text-slate-600'>20 Jan 2024</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 max-w-sm'>
                    <img src={blog2} className='w-96 h-60'/>
                    <div className='text-red-500 font-semibold'>Product</div>
                    <div className='flex flex-row justify-between'><span className='font-semibold text-2xl'>Migrating to Linear 101</span><img src={arrow} className='w-6 h-6'/></div>
                    <div className='text-slate-600'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</div>
                    <div className='flex flex-row items-center gap-3'>
                        <img src={pheonix} className='w-10 h-10'/>
                        <div className='flex flex-col'>
                            <div>Phoenix Baker</div>
                            <div className='text-slate-600'>19 Jan 2024</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 max-w-sm'>
                    <img src={blog3} className='w-96 h-60'/>
                    <div className='text-red-500 font-semibold'>Software Engineering</div>
                    <div className='flex flex-row justify-between'><span className='font-semibold text-2xl'>Building your API stack</span><img src={arrow} className='w-6 h-6'/></div>
                    <div className='text-slate-600'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</div>
                    <div className='flex flex-row items-center gap-3'>
                        <img src={lana} className='w-10 h-10'/>
                        <div className='flex flex-col'>
                            <div>Lana Steiner</div>
                            <div className='text-slate-600'>18 Jan 2024</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-2.5'><div className="border bg-red-600 text-white text-center h-12 rounded-lg p-2 lg:hidden ">View All posts</div></div>
        </div>
        </>
    )
}