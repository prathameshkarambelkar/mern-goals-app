import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({text}))
    setText('')
  };

  const dispatch = useDispatch()

  return (
    <>
      <section className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
                Add Goal
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default GoalForm;
