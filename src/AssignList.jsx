import React from 'react'
//import { FaXmark } from "react-icons/fi";

 function AssignList({assignedList,setAssignedList}) {

  function handleRemove(user) {
    setAssignedList((prevUser) => {
      return prevUser.filter(u => u.id !== user.id)
    })
  }


  console.log("assignList component render...")
  return (
     <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
      <h2 className="px-2 my-3 font-bold">Assigned list:</h2>
      <div className="flex flex-wrap gap-4 ">
        {assignedList?.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200">
            <span>{index + 1}.</span>
            <img
              className="w-6 h-6 "
              src={user.imgUrl}
              alt={`${user.name} image`}
            />

            <span>{user.name}</span>
            <span  onClick={() => handleRemove(user)} className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full">
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );

}
export default AssignList;