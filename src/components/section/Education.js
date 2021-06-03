import React from "react";
import Skills from "../layouts/Skills";
import { about, skillsBar, section2title } from "../../profile";
import ProfileImg from "../../profile1.png";

const Education = () => {
  return (
    <div id="about" className="effect2">
      <div data-aos="zoom-in-up" data-aos-once="true" className="row">
        <div
          className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"
          id="not"
        >
          <img src={ProfileImg} alt="Profile" height="350" />
          {/* <h1>Hello</h1> */}
        </div>
        <div className="col-12 offset-md-1 col-md-6 about">
          <div className="About-title-box">
            <h1 id="About" className="red-line">
              {section2title}
            </h1>
          </div>
          <p className="lead about-text">{about.paragraph}</p>
        </div>
      </div>
      {/* <div id="Skills">
        <div className="row d-flex justify-content-center skills">
          {skillsBar.map((x) => (
            <Skills faClass={x.faClass} label={x.name} />
          ))}
        </div>
      </div> */}

      <section id="resume" class="resume-section section-padding">
        <div class="container">
          <h2 class="section-title wow" data-wow-duration="1.5s">
            Resume
          </h2>

          <div class="row">
            <div class="col-md-12">
              <div id="edu" class="resume-title wow">
                <h2 class="text-center text-primary">Education</h2>
              </div>

              <div class="resume">
                <ul class="timeline">
                  <li class="">
                    <div class="posted-date">
                      <span class="month">2003 - 2004</span>
                    </div>

                    <div
                      id="edu-01"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-10 col-xs-9 pull-left">
                            <h3 class="panel-title">Master's degree</h3>
                            <span class="text-danger">
                              {" "}
                              - diploma with honors
                            </span>
                          </div>

                          <div class="col-md-2 col-xs-3 pull-right text-center">
                            <i class="fas fa-3x fa-user-graduate text-success"></i>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <p>
                            Electromechanical Engineering
                            <br />
                            Kremenchuk State Polytechnical University, Ukraine
                            <br />
                            <strong>7.091003</strong> - Design Engineer of
                            Electronic Equipment
                          </p>
                          <p>
                            Awarded an honorary diploma for the{" "}
                            <strong class="text-info">2nd place</strong> in the
                            competition for the best thesis project
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="timeline-inverted">
                    <div class="posted-date">
                      <span class="month">1999 - 2003</span>
                    </div>

                    <div
                      id="edu-02"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-10 col-xs-9 pull-left">
                            <h3 class="panel-title pane">Bachelor's degree</h3>
                            <span class="text-primary">
                              {" "}
                              - graduate diploma
                            </span>
                          </div>

                          <div class="col-md-2 col-xs-3 pull-right text-center">
                            <i class="fas fa-3x fa-graduation-cap text-success"></i>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <p>
                            Electromechanical Engineering
                            <br />
                            Kremenchuk State Polytechnical University, Ukraine
                            <br />
                            <strong>7.091003</strong> - Design Engineer of
                            Electronic Equipment
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div id="career" class="resume-title wow">
                <h2 class="text-center text-primary">Employment History</h2>
              </div>

              <div class="resume">
                <ul class="timeline">
                  <li class="">
                    <div class="posted-date">
                      <span class="month">2019 - 2020</span>
                      <span class="month hue">&nbsp;Current&nbsp;</span>
                      <span class="month hue">
                        <i class="fas fa-1x fa-fw fa-heart hue"></i>
                      </span>
                    </div>

                    <div
                      id="car-06"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-3 col-xs-4 pull-right">
                            <a
                              href="http://bit.ly/dna325-off"
                              class="thumbnail"
                              target="_blank"
                              rel="noopener"
                            >
                              {/* <picture>
                            <source srcset="assets/img/logos/logo-dna325-sm.webp" type="image/webp">
                            <source srcset="assets/img/logos/logo-dna325-sm.png" type="image/png">
                            <img src="assets/img/logos/logo-dna325-sm.png" class="media-object" max-width="100%" height="auto" alt="DNA325" />
                          </picture> */}
                            </a>
                          </div>

                          <div class="col-md-9 col-xs-8 pull-left">
                            <h3 class="panel-title">Software Architect</h3>
                            <span>
                              <a
                                href="http://bit.ly/dna325-off"
                                class="h4 text-success"
                                target="_blank"
                                rel="noopener"
                              >
                                DNA325
                              </a>
                              <br />
                              Ukraine
                            </span>
                            <span>Ukraine</span>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <div class="alert alert-sm alert-info">
                            Creator of software architecture, servers
                            communication model, network infrastructure. Senior
                            node.js developer, Technical documentation writer,
                            DBA and bearded DevOps :) Provided full-time support
                            from early beginning of the project development
                            lifecycle to the date of its successful launch.
                          </div>

                          <ul>
                            <li>
                              <strong>
                                MERN +{" "}
                                <a
                                  href="http://graphql.org"
                                  target="_blank"
                                  rel="noopener"
                                  class="text-primary"
                                >
                                  GraphQL
                                </a>
                              </strong>
                            </li>
                            <li>
                              Node.js, React,{" "}
                              <a
                                href="https://github.com/foreversd/forever"
                                target="_blank"
                                rel="noopener"
                                class="text-primary"
                              >
                                forever
                              </a>
                              , MongoDB, Redis, Socket.io
                            </li>
                            <li>
                              <strong></strong>Express.js, Passport.js, session,
                              flash
                            </li>
                            <li>
                              <a
                                href="https://kaltura.org"
                                target="_blank"
                                rel="noopener"
                                class="text-primary"
                              >
                                Kaltura
                              </a>
                              ,{" "}
                              <a
                                href="http://fondy.ua/"
                                target="_blank"
                                rel="noopener"
                                class="text-primary"
                              >
                                Fondy
                              </a>
                              ,{" "}
                              <a
                                href="https://graphql-compose.github.io/"
                                target="_blank"
                                rel="noopener"
                                class="text-primary"
                              >
                                graphql-compose
                              </a>
                            </li>
                            <li>
                              Mongoose, RSMQ-Worker, Nodemailer, Handlebars,
                              Multer, Scheduler, Chai, Mocha
                            </li>
                          </ul>

                          <p class="alert alert-warning">
                            <strong class="text-primary hue">LAB325</strong> -
                            is a Product Engineering team with R&D facilities.
                            <br />
                            Specialized in whole IT solution services for
                            fast-growing organizations around the world.
                          </p>
                        </div>
                      </div>

                      <div class="panel-footer timeline-footer">
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="technologies"
                        >
                          <div class="btn-group" role="group">
                            <i
                              class="fab fa-2x fa-fw fa-node"
                              title="Node.js"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-dice-d20 fa-graphql"
                              title="GraphQL"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-node-js"
                              title="Express.js"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-js-square"
                              title="JavaScript"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-mdb fa-mongodb"
                              title="MongoDB"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-ubuntu"
                              title="Ubuntu"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-cube fa-redis"
                              title="Redis"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-docker"
                              title="Docker"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-bitbucket"
                              title="BitBucket"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-digital-ocean"
                              title="Digital Ocean"
                            ></i>
                            <i class="fab fa-2x fa-fw fa-jira" title="JIRA"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="timeline-inverted">
                    <div class="posted-date">
                      <span class="month">2016 - 2017</span>
                    </div>

                    <div
                      id="car-05"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-3 col-xs-4 pull-right">
                            <a
                              href="http://bit.ly/cg-off"
                              class="thumbnail"
                              target="_blank"
                              rel="noopener"
                            >
                              {/* <picture>
                            <source srcset="assets/img/logos/logo-cg-sm.webp" type="image/webp">
                            <source srcset="assets/img/logos/logo-cg-sm.png" type="image/png">
                            <img src="assets/img/logos/logo-cg-sm.png" class="media-object" max-width="100%" height="auto" alt="Carts Guru" />
                          </picture> */}
                            </a>
                          </div>

                          <div class="col-md-9 col-xs-8 pull-left">
                            <h3 class="panel-title">
                              Senior Node.js Developer
                            </h3>
                            <span>
                              <a
                                href="http://bit.ly/cg-off"
                                class="h4 text-success"
                                target="_blank"
                                rel="noopener"
                              >
                                Carts Guru LLC
                              </a>
                              <br />
                              Kyiv, Ukraine
                            </span>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <p>
                            eCommerce platforms (Shopify, Magento, WooCommerce,
                            PrestaShop){" "}
                            <strong class="text-primary">
                              Visitors Tracker
                            </strong>{" "}
                            with cross-site customer identification and behavior
                            prediction. Used to boost conversion rate and
                            on-site revenue by sharing data and communicating
                            with Machine Learning Engine through API interface.
                          </p>
                          <p>
                            Later it was used as a core module for creation of
                            enterprise-level software named{" "}
                            <strong>
                              <a
                                href="javascript:void(0);"
                                target="_self"
                                rel="noopener"
                                class="text-primary"
                              >
                                Visitors Guru
                              </a>
                            </strong>{" "}
                            - simple tool to find out what companies are
                            visiting website.
                          </p>
                        </div>
                      </div>

                      <div class="panel-footer timeline-footer">
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="technologies"
                        >
                          <div class="btn-group" role="group">
                            <i
                              class="fab fa-2x fa-fw fa-ubuntu"
                              title="Ubuntu"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-node"
                              title="Node.js"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-js-square"
                              title="JavaScript"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-mdb fa-mongodb"
                              title="MongoDB"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-facebook"
                              title="Facebook API"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-shopify"
                              title="Shopify API"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-html5"
                              title="HTML5"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-facebook-messenger"
                              title="Facebook Messenger Platform"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-aws"
                              title="Amazon Web Services"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-bitbucket"
                              title="BitBucket"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-docker"
                              title="Docker"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-git-square"
                              title="Git"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-cube fa-redis"
                              title="Redis"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="">
                    <div class="posted-date">
                      <span class="month">2010 - 2015</span>
                    </div>

                    <div
                      id="car-04"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-3 col-xs-4 pull-right text-left">
                            <i
                              class="fab fa-5x fa-fw fa-magento"
                              title="Magento Commerce"
                            ></i>
                            <i
                              class="fab fa-3x fa-fw fa-ebay hidden-xs-0"
                              title="eBay Enterprise"
                            ></i>
                          </div>

                          <div class="col-md-9 col-xs-8 pull-left">
                            <h3 class="panel-title">Operations Team Lead</h3>
                            <span>
                              <a
                                href="http://bit.ly/mage-off"
                                class="h4 text-success"
                                target="_blank"
                                rel="noopener"
                              >
                                Magento Inc
                              </a>
                              <br />
                              Kyiv, Ukraine
                            </span>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <div class="alert alert-sm alert-info">
                            <strong>
                              Lead of team providing operations services for
                              supporting of high-loaded web-systems
                            </strong>
                          </div>

                          <ul>
                            <li>Deployment and configuration automation</li>
                            <li>24/7 monitoring and support</li>
                            <li>Incidents management</li>
                            <li>Operating Systems: Redhat, CentOS, Ubuntu</li>
                            <li>
                              Cloud platforms: public and private OpenStack
                            </li>
                            <li>
                              Infrastructure: LAMP, Docker, Git, MySQL, MongoDB,
                              Solr, Redis, Nginx, Apache, Zabbix
                            </li>
                            <li>
                              Web: PHP, Bootstrap, AJAX, JSON, HTML, CSS, jQuery
                            </li>
                            <li>APIs: JIRA, OpenStack, Zabbix</li>
                          </ul>
                        </div>
                      </div>

                      <div class="panel-footer timeline-footer">
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="technologies"
                        >
                          <div class="btn-group" role="group">
                            <i
                              class="fab fa-2x fa-fw fa-centos"
                              title="CentOS"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-docker"
                              title="Docker"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-github"
                              title="GitHub"
                            ></i>

                            <i
                              class="fab fa-2x fa-fw fa-html5"
                              title="HTML"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-bootstrap"
                              title="BootStrap"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-redhat"
                              title="Red Hat"
                            ></i>

                            <i
                              class="fab fa-2x fa-fw fa-css3-alt"
                              title="CSS"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-database fa-mysql"
                              title="MySQL"
                            ></i>
                            <i class="fab fa-2x fa-fw fa-php" title="PHP"></i>
                            <i
                              class="fab fa-2x fa-fw fa-js-square"
                              title="JavaScript"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-mdb fa-mongodb"
                              title="MongoDB"
                            ></i>

                            <i
                              class="fab fa-2x fa-fw fa-cc-paypal"
                              title="PayPal"
                            ></i>
                            <i class="fab fa-2x fa-fw fa-jira" title="JIRA"></i>
                            <i
                              class="fab fa-2x fa-fw fa-confluence"
                              title="Confluence"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="timeline-inverted">
                    <div class="posted-date">
                      <span class="month">2008 - 2009</span>
                    </div>

                    <div
                      id="car-03"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-5 col-xs-5 pull-right">
                            <a
                              href="http://bit.ly/rc-off"
                              class="thumbnail"
                              target="_blank"
                              rel="noopener"
                            >
                              {/* <picture>
                            <source srcset="assets/img/logos/logo-rc-md.webp" type="image/webp">
                            <source srcset="assets/img/logos/logo-rc-md.png" type="image/png">
                            <img src="assets/img/logos/logo-rc-md.png" class="media-object" max-width="220px" max-height="43px" width="220px" height="auto" alt="Running Code LLC" />
                          </picture> */}
                            </a>
                          </div>

                          <div class="col-md-7 col-xs-7 pull-left">
                            <h3 class="panel-title">
                              Senior Systems Administrator
                            </h3>
                            <span>
                              <a
                                href="http://bit.ly/rc-off"
                                class="h4 text-success"
                                target="_blank"
                                rel="noopener"
                              >
                                Running Code LLC
                              </a>
                              <br />
                              Kyiv, Ukraine
                            </span>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <p></p>
                        </div>
                      </div>

                      <div class="panel-footer timeline-footer">
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="technologies"
                        >
                          <div class="btn-group" role="group">
                            <i
                              class="fab fa-2x fa-fw fa-linux"
                              title="Linux"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-database fa-mysql"
                              title="MySQL"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-java"
                              title="Apache Tomcat"
                            ></i>
                            <i class="fab fa-2x fa-fw fa-php" title="PHP"></i>
                          </div>
                          <div class="btn-group" role="group">
                            <i
                              class="fab fa-2x fa-fw fa-jenkins"
                              title="Jenkins"
                            ></i>
                            <i class="fab fa-2x fa-fw fa-jira" title="JIRA"></i>
                            <i
                              class="fab fa-2x fa-fw fa-confluence"
                              title="Confluence"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="">
                    <div class="posted-date">
                      <span class="month">2006 - 2008</span>
                    </div>

                    <div
                      id="car-02"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-3 col-xs-3 pull-right">
                            <a
                              href="http://bit.ly/m1-off"
                              class="thumbnail"
                              target="_blank"
                              rel="noopener"
                            >
                              {/* <picture>
                            <source srcset="assets/img/logos/logo-m1-sm.webp" type="image/webp">
                            <source srcset="assets/img/logos/logo-m1-sm.png" type="image/png">
                            <img src="assets/img/logos/logo-m1-sm.png" class="media-object" max-width="95px" max-height="95px" width="95px" height="auto" alt="M1 Television Music Channel" />
                          </picture> */}
                            </a>
                          </div>

                          <div class="col-md-9 col-xs-9 pull-left">
                            <h3 class="panel-title">IT Engineer</h3>
                            <span>
                              <a
                                href="http://bit.ly/m1-off"
                                class="h4 text-success"
                                target="_blank"
                                rel="noopener"
                              >
                                M1 TV Music Channel
                              </a>
                              <br />
                              Kyiv, Ukraine
                            </span>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <p>
                            <a
                              href="//www.ffmpeg.org/"
                              target="_blank"
                              rel="noopener"
                              class="text-primary"
                            >
                              FFmpeg
                            </a>
                            , perl, MySQL, php
                          </p>
                        </div>
                      </div>

                      <div class="panel-footer timeline-footer">
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="technologies"
                        >
                          <div class="btn-group" role="group">
                            <i
                              class="fab fa-2x fa-fw fa-fedora"
                              title="Fedora"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-windows"
                              title="Microsoft Windows Server"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-apple"
                              title="Apple Macintosh"
                            ></i>
                          </div>
                          <div class="btn-group" role="group">
                            <i class="fab fa-2x fa-fw fa-php" title="PHP"></i>
                            <i
                              class="fas fa-2x fa-fw fa-database fa-mysql"
                              title="MySQL"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-code fa-perl"
                              title="Perl"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="timeline-inverted">
                    <div class="posted-date">
                      <span class="month">2004 - 2006</span>
                    </div>

                    <div
                      id="car-01"
                      class="panel panel-success timeline-panel wow"
                      data-wow-duration="1.5s"
                    >
                      <div class="timeline-content">
                        <div class="panel-heading timeline-heading row">
                          <div class="col-md-12 col-xs-12 pull-left">
                            <h3 class="panel-title">
                              Programs and Operations Manager
                            </h3>
                            <span>
                              <a
                                href="javascript:void(0);"
                                class="h4 text-success"
                                target="_blank"
                                rel="noopener"
                              >
                                StanArt LLC
                              </a>
                              <br />
                              Kremenchuk, Ukraine
                            </span>
                          </div>
                        </div>

                        <div class="panel-body timeline-body">
                          <p>
                            Development, implementation and support of
                            company-wide automated operations and finances{" "}
                            <a
                              href="http://bit.ly/sklad-git"
                              class="text-primary"
                              target="_blank"
                              rel="noopener"
                            >
                              Management system
                            </a>
                          </p>
                        </div>
                      </div>

                      <div class="panel-footer timeline-footer">
                        <div
                          class="btn-toolbar"
                          role="toolbar"
                          aria-label="technologies"
                        >
                          <div class="btn-group" role="group">
                            <i
                              class="fas fa-2x fa-fw fa-database fa-mysql"
                              title="SQL"
                            ></i>
                            <i
                              class="fab fa-2x fa-fw fa-windows"
                              title="Microsoft Windows"
                            ></i>
                            <i
                              class="fas fa-2x fa-fw fa-code fa-foxpro"
                              title="Visual FoxPro"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
