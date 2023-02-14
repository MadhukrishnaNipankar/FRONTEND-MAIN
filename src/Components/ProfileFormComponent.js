import React from "react";
import "../Styles/ProfileFormComponent.css";

function ProfileFormComponent() {
  return (
    <div id="profileFormComponent" className="container">
      <div
        className="d-flex flex-wrap"
        id="nameContainer"
        style={{ minHeight: "auto" }}
      >
        <h5 className="my-3 mx-2 font-weight-bold">Profile Name</h5>
        <input
          type="text"
          className="input form-control my-2 mx-2"
          id="firstName"
          placeholder="First Name"
          style={{ maxWidth: "20rem", maxHeight: "3rem" }}
        />
        <input
          type="text"
          className="input  form-control my-2 mx-2"
          id="middleName"
          placeholder="Middle Name"
          style={{ maxWidth: "20rem", maxHeight: "3rem" }}
        />
        <input
          type="text"
          className="input form-control my-2 mx-2"
          id="lastName"
          placeholder="Last Name"
          style={{ maxWidth: "20rem", maxHeight: "3rem" }}
        />
      </div>

      <section className="d-flex flex-wrap">
        <div id="genderContainer" className="d-flex flex-wrap">
          <h5 className="my-3 mx-2">Gender</h5>
          <input
            type="text"
            className="input form-control my-2 mx-2"
            id="gender"
            placeholder="Your Gender"
            style={{ maxWidth: "10rem", maxHeight: "3rem" }}
          />
        </div>

        <div id="DobContainer" className="d-flex flex-wrap">
          <h5 className="my-3 mx-2">DOB</h5>
          <input
            type="text"
            className="input form-control my-2 mx-2"
            id="DOB"
            placeholder="Date of Birth"
            style={{ maxWidth: "10rem", maxHeight: "3rem" }}
          />
        </div>

        <div id="locationContainer" className="d-flex">
          <h5 className="my-3 mx-2">Location</h5>
          <input
            type="text"
            className="input form-control my-2 mx-2"
            id="location"
            placeholder="Your Location"
            style={{ maxWidth: "20rem", maxHeight: "3rem" }}
          />
        </div>
      </section>

      <section className="d-flex flex-wrap">
        <div id="EmailContainer" className="d-flex flex-wrap">
          <div className="input-group">
            <h5 className="my-3 mx-2">E-mail</h5>
            <input
              type="email"
              id="email"
              className="input form-control my-2 ml-2"
              placeholder="Your Email"
              style={{ maxWidth: "20rem", height: "2.5rem" }}
            />
            <span
              className="input-group-text my-2"
              id="email"
              style={{ height: "2.5rem" }}
            >
              Verify
            </span>
          </div>
        </div>

        <div id="ContactContainer" className="d-flex flex-wrap">
          <div className="input-group mb-3">
            <h5 className="my-3 mx-2">Contact no.</h5>
            <input
              type="Number"
              id="Number"
              className="input form-control my-2 ml-2"
              placeholder="Your Number"
              style={{ maxWidth: "20rem", height: "2.5rem" }}
            />
            <span
              className="input-group-text my-2"
              id="email"
              style={{ height: "2.5rem" }}
            >
              Verify
            </span>
          </div>
        </div>
      </section>

      <section className="d-flex flex-wrap">
        <div id="languageContainer" className="d-flex">
          <h5 className="my-3 mx-2">Language</h5>
          <input
            type="text"
            className="input form-control my-2 mx-2"
            id="DOB"
            placeholder="language you speak"
            style={{ maxWidth: "18rem", maxHeight: "3rem" }}
          />
        </div>
        <div id="topicsContainer" className="d-flex ">
          <h5 className="my-3 mx-2">Topics you like</h5>
          <input
            type="text"
            className="input form-control my-2 mx-2"
            id="DOB"
            placeholder="topics you’re interested in"
            style={{ maxWidth: "fit-content", maxHeight: "3rem" }}
          />
        </div>
      </section>
      <div id="addressContainer" className="d-flex my-3">
        <h5 className="my-3 mx-2 text-start">Address</h5>
        <div className="form-floating">
          <textarea
            className="input form-control"
            id="floatingTextarea2"
            style={{ minHeight: "5rem" }}
            cols={70}
          ></textarea>
          <label htmlFor="floatingTextarea2">Where you live rn</label>
        </div>
      </div>

      <div id="vibeContainer" className="my-3">
        <h5 className="my-3 mx-2 text-start">What's Your Vibe?</h5>
        <div className="form-floating">
          <textarea
            className="input form-control"
            id="floatingTextarea2"
            style={{ minHeight: "5rem" }}
            cols={70}
          ></textarea>
          <label htmlFor="floatingTextarea2">Tell us more about yourself</label>
        </div>
      </div>

      <div
        id="socialMediaContainer"
        className="container d-flex flex-column align-items-center"
      >
        <h3 className="text-center">Social Media Links</h3>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ maxWidth: "50rem" }}
        >
          <div id="instagramContainer" className="d-flex ">
            <h5 className="my-3 mx-2">Instagram</h5>
            <input
              type="text"
              className="input form-control my-2 mx-2"
              id="instagram"
              placeholder="Your Link"
              style={{ maxWidth: "18rem", maxHeight: "3rem" }}
            />
          </div>
          <div id="youtubeContainer" className="d-flex ">
            <h5 className="my-3 mx-2">Youtube</h5>
            <input
              type="text"
              className="input form-control my-2 mx-2"
              id="youtube"
              placeholder="Your Link"
              style={{ maxWidth: "18rem", maxHeight: "3rem" }}
            />
          </div>
          <div id="facebookContainer" className="d-flex ">
            <h5 className="my-3 mx-2">Facebook</h5>
            <input
              type="text"
              className="input form-control my-2 mx-2"
              id="facebook"
              placeholder="Your Link"
              style={{ maxWidth: "18rem", maxHeight: "3rem" }}
            />
          </div>
          <div id="instagramContainer" className="d-flex ">
            <h5 className="my-3 mx-2">Discord</h5>
            <input
              type="text"
              className="input form-control my-2 mx-2"
              id="discord"
              placeholder="Your Link"
              style={{ maxWidth: "18rem", maxHeight: "3rem" }}
            />
          </div>
        </div>
      </div>

      <button id="formSubmitBtn" type="button" className="btn btn-warning my-5">
        Submit
      </button>
    </div>
  );
}

export default ProfileFormComponent;
