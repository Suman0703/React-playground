import { useState } from "react";

function Skills() {

    const [skills, setskills] = useState([]);

    const handleSkills = (event) => {
        if (event.target.checked) {
            setskills([...skills, event.target.value]);
        } else {
            setskills(...skills.filter((item) => item !== event.target.value));
        }
    };

    return (
        <div>
            <h3>Select Your Skills</h3>

            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />

            <input onChange={handleSkills} type="checkbox" id="html" value="html" />
            <label htmlFor="html">HTML</label>
            <br />

            <input onChange={handleSkills} type="checkbox" id="css" value="css" />
            <label htmlFor="css">CSS</label>
            <br />

            <input onChange={handleSkills} type="checkbox" id="js" value="js" />
            <label htmlFor="js">JavaScript</label>
            <br />

            <input onChange={handleSkills} type="checkbox" id="python" value="python" />
            <label htmlFor="python">Python</label>

            <h1>{skills.toString()}</h1>
        </div>
    );
}

export default Skills;
