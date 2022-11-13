import React from "react";
export default function Home(){







    return(
        <div className="social-media-main">
            <section style={{ backgroundColor: ""}}>
                <div className="social-media-main-container ">
                    <div className="row d-flex justify-content-center ">
                      <div className="m-3 wrapper">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex flex-start align-items-center">
                              <img
                                className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                                alt="avatar"
                                width={60}
                                height={60}
                              />
                              <div>
                                <h6 className="fw-bold text-success mb-1">Lily Coleman</h6>
                                <p className="text-muted small mb-0">
                                  Shared publicly - Jan 2020
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 mb-4 pb-2 justify-content-start">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip consequat.
                            </div>
                            <div className="small d-flex justify-content-end">
                              <a href="#!" className="d-flex align-items-center me-3">
                                <i className="far fa-thumbs-up me-2" />
                                <p className="mb-0">Like</p>
                              </a>
                              <a href="#!" className="d-flex align-items-center me-3">
                                <i className="far fa-comment-dots me-2" />
                                <p className="mb-0">Comment</p>
                              </a>
                              <a href="#!" className="d-flex align-items-center me-3">
                                <i className="fas fa-share me-2" />
                                <p className="mb-0">Share</p>
                              </a>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="d-flex flex-start align-items-center">
                              <img
                                className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                                alt="avatar"
                                width={60}
                                height={60}
                              />
                              <div>
                                <h6 className="fw-bold text-success mb-1">Lily Coleman</h6>
                                <p className="text-muted small mb-0">
                                  Shared publicly - Jan 2020
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 mb-4 pb-2 justify-content-start">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="small d-flex justify-content-end">
                              <a href="#!" className="d-flex align-items-center me-3">
                                <i className="far fa-thumbs-up me-2" />
                                <p className="mb-0">Like</p>
                              </a>
                              <a href="#!" className="d-flex align-items-center me-3">
                                <i className="far fa-comment-dots me-2" />
                                <p className="mb-0">Comment</p>
                              </a>
                              <a href="#!" className="d-flex align-items-center me-3">
                                <i className="fas fa-share me-2" />
                                <p className="mb-0">Share</p>
                              </a>
                            </div>
                          </div>
                          <div
                            className="card-footer py-3 border-0"
                            style={{ backgroundColor: "#f8f9fa" }}
                          >
                            <div className="d-flex flex-start w-100">
                              <img
                                className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(20).webp"
                                alt="avatar"
                                width={40}
                                height={40}
                              />
                              <div className="form-outline w-100">
                              <label className="form-label" htmlFor="textAreaExample">
                              <h6 className="fw-bold text-success mb-1">Nancy</h6>
                              </label>
                                <textarea
                                  className="form-control"
                                  id="textAreaExample"
                                  rows={4}
                                  style={{ background: "#fff" }}
                                  defaultValue={""}
                                />

                              </div>
                            </div>
                            <div className="float-end mt-2 pt-1">
                              <button type="button" onClick={()=>{ alert('Thank you for leaving a comment!'); }} className="btn btn-success btn-sm">
                                Post comment
                              </button>
                              &nbsp;&nbsp;&nbsp;
                              <button type="button" className="btn btn-outline-success btn-sm">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

              </section>

        </div>
    )
}
