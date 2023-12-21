import React from 'react'
import "./oderhistry.css"
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import hsecproduct2 from "../Home/hProdouces4.png"
import hpsecroduct3 from "../Home/hProdouces5.png"
import { Link } from 'react-router-dom'

const OderHistry = () => {
    return (
        <>
            <Navbar />


            <div className="oderss">
                <div className="container">

                    <div className="row ml-4">
                        <div className="col-lg-6">
                            <div className=" oderHis-div w-11/12 mt-[5rem] rounded-md bg-black pt-3 pb-3">
                                <div className="flex lg:pl-7">

                                    <img src={hsecproduct2} className='img ml-2 mt-2 rounded w-24 h-24 border ' alt="" />
                                    <div className="data ">

                                        <h1 className='mt-3 ml-3 text-xs text-white'>Oder ID:10000025</h1>
                                        <p className='mt-1 ml-3 text-s text-gray-400'>5 items</p>
                                        <h1 className='mt-2 ml-3 text-xs text-lime-500'>Delivered</h1>
                                    </div>
                                </div>
                                <Link to={"/orders-history-id"}>
                                <button
                                    className='oderHis-addcart-btn p-2 '
                                    >Details</button>
                                    </Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-6 mt-5">
                            <div className=" oderHis-div w-11/12 rounded">
                                <div className="flex">

                                    <img src={hpsecroduct3} className='img ml-2 mt-2 rounded w-24 h-24 border ' alt="" />
                                    <div className="data ">

                                        <h1 className='mt-3 ml-3 text-xs text-white'>Oder ID:10000025</h1>
                                        <p className='mt-1 ml-3 text-s text-gray-400'>5 items</p>
                                        <h1 className='mt-2 ml-3 text-xs text-lime-500'>Delivered</h1>
                                    </div>
                                </div>
                                <button
                                    className='oderHis-addcart-btn p-2 '
                                >Details</button>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>


            <Footer />



        </>
    )
}

export default OderHistry
