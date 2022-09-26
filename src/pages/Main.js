import React from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'

export default function Main() {
  return (
<div class="section1">
    <div class="PageArea">
        <header class="header1 d-flex">
                <div class="logo">
                <Link to="/" ><img src="/assets/img/Logo (1).png" alt="" /></Link>

                </div>
                <div class="headerText ms-auto">
                
                    <button class="btn CustomBTN">Crear cuenta</button>
                </div>
        </header>

        <div class="BodyArea1">
            <div class="row">
                <div class="col-lg-8 MainArea1">
                    <h3 class="Mensajeh3">Mensaje de Barbara para su hijo James</h3>
                    <div class="BGImg1">
                        <video controls  poster="assets/img/Video1.png">
                            <source src="assets/img/Product.mp4" type="video/mp4"  />
                            <source src="movie.ogg" type="video/ogg" /> 
                            Your browser does not support the video tag.
                          </video>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="siteText">
                        <div class="d-flex">
                            <div class="Img_Name d-flex">
                                <img src="assets/img/Ellipse 41.png" alt=""  /> 
                                <p class="ProfileName">Barbara Smith</p>
                              </div>
                              <div class="date ms-auto">
                                  <p class="">April 9, 2021</p>
                              </div>
                        </div>
                        <div class="BlurImg">
                            <p class="Blurp1">¡Siempre estaré contigo!</p>
                            <p>Mensaje:</p>
                            <p class="Blurp1">“Hola James, este es mi mensaje para ti,
                                ¡Siempre estaré contigo!"</p>
                            <button class="btn BigButton2">Responder</button>

                            <p class="blurP2">Psicólogos recomiendan: “En procesos de duelo, dejar un mensaje a esa persona que murió, como una manera de avanzar  y decirle aquello que gustaría que supiera"</p>
                            <p class="blurP3">Este mensaje conserva su estado original desde su creación el 9/10/2022 usando tecnología blockchain.
                                
                                <a href="">
                                   <p>0x6806aebd1541ee8b28c04f6ad628ef1a27a8557021e1a56bd32ab796649ca478 
                                   </p>
                                </a>
                            </p>
                         
                            <hr />
                          <div class="text-center">
                            <a>Terms & Conditions </a> <span>|</span> <a>Privacy Policy</a>
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
