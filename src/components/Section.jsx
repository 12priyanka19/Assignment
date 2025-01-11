import sisyphus from '../assets/sisyphus.svg';
import section from '../assets/sectionlogo.svg';
export function Section(){
    return(
        <>
            <div className='bg-slate-100 py-24'>
                <div className=' flex flex-col gap-8 items-center px-8'>
                    <div><img src={sisyphus} className='inline'/></div>
                    <div className='text-center font-medium text-5xl changefont'>
                        <div>We’ve been using Untitled to kick start every new </div>
                        <div>project and can’t imagine working without it.</div>
                    </div>
                <div className='flex flex-col items-center'>
                    <div><img src={section}/></div>
                    <div className='text-center'>
                        <p className='font-bold text-xl'>Candice Wu</p>
                        <p>Product Manager, Sisyphus</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}