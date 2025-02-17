import React from 'react'
import Navbar from '../Components/Navbar'
import { FiChevronDown } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import Cart from "../assets/Cart.svg"
import { LuCircle } from 'react-icons/lu';
import candle1 from "../assets/candle1.png"
import { Link } from 'react-router-dom';


const Payment = () => {
    return (

        <>
            <div>
                <Navbar />
            </div>

            <div className='flex lg:mt-[52px] mt-[89px]'>
                <div className='lg:w-[45%] w-full'>


                    <div className=''>

                        <div className='px-0 lg:hidden block md:px-16 py-[22px] bg-[#F2F2F2]'>
                            <div className='px-[18px] flex justify-between items-center'>
                                <div >
                                    <img src={Cart} alt="no-cart" />
                                    <div className='w-[12px] relative bottom-8 left-5 text-[8px] text-center text-white h-[12px] rounded-full bg-[#56b280]'>
                                        2
                                    </div>
                                </div>
                                <div className='text-[#56b280] items-center text-[20px] flex'>
                                    <div>
                                        See your order detials
                                    </div>
                                    <FiChevronDown className='h-[25px] w-[25px]' />
                                </div>
                                <div className='text-[#272727] text-[20px] '>
                                    Rs. 499
                                </div>
                            </div>
                        </div>
                        <div className='px-[18px] md:px-[40px] pt-[34px]'>
                            <div className='flex gap-2'>
                                <div className='flex items-center gap-1 text-[16px]'> <span className='text-[#56b280]'>Cart
                                </span>  <MdKeyboardArrowRight className='text-[#56b280]' /></div>
                                <div className='flex gap-1 items-center text-[#56b280] '>Details <MdKeyboardArrowRight /></div>
                                <div className='flex gap-1 items-center text-[#56b280]'>Shipping <MdKeyboardArrowRight /></div>
                                <div className='flex gap-1 items-center text-[#272727]'>Payment </div>
                            </div>
                        </div>
                        <div className='mx-[18px] md:mx-16 mt-[45px] rounded-lg border border-[rgba(86, 178, 0, 0.20)] py-[20px] px-[10px]'>
                            <div className='flex justify-between items-center'>
                                <div className='text-[#818181]'>
                                    Contact
                                </div>
                                <div className='text-[#272727]'>
                                    joe.spagnuolo@uxbly.com
                                </div>
                                <div className='text-[#56b280]'>
                                    Edit
                                </div>
                            </div>
                            <div className='h-[1px]   my-[20px] w-full bg-[#E5E5E5]'>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[#818181]'>
                                    Ship to
                                </div>
                                <div className='text-[#272727] max-w-[60%] text-[14px]'>
                                    Via Firenze 23, 92023, Campobello di  Licata AG, Italia
                                </div>
                                <div className='text-[#56b280]'>
                                    Edit
                                </div>
                            </div>
                            <div className='h-[1px]   my-[20px] w-full bg-[#E5E5E5]'>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[#818181]'>
                                    Method
                                </div>
                                <div className='text-[#272727] max-w-[60%] text-[14px]'>
                                    Standard Shipping - FREE
                                </div>
                                <div className='text-[#56b280]'>
                                    Edit
                                </div>
                            </div>
                        </div>
                        <div className='mx-[18px] md:mx-16 mt-[45px] '>
                            <div className=''>
                                <div className='text-[#272727] text-[20px] leading-[25px] font-[500] mb-[25px]'>
                                    Payment method
                                </div>
                                <div className='mt-[22px]  rounded-lg flex items-center justify-between border-[#898989] border px-[20px] py-[10px]'>
                                    <input type="text" placeholder='Postal Code' />
                                    <BsFillLockFill className='text-[#616161]' />
                                </div>
                                <div className='mt-[22px]  rounded-lg f border-[#898989] border px-[20px] py-[10px]'>
                                    <input type="text" placeholder='Holder Name' />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='mt-[22px]  rounded-lg  max-w-[45%]   border-[#898989] border px-[10px] py-[6px]'>
                                        <input className='max-w-full placeholder:text-[14px]' type="text" placeholder='Expiration (MM/YY)' />

                                    </div>
                                    <div className='mt-[22px]  rounded-lg  max-w-[40%]    border-[#898989] border px-[10px] py-[6px]'>
                                        <input className=' max-w-full placeholder:text-[14px]' type="text" placeholder='CVV' />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-[18px] md:mx-16 mt-[45px] '>
                            <div>
                                <div className='text-[#272727] text-[20px] leading-[25px] font-[500] mb-[25px]'>
                                    Tax Informations
                                </div>
                                <div className='mt-[22px]  rounded-lg flex items-center justify-between border-[#898989] border px-[20px] py-[10px]'>
                                    <input type="text" placeholder='VAT number  (optional)' />
                                </div>
                                <div className='mt-[22px]  rounded-lg f border-[#898989] border px-[20px] py-[10px]'>
                                    <input type="text" placeholder='PEC (optional)' />
                                </div>
                            </div>
                        </div>

                        <div className='text-[#272727] text-[20px] leading-[25px] font-[500] mx-[18px] md:mx-16  mt-[45px] mb-[25px]'>
                            Billing Address
                        </div>
                        <div className='mx-[18px] md:mx-16  mt-[20px] rounded-lg border border-[rgba(86, 178, 0, 0.20)] py-[20px] px-[10px]'>

                            <div className='text-[16px] gap-[25px] flex items-center'>
                                <LuCircle color='#DBDBDB' width="16px" height="16px" fill='#87D6AC' />  Same as the shipping address
                            </div>
                            <div className='h-[1px]   my-[20px] w-full bg-[#E5E5E5]'>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='text-[16px] gap-[25px] flex items-center'>
                                    <LuCircle color='#DBDBDB' width="16px" height="16px" />  Use a different address for billing
                                </div>
                            </div>
                        </div>
                        <div className='pt-[28px] md:px-16 px-[18px]' > <Link to="/success"> 
                            <button className='text-white text-center text-[20px] bg-[#56b280] rounded-lg py-[8px] w-full'>
                                Pay now
                            </button></Link>
                        </div>
                        <div className='pt-[28px] mx-0 md:mx-16 pb-[12px] px-[18px]' >
                            <button className='underline  text-center text-[20px] text-[#56b280]  py-[8px] w-full'>
                                <Link to="/shipping">  Back to shipping</Link>
                            </button>
                        </div>
                    </div>

                </div>


                <div className='lg:block hidden h-auto bg-[#F2F2F2] xl:px-[80px] pt-[80px] w-[65%] '>

                    <div className='flex justify-center xl:gap-16 gap-10'>
                        <img className='bg-[#F7F8FA] h-[120px] w-[180px]  ' src={candle1} alt="" />

                        <div>
                            <div className='text-[#272727] text-[20px] leading-[30px]'>
                                Spiced Mint Candleaf®
                            </div>
                            <div className='text-[#56b280] leading-[56px] text-[19px]'>
                                Rs.499
                            </div>
                        </div>
                    </div>


                    <div className='h-[2px]   xl:mt-[90px] mt-[50px] w-[80%] mx-auto bg-gray-300'>
                    </div>

                    <div className='flex pt-[20px]  px-[80px] items-center justify-between'>
                        <div className='text-[#616161] text-[16px] leading-[25px]'>
                            Subtotal
                        </div>

                        <div className='text-[#272727] text-[16px] leading-[25px] '>
                            Rs. 499
                        </div>
                    </div>
                    <div className='flex pt-[20px]  px-[80px] items-center justify-between'>
                        <div className='text-[#616161] text-[16px] leading-[25px]'>
                            Shipping
                        </div>

                        <div className='text-[#272727] text-[16px] leading-[25px] '>
                            Free Shipping
                        </div>
                    </div>

                    <div className='h-[1.8px]   mt-[30px] w-[80%] mx-auto bg-gray-300'>
                    </div>
                    <div className='flex pt-[20px]  px-[80px] items-center justify-between'>
                        <div className='text-[#56b280] text-[16px] leading-[25px]'>
                            Paid
                        </div>

                        <div className='text-[#56b280] text-[16px] leading-[25px] '>
                            Rs. 499
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Payment