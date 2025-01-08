import React, { useEffect, useState } from 'react';

const DeleteCheckboxCondition = () => {
  const gamesList = ["Hockey", "Cricket", "Badminton", "Tennis"];
  const [checkboxStatuses, setCheckboxStatuses] = useState([false, false, false, false]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedStatuses = [...checkboxStatuses];
    updatedStatuses[index] = !updatedStatuses[index];
    setCheckboxStatuses(updatedStatuses);

    // The else condition will only execute if all elements in the array fail to meet the condition in some(). 
    console.log(updatedStatuses,'updatedStatuses')
    if (updatedStatuses.some(status=> !status)) {
 
      setSelectAllChecked(false);
    } else {

      setSelectAllChecked(true);
    }
  };
console.log(selectAllChecked,'selectAllchecked')
  const handleSelectAll = () => {
    const newStatus = !selectAllChecked;
    setSelectAllChecked(newStatus);
    setCheckboxStatuses(checkboxStatuses.map(() => newStatus));
  };


  const handleDelete = (index) => {
    const parentElement = document.querySelectorAll(".checkbox")[index]?.parentElement;
    if (checkboxStatuses[index] && parentElement) {
      parentElement.style.display = "none";
    } else if (parentElement) {
      parentElement.style.display = "block";
    }
  };

  useEffect(() => {
    const allSelected = checkboxStatuses.every((status) => status);
    console.log(allSelected,'allSelected')
    setSelectAllChecked(allSelected);
  }, [checkboxStatuses]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
      <h2>Delete Checkbox Condition</h2>
      <div>
        <input
          type="checkbox"
          className="selectAllCheckbox"
          checked={selectAllChecked}
          onChange={handleSelectAll}
        />
        <span>Select All</span>
      </div>
      {gamesList.map((game, index) => (
        <div key={index}>
          <input
            type="checkbox"
            className="checkbox"
            checked={checkboxStatuses[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          <span>{game}</span>
          <button onClick={() => handleDelete(index)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCheckboxCondition;
