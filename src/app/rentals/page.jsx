'use client'
import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import HeroComponent from '@/components/HeroComponent';
import heroImg from '../../../public/assets/img/rentals.webp'
import  planImg from '../../../public/assets/img/planNextEvent.png'
import CalendlyPopup from '@/components/CalendlyEmbed'
import ModalComponent from '@/components/ModalComponent'
import useFadeIn from '@/shared/GlobalAnimation';
import RentalModal from '@/components/RentalModal'
import toast from 'react-hot-toast'
import axios from 'axios'
import Loader from '@/shared/loader'
import { LuPoundSterling } from 'react-icons/lu';

const MotionImage = motion(Image); 


const initialState = {
    date: "",
    desc: "",
    location: "",
    name: "",
    email: "",
    phone_number: ''
}

const page = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [checkoutItem, setCheckoutItem] = useState(null)
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6)
    const isAllVisible = visibleCount >= items.length;
    const [formState, setFormState] = useState(initialState);
    const [doneModal, setDoneModal] = useState(false)

    const handleNext = () => {
        setStep((p) => p + 1)
    }


    const handleChange = () => {
        setFormState({...formState, [e.target.name]: e.target.value })
    };

   

    const fadeIn = useFadeIn(0.5);

    const handleModal = (card) => {
        setSelectedCard(card);
        setOpenModal(true);
        // console.log(card)
    };
    
    const closeModal = () => {
        setSelectedCard(null);
        setOpenModal(false);
    };

    const handleCheckoutModal = (card) => {
        setCheckoutItem(card);
        setOpenCheckoutModal(true);
        // console.log(card)
    };
    
    const closeCheckoutModal = () => {
        setCheckoutItem(null);
        setOpenCheckoutModal(false);
    };


    useEffect(() => {
        const fetchRental  = async() => {
            setLoading(true)
            try {
                const response = await axios.get('https://backend.eventsbyoth.com/api/v1/rentals')
                setItems(response.data.data)
                console.log(response.data.data)
            } catch (error) {
                if(error){

                    toast.error("Error", error)
                }
            }finally{
                setLoading(false)
            }
        }
        fetchRental()
    },[])

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6)
    }

    const handleShowLess = () => {
        setVisibleCount(6)
    }

    // console.log(items)

  return (
    <>
        <section>
            <HeroComponent title={'Rentals'} image={heroImg}/>
        </section>

        <motion.section            
         id='rentals'className='px-5 md:px-10 lg:px-20 py-10 md:py-30 bg-lightgray'
         >
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">Rentals  </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    loading? <div className='animate-spin m-auto w-full flex justify-center items-center text-center'><Loader/></div> :
                    !loading && !items.length ? <p className='text-center'>No data</p> :
                    items.slice(0, visibleCount).map((item) => {
                        return (
                            <motion.div            
                                key={item.id} className='h-[70vh] gap-4 rounded-lg overflow-hidden bg-white' onClick={() => handleModal(item)}  >
                                <motion.div
                                    whileHover={{ scale: 1.05 }} 
                                    transition={{ type: "keyframes", stiffness: 300 }} 
                                    className='bg-white border h-2/3'>
                                    <Image src={item?.image_url} alt='image' width={500} height={500} className='h-full w-full object-cover rounded-lg'/>
                                </motion.div>
                                <div className='h-full px-3 '>
                                    <h2 className='text-lg font-semibold py-2 flex items-center justify-between'>
                                        <span>
                                            {item?.name}
                                        </span>
                                        <span className='font-semibold text-lg flex items-center'><LuPoundSterling />{item?.price_per_unit}</span>
                                    </h2>
                                    <div className='flex justify-between items-center'>
                                        <div className='rounded flex justify-center items-center text-center border border-primary w-full hover:border-opacity-70 transition-all cursor-pointer group' >
                                            <button className='p-3 bg-white text-primary border-primary rounded group-hover:text-opacity-65'>Rent Now</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>

            {/* modal */}
            <ModalComponent isOpen={openModal} onClose={closeModal}>
                {selectedCard ? (
                   <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
                        <div className='w-full lg:w-1/2 h-[40vh] md:h-[50vh] lg:h-[64vh] relative rounded-lg m-5 min-h-full overflow-hidden  lg:flex'>
                       
                            <MotionImage 
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                                src={selectedCard?.image_url} alt='image' width={500} height={500} className='h-full w-full object-cover rounded-lg absolute z-10 inset-0'/>
            
                        
                        </div>
                    {/* <div className='w-1/2 border min-h-[100%]'> */}
                        <div className='w-full lg:w-1/2'>
                        <p className='text-xl md:text-[28px] font-bold py-2'>{selectedCard?.name}</p>
                        <p className='text-neutral py-2 text-normal md:text-2xl'>{selectedCard?.description}</p>
                        <span className='font-semibold text-lg flex items-center'><LuPoundSterling />{selectedCard?.price_per_unit}</span>
                      
                        <div className='flex justify-end my-5 ' onClick={() => handleCheckoutModal(selectedCard)}>
                            <button className='bg-primary  text-white py-4 px-8 font-semibold rounded'>Rent now</button>
                        </div>
                        </div>

                    {/* </div> */}
                   </div>
                    
                ):
                <p>No card selected</p>  
            }
            </ModalComponent>

            <div className="text-center pt-10 font-semibold">
                {
                    isAllVisible ?
                    <button  className="text-primary text-xl" onClick={handleShowLess}>Show Less</button> 
                    :
                    <button  className="text-primary text-xl" onClick={handleLoadMore}>Load More</button>
                }
            </div>
        </motion.section>

        {/* next event */}
        <motion.section  {...fadeIn}  className='pt-10 md:pt-30 h-full'>
            {/* <div className='flex h-full items-center'> */}
                <div className='flex flex-col md:flex-row w-full h-full justify-between'>  
                    <div className='h-[70vh] w-full md:w-1/2 bg-primary/10 p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                        <p className='text-4xl font-semibold tracking-widest leading-snug'>Ready to Plan Your Next Event?</p>
                        <p className='text-neutral'>Let’s make it extraordinary. Connect with us today!</p>
                        {/* <ButtonLinkOrange href={`#`} name={'Book a Call'}/> */}
                        <CalendlyPopup title="Book a Call"/>
                    </div>

                    <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center w-full md:w-1/2 h-[70vh] relative order-first md:order-last'>
                        {/* <span className='absolute inset-0 bg-darkgray/30 -z-10'></span> */}
                        <Image src={planImg} alt="ticket" width={500} height={500} className=" w-full h-full object-cover absolute inset-0"/>
                    </div>
                </div>
            {/* </div> */}
        </motion.section> 

        {/* checkoutModal */} 
        <RentalModal 
            openCheckoutModal={openCheckoutModal} 
            // onClose={closeCheckoutModal}
            setCheckoutItem= {setCheckoutItem}
            setOpenCheckoutModal = {setOpenCheckoutModal}   
            checkoutItem={checkoutItem} 
            setOpenModal={setOpenModal}
        />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


    </>
  )
}

export default page