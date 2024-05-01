import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'What is Koolie?',
      des:'Koolie offers services that allows users to send packages, documents, or items to anyone within a city .'
    },
    {
      title:'How does Koolie work?',
      des:'Users can request a delivery partner through the Koolie Web app. They input the pickup and drop-off locations, along with details of the item to be delivered. A  delivery partner then picks up the item and delivers it to the specified location.'
    },
    {
      title:'What can I send using Koolie ?',
      des:'Koolie  can be used to send a wide range of items, including parcels, documents, gifts, groceries, and more. However, there are certain restrictions on items that can be delivered, such as perishable goods, illegal items, and hazardous materials.'
    },
    {
      title:'What all services are provided by the Koolie?',
      des:'Koolie delivers the package in one of the three ways as selected by the user - In bikes, In Minivans And In Trucks.'
    },
    {
      title:'How much does Koolie cost??',
      des:'The cost of a Koolie  delivery depends on factors such as the distance traveled, the size and weight of the item, and any additional services requested (such as priority delivery). The exact pricing is displayed in the app before confirming the delivery'
    },
    {
      title:"What should I do if there's an issue with my Koolie delivery?",
      des:'If you encounter any problems with your Koolie  delivery, such as a delay or damaged item, you can contact Koolie customer support through the app for assistance. They will help resolve the issue promptly.'
    },
  ]
  return (
    <div className="container mx-auto py-20">
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      Common questions
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
  )
}

export default MoreInfoModal