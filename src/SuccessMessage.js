export function SuccessMessage({ data, setIsOpen }) {
  const { hostelNo, roomNo } = data;
  return (
    <div className="popupBg">
      <section>
        <span className="closeBtn" onClick={() => setIsOpen(false)}>
          X
        </span>
        <h1>Success</h1>
        <p>Your room has been booked successfully</p>
        <div className="roomDetails">
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
