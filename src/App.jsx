// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Navbar } from './components/Navbar'
import {Hero} from './components/Hero'
import { Feature } from './components/Features'
import { Section } from './components/Section'
import { Question } from './components/Questions'
import { Blogs } from './components/Blogs'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
     
      <div className='flex flex-col gap-16'>
        <Navbar />
        <Hero />
        <Feature/>
        <Section/>
        <Question/>
        <Blogs/>
        <Footer/>
      </div>
    </>
  )
}

export default App
