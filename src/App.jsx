// import { ChevronDown } from "lucide-react";

// import { FiCheck, FiChevronDown } from "react-icons/fi";
import React,{useState,useRef,useEffect, useCallback,useMemo} from 'react';
import DropDown from "./DropDown";
import AssignList from './AssignList';
import useClickOutside from './useClickOutside';

const usersArray = [
  {
    name: "Miguel",
    imgUrl: "/assets/user-1.svg",
    id: "M1",
  },
  {
    name: "Jane",
    imgUrl: "/assets/user-2.svg",
    id: "J2",
  },
  {
    name: "Paul",
    imgUrl: "/assets/user-3.svg",
    id: "P3",
  },
  {
    name: "Abbey",
    imgUrl: "/assets/user-4.svg",
    id: "A4",
  },
  {
    name: "Chad",
    imgUrl: "/assets/user-5.svg",
    id: "C5",
  },
  {
    name: "Fiona",
    imgUrl: "/assets/user-6.svg",
    id: "F6",
  },
  {
    name: "Andreas",
    imgUrl: "/assets/user-7.svg",
    id: "A7",
  },
  {
    name: "Jane",
    imgUrl: "/assets/user-8.svg",
    id: "J8",
  },
];

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [assignedList, setAssignedList] = useState([]);
  const dropdownContainerRef = useRef(null);
  const [count,setCount]=useState(0)


  useClickOutside(dropdownContainerRef, () => {
    setIsDropdownOpen(false);
  });

  console.log(assignedList)
  return (
    <div className="bg-[#2b2c37] h-[100dvh] text-white flex  p-20 gap-4 items-center flex-col">
     {/* // click outside ref={dropdownContainerRef} from this div */}
      <div className=" w-[400px]" ref={dropdownContainerRef}>
        <h1 className="text-2xl ">Regular Funcational React Pattern | My React Dropdown </h1>
        <DropDown usersArray={usersArray}  
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          assignedList={assignedList}
          setAssignedList={setAssignedList}
      />
      {assignedList.length>0 ? 
      <AssignList assignedList={assignedList}
          setAssignedList={setAssignedList}/>
        :<p className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
        No users assigned to the task yet.
      </p>
        }
      </div>

      <div>
    </div>

    </div>
  );
}

