import logo from "./logo.svg";
import "./App.css";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { ImHome3 } from "react-icons/im";


function App() {
  return (
    <div>
      <form>

      
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="col">
              <h6 style={{textAlign:'center' ,marginTop:'20px'}}>Accordion implementation</h6>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    name
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>my name is vaishnavi gajare</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Address
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p><HiLocationMarker/>  No. 442/2, Chakan, Pune</p>
                    <p><IoCall/>  8180066925, 9890441281</p>
                    <p><ImHome3/>  Building Consultants and Contractors in Pune</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    contact detail
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p><IoCall/> 7898757584</p>
                    <p><IoCall/> 9898767676</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default App;
