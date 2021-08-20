import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function ChooseHostel({ match }) {
  const [hostels, setHostels] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const gender = match.params.gender;
    const myList = [];

    for (let i = 1; i <= 6; i++) myList.push(gender + i);

    setHostels(myList);
  }, []);
  return (
    <article className="chooseHostels">
      <section>
        <h1>Choose a Hostel</h1>
        <div className="hostelGrid">
          {hostels.map((x) => (
            <div
              onClick={() => {
                history.push("/bookRoom/" + x);
              }}
            >
              {x}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
