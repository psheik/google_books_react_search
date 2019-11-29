import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search by title or author"
          name="q"
          onChange={handleInputChange}
          required/>
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-info float-left">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;