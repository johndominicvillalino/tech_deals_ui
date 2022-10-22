import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { baseUrl } from '../helpers/constants'
import axios from 'axios'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

export default function AddProduct({ open, setOpen, setProducts }) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        price: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const [isMissing, setIsMissing] = useState(false)
    const [error, setError] = useState('')

    const handleChange = e => {
        const { value, name } = e.target

        setIsMissing(false)

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    }

    const handleSubmit = e => {

        e.preventDefault()
        const {name,price} = formData
        const nameCheck = name.length < 1
        const priceCheck = price < 1

        if(nameCheck && priceCheck) {
            setIsMissing(true)
            setError("Product name and price can't be blank")
            return
        } else if(nameCheck) {
            setIsMissing(true)
            setError("Product name can't be blank")
            return
        } else if(priceCheck){
            setIsMissing(true)
            setError("Price can't be blank")
            return
        }

        setIsLoading(true)

        axios.post(`${baseUrl}/products`, formData)
            .then(e => {
                setIsLoading(false)
                setProducts(prev => [...prev,e.data])
                setOpen(false)
                navigate('/')
            })
            .catch(err => console.log(err))

            setFormData({
                name: '',
                price: '',
            })

    }

    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="text-center sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Create a Product
                                            </Dialog.Title>
                                            <div className="mt-2">
                                               {isMissing && <span className='text-xs text-red-300'>{error}</span> }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 md:col-span-2 md:mt-0">
                                    <form action="#" method="POST">
                                        <div className="overflow-hidden shadow sm:rounded-md">
                                            <div className="bg-white px-4 py-5 sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700  mb-5">
                                                            Product Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autoComplete="given-name"
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-center "
                                                            placeholder='Ex. A4 tech Mouse'
                                                            onChange={handleChange}
                                                            value={formData.productName}
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-5">
                                                            Price
                                                        </label>
                                                        <input
                                                            value={formData.price}
                                                            onChange={handleChange}
                                                            type="number"
                                                            name="price"
                                                            id="price"
                                                            autoComplete="family-name"
                                                            className="text-center mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                                            placeholder='0.00'
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-center">
                                            {isLoading  && <Spinner></Spinner> }
                                                {!isLoading &&
                                                    <><button
                                                        type="button"
                                                        className="mt-3 mr-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() => setOpen(false)}
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                        <button
                                                            type="submit"
                                                            onClick={handleSubmit}
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Save
                                                        </button>
                                                    </>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}