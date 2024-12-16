import React from 'react'
 import { FiCheck, FiChevronDown} from "react-icons/fi";

 function DropDown({usersArray,isDropdownOpen,setIsDropdownOpen,assignedList,setAssignedList}) {
  
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
    
  };

  function handleAssign(user) {
    setAssignedList((prevList) => {
      // Check if the user already exists in the list
      if (prevList.includes(user)) {// check object reference
        // If user exists, remove it from the list (because both are pointing to same memory location)
        const updatedList = prevList.filter((item) => item !== user);
        return updatedList;
      } else {
        // If user doesn't exist, add it to the list
        return [...prevList, user];
      }
    });
  }

  console.log("dropdown component render....")

  return (
    <div>
      <label className='mt-4'>Assign user(s) to as task;</label>
      <button onClick={toggleDropdown} className="px-4 py-2 w-full flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer relative">
        <span className='block'> 
          <FiChevronDown color="#635FC7" size={24} />
        </span>
        {isDropdownOpen && 
          <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
                  {/* Close button */}
      <div
        className="absolute top-0 right-0 flex items-center justify-center -translate-y-full gap-2 bg-[#C0392B] px-2 py-1 rounded-t"
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(false);
          console.log(isDropdownOpen);
        }}
      >
        <span>Close</span>
        <span>
          X
        </span>
      </div>

            <ul className="flex flex-col p-2">
              {usersArray.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `}
                  onClick={() => handleAssign(user)}
                  >
                    {assignedList.includes(user) && <FiCheck />}
                  <img
                    className="w-6 h-6 "
                    src={user.imgUrl}
                    alt={`${user.name} image`}
                  />
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        }

      </button>
      
    </div>
  )
}

export default DropDown;
