import React from 'react'
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Heading from '@theme/Heading';
import clsx from 'clsx';

const AboutnotmdfeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
]

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Aboutnotmdfeature() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AboutnotmdfeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Aboutnotmd = () => {
  
  return (
    <Layout>
    <Aboutnotmdfeature/>
    </Layout>
  )
}

export default Aboutnotmd