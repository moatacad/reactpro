import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="mainbar">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">
                Blog L<span style={{ fontSize: 15 }}>❤️</span>vers
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                Menu
                <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-lg-0">
                    <li className="nav-item">
                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link px-lg-3 py-3 py-lg-4" href="">
                        Posts
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

  )
}

export default Nav