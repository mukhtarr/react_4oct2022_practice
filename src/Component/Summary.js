import React from "react";
import CallbackButton from "./CallbackButton";

export default function Summary(props) {
  let { index, name } = props;

  return (
    <>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>
        {/* <button
          className="btn btn-success"
          onClick={()=>props.promoteCallback(name)}
        >
          promote
        </button> */}

        <CallbackButton
        theme = 'primary'
        text = 'Promote'
        callback = {() => props.promoteCallback(name)}
        />
      </td>
      <td>
      <CallbackButton
        theme = 'success'
        text = 'Like'
        callback = {() => props.promoteCallback(name)}
        />
      </td>
      <td>
      <CallbackButton
        theme = 'danger'
        text = 'DisLike'
        callback = {() => props.promoteCallback(name)}
        />
      </td>
      <td>
      <CallbackButton
        theme = {65}
        text = {true}
        callback = {() => props.promoteCallback(name)}
        />
      </td>
    </>
  );
}


