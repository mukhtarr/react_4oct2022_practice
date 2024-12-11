import React from "react";

export default function Card(props) {
  return (
    <div>
      {
      props.moviedata.map((mov, index) => (
        <table border={3}>
          <tr key="index">
            <td>
              <img className="img1" src={mov.imgSrc} />, {mov.title}, {mov.text}
            </td>
          </tr>
        </table>
      ))
      }
      <button>watch now</button>
    </div>
  );
}
