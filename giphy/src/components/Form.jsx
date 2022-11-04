import {React, useRef} from "react";

const Form = (props) => {
  const searchText = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={searchText} placeholder="type of giphy" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
