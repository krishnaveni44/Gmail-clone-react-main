import React, { useContext } from "react";
import "../index.css";
import SearchPage from "./searchPage";
import { HandleDelete } from "./App";

const MainNavbar = () => {
  const helper = useContext(HandleDelete);
  const { state, dispatch } = helper;
  return (
    <section className="navbar">
      <div className="logo-container">
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt=""
          />
        </div>
      </div>
      <div className="search-bar">
        <div
          className="search-button ui icon"
          data-tooltip="Search"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-search" />
        </div>
        <div className="text-input">
          <input
            type="text"
            placeholder="Search mail"
            value={state.searchItem}
            onChange={(e) =>
              dispatch({
                type: "setSearchItem",
                payload: { searchItem: e.target.value },
              })
            }
          />
        </div>
        {state.searchItem.length > 0 ? <SearchPage /> : ""}
        <div
          className="search-setting ui icon"
          data-tooltip="Show search options"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-sliders-h" />
        </div>
      </div>

      <div className="user-profiles">
        <div
          className="ui icon"
          data-tooltip="Help"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="far fa-question-circle" />
        </div>
        <div
          className="ui icon"
          data-tooltip="Setting"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fas fa-cog"></i>
        </div>
        <div
          className="ui icon"
          data-tooltip="Help"
          data-position="bottom left"
          data-inverted=""
        >
          <i className="fal fa-border-none"></i>
        </div>
        <div
          className="ui icon user-image"
          data-tooltip="User"
          data-position="bottom left"
          data-inverted=""
        >
          <img
            src="https://i1.sndcdn.com/avatars-000658362800-46u3c7-t500x500.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
