'use client'

import { AnimatePresence, motion } from 'framer'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CiCircleMinus, CiSquarePlus } from 'react-icons/ci'
import DoneModalComponent from './DoneModal'
import doneIcon from '../../public/assets/img/done.png'
import axios from 'axios'
import toast from 'react-hot-toast'
import { TfiClose } from 'react-icons/tfi'
import { LuPoundSterling } from 'react-icons/lu'


const initialState = {
    date: "",
    desc: "",
    location: "",
    name: "",
    email: "",
    phone_number: ''
}



const RentalModal = ({openCheckoutModal, checkoutItem, setOpenModal, setCheckoutItem, setOpenCheckoutModal }) => {
    const [step, setStep] = useState(1)
    const [formState, setFormState] = useState(initialState);
    const [doneModal, setDoneModal] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)


    const increaseQuantity = () => {
        setQuantity((p) => p + 1)
    }

    const decreaseQuantity = () => {
      if(quantity === 1) return
        setQuantity((p) => p - 1)
    }

    const handleNext = () => {
        if(formState.date.trim() === "" || formState.desc.trim() === "" || formState.location.trim() === ''){
            return toast.error("Pls fill the empty field")
        }
        setStep((p) => p + 1)
    }


    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value })
    };


    const closeDoneModal = () => {
        setDoneModal(false)
        setFormState(initialState)
        onClose()
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const payload = {
                // quantity: quantity,
                // rental_date: formState.date,
                // rental_id: checkoutItem?.id,
                customer_name: formState.name,
                customer_email: formState.email,
                customer_phone: formState.phone_number,
                delivery_address: formState.location,
                event_details: formState.desc,
                booking_type: 'rental',
                rentals: [
                    {
                        rental_id: checkoutItem?.id,
                        quantity: quantity,
                        rental_date: formState.date
                    },
                ]
            }
            console.log(payload)
            await axios.post('https://backend.eventsbyoth.com/api/v1/bookings', payload) 
            setLoading(false)
            setDoneModal(true)
            setStep(1)
            setFormState(initialState)
            setQuantity(1)
            setOpenModal(false)
            
        } catch (error) {
            console.error(error)
            toast.error('An error occurred', error )
            setLoading(false)
        }
    }

    const onClose = () => {
        setOpenCheckoutModal(false)
        setCheckoutItem(null)
        setFormState(initialState)
        setQuantity(1)
        setStep(1)
    }

    console.log(checkoutItem?.image_url)

    // pick future date
     const today = new Date().toISOString().split("T")[0];
    
  return (
    <>
        <AnimatePresence>
        {openCheckoutModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg relative mx-w-md w-full md:w-3/4  md: h-4/5 overflow-auto z-[999]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 border rounded-full px-3 py-2 mb-5"
                onClick={onClose}
                >
                {/* ✖ */}
                <TfiClose />
              </button>

            {/* Modal Content */}
            {checkoutItem ? (
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 md:h-full'>
                    <div className='w-full md:w-1/2 relative rounded-lg p-5 overflow-hidden'>
                    
                        <h1 className='text-xl md:text-[28px] font-semibold text-[#2C2C2C] py-5'>Rental Booking</h1>
                        <h4 className='text-[#6D6D6D] text-normal md:text-2xl'>Choose Date and time for this event</h4>
                        <div className='flex justify-between pt-10'>
                            <div className="flex gap-4">
                                <span className="h-20 w-20 overflow-hidden rounded-lg">
                                    <Image src={checkoutItem?.image_url} width={500} height={500} alt='image' className='object-contain h-full w-full rounded-lg'/>
                                </span>
                                <span className='font-bold'>{checkoutItem.title}</span>
                            </div>
                            <div className='flex gap-1 items-center font-bold'>
                                <CiCircleMinus size={30} onClick={decreaseQuantity}/>
                                {/* <input type="" 
                                    value={quantity} defaultValue={1} 
                                    onChange={(e)=> setQuantity(e.target.value)} 
                                    className='w-4 outline-none' /> */}
                                {quantity}
                                <CiSquarePlus size={30} onClick={increaseQuantity}/>
                            </div>
                        </div>
                        <div className='pt-3 flex justify-between items-center'> 
                            <span className=' text-lg flex items-center'><LuPoundSterling />{checkoutItem?.price_per_unit}</span>
                            {/* <span className=' text-lg flex items-center'>Total Price:<LuPoundSterling />{(checkoutItem?.price_per_unit * quantity).toLocaleString()}</span> */}
                        </div>
                    
                    </div>

                    {/* {} */}
                    <div className="w-full md:w-1/2 p-5">
                        <form onSubmit={handleSubmit}>
                            <div className=''>
                                {/* step -1 */}
                                {step === 1 && (
                                    <div className="space-y-4">
                                        <div>
                                            {/* <label className="block mb-2">Date</label> */}
                                            <input
                                                type="date"
                                                name="date"
                                                value={formState.date}
                                                onChange={handleChange}
                                                className="w-full border border-primary p-3 rounded"
                                                placeholder='choose date'
                                                required
                                                min={today}
                                            />
                                        </div>
                                        <div>
                                            {/* <label className="block mb-2">Date</label> */}
                                            <textarea
                                                type="text"
                                                name="desc"
                                                value={formState.desc}
                                                onChange={handleChange}
                                                className="w-full border border-primary p-3 rounded"
                                                placeholder='tell us about your event'
                                                required
                                            />
                                        </div>
                                        <div>
                                            {/* <label className="block mb-2">Date</label> */}
                                            <input
                                                type="text"
                                                name="location"
                                                value={formState.location}
                                                onChange={handleChange}
                                                className="w-full border border-primary p-3 rounded"
                                                placeholder='where do you want the rentals delivery?'
                                                required
                                            />
                                        </div>
                                        <div className='flex justify-center my-5 ' onClick={handleNext}>
                                            <button className='bg-primary text-white py-4 px-8 font-semibold rounded w-full'>Continue</button>
                                        </div>

                                    </div>
                                )}

                                {/* step-2 */}
                                {step === 2 && (
                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full border border-primary p-3 rounded"
                                                placeholder='Enter Name'
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full border border-primary p-3 rounded"
                                                placeholder='Enter Email'
                                                required
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                name="phone_number"
                                                value={formState.phone_number}
                                                onChange={handleChange}
                                                className="w-full border border-primary p-3 rounded"
                                                placeholder='Enter Phone number'
                                                required
                                            />
                                        </div>

                                        <div className='flex justify-end my-5' disabled={loading} >
                                            <button type="submit" className={`bg-primary text-white py-4 px-8 font-semibold rounded w-full ${loading ? "bg-opacity-80" : null}`}>{ loading ? "Processing...":"Book Now"}</button>
                                        </div>

                                    </div>
                                )}
                            
                            </div>
                        </form>
                    </div>
                </div>
                    
                ):
                <p>No card selected</p>  
            }

            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>

    {/* done modal */}
    <DoneModalComponent isOpen={doneModal} onClose={closeDoneModal}>
        <div className=' flex flex-col h-full justify-center items-center p-3 text-center'>
            <span className="h-20 w-20 overflow-hidden rounded-lg">
                <Image src={doneIcon} alt='image' className='object-contain'/>
            </span>
            <p className="font-semibold py-4 md:text-xl">Your rental booking is confirmed</p>
            <p className="text-[#6D6D6D] text-base text-justify">Thank you for choosing PartyWithOTH. Our team will review your request and get in touch with you shortly to finalize the details.</p>
            <div className='flex justify-center my-5 w-full' onClick={closeDoneModal}>
                <button className='bg-primary text-white py-4 px-8 font-semibold rounded w-full'>Close</button>
            </div>
        </div>
    </DoneModalComponent>   
    </>
  )
}

export default RentalModal