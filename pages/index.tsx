import Head from 'next/head';
import { RightInfo, IRightInfoProps } from '../components/RightInfo';
import { Header } from '../components/Header';
import resumeData from '../data/resume.json';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import me from '../public/images/itsme.png';

const Home = () => {
  const [info, setInfo] = useState<IRightInfoProps>();
  const rawData = resumeData;

  useEffect(() => {
    if (rawData) {
      const data = {
        name: rawData.information.name,
        position: rawData.information.position,
        updated: rawData.information.updated,
        current: rawData.information.current,
        location: rawData.information.location,
        greetings: rawData.information.greetings,
        strengths: rawData.information.strengths,
        exp: rawData.exp,
      }
      setInfo(data);
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Welcome, nice to meet you.</title>
        <meta name="description" content="My resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="tk-home">
        <Header
          name={info?.name || ''}
        />
        <div className='row'>
          <div className='col-sm-12 col-md-4'>
            <Image
              alt="banner"
              src={me}
              placeholder="blur"
              quality={100}
            />
          </div>
          <div className='tk-home__contents col-sm-12 col-md-8'>
            <RightInfo
              name={info?.name || ''}
              updated={info?.updated || ''}
              position={info?.position || ''}
              greetings={info?.greetings || ''}
              current={info?.current || ''}
              location={info?.location || ''}
              strengths={info?.strengths || []}
              exp={info?.exp || []}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
