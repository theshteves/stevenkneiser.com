import * as React from 'react'
import { Link } from 'gatsby'
/* requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../assets/img/signature.svg'
import texture from '../assets/img/ice-age.png'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

export default function NavBar() {
  const nav = [
    { name: '/about', href: '/about' },
    { name: '/blog', href: '/blog' },
    { name: '/now', href: '/now' },
  ]

  return (
    <Disclosure
      as='nav'
      className='bg-yellow-900 shadow-2xl fixed w-screen z-40'
      style={{
        backgroundImage: `url("${texture}")`,
        boxShadow: '0 8px 9px -3px rgba(0,0,0,0.4)',
      }}
    >
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <Link to='/' className='no-underline'>
                  <div className='flex-shrink-0 flex items-center border-black filter invert overflow-hidden'>
                    <p className='my-0 font-light text-2xl text-black'>
                      Steven
                    </p>
                    <img
                      className='block h-14 w-auto'
                      src={logo}
                      alt='stevenkneiser.com'
                    />
                    <p className='-ml-7 my-0 font-light text-2xl text-black'>
                      Kneiser
                    </p>
                  </div>
                </Link>

                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4 items-center h-full pl-16'>
                    {nav.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        getProps={({ isCurrent }) => ({
                          'aria-current': isCurrent ? 'page' : undefined,
                          className: classNames(
                            isCurrent
                              ? 'bg-yellow-50 text-yellow-900 opacity-70'
                              : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
                            'px-3 py-2 rounded-md text-2xl font-medium'
                          ),
                        })}
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
            <div className='px-2 pt-2 pb-3 flex justify-around'>
              {nav.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  getProps={({ isCurrent }) => ({
                    'aria-current': isCurrent ? 'page' : undefined,
                    className: classNames(
                      isCurrent
                        ? 'bg-yellow-50 text-yellow-900 opacity-70'
                        : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-2xl text-center font-medium'
                    ),
                  })}
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
