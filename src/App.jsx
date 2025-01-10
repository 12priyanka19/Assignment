// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Navbar } from './components/Navbar'
import {Hero} from './components/Hero'
import { Feature } from './components/Features'

function App() {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col gap-16'>
        <Hero/>
        <Feature/>
      </div>
    </>
  )
}

export default App
