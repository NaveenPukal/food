import React from "react";

function Footer() {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
            <a href="#" class="brand-logo">
              <img src="assets/images/logo.png" alt="..." class="mb-3" />
            </a>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#" class="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-decoration-none text-dark">
                  Features
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-decoration-none text-dark">
                  Pricing
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-decoration-none text-dark">
                  FAQ's
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-decoration-none text-dark">
                  About
                </a>
              </li>
            </ul>
            <div class="social-icons mt-3">
              <a href="#" class="mx-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="text-center pt-4 mt-4 border-top">
          <p class="mb-0">©All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
