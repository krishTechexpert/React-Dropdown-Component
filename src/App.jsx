// import { ChevronDown } from "lucide-react";

// import { FiCheck, FiChevronDown } from "react-icons/fi";
import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
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

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });
  return (
    <div className="bg-[#2b2c37] h-[100dvh] text-white flex  p-20 gap-4 items-center flex-col">
      <div className=" w-[400px] " ref={dropdownRef}>
        <h1 className="text-2xl ">Regular Component Dropdown</h1>
        <Dropdown
          usersArray={usersArray}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          assignedList={assignedList}
          setAssignedList={setAssignedList}
        />
        {assignedList.length === 0 ? (
          <p className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
            No users assigned to the task yet.
          </p>
        ) : (
          <AssignedList
            assignedList={assignedList}
            setAssignedList={setAssignedList}
          />
        )}
      </div>
    </div>
  );
}

const Dropdown = ({
  usersArray,
  setIsDropdownOpen,
  isDropdownOpen,
  setAssignedList,
  assignedList,
}) => {
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  function handleAssign(user) {
    setAssignedList((prevList) => {
      // Check if the user already exists in the list
      if (prevList.includes(user)) {
        // If user exists, remove it from the list
        const updatedList = prevList.filter((item) => item !== user);
        return updatedList;
      } else {
        // If user doesn't exist, add it to the list
        return [...prevList, user];
      }
    });
  }
  return (
    <div>
      <label className="mt-4">Assign user(s) to as task:</label>

      <button
        className="  px-4 w-full py-2 flex items-center justify-between  rounded border border-[#828FA340] hover:border-primary cursor-pointer relative "
        onClick={toggleDropdown}>
        <span className="block">
          <FiChevronDown color="#635FC7" size={24} />
        </span>
        {isDropdownOpen && (
          <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
            {/* Close button */}
            <div
              className="absolute top-0 right-0 flex items-center justify-center -translate-y-full gap-2 bg-[#C0392B] px-2 py-1 rounded-t"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(false);
                console.log(isDropdownOpen);
              }}>
              <span>Close</span>
              <span>
                <FaXmark size={20} />
              </span>
            </div>
            <ul className="flex flex-col p-2">
              {usersArray.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `}
                  onClick={() => handleAssign(user)}>
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
        )}
      </button>
    </div>
  );
};

function AssignedList({ assignedList, setAssignedList }) {
  function handleRemove(id) {
    setAssignedList((assignedList) =>
      assignedList.filter((user) => user.id !== id)
    );
  }
  return (
    <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
      <h2 className="px-2 my-3 font-bold">Assigned list:</h2>
      <div className="flex flex-wrap gap-4 ">
        {assignedList?.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200"
            onClick={() => handleRemove(user.id)}>
            <span>{index + 1}.</span>
            <img
              className="w-6 h-6 "
              src={user.imgUrl}
              alt={`${user.name} image`}
            />

            <span>{user.name}</span>
            <span className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full">
              <FaXmark />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
