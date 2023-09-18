import { Paper } from "./components/Paper/Paper";
import { Section } from "./components/Elements/Section";
import { Contacts } from "./components/Elements/Contacts";
import { Technical } from "./components/Elements/Technical";
import { Projects } from "./components/Elements/Projects";
import { LanguageSkills } from "./components/Elements/LanguageSkills";
import { Work } from "./components/Elements/Work";
import { Education } from "./components/Elements/Education";
import { Training } from "./components/Elements/Training";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let mainSec = 64;
  let sideSec = 4;
  const [data, setData] = useState();
  const [textArea, setTextArea] = useState();
  let url = "https://cv-react-300-default-rtdb.firebaseio.com/cv.json";

  useEffect(() => {
    getDataRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataRequest = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      setTextArea(JSON.stringify(response.data, null, 2));
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    let tempData = JSON.parse(textArea);
    axios
      .put(url, tempData)
      .then((response) => {
        setData(textArea);
      })
      .then((res) => getDataRequest());
  };

  const onFormChange = (e) => {
    // let tempData = JSON.parse(e.target.value);
    // setData(tempData);
    setTextArea(e.target.value);
  };

  const printPage = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <>
      <div className="d-flex flex-row-reverse justify-content-between">
        <form action="" className="w-100">
          <textarea
            name="textArea"
            id="textArea"
            value={textArea}
            onChange={onFormChange}
            className="form-control"
          ></textarea>
          <div className="buttons">
            <button className="btn btn-outline-danger p-2" onClick={printPage}>
              Print
            </button>
            <button className="btn btn-outline-primary p-2" onClick={onsubmit}>
              Update
            </button>
          </div>
        </form>
        <div className="App d-flex justify-content-center flex-column">
          <Paper counter="1">
            <div className="row justify-content-between">
              <div className={`col-${mainSec}`}>
                <Section
                  title="personal profile"
                  content={data?.personal}
                  img="location"
                />
                {/* <Section title="Work Experience" img="circle" class="Work">
                  <Work slice={[0, 4]} data={data?.WorkExperience} />
                </Section> */}
                <Section title="Technical Skills" img="location">
                  <ul>
                    {data?.TechnicalSkillsExplained?.map((elm, index) => {
                      return <li key={index}>{elm}</li>;
                    })}
                  </ul>
                </Section>
                {/* <Section
                  title="Soft Skills"
                  content={data?.InterpersonalSkillsExplained}
                  img="filler"
                /> */}
                <Section title="Education" class="Education w-100" bodyClass="w-900px" img="location">
                  <Education data={data?.Education} />
                </Section>
              </div>
              <div className={`col-${sideSec} py-3`}>
                <Contacts data={data?.Contacts} />
                <Technical data={data?.TechnicalSkills} />
                <LanguageSkills data={data?.languageSkills} />
              </div>
            </div>
          </Paper>

          {/* --------------------------------------------------------------- */}
          {/* paper2 */}
          <Paper counter="2">
            <div className="row justify-content-between">
              <div className={`col-${mainSec}`}>
                {/* <Section title="Education" class="Education" img="location">
                  <Education data={[data?.Education[1]]} />
                </Section> */}
                {/* <Section title="Work Experience" img="circle" class="Work">
                  <Work slice={[5]} data={data?.WorkExperience} />
                </Section> */}
                <Section title="Work Experience" img="circle" class="Work">
                  <Work slice={[0, 5]} data={data?.WorkExperience} />
                </Section>
                {/* <Section title="Technical Skills" img="location">
                  <ul>
                    {data?.TechnicalSkillsExplained?.map((elm, index) => {
                      return <li key={index}>{elm}</li>;
                    })}
                  </ul>
                </Section> */}
                {/* <Section
                  title="Soft Skills"
                  content={data?.InterpersonalSkillsExplained}
                  img="filler"
                /> */}
              </div>
              <div className={`col-${sideSec} py-3`}>
                <Projects data={data?.Projects} />
              </div>
            </div>
          </Paper>

          {/* --------------------------------------------------------------- */}
          {/* paper 3 */}
          <Paper counter="3">
            {/* <Section title="Education" class="Education" img="location">
              <Education data={data?.Education} />
            </Section> */}
            <Section
              title="Soft Skills"
              content={data?.InterpersonalSkillsExplained}
              img="filler"
            />
            <Section title="Training And Courses" class="Training" img="filler">
              <Training data={data?.Courses} />
            </Section>
            <Section title="Personal Info." class="Personal" img="filler">
              <ul>
                {data?.PersonalInfo?.map((elm, index) => {
                  return <li key={index}>{elm}</li>;
                })}
              </ul>
            </Section>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default App;
