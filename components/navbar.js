const navbar = () => {
  return `
      <div id="nav">
        <div><a href="./index.html" id="logo">IndiaMART</a></div>
        <div id="nav2">
          <div id="nav21">
            <button id="btn1">
              <span>
                All India
                <i style="margin-left: 2rem" class="arrow down"></i
              ></span>
            </button>
          </div>
          <div id="nav22">
            <div>
              <input
                type="text"
                id="input1nav"
                placeholder="Enter product / service to search"
              />
            </div>
            <div>
              <input type="submit" id="input2nav" value="search" />
            </div>
          </div>
          <div id="nav23">
            <a href="indiamart.com" id="navprice">Get Best Price</a>
          </div>
        </div>
        <div id="icon">
          <div id="covid">
            <a href="masaischool.com">Covid-19 supplies</a>
            <div id="covidpopup">
              <div>
                <ul>
                  <li class="linebold" id="linebold1">Oxygen Supplies</li>
                  <li>Oxygen cylinder</li>
                  <li>Portable Oxygen can</li>
                  <li>Empty Oxygen Cylinder</li>
                  <li>Oxygen Concentrator</li>
                  <li>PSA Oxygen Gas Plants</li>
                  <li>Oxygen Flow Meter</li>
                  <li>Oxygen Mask</li>
                  <li>Oxygen Generator</li>
                  <li style="color: blue">View All</li>
                  <li class="linebold" id="linebold2">Safety Essentials</li>
                  <li>Face Mask</li>
                  <li>PPP Kits</li>
                  <li>Face Shield</li>
                  <li>Disponsable Gloves</li>
                  <li>Sneeze Guard</li>
                  <li>Car Partition</li>
                  <li>Surgical Caps</li>
                  <li>Hand Sanitizer & Disinfectant</li>
                  <li>View All</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li class="linebold" id="linebold3">Medicines</li>
                  <li>Tocilizumab</li>
                  <li>Remdsivir</li>
                  <li>Dexamethasone Tablets</li>
                  <li>Amphotericin B Injection</li>
                  <li>Enoxaparin Injection</li>
                  <li>Barictinib Tablets</li>
                  <li>Bevacizumab</li>
                  <li style="color: blue">View All</li>
                  <li class="linebold" id="linebold4">
                    Medical Supplies and Equipments
                  </li>
                  <li>Ventilator</li>
                  <li>Pulse Oximeter</li>
                  <li>Thermometer</li>
                  <li>Steam Vaporizer</li>
                  <li>Nebulizer</li>
                  <li>Corono Test Kit</li>
                  <li>CT Scan Machine</li>
                  <li>Rapid Test Kit</li>
                  <li>View All</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- </div> -->
          <div id="sell"><a href="masaischool.com">sell</a></div>
          <div id="help">
            <a href="masaischool.com">Help</a>
            <div id="helppopup">
              <p>Find answers to your queries</p>
    
              <div id="helppopup1">
                <div id="helppopup11">
                  <p>For <strong>Buying</strong></p>
                </div>
                <div id="helppopup12">
                  <p>For <strong> Selling</strong></p>
                </div>
              </div>
              <p id="helppopup13">Share your Feedback</p>
              <p id="helppopup14">Raise a compkaint</p>
              <p id="helppopup15">
                Email us on<br /><strong>customercare@indiamart.com</strong>
              </p>
              <p id="helppopup16">call us at <strong>096-9696-9696</strong></p>
              <p id="helppopup17">Chat with us</p>
              <p id="helppopup18">seller Academy</p>
            </div>
          </div>
          <div id="message"><a href="masaischool.com">Messages</a></div>
          <div id="signin">
            <a  class="signopen"
              >sign in <i style="margin-left: 2px" class="arrow1 down"></i
            ></a>
    
            <div id="signinpopup">
              <div id="signinpopup1">
                <button  class="signopen1">Sign In</button>
                <p>New to IndiaMART? &nbsp Join Now</p>
              </div>
              <div id="hrline"></div>
              <br />
              <!-- <div id="signindiv1">
                <div>
                 
                </div>
                <div></div>
              </div> -->
    
              <div id="signinpopup2">
                <p id="signinpopup31">Home</p>
                <p id="signinpopup41">Post Your Requirement</p>
                <p id="signinpopup51">
                  Verified Business Buyer &nbsp
                  <span
                    style="
                      background-color: yellow;
                      width: 18px;
                      border-radius: 4px;
                    "
                    >New</span
                  >
                </p>
                <p id="signinpopup61">Product/services Directory</p>
                <p id="signinpopup71">My orders</p>
                <p id="signinpopup81">Recent Activity</p>
                <p id="signinpopup91">Settings</p>
              </div>
              <div id="hrline"></div>
              <!-- <hr /> -->
              <div id="signinpopup3">
                <p>Pay with IndiaMart</p>
                <p>secure & hassle-free Payements</p>
              </div>
              <!-- <div id="signinpoup4"> -->
              <p id="signinpopup01" class="p1">Download App</p>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="bg-modal">
      <div class="modal-contents">
        <div id="bg-modal2">
          <div id="modal-div"><div>Sign In</div>
          <div  ><span class="close">+</span></div>
         
        </div>
        <!-- <div class="close">+</div> -->
        <img src="https://richardmiddleton.me/comic-100.png" alt="" />
         <div id="modal-div2">
           <div id="modal1" >
             <select>
               <option data-img-src"></option>
               <option>122</option>
               <option>122</option>
             </select>
            </div>
             <div id="modal2">91</div>
          
           <div id="modal3">
         
            <input type="tel" placeholder="Enter your Mobile Number"/>
          </div>
          <div id="buttonsigndiv" >
          <a href="#" class="buttonsign">Submit</a>
        </div>
      </div>
      <div Id="signdivor">OR</div>
      <div id="s-d-g">
     <div id="s-d-g1"><img src="https://utils.imimg.com/globalhf/Glogo.png" width:20px></div>
     <div id="s-d-g2">Continue With Google</div>
       
         </div>
        
      </div>
    </div>`;
};
export default navbar;
