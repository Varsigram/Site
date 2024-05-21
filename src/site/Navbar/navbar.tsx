import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import logo from '../../assets/logo.svg'

const navigation = [
    { name: 'About Us', href: '/' },
    { name: 'Explore', href: '/' },
    { name: 'Contact Us', href: '/' },
]

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* <header className="absolute inset-x-0 top-0 z-50"> */}
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="">
                        <span className="sr-only">Botany</span>
                        <img
                            className=""
                            src={logo}
                            alt=""
                            onClick={
                                () => {
                                    window.location.href = '/';
                                }
                            }
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-900"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        {/* <FontAwesomeIcon icon={'fa-solid fa-bars'} /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none"><path d="M5.1665 7.75H25.8332M5.1665 15.5H25.8332M16.7915 23.25H25.8332" stroke="#111111" stroke-width="2.58333" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span className="sr-only">Open main menu</span>
                        {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 float-right">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-xl font-semibold font-family: 'Inter', sans-serif; leading-6 text-gray-900 hover:underline transition-transform transform hover:scale-110">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt=""
                                onClick={
                                    () => {
                                        window.location.href = '/';
                                    }
                                }
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <h1 className='text-4xl'>X</h1>
                            <span className="sr-only bg-black">Close menu</span>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50  transition-transform transform hover:scale-110"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {/* <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            {/* </header> */}
        </div>
    )
}

