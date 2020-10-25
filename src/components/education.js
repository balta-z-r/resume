import React from 'react';

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Education</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">
            <a href={item.link} target="_blank" className="hover">
              {item.institution}
            </a>
          </h2>
          {item.degree && <h3 className="item-sub">{item.degree}</h3>}
          {item.courses &&
            item.courses.map(({ name, link }, idx) => (
              <>
                <a href={link} target="_blank" className="item-sub hover">
                  {name}
                </a>
                {idx === item.courses.length - 1 ? null : (
                  <h3 className="item-sub" style={{ display: 'inline' }}>
                    ,{' '}
                  </h3>
                )}
              </>
            ))}
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
