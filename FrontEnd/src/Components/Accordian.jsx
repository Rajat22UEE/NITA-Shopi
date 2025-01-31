import React, { useState } from "react";

const Accordian = ({ data }) => {
  const [currId, setCurrId] = useState(null);
  const [multiselect, setMultiselect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleMultiple = (id) => {
    const updatedMultiple = [...multiple];
    const index = updatedMultiple.indexOf(id);
    if (index === -1) {
      updatedMultiple.push(id);
    } else {
      updatedMultiple.splice(index, 1);
    }
    setMultiple(updatedMultiple);
  };

  function toggler() {
    if (!multiselect) {
      setMultiselect(true);
      setCurrId(null);
    } else {
      setMultiselect(false);
      setMultiple([]);
    }
  }

  const giveAnswer = (id) => {
    if (currId === id) {
      setCurrId(null);
    } else {
      setCurrId(id);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto my-10 space-y-4">
      {data.map((item) => (
        <div key={item.id} className="w-full">
          <h2
            className="flex justify-between items-center border border-gray-400 bg-green-500 text-white font-semibold rounded-lg px-4 py-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-700"
            onClick={multiselect ? () => handleMultiple(item.id) : () => giveAnswer(item.id)}
          >
            {item.question}
          </h2>
          {(currId === item.id || multiple.includes(item.id)) && (
            <div className="border border-gray-400 bg-gray-100 px-4 py-3 rounded-b-lg text-gray-800 shadow-md">
              <p><span className="font-bold">📞 Phone Number:</span> {item.PhoneNumber}</p>
              <p><span className="font-bold">💰 Price:</span> {item.Price}</p>
              <p><span className="font-bold">👤 Owner Name:</span> {item.OwnerName}</p>
            </div>
          )}
        </div>
      ))}

      {/* Multi-Select Toggle Button */}
      {/* <button
        className="mt-5 w-48 h-10 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out"
        onClick={toggler}
      >
        {multiselect ? "Disable Multi-Select" : "Enable Multi-Select"}
      </button> */}
    </div>
  );
};

export default Accordian;
