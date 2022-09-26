import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>

    <div class="section1">
        <div class="PageArea">

        <header class="header1 d-flex">
                <div class="logo">
                    <Link to="/" ><img src="/assets/img/Logo (1).png" alt="" /></Link>

                </div>
                <div class="headerText ms-auto">
                    <Link to="/Main" class="btn CustomBTN">Crear cuenta </Link>
                </div>
        </header>

        <div class="BodyArea1">
            <div class="row">
                <div class="col-lg-8 MainArea1">
                    <h3 class="Mensajeh3">Mensaje de Barbara para su hijo James</h3>
                    <div class="BGImg1">
                        <div class="validityBox">
                          
                            <div class="validityHeader">
                                <p>Verify your identity </p>
                                <div class="validityHeaderImg ms-auto">
                                    <img src="/assets/img//Vector.png" alt="" />
                                </div>
                            </div>

                            <div class="validityText">
                                <p class="validityTextP1">We have sent a code on +52 ********1234</p>
                                <p class="validityTextP2">Not your contact number? <a href="" class="validityTextAnchor"> Contact Us</a></p>
                            </div>

                            <div class="inputArea">
                                <p class="EnterCode">Enter Code</p>
                                <div class="InputGroup">
                                    <div class="row">
                                        <div class="col-2 VerifyGutter">
                                            <input type="text" class="form-control text-center"  maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                        </div>
                                        <div class="col-2 VerifyGutter1">
                                        <input type="text" class="form-control text-center"  maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                        </div>
                                        <div class="col-2 VerifyGutter2">
                                        <input type="text" class="form-control text-center"  maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                        </div>
                                        <div class="col-2 VerifyGutter3">
                                        <input type="text" class="form-control text-center"  maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                        </div>
                                        <div class="col-2">
                                        <input type="text" class="form-control text-center"  maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                        </div>
                                        <div class="col-2">
                                        <input type="text" class="form-control text-center"  maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                                        </div>
                                    </div>
                                </div>
                                <p class="recCode">Didn’t received code? <a href="">Send Again</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="siteText">
                        <div class="d-flex">
                            <div class="Img_Name d-flex">
                                <img src="/assets/img//Ellipse 41.png" alt=""/> <p class="ProfileName">Barbara Smith</p>
                              </div>
                              <div class="date ms-auto">
                                  <p class="">April 9, 2021</p>
                              </div>
                        </div>
                        <div class="BlurImg">
                            <img src="/assets/img/Rectangle 161.png" alt=""/>
                            <button class="btn BigButton" href="pages/main.html">Responder</button>
                            <img src="/assets/img/Rectangle 162.png" alt=""/>
                            <hr/>
                          <div class="text-center">
                            <a href="" >Terms & Conditions</a> <span>|</span> <a href="">Privacy Policy</a>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </div>
</div>
    </div>
  )
}
