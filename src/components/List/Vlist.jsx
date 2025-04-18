import React from "react";
import { FixedSizeList as List } from "react-window";

const people = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
}));

// normal list

// const Vlist = () => {
//   return (
//     <div
//       style={{
//         maxHeight: "600px",
//         overflowY: "scroll",
//         border: "1px solid #ccc",
//       }}
//     >
//       {people.map((person) => (
//         <div
//           key={person.id}
//           style={{
//             padding: "10px 16px",
//             borderBottom: "1px solid #eee",
//           }}
//         >
//           <strong>ID:</strong> {person.id} &nbsp;
//           <strong>Name:</strong> {person.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// virtualized list

const Row = ({ index, style }) => {
  const person = people[index];

  return (
    <div
      style={{ ...style, padding: "8px 16px", borderBottom: "1px solid #eee" }}
    >
      <strong>ID:</strong> {person.id} &nbsp;
      <strong>Name:</strong> {person.name}
    </div>
  );
};

const Vlist = () => {
  return (
    <div
      style={{
        height: "600px",
        width: "100%",
        marginTop: "200px",
        border: "2px solid black",
      }}
    >
      <List height={600} itemCount={people.length} itemSize={50} width={"100%"}>
        {Row}
      </List>
    </div>
  );
};

export default Vlist;
