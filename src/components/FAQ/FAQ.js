import React from "react";
import Faq from "react-faq-component";
import networkShape from '../../assets/networkShape.svg'
import CallToActionBtn from "../CallToActionBtn/CallToActionBtn";
import "./FAQ.scss";

const data = {
  rows: [
    {
      title: "How do I book a meeting?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How to subscribe to an annual plan?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How do I contact HookSales?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Is it an issue if my brand is small?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  bgColor: "#0E1041",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "#636483",
  arrowColor: "#4FACFE",
};

const config = {
   animate: true,
   //arrowIcon: "v",
   tabFocus: true
};
const FAQ = () => {
  return (
    <section className="faq__container" id="FAQ">
    <img className="faq__container__networkShape" src={networkShape} alt="" />
      <div className="faq__container__miniContainer">
        <div className="faq__container__left">
          <h1 className="faq__container--title">FAQs</h1>
          <p className="faq__container--p">In case you need help...</p>
      <CallToActionBtn title="#fff"  iconBackground="#fff" iconColor="#4facfe" backgroundColor="#4FACFE" content="Learn More"/>
         
         {/*
           <button className="faq__container--button">Learn More</button>
          */}
        </div>

        <div className="faq__container__faq__container" >
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
