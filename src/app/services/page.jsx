'use client'
import HeroComponent from '@/components/HeroComponent';
import React, { useState } from 'react';
import heroImg from '../../../public/assets/img/services-hero.png';
import { Link as ScrollTo } from "react-scroll";
import { AiOutlineDown } from 'react-icons/ai';
import aboutImg from '../../../public/assets/img/about-us.png'
import Image from 'next/image';
import frame1 from '../../../public/assets/img/weddinplanning.png'
import frame2 from '../../../public/assets/img/custom-events.png';
import frame3 from '../../../public/assets/img/birthday-party.png';
import  frame4 from '../../../public/assets/img/coporate-events.png'
import  planImg from '../../../public/assets/img/planNextEvent.png'
import { motion} from "framer-motion";
import ModalComponent from '@/components/ModalComponent';
import rent1Img from '../../../public/assets/img/rent1.png'
import rent2Img from '../../../public/assets/img/rent2.png'
import rent3Img from '../../../public/assets/img/rent3.png'
import Link from 'next/link';
import useFadeIn from '@/shared/GlobalAnimation';
import CalendlyPopup from '@/components/CalendlyEmbed';
import toast from 'react-hot-toast';
import axios from 'axios';
import RentalModal from '@/components/RentalModal';



const MotionImage = motion(Image); 

const data = [
    {
        id: 1,
        image: frame1,
        btnText: 'Wedding Planning',
        details: {
            title: 'Wedding Planning',
            title2: "Stress-Free Wedding Planning for Your Big Day",
            description: 'Planning a wedding should be exciting, not overwhelming. We take the stress out of your big day by handling every detail, so you can focus on creating memories. From venue selection to day-of coordination, our team ensures your wedding is everything you’ve dreamed of  and more.',
            subTitle: 'Our Wedding Planning Services Include',
            list: [
                {
                    head: "Planning & Coordination:",
                    details: "We handle the scheduling, budgeting, and logistics, keeping everything on track so you don’t have to worry."
                },
                {
                    head: "Venue & Vendor Selection:",
                    details: " Our expert team helps you find the perfect venue and reliable vendors, ensuring that every aspect of your wedding is in good hands."
                },
                {
                    head: "Theme & Decor Styling:",
                    details: "We work with you to bring your vision to life, providing expert design and decor that sets the mood for your celebration."
                },
                {
                    head: "Entertainment & Catering:",
                    details: "We coordinate all your entertainment needs and catering services, including music, food, and drinks, ensuring a seamless and enjoyable experience for your guests."
                },
                {
                    head: "On-Site Management:",
                    details: "On your wedding day, our team is there to oversee all the details, making sure everything runs smoothly from start to finish."
                }
            ]
        }

    },
    {
        id: 2,
        image: frame2,
        btnText: 'Corporate Events',
        details: {
                title: 'Corporate Event Planning',
                title2: "Seamless Corporate Event Planning for Every Occasion",
                description: "We understand that corporate events require precision and professionalism. Whether you're hosting a conference, seminar, product launch, or team-building retreat, we handle all the details so you can focus on your business goals. Our team ensures your event is executed flawlessly and leaves a lasting impression on your clients and team.",
                subTitle: 'Our Corporate Event Services Include:',
                list: [
                    {
                        head: "Event Planning & Coordination:",
                        details: "We manage the scheduling, budget, and logistics, ensuring a smooth process from start to finish."
                    },
                    {
                        head: "Venue & Vendor Selection:",
                        details: "We help you select the perfect venue and reliable vendors, from catering to audiovisual services, to suit your corporate needs."
                    },
                    {
                        head: "Event Branding & Theme Design: ",
                        details: "We design customized event branding and decor that align with your corporate identity and event theme."
                    },
                    {
                        head: "Entertainment & Catering:",
                        details: " We coordinate all entertainment and catering, including keynote speakers, team-building activities, meals, and refreshments, ensuring an engaging experience."
                    },
                    {
                        head: "On-Site Management:",
                        details: "Our team is present on-site to manage everything, ensuring the event runs smoothly and all aspects are handled professionally."
                    },
                    
                ]
        }
        

    },
    {
        id: 3,
        image: frame3,
        btnText: 'Birthday & Private Parties',
        details: {
            title: 'Birthdays & Private Party Planning',
            title2: "Celebrate Life's Moments with a Perfect Party",
            description: "At EventsbyOTH, we believe every milestone deserves a celebration. Whether it's a milestone birthday, an intimate anniversary gathering, or a fun-filled private party, we offer personalized planning services to ensure your event is unforgettable. We take care of the details so you can enjoy the celebration with your loved ones.",
            subTitle: 'Our Birthday & Private Party Services Include:',
            list: [
                {
                    head: "Event Planning & Coordination:",
                    details: "We handle the scheduling, budgeting, and logistics, making sure your event stays on track and stress-free."
                },
                {
                    head: "Theme & Decor Styling:",
                    details: "From elegant to fun, we bring your party theme to life with tailored decor that fits your style and vision."
                },
                {
                    head: "Entertainment & Catering:",
                    details: "We organize engaging entertainment, from DJs to games, and provide delicious catering options that suit your guests’ tastes."
                },
                {
                    head: "Venue & Vendor Selection:",
                    details: "Whether you need a venue or a vendor for catering, photography, or entertainment, we help you select the best options for your celebration."
                },
                {
                    head: "On-Site Management:",
                    details: "Our team will be on-site to ensure everything runs smoothly, from the moment guests arrive to the final farewell."
                },
            ]
    }

    },
    {
        id: 4,
        image: frame4,
        btnText: 'Custom Events',
        details: {
                title: 'Custom Event Planning',
                title2: "Tailored Events for Every Unique Occasion",
                description: "No two events are alike, and neither are the needs of our clients. At EventsbyOTH, we specialize in custom event planning, offering personalized solutions for every kind of gathering. Whether it's a charity gala, product launch, or an intimate private celebration, we create one-of-a-kind experiences tailored to your vision.",
                subTitle: ' Our Custom Event Services Include:',
                list: [
                    {
                        head:"Event Concept & Design:",
                        details:"We collaborate with you to develop a unique theme or concept that reflects your goals, values, and vision for the event."
                    },
                    {
                        head: "Venue & Vendor Selection:",
                        details: "Our team helps you choose the ideal venue and trustworthy vendors to suit your event’s size, style, and budget."
                    },
                    {
                        head: "Personalized Decor & Styling:",
                        details: "From bespoke decor to detailed styling, we bring your vision to life with design that’s as unique as your event."
                    },
                    {
                        head: "Entertainment & Catering:",
                        details: "We ensure your event is lively and well-fed, from selecting entertainment options to creating customized catering experiences."
                    },
                    {
                        head: "On-Site Management:",
                        details: " On the day of the event, we provide full on-site coordination to ensure every detail is executed perfectly."
                    }
                ]
        }
    },
]

export const rentalData = [
    {
        id: 1,
        image: rent1Img,
        title: "Crockeries",
        price: '20,303',
        btnText: 'rentals'
    },
    {
        id: 3,
        image: rent3Img,
        title: 'Sashes',
        price: '400,303',
        btnText: 'rentals'
    },
    {
        id: 2,
        image: rent2Img,
        title: "Magazine Photo booth",
        price: '20,039',
        btnText: 'rentals'
    },
   
]

const Service = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [card, setCard] = useState(null)
    const [openRentModal, setOpenRentModal] = useState()
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false)
    const [checkoutItem, setCheckoutItem] = useState(null)
    // const [openModal, setOpenModal] = useState(false);


    const fadeIn = useFadeIn(0.5);

    const handleModal = (card) => {
        setSelectedCard(card);
        setOpenModal(true);
    };
  
    const closeModal = () => {
        setSelectedCard(null);
        setOpenModal(false);
    };

    const handleRentalModal = (card) => {
        setCheckoutItem(card);
        // setOpenModal(true)
        setOpenCheckoutModal(true);
        console.log(card)
    };

    const closeCheckoutModal = () => {
        setCheckoutItem(null);
        setOpenCheckoutModal(false);
    };

    React.useEffect(() => {
        const fetchRental  = async() => {
            setLoading(true)
            try {
                const response = await axios.get('https://backend.eventsbyoth.com/api/v1/rentals')
                setItems(response.data.data)
                console.log("result...",response.data.data)
            } catch (error) {
                if(error){
                    console.log("error...",error)
                    toast.error("Error", error)
                }
            }finally{
                setLoading(false)
            }
        }
        fetchRental()
    },[])
    

  return (
    <div className='min-h-screen'>
       <section >
            <HeroComponent title={'Bringing Your Dream Events to Life'} image={heroImg}/>
              {/* scroll top */}
            <div className='absolute rounded-full w-10 h-10 inset-0 right-0 left-0 bg-white hidden'>
                <ScrollTo
                    to="about"
                    offset={0}
                    delay={0}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="absolute bottom-[ top-40 inset-0  w-auto inline-block -translate-x-1/2 cursor-pointer"
                >
                    <AiOutlineDown className=' p-3 rounded-full' />
                </ScrollTo>
            </div>
       </section>

       <motion.section  
            {...fadeIn} 
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30' id='about'>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto gap-10'>
                <div className='space-y-4 md:w-1/2'>
                    <p className=' sm:text-lg lg:text-2xl text-justify md:text-start leading-8 py-5 ld:text-start text-neutral'>
                        At EventsByOTH, we specialize in crafting unforgettable events, handling every detail so you can enjoy the moment. From weddings to corporate functions, our expert team ensures seamless planning and execution.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <div className='w-auto h-[60vh] rounded-lg'>
                        <Image src={aboutImg} alt='about' width={500} height={500} className='h-full w-full object-cover rounded-lg'/>
                    </div>
                </div>
            </div>
        </motion.section>

        <motion.section 
            {...fadeIn} 
            id='services' 
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30 '>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 py-5">Our Event Management Services  </h1>
            <div className='flex justify-center items-center'>
                <div className='grid  grid-cols-1 sm:grid-cols-2 w-full gap-8'>
                    {
                        data.map((item) => {
                            return (
                                <motion.div   onClick={() => handleModal(item)} whileHover={{ scale: 1.05 }}  transition={{ type: "keyframes", stiffness: 300 }}  key={item.id} className='h-80 rounded-lg relative overflow-hidden z-50 flex justify-center items-center'>
                                    <span className='overflow-hidden absolute -z-10 inset-0'>
                                        <MotionImage 
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.5 }}
                                            src={item.image} alt='image-'
                                            className='h-full w-full object-cover rounded-lg'
                                            width={500}
                                            height={500}
                                            />
                                    </span>
        
                                    <div>
                                        <button className='p-3 bg-white text-primary border-primary rounded '>{item.btnText}</button>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>

        {/* modal */}
        <ModalComponent isOpen={openModal} onClose={closeModal}>
            {selectedCard ? (
            <div className='flex flex-col lg:flex-row  gap-4 h-full md:m-5'>
                <div className='w-ful lg:w-1/2 md:h-[50vh h-full relative rounded-lg min-h-screen hidden overflow-hidden  lg:flex'>
                    {/* <span className='overflow-hidden absolute z-10 inset-0 p-2 rounded-lg h-full'> */}
                        <MotionImage 
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            src={selectedCard.image} alt='image-'
                            className='h-full w-full object-cover rounded-lg absolute z-10 inset-0'
                            width={500} height={500}
                        />
                    {/* </span> */}

                </div>
                <div className='w-full lg:w-1/2 text-neutral'>
                    <p className='text-[28px] font-bold py-2 '>{selectedCard?.details?.title}</p>
                    <p className=' font-bold py-2 text-lg'>{selectedCard?.details?.title2}</p>
                    <p className='text-neutral py-2 text-base text-justify'>{selectedCard?.details?.description}</p>
                    <p className='font-semibold py-2 text-lg'>{selectedCard.details.title}</p>
                    <ul className='list-disc px-5 text-neutral text-sm'>
                        {
                            selectedCard?.details.list?.map((item, index) => {
                                return <li key={index} className='text-base text-justify' >
                                    <strong>{item.head}</strong>
                                    <span>{item.details}</span>
                                </li>
                            })
                        }
                    </ul>
                    <div className='flex justify-end p-4'>
                        {/* <ButtonLinkOrange name={'Book a Call'} link={'#'}/> */}
                        <CalendlyPopup title="Book a Call"/>
                    </div>
                </div>
            </div>
                
            ):
            <p>No card selected</p>  
        }
        </ModalComponent>

        </motion.section>

        {/* rental */}
        <motion.section
            {...fadeIn} 
            id='rentals'className='px-5 md:px-10 lg:px-20 py-10 md:py-30'>
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">Rentals  </h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
                {
                    loading? <p>Loading...</p> :

                    !loading && !items.length ? <p>No data</p> :

                    items.slice(0, 3).map((item) => {
                        return (
                            <div key={item.id} className='h-[70vh] gap-4 rounded-lg overflow-hidden bg-white' onClick={() => handleRentalModal(item)}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }} 
                                    transition={{ type: "keyframes", stiffness: 300 }} 
                                    className='bg-white border h-2/3'>
                                    <Image src={item?.image_url} alt='image' width={500} height={500} className='h-full w-full object-cover rounded-lg'/>
                                </motion.div>
                                <div className='h-full px-3 w-full'>
                                    <h2 className='text-lg font-semibold py-2'>{item?.name}</h2>
                                    {/* <div className='py-3 rounded flex justify-center items-center text-center border border-primary w-full'>
                                        <Link href={item.btnText} className='text-primary rounded h-full w-full'>Rent Now</Link>
                                    </div> */}
                                    <div className='rounded flex justify-center items-center text-center border border-primary w-full' >
                                        <button className='p-3 bg-white text-primary border-primary rounded '>Rent Now</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center pt-10 font-semibold">
                <Link href ="/rentals" className="text-primary">View More</Link>
            </div>
        </motion.section>

        {/* next event */}
        <motion.section 
            {...fadeIn} 
            className='pt-10 md:pt-30 h-full'>
                <div className='flex flex-col md:flex-row w-full h-full justify-between'> 
                     
                    <div className='h-[70vh] w-full md:w-1/2 bg-primary/10 p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                        <p className='text-4xl font-semibold tracking-widest leading-snug'>Ready to Plan Your Next Event?</p>
                        <p className='text-neutral'>Let’s make it extraordinary. Connect with us today!</p>
                        <CalendlyPopup title="Book a Call"/>
                    </div>

                    <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center w-full md:w-1/2 h-[70vh] relative'>
                        <Image src={planImg} alt="ticket" width={500} height={500} className=" w-full h-full object-cover absolute inset-0"/>
                    </div>
                </div>
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

    </div>
  )
}

export default Service;