/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react'
// import { useLocation } from 'react-router-dom'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../images/skcom-logo.png'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

export default function NavBar() {
  const nav = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ]

  /*
  const [nav, setNav] = useState([
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ])

  useEffect(() => {
    setNav(nav.map((item) => ({...item,
      current: item.href === window.location.pathname
    })))

    console.log(nav)
  }, [nav])
  */

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src={logo}
                    alt='stevenkneiser.com'
                  />
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src={logo}
                    alt='stevenkneiser.com'
                  />
                </div>

                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {nav.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {nav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
