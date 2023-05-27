<template>
  <div>
    <div class="container">
      <div class="d-flex row">
        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px"
        >
          <div
            class="card1"
            style="width: 100%; cursor: pointer"
            align="center"
            @click="showDialog()"
          >
            <div class="overlay"></div>
            <img :src="p13" style="height: 200px; width: 100%; object-fit: cover" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              CD GLORIA
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>

        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-md-4 col-sm-4"
          style="padding-bottom: 20px"
        >
          <div
            style="width: 100%; cursor: pointer"
            align="center"
            @click="showDialog1()"
            class="card1"
          >
          <div class="overlay"></div>
            <img :src="p12" style="height: 200px; width: 100%; object-fit: cover" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              CD NESTLE
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>
        <dibox v-show="dialog0" @close="hideDialog1()">
          <div class="container" style="overflow-x: hidden; width: 80vw">
            <div style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <h2 class="d-flex justify-end">CD NESTLE</h2>
                <div class="d-flex justify-start">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="hideDialog1()"
                  >
                    <h1>></h1>
                  </button>
                </div>
              </div>
              <hr class="solid">
              <div class="container">
                <swiper :loop="true" style="height: 100%; position: relative" :autoHeight="true" class="swip">
                  <div class="boton1">
                    <boton />
                  </div>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col-12 col-sm-5 col-md-6 order-1 order-sm-2">
                            <h2>Primer centro de distribución con estantería satelital variable autoportante</h2>
                            <ol
                              align="justify"
                              style="
                                padding-right: 3vh;
                                padding-left: 3vh;
                                font-size: 100%;
                              "
                            >
                              <li>Capacidad 5200 pp</li>
                              <li>Almacén Autoportante</li>
                              <li>Altura; 15 m</li>
                              <li>
                                Almacenamiento

                                <ol
                                  align="justify"
                                  style="
                                    padding-right: 3vh;
                                    padding-left: 6vh;
                                    font-size: 100%;
                                  "
                                >
                                  <li>Sistema Satelital</li>
                                  <li>Estantería Selectiva</li>
                                </ol>
                              </li>
                              <li>
                                Almacén con mayor densidad de Almacenaje en el
                                Perú;
                                <ol
                                  align="justify"
                                  style="
                                    padding-right: 3vh;
                                    padding-left: 6vh;
                                    font-size: 100%;
                                  "
                                >
                                  <li>3.5 pp/m2</li>
                                </ol>
                              </li>
                            </ol>
                          </div>
                          <div
                            class="col-12 col-sm-6 col-md-6 order-2 order-sm-1"
                          >
                            <img :src="p14" style="width: 100%; object-fit: contain" />
                            <img :src="p15" style="width: 100%; object-fit: contain" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <img :src="p16" style="width: 100%" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2 align="center">Imágenes Interiores</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-4 col-md-4">
                            <img :src="p17" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-4 col-md-4">
                            <img :src="p18" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-4 col-md-4">
                            <img :src="p19" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </dibox>
        <!--SEGUNDO-->
        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px"
        >
          <div
            class="card1"
            style="width: 100%; cursor: pointer"
            align="center"
            @click="showDialog2()"
          >
            <div class="overlay"></div>
            <img :src="p20" style="height: 200px; width: 100%; object-fit: cover" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              MEDIFARMA
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>
        <dibox v-show="dialog1" @close="hideDialog2()">
          <div class="container" style="overflow-x: hidden; width: 80vw">
            <div style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <h2 class="d-flex justify-end">Medifarma</h2>
                <div class="d-flex justify-start">
                  <button
                    type="button"
                    class="btn btn-danger"
                    variant="text"
                    @click="hideDialog2()"
                  >
                    <h1>></h1>
                  </button>
                </div>
              </div>
              <div class="container">
                <hr class="solid">
                <swiper :loop="true" style="position: relative" class="swip" :autoHeight="true">
                  <div class="boton1">
                    <boton />
                  </div>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>Estantería MaxiPacker Autoportante</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p20" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p21" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>Estantería MaxiPacker Autoportante</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p22" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <v-col class="col-12 col-sm-6 col-md-6">
                            <img :src="p23" style="width: 100%; padding-bottom: 30px" />
                          </v-col>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>Estantería MaxiPacker Autoportante</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p24" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p25" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </dibox>

        <!--TERCERO-->
        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px"
        >
          <div
            style="width: 100%,; cursor: pointer"
            align="center"
            @click="showDialog3()"
            class="card1"
          >
            <div class="overlay"></div>
            <img :src="p26" style="height: 200px; width: 100%; object-fit: contain; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              SUPERMERCADOS PERUANOS
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>
        <dibox v-show="dialog2" @close="hideDialog3()">
          <div class="container" style="overflow-x: hidden; width: 80vw">
            <div style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <div class="text-pre-wrap" style="word-break: break-word">
                  <h3
                    class="d-flex justify-end text-pre-wrap"
                    style="word-break: break-word"
                  >
                    SUPERMERCADOS PERUANOS
                  </h3>
                </div>
                <div class="d-flex justify-start">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="hideDialog3()"
                  >
                    <h1>></h1>
                  </button>
                </div>
              </div>
              <hr class="solid">
              <div class="container">
                <swiper :loop="true" style="height: 100%; position:relative" :autoHeight="true" class="swip">
                  <div class="boton1">
                    <boton />
                  </div>
                  <swiper-slide>
                    <div class="container" style="height: auto">
                        <div class="row">
                          <div class="col">
                            <h2>Mezzanine</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p26" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p27" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide >
                    <div class="container" style="height: auto">
                        <div class="row">
                          <div class="col">
                            <h2>Mezanine</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12" style="height: 400px">
                            <video controls style="width: 100%; height: 60vh">
                              <source :src="p1" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </dibox>
        <!--CUARTO-->
        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px; cursor: pointer"
        >
          <div
            elevation="21"
            class="card1"
            style="width: 100%"
            align="center"
            @click="showDialog4()"
          >
            <div class="overlay"></div>
            <img :src="p28" style="height: 200px; width: 100%; object-fit: contain;border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              TIENDAS EFE
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>
        <dibox v-show="dialog3" @close="hideDialog4()">
          <div class="container" style="overflow-x: hidden; width: 80vw">
            <div style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <h2 class="d-flex justify-end">TIENDAS EFE</h2>
                <div class="d-flex justify-start">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="hideDialog4()"
                  >
                    <h1>></h1>
                  </button>
                </div>
              </div>
              <hr class="solid">
              <div class="container">
                <swiper :loop="true" :autoHeight="true" style="height: 100%">
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>PROPUESTA FINAL</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <img
                              align="center"
                              :src="p29"
                              style="width: 100%"
                            />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </dibox>

        <!--CUARTO-->
        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px; cursor: pointer"
        >
          <div
            class="card1"
            style="width: 100%"
            align="center"
            @click="showDialog5()"
          >
            <div class="overlay"></div>
            <img :src="p30" style="height: 200px; width: 100%; object-fit: contain; border: solid rgba(0,0,0,1); border-bottom: solid 5px rgba(0,0,0,1)" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              RIPLEY
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>
        <dibox v-show="dialog4" @close="hideDialog5()">
          <div class="container" style="overflow-x: hidden; width: 80vw">
            <div style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <h2 class="d-flex justify-end">RIPLEY</h2>
                <div class="d-flex justify-start">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="hideDialog5()"
                  >
                    <h1>></h1>
                  </button>
                </div>
              </div>
              <hr class="solid">
              <div class="container">
                <swiper :loop="true">
                  <swiper-slide style="color: black">
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>Optimización del espacio</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p30" style="width: 100%" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p31" style="width: 100%" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </dibox>

        <!--QUINTO-->
        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px; cursor: pointer"
        >
          <div
            style="width: 100%"
            align="center"
            @click="showDialog6()"
            class="card1"
          >
            <div class="overlay"></div>
            <img :src="p44" style="height: 200px; width: 100%; object-fit: cover" />
            <h5 align="center" class="text-pre-wrap" style="word-break: break-word">
              MINERA PODEROSA
            </h5>
            <p align="center" style="color: rgba(185,185,185,0.8)">más info</p>
          </div>
        </div>
        <dibox v-show="dialog5" @close="hideDialog6()">
          <div class="container" style="overflow-x: hidden; width: 80vw">
            <div style="overflow-x: hidden">
              <div class="d-flex justify-content-between">
                <h2 class="d-flex justify-end">MINERA PODEROSA</h2>
                <div class="d-flex justify-start">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="hideDialog6()"
                  >
                    <h1>></h1>
                  </button>
                </div>
              </div>
              <div class="container">
                <hr class="solid">
                <swiper :loop="true" style="position: relative;" :autoHeight="true" class="swip">
                  <div class="boton1">
                    <boton />
                  </div>
                  <swiper-slide >
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>Situación inicial</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p33" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p34" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <img :src="p35" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row" align="center">
                          <div class="col-12 col-sm-6 col-md-4">
                            <h2 align="center">Estado Inical</h2>
                            <br />
                            <img :src="p36" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-4">
                            <h2 align="center">
                              Estudio mecánico de suelos y topografía
                            </h2>
                            <img :src="p37" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-12 col-md-4">
                            <h2 align="center">
                              Trazo y replanteo para Losa SuperPlana
                            </h2>
                            <img :src="p38" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <br />
                            <br />
                            <h2 align="center">Losa SuperPlana</h2>
                            <video controls style="width: 100%; height: 400px; object-fit: cover; padding-bottom: 30px">
                              <source :src="p3" type="video/mp4" />
                            </video>
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <h2 align="center">
                              Montaje de Almacén Autoportante
                            </h2>
                            <video controls style="width: 100%; height: 400px; object-fit: cover; padding-bottom: 30px">
                              <source :src="p4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <h2 align="center">
                              Montaje de oficinas modulares
                            </h2>
                            <video controls style="width: 100%; padding-bottom: 30px">
                              <source :src="p5" type="video/mp4" />
                            </video>
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <h2 align="center">Cerramiento fachada</h2>
                            <br class="d-none d-sm-flex d-md-none" />
                            <br class="d-none d-sm-flex d-md-none" />
                            <video controls style="width: 100%; padding-bottom: 30px">
                              <source :src="p6" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col-12 col-sm-4 col-md-4">
                            <h2 align="center">Montaje cantiléver</h2>
                            <video controls style="width: 100%; padding-bottom: 30px">
                              <source :src="p7" type="video/mp4" />
                            </video>
                          </div>
                          <div class="col-12 col-sm-4 col-md-4">
                            <h2 align="center">Montaje de tijerales</h2>
                            <video controls style="width: 100%; padding-bottom: 30px">
                              <source :src="p8" type="video/mp4" />
                            </video>
                          </div>
                          <div class="col-12 col-sm-4 col-md-4">
                            <h2 align="center">Montaje de cubierta</h2>
                            <video controls style="width: 100%; padding-bottom: 30px">
                              <source :src="p9" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <h2 align="center">interiores</h2>
                            <video controls style="width: 100%; height: 400px; object-fit: cover; padding-bottom: 30px">
                              <source :src="p10" type="video/mp4" />
                            </video>
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <h2 align="center">Patio Anexo</h2>
                            <video controls style="width: 100%; height: 400px; object-fit: cover; padding-bottom: 30px">
                              <source :src="p11" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>Propuesta Final</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p39" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p40" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <img :src="p41" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="container">
                        <div class="row">
                          <div class="col">
                            <h2>PROPUESTA FINAL</h2>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p42" style="width: 100%; padding-bottom: 30px" />
                          </div>
                          <div class="col-12 col-sm-6 col-md-6">
                            <img :src="p32" style="width: 100%; padding-bottom: 30px" />
                          </div>
                        </div>
                      </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </dibox>

        <div
          v-scrolls
          class="flex d-flex align-self-stretch col-6 col-sm-4 col-md-4"
          style="padding-bottom: 20px"
        >
          <div class="card1" style="width: 100%" align="center">
            <video controls style="width: 100%; height: 200px; object-fit: cover">
              <source :src="p43" type="video/mp4" />
            </video>
            <h5 align="center" class="text-pre-wrap">
              SIMULACIÓN PARA EMPRESA INDUSTRIAL
            </h5>
          </div>
        </div>
      </div>
    </div>
    <dibox v-show="dialog" @close="hideDialog()" style="overflow-x: hidden">
      <div class="container" style="overflow-x: hidden; width: 80vw">
        <div style="overflow-x: hidden">
          <div class="d-flex justify-content-between" style="overflow-x: hidden">
            <h2 class="d-flex justify-end">CD GLORIA</h2>
            <div class="d-flex justify-start">
              <button
                type="button"
                class="btn btn-danger"
                @click="hideDialog()"
              >
                <h1>></h1>
              </button>
            </div>
          </div>
          <hr class="solid">
          <div class="container" style="overflow-x: hidden">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-6">
                <h2>Centro de distribución más alto del Perú</h2>
                <ol
                  align="justify"
                  style="padding-right: 3vh; padding-left: 3vh; font-size: 100%"
                >
                  <li>Capacidad 5000 ''s</li>
                  <li>Almacén Autoportante</li>
                  <li>Altura; 19 m</li>
                  <li>
                    Almacenamiento

                    <ol
                      align="justify"
                      style="
                        padding-right: 3vh;
                        padding-left: 6vh;
                        font-size: 100%;
                      "
                    >
                      <li>Sistema Satelital</li>
                      <li>Estantería Selectiva</li>
                    </ol>
                  </li>
                  <li>Equipos MH Trilaterales</li>
                  <li>
                    Equipos de Rampa
                    <ol
                      align="justify"
                      style="
                        padding-right: 3vh;
                        padding-left: 6vh;
                        font-size: 100%;
                      "
                    >
                      <li>Niveladores Verticales</li>
                      <li>Puertas Seccionales</li>
                      <li>Abrigos</li>
                    </ol>
                  </li>
                </ol>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <img :src="p13" style="height: 100%; width: 100%; object-fit: contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dibox>
  </div>
</template>
<script>
import video1 from "../assets/imagenes/super4.mp4";
import video2 from "../assets/imagenes/proyect.mp4";
import video3 from "../assets/imagenes/losa.mp4";
import video4 from "../assets/imagenes/autoportante.mp4";
import video5 from "../assets/imagenes/oficinas.mp4";
import video6 from "../assets/imagenes/fachada.mp4";
import video7 from "../assets/imagenes/cantiller.mp4";
import video8 from "../assets/imagenes/tijerales.mp4";
import video9 from "../assets/imagenes/cubierta.mp4";
import video10 from "../assets/imagenes/interiores.mp4";
import video11 from "../assets/imagenes/patio-anexo.mp4";
import video12 from "../assets/imagenes/proyect.mp4";
import ima1 from "../assets/imagenes/proyecto3.jpg";
import ima2 from "../assets/Gloria/Gloria.jpg";
import ima3 from "../assets/imagenes/proyecto1.jpg";
import ima4 from "../assets/imagenes/proyecto2.jpg";
import ima5 from "../assets/imagenes/proyecto3.jpg";
import ima6 from "../assets/imagenes/proyecto5.jpg";
import ima7 from "../assets/imagenes/proyecto6.jpg";
import ima8 from "../assets/imagenes/proyecto7.jpg";
import ima9 from "../assets/imagenes/proyecto8.jpg";
import ima10 from "../assets/imagenes/proyecto9.jpg";
import ima11 from "../assets/imagenes/proyecto10.jpg";
import ima12 from "../assets/imagenes/proyecto11.jpg";
import ima13 from "../assets/imagenes/proyecto12.jpg";
import ima14 from "../assets/imagenes/gif1.gif";
import ima15 from "../assets/imagenes/proyecto18.jpg";
import ima16 from "../assets/imagenes/proyecto19.jpg";
import ima17 from "../assets/imagenes/proyecto20.jpg";
import ima18 from "../assets/imagenes/gif2.gif";
import ima19 from "../assets/imagenes/proyecto25.jpg";
import ima20 from "../assets/imagenes/proyecto26.jpg";
import ima21 from "../assets/imagenes/proyecto40.jpeg";
import ima22 from "../assets/imagenes/proyecto27.jpg";
import ima23 from "../assets/imagenes/proyecto28.jpg";
import ima24 from "../assets/imagenes/proyecto29.jpg";
import ima25 from "../assets/imagenes/proyecto37.jpg";
import ima26 from "../assets/imagenes/proyecto38.jpg";
import ima27 from "../assets/imagenes/proyecto39.jpg";
import ima28 from "../assets/imagenes/proyecto30.jpg";
import ima29 from "../assets/imagenes/proyecto31.jpg";
import ima30 from "../assets/imagenes/proyecto32.jpg";
import ima31 from "../assets/imagenes/gif3.gif";
import ima32 from "../assets/imagenes/poderosa.jpg";
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  data() {
    return {
      dialog0: false,
      p1: video1,
      p2: video2,
      p3: video3,
      p4: video4,
      p5: video5,
      p6: video6,
      p7: video7,
      p8: video8,
      p9: video9,
      p10: video10,
      p11: video11,
      p12: ima1,
      p13: ima2,
      p14: ima3,
      p15: ima4,
      p16: ima5,
      p17: ima6,
      p18: ima7,
      p19: ima8,
      p20: ima9,
      p21: ima10,
      p22: ima11,
      p23: ima12,
      p24: ima13,
      p25: ima14,
      p26: ima15,
      p27: ima16,
      p28: ima17,
      p29: ima18,
      p30: ima19,
      p31: ima20,
      p32: ima21,
      p33: ima22,
      p34: ima23,
      p35: ima24,
      p36: ima25,
      p37: ima26,
      p38: ima27,
      p39: ima28,
      p40: ima29,
      p41: ima30,
      p42: ima31,
      p43: video12,
      p44: ima32,
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      scrollPosition: 0,
    };
  },
  unmounted() {
    document.body.style.position = "static";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflowY = "";
    window.scrollTo({top: this.scrollPosition, behavior: "instant"});
  },
  methods: {
    showDialog() {
      this.scrollPosition = window.pageYOffset;
      this.dialog = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog1() {
      this.scrollPosition = window.pageYOffset;
      this.dialog0 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog2() {
      this.scrollPosition = window.pageYOffset;
      this.dialog1 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog3() {
      this.scrollPosition = window.pageYOffset;
      this.dialog2 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog4() {
      this.scrollPosition = window.pageYOffset;
      this.dialog3 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog5() {
      this.scrollPosition = window.pageYOffset;
      this.dialog4 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    showDialog6() {
      this.scrollPosition = window.pageYOffset;
      this.dialog5 = true;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    },
    hideDialog() {
      this.dialog = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog1() {
      this.dialog0 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog2() {
      this.dialog1 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog3() {
      this.dialog2 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog4() {
      this.dialog3 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog5() {
      this.dialog4 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
    hideDialog6() {
      this.dialog5 = false;
      document.body.style.position = "static";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo({top: this.scrollPosition, behavior: "instant"});
    },
  },
});
</script>
<style scoped>
.card1 {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  position: relative;
}
.card1:hover .overlay {
  opacity: 1;
  background-color: rgba(129, 129, 129, 0.171);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateX(0px);
}
.boton1 {
  position: absolute; 
  top: 0; 
  width: 100%; 
  height: 100%; 
  transition: opacity 0.3s ease-in-out;
  opacity: 0
}
.swip:hover .boton1 {
  opacity: 1
}
</style>
