// Author: jyotir07
import { useState } from "react";
//creating an object
// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}

//using PascalCasing for naming functions
function ListGroup(props: Props) {
  let items = ["London", "New York", "Tokyo", "Sydney", "Paris"];
  // Hook function used to internal things in react kindof
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-goup-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
