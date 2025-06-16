import './App.css'
import Card from '@/component/card'
import ImgCard from '@/component/imgCard'
import Products from '@/component/product'
import img from '#/Logo.png'
import im from '#/inm.png'
import in1 from '#/inn1.png'


import img2 from '#/img1 (1).png'
import img3 from '#/img1 (2).png'
import img4 from '#/img1 (3).png'
import img5 from '#/img1 (4).png'
import img6 from '#/img1 (5).png'
import img7 from '#/img1 (6).png'
import img8 from '#/img (6).png'
import img9 from '#/img (7).png'
import img10 from '#/img (8).png'
import img11 from '#/img (9).png'
import img12 from '#/img (10).png'
import img13 from '#/img (11).png'
import img14 from '#/img (12).png'
import img15 from '#/img (13).png'
import img16 from '#/icon (11).png'
import img17 from '#/icon (12).png'
import img18 from '#/icon (13).png'
import img19 from '#/img1 (7).png'
import img20 from '#/img1 (8).png'
import img21 from '#/img1 (9).png'
import img22 from '#/img1 (10).png'
import img23 from '#/img1 (11).png'
import img24 from '#/img1 (12).png'

function App() {
  

  return (
     <div>
      <header>
        <Card />
      </header>
      <div className='All mx-[10px] lg:mx-0'>
        <div className='lg:block hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 next ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div className='mt-[50px]'>
          <p>Beautiful & Elegant</p>
          <h1 className='font-bold text-[70px]'>Premium Bedroom</h1>
          <p>Discount 50% On Products & Free Shipping.</p>
          <button className='border-hidden w-[160px] rounded-4xl p-[5px] my-[20px] bg-[white] text-[black] '>Shop Now</button>
          <div className='lg:flex hidden justify-center gap-2 mt-[180px]'>
            <div className='back bg'></div>
            <div className='back '></div>
            <div className='back bg'></div>
          </div>

        </div>
        <div className='lg:block hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 next ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </div>
      </div>
      <div>
        <div className='text-center my-[25px]'>
          <h1 className='text-[40px] font-bold'>Top Categories</h1>
          <p>Our products are designed for everyone, environmentally friendly.</p>
        </div>
        <div className='lg:flex grid grid-cols-2 mx-[20px] gap-2 justify-around'>
          <ImgCard ing={img3} name='Living Room' />
          <ImgCard ing={img4} name='special bedroom' />
          <ImgCard ing={img5} name='Dining & Kitchen' />
          <ImgCard ing={img6} name='Home Accessories' />
          <ImgCard ing={img7} name='Outdoor' />
          <ImgCard ing={img2} name='Lighting & Decor' />
        </div>
      </div>
      <div className='text-center my-[35px]'>
        <h1 className='text-[40px] font-bold'>Top Trending</h1>
        <p>Our products are designed for everyone, environmentally friendly.</p>
      </div>
      <div className='Product lg:grid-cols-4 grid grid-cols-2'>
        <Products img={img8} name="Form Chair Brass Base" sum="$569.00" />
        <Products img={img9} name="Vase Echasse Large" sum="$569.00" />
        <Products img={img10} name="Form Chair Brass Base" sum="$569.00" />
        <Products img={img11} name="Bottle Grinder Of Pepper" sum="$569.00" />
        <Products img={img12} name="Form Chair Brass Base" sum="$569.00" />
        <Products img={img13} name="Vase Echasse Large" sum="$569.00" />
        <Products img={img14} name="Form Chair Brass Base" sum="$569.00" />
        <Products img={img15} name="Bottle Grinder Of Pepper" sum="$569.00" />
      </div>
      <div className=' lg:mx-[42%] mx-[20%] my-[20px]'>
        <button className='w-[200px] p-[10px] rounded-3xl border-2 font-bold'>Load More</button>
      </div>
      <div className='All1'>
        <div className='w-[500px] text-center bg-white p-[40px] rounded-3xl'>
          <p>LIMITED EDITION</p>
          <h1 className='font-bold text-[35px]'>Unique Style</h1>
          <p className='my-[15px]'>The watch is carefully designed with quality materials, such as the domed sapphire crystal, and the meticulous level of detail - from the dial to the delicate gold hour markers.</p>
          <button className='w-[160px] p-[7px] bg-black text-white rounded-3xl font-bold'>Discover Now</button>
        </div>
      </div>
      <div className='lg:flex mx-[5%] justify-around my-[55px]'>
        <div className='info'>
          <button>
          <img src={img16} alt="" />
          </button>
          <p className='font-bold text-[25px]'>Free Shipping</p>
          <p>Get complimentary ground shipping on every order.
            Don't love it? Send it back, on us.</p>
        </div>
        <div className='info'>
          <button>
          <img src={img17} alt="" />
          </button>
          <p className='font-bold text-[25px]'>Free Returns</p>
          <p>Get complimentary ground shipping on every order.
            Don't love it? Send it back, on us.</p>
        </div>
        <div className='info'>
          <button>
          <img src={img18} alt="" />
          </button>
          <p className='font-bold text-[25px]'>Support Online</p>
          <p>Get complimentary ground shipping on every order.
            Don't love it? Send it back, on us.</p>
        </div>
      </div>
      <hr className='mx-[70px]'/>
      <div className='text-center'>
        <h1 className='font-bold text-[40px]'>Follow Us</h1>
        <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>
        <div className='imm lg:flex grid grid-cols-2 gap-[20px] mx-[20px] justify-around my-[50px]'>
          <img src={img19} alt="" />
          <img src={img20} alt="" />
          <img src={img21} alt="" />
          <img src={img22} alt="" />
          <img src={img23} alt="" />
          <img src={img24} alt="" />
        </div>
      </div>
      <div className='bg-[#F5F5F5]'>
      <header className=' lg:flex grid grid-cols-2 gap-[30px] mx-[20px] justify-around py-[50px]'>
        <div>
          <img src={img} alt="" /> <br />
          <p>268 St, South New York/NY 98944, United States</p> <br />
          <p>+222-1800-2628</p><br />
          <p className='lg:block hidden'>blueskytechcompany@gmail.com</p> <br />
          <img src={im} alt="" />
        </div>
        <div>
          <h1 className='font-bold'>Customer Service</h1> <br />
          <p>Privacy Policy</p> <br />
          <p className='font-black'>    Refund Policy</p> <br />
          <p>Shipping & Return</p> <br />
          <p>Term & Conditions</p> <br />
          <p>Advanced Search</p> <br />
          <p>Store Locations</p> <br />
        </div>
        <div className='lg:block hidden'>
          <h1 className='font-bold'>Customer Service</h1> <br />
          <p>Privacy Policy</p> <br />
          <p className='font-black'>    Refund Policy</p> <br />
          <p>Shipping & Return</p> <br />
          <p>Term & Conditions</p> <br />
          <p>Advanced Search</p> <br />
          <p>Store Locations</p> <br />
        </div>
        <div>
          <h1 className='font-bold'>Sign Up to Newsletter</h1> <br />
          <p>Enter your email address to get $10 off your first order and free </p> <br />
          <p>shipping. Updates information on Sales and Offers.</p> <br />
          <div className='flex gap-[20px]'>
          <input type="text" placeholder='Enter your email...' className='w-[250px] p-[10px] rounded-3xl bg-white '/>
          <button className='w-[150px] p-[10px] rounded-3xl bg-black text-white '>Subscribe</button>
          </div>
        </div>
      </header>
      <hr className='mx-[50px] mb-[30px]'/>
      <div className='lg:flex  grid grid-cols-1 gap-2 mx-[40px] justify-around pb-[20px]'>
        <div className='flex gap-[20px]'>
        <select >
          <option value="">English</option>
        </select>
        <select >
          <option value="">United States (USD $)</option>
        </select>
        </div>
        <p>© 2022 Umino Store. All Rights Reserved.</p>
        <div>
          <img src={in1} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
