import React from 'react';
import {
  Header,
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO,
} from '../components';
import resume from '../../data/profile';
import '../main.css';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.education && <Education data={resume.education} />}
          {resume.experience && <Experience data={resume.experience} />}
          {resume.projects && <Projects data={resume.projects} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
          <h1 className="section-header">Academics</h1>
          <div style={{ margin: '20px 0' }}>
            <h2 className="item-header text-lg">Weighted GPA: 4.31</h2>
          </div>
          <div style={{ margin: '20px 0' }}>
            <h2 className="item-header text-lg">SAT Superscore: 1540</h2>
          </div>
          <div style={{ margin: '20px 0 8px 0' }}>
            <h2 className="item-header text-lg" style={{ marginBottom: 8 }}>
              AP Scores
            </h2>
            {resume.aps &&
              resume.aps.map(ap => {
                return (
                  <span key={ap} className="tag">
                    {ap}
                  </span>
                );
              })}
          </div>
          <h1 className="section-header">Honors & Awards</h1>
          <div style={{ margin: '20px 0' }}>
            {resume.honors &&
              resume.honors.map(honor => {
                return (
                  <div style={{ marginBottom: 16 }}>
                    <h2 className="item-header text-lg">{honor.name}</h2>
                    <h3 className="item-sub">{honor.subtitle}</h3>
                  </div>
                );
              })}
          </div>
          {resume.skills && <Skills data={resume.skills} />}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Home;
