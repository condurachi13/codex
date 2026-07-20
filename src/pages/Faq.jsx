import Header from "../components/Header";
import Footer from "../components/Footer";
import { sitePath } from "../paths";
import { useState } from "react";

const questions = [
  {
    question: "Is car window tinting legal in the UK?",
    answer: <p>Yes—provided the finished vehicle meets the legal light-transmission limits for the windscreen and front side windows. The rules are different for the rear windscreen and rear passenger windows.</p>,
  },
  {
    question: "What are the legal limits for the front windows?",
    answer: <p>For vehicles first used on or after 1 April 1985, the front windscreen must let at least 75% of light through and the front side windows must let at least 70% through. For vehicles first used before 1 April 1985, both must let at least 70% of light through.</p>,
  },
  {
    question: "Can I tint the rear windows?",
    answer: <p>National rules do not set light-transmission limits for the rear windscreen or rear passenger windows. This is where darker privacy shades are normally fitted. If your vehicle is used as a taxi or private-hire vehicle, check with the relevant licensing authority first—local licence conditions can be stricter.</p>,
  },
  {
    question: "Can I add film to my front side windows?",
    answer: <p>The legal limit applies to the finished window, including any factory tint and film together. Many modern vehicles already have some tint in their glass, so adding film to the front side windows can take the vehicle below the 70% requirement. We will discuss suitable options with you before installation.</p>,
  },
  {
    question: "Is chameleon windscreen tint legal?",
    answer: <p>Any windscreen tint, including chameleon film, must still allow the legally required amount of light through. It must also not obscure the driver’s view. Ask us about the intended finish and your vehicle before booking.</p>,
  },
  {
    question: "How is window tint checked?",
    answer: <p>Police officers and DVSA vehicle examiners can use light-measuring equipment to test the tint on the windscreen and front side windows. The measurement is taken from the installed glass and film together.</p>,
  },
  {
    question: "What happens if my front windows are too dark?",
    answer: <p>You may receive a prohibition notice that prevents you using the vehicle on the road until the extra tint is removed. You could also receive a penalty notice or court summons.</p>,
  },
  {
    question: "Which tint shade should I choose?",
    answer: <p>The right choice depends on the window position, existing glass tint, your privacy preference and how you use the vehicle. We can help you compare shades and select a suitable rear-window film at your consultation.</p>,
  },
];

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <main className="subpage faq-page">
      <Header />
      <section className="subhero">
        <div className="subhero-image" />
        <div className="shell">
          <p className="eyebrow">Tintopia Bristol</p>
          <h1>WINDOW TINT FAQ</h1>
          <p>Clear guidance on window tinting and the UK rules that apply to your vehicle.</p>
        </div>
      </section>
      <section className="faq-content shell">
        <p className="faq-intro">This is general guidance for vehicles used in Great Britain, not legal advice. Rules can change, so check the official guidance if you are unsure.</p>
        <div className="faq-list">
          {questions.map(({ question, answer }, index) => (
            <section className={openQuestion === index ? "faq-item is-open" : "faq-item"} key={question}>
              <h2>
                <button
                  type="button"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  aria-expanded={openQuestion === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {question}
                </button>
              </h2>
              <div className="faq-answer" id={`faq-answer-${index}`}>
                <div>{answer}</div>
              </div>
            </section>
          ))}
        </div>
        <p className="faq-source">Read the current official rules: <a href="https://www.gov.uk/tinted-vehicle-window-rules" target="_blank" rel="noreferrer">GOV.UK — Tinted vehicle windows: the law</a>.</p>
        <a className="quote" href={sitePath("booknow/")}>Book a consultation</a>
      </section>
      <Footer />
    </main>
  );
}
