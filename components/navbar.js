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
          
          <a  id="linksign"   onclick="displaysign()"
            >sign in <i style="margin-left: 2px" class="arrow1 down"></i
          ></a>
    
            <div id="signinpopup">
              <div id="signinpopup1">
                <button  onclick="displaysign()">Sign In</button>
                <p  id="signcomment">New to IndiaMART? &nbsp Join Now</p>
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
          <div  ><span class="close" onclick="closesign()">+</span></div>
         
        </div>
        <!-- <div class="close">+</div> -->
       
         <div id="modal-div2">
         <div id="modal1" >
         <div class="selector">
           <div id="selector" onclick="changecountrycode()">
         
             <img id="cmg" src="./image/India.png">
         
             <!-- <p>Select</p> -->
           </div>
           <div id="countryflag">
         
         <ul>
           <li onclick="changecode(91)">
             <img id="code1" src="./image/India.png">
             <p>India</p>
           </li>
           <li onclick="changecode(1)"">
             <img  id="code2" src="./image/america.png">
             <p>United State of America</p>
           </li>
           <li  onclick="changecode(55)">
             <img id="code3" src="./image/brazil.png">
             <p>Canada</p>
           </li>
           <li  onclick="changecode(86)">
             <img  id="code4"src="./image/china.png">
             <p>China</p>
           </li>
           <li  onclick="changecode(44)">
             <img  id="code5" src="./image/england.png">
             <p>England</p>
           </li>
           <li  onclick="changecode(33)">
             <img  id="code6" src="./image/france1.png">
             <p>France</p>
           </li>
           <li  onclick="changecode(92)">
             <img  id="code7" src="./image/pakistan.png">
             <p>Pakistan</p>
           </li>
           <li  onclick="changecode(7)">
             <img  id="code8" src="./image/Russia-flag.png">
             <p>Russia</p>
           </li>
           <li  onclick="changecode(966)">
             <img  id="code9"src="./image/saudi1.png">
             <p>Saudi Arabia</p>
           </li>
           <li  onclick="changecode(82)">
             <img  id="code10" src="./image/southkorea.png">
             <p>South Korea</p>
           </li>
           <li  onclick="changecode(380)">
             <img  id="code11" src="./image/ukraine.png">
             <p>Ukraine</p>
           </li>
           <li  onclick="changecode(81)">
             <img  id="code12" src="./image/zapan.png">
             <p>Zapan</p>
           </li>
          
         </ul>
         
         
           </div>
           
         </div> 
         </div>
             <div id="modal2"><p id="modal2p">+91</p></div>
          
           <div id="modal3">
         
            <input type="tel"  id="scriteria"  placeholder="Enter your Mobile Number"/>
          </div>
          <div id="buttonsigndiv" >
          <a href="#" onclick="submitsign()" class="buttonsign">Submit</a>
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
