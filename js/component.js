class Navbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <nav>
          <label class="logo">Brand</label>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </nav>   
       `;
	}
}

customElements.define('app-navbar', Navbar);

//about section
class About extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <section id="about" class="py-5 text-center bg-light">
            <div class="container" id="#about">
            <div class="row">
                <div class="col">
                <div class="info-header mb-5">
                    <h1 class="text-primary pb-3">
                    Why This Book?
                    </h1>
                    <p class="lead pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati alias rerum dolore fugiat debitis?
                    </p>
                </div>

          <!-- ACCORDION -->
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                    <i class="fas fa-arrow-circle-down"></i> Get Inspired
                  </div>
                </h5>
              </div>

              <div id="collapse1" class="collapse show">
                <div class="card-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                  labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                  expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                  facilis consequatur tenetur nam pariatur fuga nisi!
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                    <i class="fas fa-arrow-circle-down"></i> Gain The Knowledge
                  </div>
                </h5>
              </div>

              <div id="collapse2" class="collapse">
                <div class="card-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                  labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                  expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                  facilis consequatur tenetur nam pariatur fuga nisi!
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">
                  <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                    <i class="fas fa-arrow-circle-down"></i> Open Your Mind
                  </div>
                </h5>
              </div>

              <div id="collapse3" class="collapse">
                <div class="card-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                  labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                  expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                  facilis consequatur tenetur nam pariatur fuga nisi!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        `;
	}
}

customElements.define('app-about', About);

//services part
class Services extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <section id="services" class="py-5">
    <div class="container" id="#services">
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-header bg-dark text-white">
              <h3>Service Plan One</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$59.99/Month</h4>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
              <ul class="list-group">
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature One
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Two
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Three
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Four
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Five
                </li>
              </ul>
              <a href="#" class="btn btn-danger btn-block mt-2">Get It</a>
            </div>
            <div class="card-footer text-muted">
              1 Year Plan
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-header bg-dark text-white">
              <h3>Service Plan Two</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$99.99/Month</h4>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
              <ul class="list-group">
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature One
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Two
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Three
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Four
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Five
                </li>
              </ul>
              <a href="#" class="btn btn-danger btn-block mt-2">Get It</a>
            </div>
            <div class="card-footer text-muted">
              1 Year Plan
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-header bg-dark text-white">
              <h3>Service Plan Three</h3>
            </div>
            <div class="card-body">
              <h4 class="card-title">$129.99/Month</h4>
              <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quis.</p>
              <ul class="list-group">
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature One
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Two
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Three
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Four
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check"></i> Feature Five
                </li>
              </ul>
              <a href="#" class="btn btn-danger btn-block mt-2">Get It</a>
            </div>
            <div class="card-footer text-muted">
              1 Year Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        `;
	}
}

customElements.define('app-services', Services);

class footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `

    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
`;
	}
}
customElements.define('app-footer', footer);
