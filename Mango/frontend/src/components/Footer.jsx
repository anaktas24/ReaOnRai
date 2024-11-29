import { assets } from '../assets/assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-white bg-slate-400 opacity-80 '>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className="w-full mdLw-2/3 text-white">TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-white">
                    <li>Phone Number</li>
                    <li>Company Email</li>
                </ul>
            </div>

        </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2024@ Migrating Mango - All rights reserved</p>
            </div>
    </div>
  )
}

export default Footer