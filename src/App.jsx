import { Paper } from "./components/Paper/Paper";
import { Data as data } from "./store/Data";
import { Section } from "./components/Elements/Section";
import { Contacts } from "./components/Elements/Contacts";
import { Technical } from "./components/Elements/Technical";
import { Projects } from "./components/Elements/Projects";
import { LanguageSkills } from "./components/Elements/LanguageSkills";
import { Work } from "./components/Elements/Work";
import { Education } from "./components/Elements/Education";
import { Training } from "./components/Elements/Training";

function App() {
  return (
    <div className="App d-flex justify-content-center flex-column">
      <Paper counter="1">
        <div className="row justify-content-between">
          <div className="col-7">
            <Section
              title="personal profile"
              content={data.personal}
              img="location"
            />
            <Section title="Work Experience" img="circle" class="Work">
              <Work slice={[0, 4]} />
            </Section>
          </div>
          <div className="col-4 py-3">
            <Contacts />
            <Technical />
            <LanguageSkills />
          </div>
        </div>
      </Paper>
      
      {/* ----------------------------------------------- */}
      {/* paper2 */}
      <Paper counter="2">
        <div className="row justify-content-between">
          <div className="col-7">
            <Section title="Work Experience" img="circle" class="Work">
              <Work slice={[5]} />
            </Section>
            <Section title="Technical Skills" img="location">
              <ul>
                {data.TechnicalSkillsExplained.map((elm, index) => {
                  return <li key={index}>{elm}</li>;
                })}
              </ul>
            </Section>
            <Section
          title="Soft Skills"
          content={data.InterpersonalSkillsExplained}
          img="filler"
        />
          </div>
          <div className="col-4 py-3">
            <Projects />
          </div>
        </div>
      </Paper>

      {/* ----------------------------------------------- */}
      {/* paper 3 */}
      <Paper counter="3">

        <Section title="Education" class="Education" img="location">
          <Education />
        </Section>
        <Section title="Training And Courses" class="Training" img="filler">
          <Training />
        </Section>
        <Section title="Personal Info." class="Personal" img="filler">
          <ul>
            {data.PersonalInfo.map((elm, index) => {
              return <li key={index}>{elm}</li>;
            })}
          </ul>
        </Section>
      </Paper>
    </div>
  );
}

export default App;
