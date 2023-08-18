import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Develope} from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 70vw;
height: 65vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            {/* <Main> */}
{/* <Title>
    <Design width={40} height={40} /> Analytical Skills
</Title>
<Description>
I am driven by a deep passion to tackle analytical problems head-on, leveraging my skills and insights to unravel complex challenges and pave the way for effective solutions.
I am passionate about solving analytical problems, using my skills to unravel complexities and find effective solutions.
I am passionate about solving analytical problems with precision.
</Description>
<Description>
<strong>Skills</strong>

<p>
Critical thinking, Logical reasoning, Data analysis, Pattern recognition, Problem-solving, Attention to detail, Research abilities, Decision-making, Data interpretation, Strategic thinking.
Data Analysis,Data Visualization, SQL, Python, Problem Solving, Web Scraping, API Management, Cloud Computing .
</p>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
    
</ul>
<p>
    Excel, Tableau, PowerBi, AWS
</p>
</Description> */}

            {/* </Main> */}
            <Main>
<Title>
    <Develope width={40} height={40} /> My Skills
</Title>
<Description>
I am passionate about solving analytical problems with precision and creating interesting websites. 
</Description>
<Description>
<strong>Skills</strong>
{/* <p>
Data Analysis,Data Visualization, SQL, Python, Problem Solving, Web Scraping, API Management, Cloud Computing .
</p> */}
<ul>
    <li>
    Data Analysis, Data Visualization, SQL, Python, Problem Solving, Web Scraping, API Development, Cloud Computing , Cyber Security.
    </li>
    <li>
    Frontend Development, Database Development,  HTML/CSS/JavaScript, React.js, Node.js, Bootstrap, Version Control, Continuous Integration/Deployment, SEO Management.
    {/* Frontend Development, Backend Development, Database Management, HTML/CSS, JavaScript, React, Angular, Node.js, Express.js, Python, Django, Ruby, Ruby on Rails, PHP, Laravel, Database (SQL/NoSQL), API Development, Version Control (Git), UI/UX Design, Testing and Debugging, Problem-Solving, Agile Methodology, Project Management, Continuous Integration/Deployment. */}
    </li>
    
</ul>
</Description>
<Description>
<strong>Tools</strong>
<p>
    VScode, Python, Numpy, Pandas, Scikit-learn,, Excel, PowerBi, Tableau, SQL, GIT, AWS .
</p>
</Description>
{/* <Title>
    <Develope width={40} height={40} />  Developer
</Title>
<Description>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen etc.
</p>
</Description> */}

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
