import Head from 'next/head'
import { Greeting, GreetingType } from '../components/Greeting'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import resumeData from '../data/resume.json';
import React from 'react';

export type JobsType = {
  position: string,
  company: string;
  period: string;
  address: string;
  link: string;
}

export type EduType = {
  school: string,
  degree: string;
  period: string;
  address: string;
  link: string;
}

export default function Home() {
  const [info, setInfo] = React.useState<GreetingType>();
  const [exp, setExp] = React.useState<JobsType[]>([]);
  const [intern, setIntern] = React.useState<JobsType[]>([]);
  const [award, setAward] = React.useState<JobsType[]>([]);
  const [educate, setEducate] = React.useState<EduType[]>([]);

  React.useEffect(() => {
    if (resumeData) {
      setInfo(resumeData.information);
      setExp(resumeData.exp);
      setIntern(resumeData.intern);
      setAward(resumeData.award);
      setEducate(resumeData.educate);
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Thirawit</title>
        <meta name="description" content="My resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="tk-home">
        <Header />
        <Greeting
          name={info ? info.name : ''}
          position={info ? info.position : ''}
          updated={info ? info.updated : ''}
          current={info ? info.current : ''}
          location={info ? info.location : ''}
          strengths={info ? info.strengths : []}
          greetings={info ? info.greetings : ''}
        />
        <section className="mb-3">
          <div className="d-flex">
            <i className="tk-icon-briefcase me-1" />
            <div className="tk-home__title">Experience</div>
          </div>
          {exp.map((item, key) => (
            <Card
              key={key}
              title={item.position}
              subtitle={item.company}
              period={item.period}
              address={item.address}
              link={item.link}
            />
          ))}
        </section>
        <section className="mb-3">
          <div className="d-flex">
            <i className="tk-icon-black-tie me-1" />
            <div className="tk-home__title">Internship</div>
          </div>
          {intern.map((item, key) => (
            <Card
              key={key}
              title={item.position}
              subtitle={item.company}
              period={item.period}
              address={item.address}
              link={item.link}
            />
          ))}
        </section>
        <section className="mb-3">
          <div className="d-flex">
            <i className="tk-icon-gift me-1" />
            <div className="tk-home__title">Awards</div>
          </div>
          {award.map((item, key) => (
            <Card
              key={key}
              title={item.position}
              subtitle={item.company}
              period={item.period}
              address={item.address}
              link={item.link}
            />
          ))}
        </section>
        <section className="mb-3">
          <div className="d-flex">
            <i className="tk-icon-leanpub me-1" />
            <div className="tk-home__title">Education</div>
          </div>
          {educate.map((item, key) => (
            <Card
              key={key}
              title={item.school}
              subtitle={item.degree}
              period={item.period}
              address={item.address}
              link={item.link}
            />
          ))}
        </section>
        <section className="mt-4 mb-2">
          <div className="d-flex justify-content-center">
            <a className="tk-home__download-link" href='/file/Thirawit_CV.pdf' download>
            <i className="tk-icon-download me-2" />
            <div>Download MyCV</div>
            </a>
        </div>
        </section>
      </section>
    </div>
  )
}
