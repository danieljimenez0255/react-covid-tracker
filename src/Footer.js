import React from "react";
import "./Footer.css";
import who from "./footer-images/WHO.webp";
import cross from "./footer-images/red_cross.webp";
import insta from "./footer-images/insta_logo.webp";
import linkedIn from "./footer-images/linkedIn.webp";
import twitter from "./footer-images/twitter.webp";
import faceBook from "./footer-images/facebook.webp";
import ToolTip from "@material-ui/core/Tooltip";

import { Card } from "@material-ui/core";
import "./footer-mediaQuiries.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <footer className="footerM">
      <div className="footer__containerM">
        <Card>
          <div className="footer__containerDesc">
            <h1>About the Page</h1>
            <p>
              I hope this page gave you important knowledge about the
              seriousness of Covid-19. It is a deadly virus that has already
              done so much. Just be safe the world can't afford to lose you
              beautiful people. And I'd like to thank you for taking the time to
              check out my web page it means a lot and it'll especially mean
              more if you benefit from this. Below is a list of links to various
              sources.
            </p>
          </div>
        </Card>
        <div className="footer__containerLinks">
          <div className="footer__containerLinksSections ">
            <Card>
              <h1>Resources</h1>
              <div className="footer__containerLinksSectionsContainer">
                <div className="footer__containerLinksSectionsOne">
                  <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-face-masks-what-you-need-to-know">
                    Choose the right mask
                  </a>

                  <a href="https://www.amazon.com/Best-Sellers-Health-Personal-Care-6469223010-Masks/zgbs/hpc/6125377011">
                    Buy Masks
                  </a>

                  <a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/donate-covid-19-plasma">
                    Donate Blood to Help!
                  </a>

                  <a href="https://www.fidelitycharitable.org/articles/three-ways-you-can-help-during-the-covid-19-pandemic.html">
                    Other ways to help!
                  </a>
                </div>
                <div className="footer__containerLinksSectionsTwo">
                  <a href="https://unos.org/covid/">More Info</a>

                  <a href="https://www.washingtonpost.com/nation/2020/03/21/how-you-can-help-during-coronavirus/?arc404=true">
                    Nonprofit resources
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <div className="footer__containerLinksSections">
            <Card>
              <h1>Page Sections</h1>
              <div className="footer__pageSectionLinks">
                <div className="footer__pageSectionLinksOne">
                  <a href="#main">Go to Top</a>
                  <a href="#informed">Go to Informed Section</a>
                </div>
                <div className="footer__pageSectionLinksTwo">
                  <a href="#graphs">Go to Graphs</a>
                  <a href="#footer">Go to Footer</a>
                </div>
              </div>
            </Card>
          </div>
          <div className="footer__containerLinksSections">
            <Card>
              <h1>Socials and Ways to help!</h1>
              <div className="footer__socialsHelpSection">
                <div className="footer__socialsHelpSectionIcons">
                  <h1>Donate Here:</h1>
                  <div className="footer__socialHelpIconsMain">
                    <div className="footer__socialHelpIconsMainC who__logo">
                      <ToolTip
                        title="WHO Covid-19 Response Fund"
                        classes={{
                          tooltip: "toolTip-sty",
                          arrow: "toolTip-styT",
                        }}
                        placement="top"
                        className="icon__toolTips"
                        arrow
                      >
                        <a href="https://covid19responsefund.org/en/">
                          <img
                            src="https://cdn0.iconfinder.com/data/icons/internet-line/512/Internet_Line-01-128.png"
                            alt="WHO organization"
                          />
                        </a>
                      </ToolTip>
                    </div>
                    <div className="footer__socialHelpIconsMainC">
                      <ToolTip
                        title="Feeding America"
                        classes={{
                          tooltip: "toolTip-sty",
                          arrow: "toolTip-styT",
                        }}
                        placement="top"
                        className="icon__toolTips"
                        arrow
                      >
                        <a href="https://www.feedingamerica.org/take-action/coronavirus">
                          <i class="fas fa-utensils fa-2x"></i>
                        </a>
                      </ToolTip>
                    </div>
                    <div className="footer__socialHelpIconsMainC cross__logo">
                      <ToolTip
                        title="Donate to American Red Cross"
                        classes={{
                          tooltip: "toolTip-sty",
                          arrow: "toolTip-styT",
                        }}
                        placement="top"
                        className="icon__toolTips"
                        arrow
                      >
                        <a href="https://www.redcrossblood.org/give.html/find-drive">
                          <i class="fas fa-hand-holding-medical fa-2x"></i>
                        </a>
                      </ToolTip>
                    </div>
                    <div className="footer__socialHelpIconsMainC">
                      <ToolTip
                        title="Boys and Girls Clubs of America"
                        classes={{
                          tooltip: "toolTip-sty",
                          arrow: "toolTip-styT",
                        }}
                        placement="top"
                        className="icon__toolTips"
                        arrow
                      >
                        <a href="https://www.bgca.org/">
                          <i class="fas fa-campground fa-2x"></i>
                        </a>
                      </ToolTip>
                    </div>
                    <div className="footer__socialHelpIconsMainC">
                      <ToolTip
                        title=" DonateCovid-19 Disaster Philanthropy"
                        classes={{
                          tooltip: "toolTip-sty",
                          arrow: "toolTip-styT",
                        }}
                        placement="top"
                        className="icon__toolTips"
                        arrow
                      >
                        <a href="https://disasterphilanthropy.org/donate-to-the-cdp-covid-19-response-fund/">
                          <i class="fas fa-stethoscope fa-2x"></i>
                        </a>
                      </ToolTip>
                    </div>
                  </div>
                </div>
                <div className="footer__socialsMediaIcons">
                  <h1>Socials:</h1>
                  <div className="footer__socialMediaIconsMain">
                    <div className="footer__socialMediaIconsMainC">
                      <a href="https://www.instagram.com/djimenez0255/">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-128.png"
                          alt="insta logo"
                        />
                      </a>
                    </div>
                    <div className="footer__socialMediaIconsMainC">
                      <a href="https://www.linkedin.com/in/daniel-jimenez-479b961a9/">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/social-media-2182/512/linked_in__social__media__social_media__-128.png"
                          alt="linkedIn logo"
                        />
                      </a>
                    </div>
                    <div className="footer__socialMediaIconsMainC">
                      <a href="https://twitter.com/djimenez_0255">
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/twitter-128.png"
                          alt="twitter logo"
                        />
                      </a>
                    </div>
                    <div className="footer__socialMediaIconsMainC">
                      <a href="https://www.facebook.com/profile.php?id=100009466409606">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_facebook-128.png"
                          alt="FaceBook logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
