import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletenote, noteslist } from "../action/noteaction";
import Loading from "./Loading";
import Errormessage from "./Errormessage";
import { useNavigate } from "react-router-dom";

const Notes = ({ search }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listnotes = useSelector((state) => state.notelist);
  const userlogin = useSelector((state) => state.userlogin);
  const { notes, loading, error } = listnotes;
  const { userInfo } = userlogin;
  useEffect(() => {
    dispatch(noteslist());
    if (!userInfo) {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  const deletehandler = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deletenote(id));
    }
  };
  return (
    <>
      <div className="container mt-3">
        <h1>Your Note's 📒</h1>
        <hr />
        <div className="container">
          <Link className="btn btn-primary" to="/create">
            Create new note
          </Link>
          <div className="row">
            <div className="col-md-10">
              {error && <Errormessage variant="danger">{error}</Errormessage>}
              {loading && <Loading />}
              {notes
                ?.reverse()
                .filter((filterednote) =>
                  filterednote.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((note) => (
                  <>
                    <div className="card m-3">
                      <div className="card-header d-flex">
                        <h3
                          key={note._id}
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample${note._id}`}
                          aria-controls="collapseExample"
                          style={{
                            cursor: "pointer",
                            textTransform: "capitalize",
                            fontFamily: "cursive",
                          }}
                        >
                          {note.title}
                        </h3>

                        <Link
                          className="btn btn-warning ms-auto"
                          to={`/notes/${note._id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger mx-3"
                          onClick={() => {
                            deletehandler(note._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>

                      <div
                        className="card-body collapse"
                        id={`collapseExample${note._id}`}
                      >
                        <h6
                          style={{
                            padding: "5px",
                            backgroundColor: "green",
                            display: "inline-block",
                            color: "white",
                            borderRadius: "5px",
                          }}
                        >
                          Catagory: {note.category}
                        </h6>

                        <p>{note.content}</p>
                        <footer className="blockquote-footer">
                          Created At: {note.createdAt.substring(0, 10)}
                        </footer>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
