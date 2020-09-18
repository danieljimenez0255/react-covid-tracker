import React from "react";
import "./SafetyTips.css";
import washHands from "./wash_hands.png";
import avoidCloseContact from "./social_distance.png";
import wearMask from "./wear_mask.png";
import cover from "./sneeze_coughSafetyTip.png";
import clean from "./clean_disinfect.png";
import monitor from "./monitor_health.png";

function SafetyTips() {
  return (
    <div className="safetyTips__container">
      <h1>How to stay safe during the Pandemic</h1>

      <div className="safetyTips__content">
        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Wash your hands often!</h2>
              <img src={washHands} alt="wash hands" />
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                Wash for at least 20 seconds especially if you were out in an
                public place. And if there isn't water and soap present, use
                Soap with at least 60% alcohol.Rub hands together after with the
                sanitizer until they feel dry. Also, be careful with the use of
                sanitizer and don't touch your face after applying the sanitizer
              </li>
            </ul>
          </li>
        </ol>

        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
          start="2"
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Avoid close contact!</h2>
              <img src={avoidCloseContact} alt="social distance" />
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                When inside your home, maintain at least six feet away from
                those who are sick. But when you are outside of your home,
                maintain a distance of six feet from others.
              </li>
            </ul>
          </li>
        </ol>

        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
          start="3"
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Always wear mask or face covering!</h2>
              <img src={wearMask} alt="wear mask" />
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                The mask/or covering is used to help protect others in case you
                are infected. This helps with social distancing issues but
                doesn't mean to stop maintaining social distancing when
                possible. Also, try to find other substitutes for surgical masks
                and N95 respirators as they are critically needed supplies for
                healthcare workers and first responders
              </li>
            </ul>
          </li>
        </ol>

        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
          start="4"
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Cover your coughs and sneezes!</h2>
              <img src={cover} alt="cover when coughing and/or sneezing" />
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                Always cover your mouth and nose with a issue when coughing or
                sneezing or you can also use the inside of your elbow to cover
                but do not spit! Then also make sure to throw away tissue in
                trash after coughing or sneezing into it. Finally, make sure to
                wash hands for 20 seconds after coughing or sneezing. If thats
                not possible, use hand sanitizer with at least 60% alcohol
              </li>
            </ul>
          </li>
        </ol>

        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
          start="5"
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Clean and Disinfect!</h2>
              <img src={clean} alt="Clean and Disinfect!" />
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                Clean and disinfect frequently touched surfaces daily. Also, if
                the surfaces are dirty, make sure to clean them. When cleaning,
                make sure to use a household disinfectant to get the best
                results when cleaning.
              </li>
            </ul>
          </li>
        </ol>
        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
          start="6"
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Monitor Your Health Daily!</h2>
              <img src={monitor} alt="monitor health" />
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                Be alert for symptoms such as fever, cough, shortness of breath,
                or other symptoms of COVID-19. Also, take temperature if
                symptoms do develop. Follow
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html"
                  target="_blank"
                  style={{ margin: "0 10px" }}
                >
                  CDC guidance
                </a>
                if symptoms do develop
              </li>
            </ul>
          </li>
        </ol>

        <ol
          className="safetyTips__contentList"
          style={{ border: "1px solid red" }}
          start="7"
        >
          <li className="safetyTips__contentListItems">
            <div>
              <h2>Want to find more essential info and resources?</h2>
            </div>
            <ul className="safetyTips__contentListItemsDesc">
              <li>
                Check out at the bottom of the page! It will contain a plethora
                of resources that will provide more information on safety tips
                and other essential information!
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default SafetyTips;
