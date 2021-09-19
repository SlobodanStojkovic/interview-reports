import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ changeLogIn }) => {

    const logOut = () => {
        localStorage.removeItem("tokenNibble")
        changeLogIn(false);
    }


    return (
        <header className="p-5 bg-info">
            <nav className="navbar bg-info navbar-expand-sm fixed-top">

                <Link className="interviewsReports col-lg-6" to="/home">
                    <h1 className="text-dark ms-5 me-5">
                        Interviews Reports
                    </h1>
                </Link>
                <div className="pagesButtons col-xs-6 col-sm-6 col-lg-6 text-center mx-auto">
                    <Link className="candidatesLinks" to="/home">
                        <button type="button" className="btnCandidates btn btn-light btn-outline-secondary m-2">
                            Candidates
                        </button>
                    </Link>

                    <Link className="reportsLinks" to="/reports">
                        <button type="button" className="btnReports btn btn-light btn-outline-secondary m-2">
                            Reports
                        </button>
                    </Link>

                    <button type="button" onClick={logOut} className="btnLogOut btn btn-light btn-outline-secondary m-2">
                        Log Out
                    </button>
                </div>

            </nav>
        </header>
    );
};
