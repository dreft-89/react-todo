import React, { useState, useEffect, useReducer } from 'react'
import { Context } from "./context.js";

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context)

  const cls = ['todo']

  if (completed) {
    cls.push('completed')
  }


  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          chacked={completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: id,
            })
          }
        />
        <span>{title}</span>

        <i className="material-icons red-text" 
        onClick={() => dispatch({
          type: 'remove',
          payload: id 
        })}
        >
          delete
        </i>
      </label>
    </li>
  );
}