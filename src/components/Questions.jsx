import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import threepeople from '../assets/threepeople.svg';
export function Question(){
    return(
        <>
        <div className='flex flex-col gap-12 items-center'>
        <div className="flex flex-col gap-12 items-center flex-nowrap text-base" >
            <div className="flex flex-col gap-5 text-center">
                <div className="font-semibold text-4xl">Frequently asked questions</div>
                <div className="font-normal text-xl text-slate-600">Everything you need to know about the product and billing.</div>
            </div>
            <div className='flex flex-col gap-16 w-dvw flex-wrap px-8 sm:p-0 max-w-3xl'>
                <div>
                    <div className='flex flex-row justify-between flex-nowrap '>
                        <div className='flex flex-col gap-1 flex-nowrap'>
                            <p className='inline font-semibold '>Is there a free trial available?</p>
                            <p>Yes, you can try us for free for 30days.If you want, well provide you with a free,
                            personalized 30 minute onboarding call to get you up and running as soon as possible</p>
                        </div>
                        <div >
                            <img src={minus} className='w-6 h-6'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  text-left flex-nowrap  border-t-2 border-slate-200 justify-between  ' >
                    <div className='font-semibold'>Can I change my plan later?</div>
                    <div><img src={plus} className='w-6 h-6'/></div>
                </div>
                <div className='flex flex-row  text-left flex-nowrap  border-t-2 border-slate-200 justify-between  ' >
                    <div className='font-semibold'>Can other info be added to an invoice?</div>
                    <div><img src={plus} className='w-6 h-6'/></div>
                </div>
                <div className='flex flex-row  text-left flex-nowrap  border-t-2 border-slate-200 justify-between  ' >
                    <div className='font-semibold'>What is your cancellation policy?</div>
                    <div><img src={plus} className='w-6 h-6'/></div>
                </div>
                <div className='flex flex-row  text-left flex-nowrap  border-t-2 border-slate-200 justify-between  ' >
                    <div className='font-semibold'>Can other info be added to an invoice?</div>
                    <div><img src={plus} className='w-6 h-6'/></div>
                </div>
                <div className='flex flex-row  text-left flex-nowrap  border-t-2 border-slate-200 justify-between  ' >
                    <div className='font-semibold'>How does billing work?</div>
                    <div><img src={plus} className='w-6 h-6'/></div>
                </div>
                <div className='flex flex-row  text-left flex-nowrap  border-t-2 border-slate-200 justify-between  ' >
                    <div className='font-semibold'>How do I change my account email?</div>
                    <div><img src={plus} className='w-6 h-6'/></div>
                </div>
            </div>
        </div>
        <div className='lg:w-9/12 w-11/12 rounded-3xl lg:py-8 py-8 px-5 bg-slate-100'>
            <div className='flex flex-col justify-center flex-nowrap  items-center gap-8'>
                <img src={threepeople}/>
                <div className='text-xl font-semibold'>Still have questions?</div>
                <div className='font-normal lg:text-xl text-slate-600 text-base text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</div>
                <button className='w-32 h-12  bg-red-600 text-white rounded-3xl'>Get in touch</button>
            </div>
        </div>
        </div>
{/* 
<section className="max-w-3xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Frequently asked questions</h2>
  <p className="text-center text-gray-600 mb-8">
    Everything you need to know about the product and billing.
  </p>
  <div className="faq-item  rounded-lg mb-4 overflow-hidden">
    <div className="w-full flex   px-6 py-4 text-left text-gray-900 font-medium ">
        <div>
      <div className='pb-1 font-semibold'>Is there a free trial available?</div>
      <div>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute
         onboarding call to get you up and running as soon as possible.</div></div>
      <img src={minus} className='pb-9'/>
    </div>
    <div className="faq-answer px-6 py-4 text-gray-600 bg-gray-50 hidden">
      Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
    </div>
  </div>

  {/* <!-- FAQ Item 2 --> */}
  {/* <div className="faq-item border border-gray-200 rounded-lg mb-4 overflow-hidden">
    <button
    //   onclick="toggleFAQ(this)"
      className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50"
    >
      Can I change my plan later?
      <span className="faq-icon text-2xl text-gray-500">+</span>
    </button>
    <div className="faq-answer px-6 py-4 text-gray-600 bg-gray-50 hidden">
      Yes, you can upgrade or downgrade your plan at any time.
    </div>
  </div>

  {/* <!-- FAQ Item 3 --> */}
  {/* <div className="faq-item border border-gray-200 rounded-lg mb-4 overflow-hidden">
    <button
    //   onclick="toggleFAQ(this)"
      className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50"
    >
      What is your cancellation policy?
      <span className="faq-icon text-2xl text-gray-500">+</span>
    </button>
    <div className="faq-answer px-6 py-4 text-gray-600 bg-gray-50 hidden">
      You can cancel your subscription anytime with no hidden fees.
    </div>
  </div>
</section> */} 

        </> 
    )
}