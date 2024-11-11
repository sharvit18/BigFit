import React from "react";

function Footer() {
  return (
    <footer className="p-5 card-bg-primary text-light text-center position-relative">
    <div className="container">
      <div className="social">
        
        <button type="button" className="btn btn-acc-round">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com"><span className="fa-brands fa-twitter"
              aria-hidden="true"></span><span className="sr-only">Twitter</span></a>
        </button>
        <button type="button" className="btn btn-acc-round">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><span className="fa-brands fa-instagram"
              aria-hidden="true"></span><span className="sr-only">Instagram</span></a>
        </button>
      </div>
      
      <div className="copyright">
        <p>Copyright &copy; 2024 Meta - Sharvit Kashikar - Senior Developer</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;