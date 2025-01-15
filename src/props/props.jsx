function ChildComponent(props) {
    console.log("Before change:", props.value ="new value"); //cannot assign read only refference property 
  
    // Attempting to reassign a prop (This won't work)
    // value = "New Value";
    // console.log("After change:",value);
  
    return <div>{props.value}</div>;
  }
  
  export default function ParentComponent() {
    return <ChildComponent value="Initial Value" />;
  }
  



  