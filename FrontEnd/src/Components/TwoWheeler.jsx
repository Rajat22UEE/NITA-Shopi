import React from 'react';
import Accordian from './Accordian';

const TwoWheeler = () => {
  const twowheeler = [
    {
      id: 1,
      question: "Two Wheeler No 1: Pulsar",
      PhoneNumber: "9345678908",
      Price:"300/day",
      OwnerName:"Samprai Mog"
    },
    {
      id: 2,
      question: "Two Wheeler No 1: Pulsar",
      PhoneNumber: "9345678908",
      Price:"300/day",
      OwnerName:"Samprai Mog"
    },
    {
      id: 3,
      question: "Two Wheeler No 1: Pulsar",
      PhoneNumber: "9345678908",
      Price:"300/day",
      OwnerName:"Samprai Mog"
    },
    

  ];
  const threewheeler = [
    {
      id: 1,
      question: "Three Wheeler No 1",
      PhoneNumber: "9345678908",
      Price:"300/day",
      OwnerName:"Samprai Mog"
    },
    {
      id: 2,
      question: "Two Wheeler No 2",
      PhoneNumber: "9345678908",
      Price:"300/day",
      OwnerName:"Samprai Mog"
    },
    {
      id: 3,
      question: "Two Wheeler No 1: Pulsar",
      PhoneNumber: "9345678908",
      Price:"300/day",
      OwnerName:"Samprai Mog"
    },
    

  ];
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-sky-200 to-sky-100">
   
      <div className=" w-full max-w-lg"> 
        <Accordian data={twowheeler} />
      </div>



    </div>
  );
};

export default TwoWheeler;
