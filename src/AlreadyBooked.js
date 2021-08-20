export default function AlreadyBooked({ data }) {
  const { name, hostelNo, roomNo } = data;
  return (
    <div className="popupBg">
      <section style={{ background: "white", border: "2px solid black" }}>
        <h1>Welcome {name}</h1>
        <div className="roomDetails">
          <h4>Your room has been booked successfully</h4>
          <h3>Your room detail are as follows:</h3>
          <h4>
            Hostel No. <span className="highlighted">{hostelNo}</span>
          </h4>
          <h4>
            Room No. <span className="highlighted">{roomNo}</span>
          </h4>
        </div>
      </section>
    </div>
  );
}
