import React from 'react'
//import './Footer.css'
export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/juscofficial" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/jusc_official/" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/school/jadavpur-university-science-club/mycompany/" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://www.jusc.co.in/">Jadavpur University Science Club</a>
                </div>
            </footer>
        </div>
    )
}
