import React from "react";
import { Link}  from 'react-router-dom';
//import MultiStepForm from "../../components/MultistepForm/MultistepForm";
import { FiArrowRight } from "react-icons/fi";
import "./CallToActionBtn.scss";

const CallToActionBtn = (props) => {

  

  return (
   <Link to="/MultistepForm">
      {/*Payment Link */}

      <button
        className="callToActionBtn__container"
        style={{ backgroundColor: `${props.backgroundColor}`, border: `${props.border}` }}
      >
        <div className="callToActionBtn__container__content" style={{ color: `${props.title}` }}>{props.content}</div>

        <div className="callToActionBtn__container__icon" style={{ backgroundColor: `${props.iconBackground}` }}>
          <FiArrowRight className="callToActionBtn__container--icon" style={{ color: `${props.iconColor}` }} />
        </div>
      </button>
   </Link>

    
  );
};

export default CallToActionBtn;
