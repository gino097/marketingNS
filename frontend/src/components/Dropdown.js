/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Icon from '@material-tailwind/react/Icon'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left z-50">
            <div>
                <Menu.Button className="inline-block flex bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-indigo-400 hover:text-zinc-50 duration-500 text-gray-500 text-sm items-center hover:no-underline outline-none focus:outline-none">
                    <Icon name="question_mark" size="2xl" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:no-underline hover:text-gray-900'
                                    )}
                                >
                                    Ticket de Soporte
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:no-underline hover:text-gray-900'
                                    )}
                                >
                                    Buzón de Sugerencias
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:no-underline hover:text-gray-900'
                                    )}
                                >
                                    Preguntas Frecuentes
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:no-underline hover:text-gray-900'
                                    )}
                                >
                                    Acerca de
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
