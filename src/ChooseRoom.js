import React, { useEffect, useState } from "react";
import { SuccessMessage } from "./SuccessMessage";
import app from "./helper/base";
function RoomGrid({ selectedRoom, setSelectedRoom }) {
  const rows = [
    [1, 2, 3, 4],
    [10, 5],
    [9, 8, 7, 6]
  ];

  return (
    <div className="rooms">
      <div className="row">
        {rows[0].map((x) => (
          <div
            key={"room" + x}
            className={selectedRoom == x ? " selectedRoom" : "rowItem"}
            onClick={(e) => {
              setSelectedRoom(x);
            }}
          >
            {x}
          </div>
        ))}
      </div>
      <div className="row">
        {rows[1].map((x) => (
          <div
            key={"room" + x}
            className={selectedRoom == x ? " selectedRoom" : "rowItem"}
            onClick={(e) => {
              setSelectedRoom(x);
            }}
          >
            {x}
          </div>
        ))}
      </div>
      <div className="row">
        {rows[2].map((x) => (
          <div
            key={"room" + x}
            className={selectedRoom == x ? " selectedRoom" : "rowItem"}
            onClick={(e) => {
              setSelectedRoom(x);
            }}
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

function FloorDrop({ selectedFloor, setSelectedFloor }) {
  const floors = [
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
    "5th Floor"
  ];
  return (
    <select
      className="selectFloor"
      value={floors[selectedFloor - 1]}
      onChange={(e) => setSelectedFloor(e.target.value)}
    >
      {floors.map((x, i) => {
        return (
          <option value={i + 1} key={"floor" + (i + 1)}>
            {floors[i]}
          </option>
        );
      })}
    </select>
  );
}
export default function ChooseRoom({ match }) {
  const [selectedRoom, setSelectedRoom] = useState(-1);
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(selectedRoom, selectedFloor);
  }, [selectedRoom, selectedFloor]);

  const bookHostel = async () => {
    const uid = app.auth().currentUser.uid;
    const name = app.auth().currentUser.displayName;

    const data = {
      hostelNo: match.params.room,
      roomNo: selectedRoom,
      floorNo: selectedFloor,
      name: name
    };
    localStorage.setItem(uid, JSON.stringify(data));
    app.firestore().collection("users").doc().set(data);
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && (
        <SuccessMessage
          data={{ hostelNo: "B3", roomNo: selectedRoom }}
          setIsOpen={setIsOpen}
        />
      )}
      <article className="chooseRooms">
        <section>
          <h3>Choose a Room</h3>

          <FloorDrop
            selectedFloor={selectedFloor}
            setSelectedFloor={setSelectedFloor}
          />

          <RoomGrid
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
          <button
            disabled={selectedRoom == -1}
            className="bookRoomButton"
            onClick={bookHostel}
          >
            Book Room
          </button>
        </section>
      </article>
    </>
  );
}
