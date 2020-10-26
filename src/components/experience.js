import React from 'react';

const Experience = ({ data }) => (
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            <a className="hover" href={item.link} target="_blank">
              {item.company}
            </a>{' '}
            | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <h3 className="item-sub">{item.extra}</h3>
          <p className="py-6">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;
