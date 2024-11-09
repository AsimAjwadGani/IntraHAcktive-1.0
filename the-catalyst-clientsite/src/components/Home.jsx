import React from 'react';
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleDetails = (name) => {
        navigate(`${name}/details`);
    }
    return (
        <div className='bg-blue-900'>
            <Navbar></Navbar>
            <div className='flex justify-center py-4'>

                <div className="carousel w-3/4 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/464416057_1362815631583948_2418214731988230818_n.png?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE-YAXwbdqrgiwOW1wDkCAj5RxWGKYMqaTlHFYYpgyppJ7gOFjwzEXmMIYsfChZBUxGwmADC9Ax0Hu4swMznDix&_nc_ohc=Wes2XFEFZ0IQ7kNvgHfKWvN&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=Aa9Bs4-_8ryAVU2mmc6KfYB&oh=00_AYDabYB11Y2Q7Os_XE4nxWezHic4tDKEgzc9t70evRt5JA&oe=67341C60"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/450380889_905647024938109_7514051039533894043_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeH6mr9edW867ZP8ihBk1uo4hNDIvE08T-OE0Mi8TTxP41E8TITQXZLfGqbomleVTQhfXfDifLyoSxoaTADTCJeW&_nc_ohc=TICFAIzLd5YQ7kNvgHdfGG0&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AjsJ9i6JDhb7-ImcV5B6UIT&oh=00_AYC-R-vT6X_1QDi4ypi9UQfSF2aPIIJJPTcYqWa5FVzZRA&oe=67342974"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/464872394_985483080287836_1072737089982252801_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFgjWSG1hu570MOOqp41LNiMGAhwmQx6UAwYCHCZDHpQDEASc-xT0B1qPVlpPqgyrTom5Y2mMZTjTrf7NSA2ZI7&_nc_ohc=25tjnTJARDUQ7kNvgF2X-dR&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AVn4hzHqMZTYkd7TCpHq4CC&oh=00_AYB2XbMmfFCh7Um7x2OTPOm2EJS1vK1YWc6FRhmxhkdemw&oe=67342100"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/464321026_940066791482726_7483776195407047644_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEIWOlNvPdb0aOdkSkANk0-A5UDy3NN0UMDlQPLc03RQ7JJ7ae2HKK17gma0n_Jwl9h3YiA7gc9Djy_vN3btJN_&_nc_ohc=YFzBScQbOxoQ7kNvgGGlPN3&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AtGmK3GaHzcMADh8JJkxCbE&oh=00_AYD0lGSwtmeos4hFYebuoYgcYuXV0U1_oH1nhtMkbPqGKQ&oe=67342EFD"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 px-36'>

                <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/454714445_1301795811019264_6199518978663177987_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHtir2K94nIxexEG44vAz1IFjbhbOX9o6EWNuFs5f2joaFrIiJy9EirVyyZpXxdeCikIBqhDafmwZWoSqEIDWbf&_nc_ohc=7v_whLgV7E4Q7kNvgG_uGIW&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AFqvzpGrcZJQtg9hI-BN70A&oh=00_AYBy7dfX1jA1Twx3FfqMtH4UkawKAzMbqbMfdYuXGzx0dQ&oe=67342EDA"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">BUCC</h2>
                    <p>A community for tech enthusiasts from BRAC University, where we explore the latest advancements in computer science and technology.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleDetails("bucc")}>See more</button>
                    </div>
                </div>
                </div>
                
                <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/454583912_924040296432115_2330241839340836342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEJ0za0fW4NwDibbvnRaafakzlE6JdrxdyTOUTol2vF3IDXIwgfL7P4aCDMrXIQKrVtqUKUKMnHf-KuYsyhyUHv&_nc_ohc=7KdIpjOSRB4Q7kNvgGKgd2P&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AYDw0X8Ela2JEiJYaHERHRN&oh=00_AYDWEpTKIofvLV9jMiEWcaOzehs6SwPXa2XWS6ySp5zuHw&oe=6734436E"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">ROBU</h2>
                    <p>“Achieve your imagination through your robot"—the vision of the high-functioning sociopaths of ROBU!</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">See more</button>
                    </div>
                </div>
                </div>

                <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/463930640_936371685185570_7644286606350864490_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGDjeNK2SWQvXPPD_3XC3hYt7fWzSIrv7y3t9bNIiu_vCH27UdWErY8bYRrGAg3ZmkO0wNd4wFIC2NQJR5xN63R&_nc_ohc=fbCZeayeVNoQ7kNvgF89j8I&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AmcGgpszoNuoM3kJ6fb93Wn&oh=00_AYDVFjjUaVruin0OHLTkndnmhV9BzORaYvwFbRrPt0vSmg&oe=673433EB"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">BIZ BEE</h2>
                    <p>𝐋𝐞𝐚𝐝 | 𝐄𝐦𝐩𝐨𝐰𝐞𝐫 | 𝐑𝐞𝐝𝐞𝐟𝐢𝐧𝐞
One of the prestigious clubs in Bangladesh
#20YearsGlory</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">See more</button>
                    </div>
                </div>
                </div>


                <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/453402136_898332132334496_2870795920684496285_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFXQbRSTgTuPiWGjT1h2fsfLp5v_DwWW4sunm_8PBZbi-BKNlznsBI0TfL1HnOsK8MM6VatdHg0QRPlMX4mp03Z&_nc_ohc=AHB1UOyrXpEQ7kNvgGW39Ox&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=A7v18sltMZjjwQOcKl38k7E&oh=00_AYAO19TgLQUIHIypXNHu9pRQeHEMwtg0hy0TWFo7e3GI3w&oe=67341982"
                    alt="BUCUC" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">BUCUC</h2>
                    <p>The BRAC University Cultural Club (BUCuC) celebrates cultural diversity and artistic expression on campus. Through events like music, dance, and drama, BUCuC provides students a platform to showcase their talents and connect with others.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">See more</button>
                    </div>
                </div>
                </div>


                <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/453414524_928669072623513_2336581693825513075_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGLkqxNev9q7_7udSCQsLngbcFQXm8nLWttwVBebyctaxotjZWtH67jNRvsk6P761M7CLlaikyzc_KQRRWXGUyz&_nc_ohc=57qXJVw7NnoQ7kNvgGJVEsd&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AotGVYi2T7V6mbd6UJIPqHB&oh=00_AYBuyYm4Cd-CPUTBcX6g2xxBHzAqqAemkqQwtIJ_JlTxSg&oe=673440A6"
                    alt="BUDTF" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">BUDTF</h2>
                    <p>মঞ্চ নাটক, নাচ, গান, মুকাভিনয়, Short Film, Digital Drama, Musical Drama........ এক কথায়... "সমগ্র</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">See more</button>
                    </div>
                </div>
                </div>


                <div className="card card-compact bg-base-100 w-80 shadow-xl">
                <figure>
                    <img
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/326721120_1364017864375799_7178454753425836422_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHmFUXNBqKrbLJBoCvMRCWpMiiMpeJ337QyKIyl4nfftBM6LpEbTCP8IHzlJFx8KVYN-MEmn_kWwvxCFXAPo12K&_nc_ohc=2t9VjfB1N0UQ7kNvgH3cgHt&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=ASHgNQqOMGKniIOgLuX-E3W&oh=00_AYD2k1psZzJIRuCJoifbm6pARCqPVDj4MztUdOcFGMXYYQ&oe=67343333"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">BUAC</h2>
                    <p>WINNER_OF_ALL_BARRIERS!</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>

            <div className='pt-12'>

<div className='flex justify-around py-9'>
            <div className='rounded-lg  w-80 ml-10'>
                <div className='bg-blue-800 p-0 h-11 text-center items-center rounded-tr-badge '>
                    <h2 className='text-3xl text-blue-50 '>CLUB NEWS</h2>
                </div>
                    <div className='bg-blue-300 w-80 p-5  '>
                        <div className='bg-blue-400 p-2 my-2'>
                        <p>Title: Lorem ipsum dolor sit amet.</p>
                        <h1>Date: 13.01.2024</h1>
                        </div>
                        <div className='bg-blue-400 p-2 my-2'>
                        <p>Title: Lorem ipsum dolor sit amet.</p>
                        <h1>Date: 13.01.2024</h1>
                        </div>
                        <div className='bg-blue-400 p-2 my-2'>
                        <p>Title: Lorem ipsum dolor sit amet.</p>
                        <h1>Date: 13.01.2024</h1>
                        </div>
                        <div className='bg-blue-400 p-2 my-2'>
                        <p>Title: Lorem ipsum dolor sit amet.</p>
                        <h1>Date: 13.01.2024</h1>
                        </div>
                        <div className='bg-blue-400 p-2 my-2'>
                    <p>Title: Lorem ipsum dolor sit amet.</p>
                    <h1>Date: 13.01.2024</h1>
                        </div>
                    </div>
            </div>
            <div className='w-[800px]'>

                <div className=''> 
                    <div className='bg-blue-800 p-0 h-11 text-center items-center  '>
                        <h2 className='text-3xl text-blue-50 '>Event Calender</h2>
                    </div>
                      
                    <div className='grid grid-cols-2'>

                        
        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>Dates</h1>
        </div>
        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>Events</h1>
        </div>
        


                    </div>
                    <div className='grid grid-cols-2'>


        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>13/09/2024</h1>
        </div>
        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>BUCC hackathon final day</h1>
        </div>
        


                    </div>
                    <div className='grid grid-cols-2'>


        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>14/09/2024</h1>
        </div>
        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>ROBU freshers day</h1>
        </div>
        


                    </div>
                    <div className='grid grid-cols-2'>


        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>17/09/2024</h1>
        </div>
        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>BUCUC Flashmob</h1>
        </div>
        


                    </div>
                    <div className='grid grid-cols-2'>


        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>19/09/2024</h1>
        </div>
        <div className='bg-blue-400 p-2 my-2 pl-10'>
                
                <h1>BUCUC presents CP competiton</h1>
        </div>
        


                    </div>
                </div>

            </div>
</div>



            <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current">
                <path
                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                ACME Industries Ltd.
                <br />
                Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <a>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                </a>
                <a>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                </a>
                <a>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </a>
                </div>
            </nav>
            </footer>
            </div>
        </div>
    );
};

export default Home;