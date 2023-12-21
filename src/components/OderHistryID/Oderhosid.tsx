import React from 'react'
import "./oderid.css"
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'

const Oderhosid = () => {


    const people = [
        {
          name: 'Leslie Alexander',
          email: '2.32$',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Michael Foster',
          email: '2.32$',
          role: 'Co-Founder / CTO',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Dries Vincent',
          email: '2.32$',
          role: 'Business Relations',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
        {
          name: 'Lindsay Walton',
          email: '2.32$',
          role: 'Front-end Developer',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Courtney Henry',
          email: '2.32$',
          role: 'Designer',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Tom Cook',
          email: '2.32$',
          role: 'Director of Product',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
      ]



  return (
    <>
    
    <Navbar/>
    
    <div className="oderid-div">



        <div className="container flex justify-around ">

    

    <ul role="list" className="divide-y ml-15  w-6/12  border-lime-600 divide-lime-600">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-20 w-22 flex-none rounded-lg bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 mt-2 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
              <p className="mt-1 truncate text-md font-semibold leading-5 text-white">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            
              <div className="mt-1 flex items-center gap-x-1.5">

                <p className="text-md leading-5 text-white">Ouantity : <span className='text-lime-500 font-semibold mr-2'>1</span> </p>
              </div> 
            
          </div>
        </li>
      ))}
    </ul>


                {/* <div className="zuni border">
                    zunjansadasdsadsadasdadadsadsadasdasdasdasdasdasdsadasdasdasd
                </div> */}

    </div>
    

    </div>

    <Footer/>
    
    
    </>
  )
}

export default Oderhosid