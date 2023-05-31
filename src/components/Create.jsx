import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Errormessage from "./Errormessage";
import { useDispatch, useSelector } from "react-redux";
import { createnote } from "../action/noteaction";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const createNote = useSelector((state) => state.notecreate);
  const { loading, error } = createNote;

  const formhandle = async (e) => {
    e.preventDefault();
    dispatch(createnote(title, category, content));

    navigate("/notes");
  };
  return (
    <>
      <div className="m-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            {loading && <Loading />}
            {error && <Errormessage>{error}</Errormessage>}
            <form onSubmit={formhandle}>
              <div className="mb-3">
                <label htmlFor="title1" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title1"
                  value={title}
                  autoComplete="off"
                  onChange={(e) => setTitle(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category1" className="form-label">
                  Category:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category1"
                  autoComplete="off"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content1" className="form-label">
                  Content:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={content}
                  autoComplete="off"
                  onChange={(e) => setContent(e.target.value)}
                  id="content1"
                />
              </div>

              <button type="submit" className="btn btn-info">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
