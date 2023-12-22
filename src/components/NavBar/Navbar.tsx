import React, { useEffect, useState } from 'react'
import Singup from '../../pages/SignUp/SignUp'
import './navbar.css'
import { useSignIn } from '@/network/auth/auth'
import { useForgetPassword, useVerifyToken, useResetPassword } from '@/network/verify/verify'
import { useAuth } from '@/hooks/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import { restaurantData } from '@/mocks/common'
import Restpassword from '../Rest Password/Restpassword'
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import navlogo from "./nav-logo.png"
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";
// import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = ({ localSomething }: any) => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open, setOpen] =useState(false);
      const [isLogin, setIsLogin] = useState(true);
      const [showrestpassword, setShowrestpassword] = useState(false);
      const [local, setLocalSomething] = useState<any>(localSomething || localStorage.getItem('cart_items'));
      const history = useHistory();
      const { isAuthenticated, login, logout } = useAuth();
      const [token, setToken] = useState('');
      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        email_or_phone: '',
        password: '',
      });

      const changePath = () => {
        setIsLogin(!isLogin);
      };

      const signInMutation = useSignIn();

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        console.log({ name, value })

        // Remove spaces, '-', and '()' for the input with name 'email_or_phone'
        const sanitizedValue = name === 'email_or_phone' ? value.replace(/[\s()-]/g, '') : value;

        setFormData((prevData: any) => ({
          ...prevData,
          [name]: sanitizedValue,
        }));
      };

      const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
          setLoading(true);

          const response = await signInMutation.mutateAsync({
            ...formData,
            restaurant_id: restaurantData.restaurant_id,
          });

          if (response.status === 200) {
            toast.success('Logged In Successfully.');
            login(response);
            window.location.reload()
          } else {
            setLoading(false);
          }
        } catch (error: any) {
          setLoading(false);
          const { response } = error;
          const { data } = response;
          const { errors } = data;

          toast.error(`${errors[0]?.message}`);
        }
      };

      const openrestpass = () => {
        setShowrestpassword(!showrestpassword);
      };

      useEffect(() => {
        const storedToken: any = localStorage.getItem('access_token');
        setToken(storedToken);
      }, [token, logout, login]);

      const logOut = () => {
        logout();
      };

      const goToCheckout = () => {
        if (localSomething && JSON.parse(localSomething)?.cart?.length) {
          history.push('/cart');
        }
      };





      const [passwordShown, setPasswordShown] = useState(false);
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

      const { register, handleSubmit } = useForm();
      const onSubmitt = (e: any) => {
        console.log(e);
      };


    return (
      <div className='bg-black dark:bg-gray-900 fixed w-full z-[1000] lg-h-[23%] top-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='flex items-center bg-black justify-between py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl  cursor-pointer text-white flex items-center gap-1'>
          <Link to="/home" className="flex items-center">
            <img src={navlogo} className="h-16 text-white" alt="Flowbite Logo" />
          </Link>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu icon */}
        <div className='flex items-center '> {/* Updated this line */}
          <div className='flex mr-1'>
            <div>
              <FaShoppingCart className='text-white text-4xl cursor-pointer' onClick={goToCheckout} />
            </div>
            <span className="bg-red-500 text-white text-xs rounded-full h-[19px] w-[10px] flex justify-center items-center px-2">{localSomething && JSON.parse(localSomething)?.cart?.length || 0}</span>
          </div>
          <FaHeart className='text-red-500 text-4xl cursor-pointer mr-1' onClick={() => history.push('/wishlist')} />
          <CgProfile
            id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
            className="w-10 h-10 rounded-full cursor-pointer text-white"
          />
        </div>
        <div onClick={() => setOpen(!open)} className=' cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon color='white' /> : <Bars3BottomRightIcon color='white' />}
        </div>
      </div>
    </div>
    );
};

export default Navbar;
