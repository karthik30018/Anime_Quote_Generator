import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Random Quote', to: '/AnimeRandom' },
    { name: 'Anime Random Quote', to: '/AnimeTitle' },
  ]

function NavBar(){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8 bg-violet-600 text-white" aria-label="Global" >
          <div className="flex lg:flex-1">
              <span className="sr-only -m-1.5 p-1.5">Your Company</span>
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pinimg.com/736x/bb/d3/f2/bbd3f285a15c15d6f6aaa4b1dff3a802.jpg"
                alt=""
              />
        
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-white ">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="italic font-semibold leading-6 text-white text-2xl">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 "  />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10  ">
            <div className="flex items-center justify-between ">
                <span className="sr-only -m-1.5 p-1.5">Your Company</span>
                <img
                className="h-12 w-12 rounded-full bg-violet-600"
                src="https://i.pinimg.com/736x/bb/d3/f2/bbd3f285a15c15d6f6aaa4b1dff3a802.jpg"
                alt=""
              />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="bg-violet-300 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
        
        {/* <Link to="/" className="Active" >Home</Link> 
        <Link to="/AnimeRandom">AnimeRandom</Link>
        <Link to="/AnimeCharacter">AnimeCharacter</Link> */}
       </div>
        
    )  
}
export default NavBar