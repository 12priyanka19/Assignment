import { Disclosure, DisclosureButton, DisclosurePanel, Menu,} from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import zysklogo from '../assets/logo.svg';
import profilelogo from '../assets/profilelogo.svg'
import '../App.css';
const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'Products', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export  function Navbar() {
  return (
    <Disclosure as="nav" className="navcolor">
      <div className="mx-auto " >
        <div className=" flex h-16 items-center justify-between pl-8 pr-8 ">
          <div className=" inset-y-0 left-0 flex items-center sm:hidden float-left ">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-x-10 ">
            <div className="flex shrink-0 items-center ">
              <img
                alt="Your Company"
                src={zysklogo}
                className="h-8 w-auto"
                style={{width:'84.61px',height:'32px'}}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 gap-x-10 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    // className={classNames(
                    //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 ',
                    // )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                {/* <MenuButton className="relative flex rounded-full bg-gray-800 text-sm  "> */}
                  <span className="absolute -inset-1.5" />
                  
                  <img
                    alt=""
                    src={profilelogo}
                    className="w-10 h-10 hidden lg:flex"
                  />
                {/* </MenuButton> */}
              </div>
    
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
