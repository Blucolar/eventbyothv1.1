'use client'
import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer'
import { LuPoundSterling } from 'react-icons/lu'
import axios from 'axios'
import toast from 'react-hot-toast'
import { CiCircleMinus, CiSquarePlus } from 'react-icons/ci'

const initialState = {
    selectedOption: "",
    amount: "",
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    // customer_address: ""
}

const BookTicketModal = ({show, setShow}) => {
    const [step, setStep] = React.useState(1);
    const [formState, setFormState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [serviceCharge, setServiceCharge] = useState(1)
    const [unitPrice, setUnitPrice] = useState(60)
    const [total, setTotal] = useState()
    
    const [charge, setCharge] = useState(null);
    
    // console.log("the items---",items)
    // let ticketSubTotalPrice 
    // let serviceCharge = 1;
    // let unitPrice = 60
    
    // console.log(data)
    const increaseQuantity = () => {
        setQuantity((p) => p + 1)
    }

    const decreaseQuantity = () => {
        if(quantity === 1) return
        setQuantity((p) => p - 1)
    }

    const handleChange =(e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleDivClick = (value) => {
        setFormState({ ...formState, selectedOption: value });
    };

    const onClose = () => { 
        setFormState(initialState)
        setStep(1)
        setShow(false) 
    } 

    const nextStep = () => {
        setStep(p => p + 1)
    }

    
    // const subtotal = cart.reduce((total, item) => total + unitPrice * quantity, 0);
    // const totalAmount = subtotal + serviceCharge;

    
    const fetchCharge = async () => {
        try {
          const res = await axios.get('https://backend.eventsbyoth.com/api/v1/admin-service-charge');
          setCharge(res?.data?.admin_service_charge);
          console.log(charge)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        fetchCharge();
        fetchCharge();
    },[])


    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const payload = {
                customer_name: formState.customer_name,
                customer_email: formState.customer_email,
                customer_phone: formState.customer_phone,
                event_details: `Join us for an exclusive wedding event featuring top vendors, 
                bridal fashion, and expert planners. Secure your spot today!`,
                booking_type: "event",
                // delivery_address: formState.customer_address,
                // event_date: 
                amount: `${serviceCharge + unitPrice * quantity }`,
                tickets: [
                    {
                        event_id: 4,
                        ticket_id: `${formState.selectedOption === 'vip-experience' ? 4 : 3}`,
                        slug: `${formState.selectedOption}`,
                        quantity: quantity
                    }
                ],
                gateway: "revolut",


            }
            console.log("amonutt", payload.amount)
           const response = await axios.post('https://backend.eventsbyoth.com/api/v1/bookings', payload)

            if (response.data.payment.payment_url) {
                window.location.href = response.data.payment.payment_url;
            }else{
                toast.error('An error occurred')
            }

        } catch (error) {
            console.log(error)
            // toast.error('An error occurred')
        }finally{
            setLoading(false)
            setShow(false)
        }
    }

  return (
    <div>
        <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg relative mx-w-md w-full md:w-2/3  max-h-[100%] overflow-auto z-[999]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 border rounded-full px-3 py-2"
                onClick={onClose}
                >
                ✖
              </button>

                {/* Modal Content */}
                <form onSubmit={handleSubmit}>
                    {/* step1 */}

                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className=' p-3 md:p-5 py-10'
                        >
                            <h1 className='text-2xl font-semibold py-5 font-sans text-[#2C2C2C]'>Choose Ticket</h1>
                            <div className='flex flex-col gap-4'>
                                <div onClick={() => handleDivClick("general-admission")} className={`border rounded-lg py-5 px-3 peer-checked:border-primary ${formState.selectedOption === 'General Addmission'? "border-primary" : ""}`}>
                                    <div className='flex items-center justify-between gap-4'>
                                        <label className='gap-4 flex text-[#302828] text-2xl font-semibold peer-checked:text-primary'>
                                            <input 
                                                type="radio"
                                                name="option"
                                                value="general-admission"
                                                checked={formState.selectedOption === "general-admission"}
                                                onChange={handleChange}
                                                readOnly
                                                className='peer'
                                            />
                                            Standard Ticket
                                        </label>
                                        <span className='font-semibold text-lg flex items-center'><LuPoundSterling />{unitPrice}</span>
                                    </div>
                                    <p className='p-4 text-[#6D6D6D] text-base'>Unlimited food & drinks, souvenirs, raffle draw and lots more...</p>
                                </div>

                                {/* <div  className={`border rounded-lg py-5 px-3 ${formState.selectedOption === 'VIP Experience'? "border-primary" : ""}`} onClick={() => handleDivClick("VIP Experience")}>
                                    <div className='flex items-center justify-between gap-4'>
                                        <label className='gap-4 flex text-[#302828] text-2xl font-semibold'>
                                            <input 
                                                type="radio"
                                                name="option"
                                                value="VIP Experience"
                                                checked={formState.selectedOption === "VIP Experience"}
                                                onChange={handleChange}
                                                readOnly
                                            />
                                            VIP Experience
                                        </label>
                                        <span className='font-semibold text-lg flex items-center'><LuPoundSterling />60</span>
                                    </div>
                                    <p className='p-4 text-[#6D6D6D] text-base'>Front-row access to fashion shows, free wedding consultations, and exclusive gifts.</p>
                                </div> */}

                                {/* continue */}
                                <button onClick={nextStep} disabled={!formState.selectedOption} className={` text-white py-3 px-4 font-semibold rounded mt-3 text-lg ${formState.selectedOption ? "bg-primary hover:bg-primary/40" : "bg-primary/20 cursor-not-allowed"}`}>Continue</button>
                            </div>
                        </motion.div>

                    )}

                    {/* step2 */}
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className='flex flex-col md:flex-row items-center justify-center gap-4 p-6'>
                                <div className='flex flex-col gap-4 w-full md:w-1/2'>
                                    <p className='text-2xl'>Standard Ticket</p>
                                    <div className='border rounded-lg p-3'>
                                        <div className='flex gap-4 py-3 items-center'>
                                            <span className=''>Quantity</span>
                                            <CiCircleMinus size={20} onClick={decreaseQuantity}/>
                                                {quantity}
                                            <CiSquarePlus size={20} onClick={increaseQuantity}/>
                                        </div>
                                        <p className='text-neutral'>Unlimited food & drinks, souvenirs, raffle draw and lots more...</p>
                                        <p className="flex items-center text-xl font-bold text-neutral "><LuPoundSterling />{unitPrice}</p>
                                    </div>
                                    <div className=''>
                                        <label htmlFor="" className='text-darkgray'>Fill in your contact Info</label>
                                        <input type="text" onChange={handleChange} required name='customer_name' value={formState.customer_name} placeholder='Enter Name' className='w-full p-2 border rounded-lg my-4 border-primary'/>
                                        <input type="email" onChange={handleChange} required name='customer_email' value={formState.customer_email} placeholder='Enter Email' className='w-full p-2 border border-primary rounded-lg mb-4 '/>
                                        <input type="text" onChange={handleChange} required name='customer_phone' value={formState.customer_phone} placeholder='Enter Phone' className='w-full p-2 border border-primary rounded-lg mb-4 '/>
                                        {/* <input type="text" onChange={handleChange} required name='customer_address' value={formState.customer_address} placeholder='Enter Delivery Address' className='w-full p-2 border border-primary rounded-lg mb-4 '/> */}
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 '>
                                    <div className='bg-lightgray p-3 md:p-5 rounded-lg md: my-5 md:mt-8'>
                                        <h1 className='py-5 font-semibold text-lg'>Ticket Preview</h1>
                                        <label htmlFor="" className='py-2 text-neutral'>Name</label>
                                        <p className='text-grey mb-3 font-semibold'>{formState.customer_name}</p>
                                        <label htmlFor="" className='py-2 text-neutral'>Email Address</label>
                                        <p className='text-grey mb-3 font-semibold'>{formState.customer_email}</p>
                                        <label htmlFor="" className='py-2 text-neutral'>Phone Number</label>
                                        <p className='text-grey mb-3 font-semibold'>{formState.customer_phone}</p>
                                        <label htmlFor="" className='py-2 text-neutral'>Delivery Address</label>
                                        <p className='text-grey mb-3 font-semibold'>{formState.customer_address}</p>
                                        <div className='flex justify-between items-center border-y py-4'>
                                            <p className='flex flex-col'>
                                               <span className='font-semibold text-grey '> Standard Ticket</span>
                                            </p>
                                            <span className='font-semibold text-base flex items-center'><LuPoundSterling />{unitPrice * quantity}</span>
                                        </div>
                                        <div className='flex justify-between items-center border-y py-4'>
                                            <p className='flex flex-col'>
                                               <span className='font-semibold text-grey '> Service Charge</span>
                                            </p>
                                            <span className='font-semibold text-base flex items-center'><LuPoundSterling />{charge}</span>
                                        </div>
                                        <div className='flex justify-between items-center font-semibold'>
                                            <span>Total</span>
                                            <span className='font-semibold text-base flex items-center'><LuPoundSterling />{unitPrice * quantity + serviceCharge}</span>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={loading} className='bg-primary text-white py-3 px-4 font-semibold rounded w-full p-5'>{ loading? "Processing..." : "Pay Now"}</button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </form>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
    </div>
  )
}

export default BookTicketModal