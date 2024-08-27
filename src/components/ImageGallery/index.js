import clsx from 'clsx';
import styles from './styles.module.css';

import Heading from "@theme/Heading";

const LogoList = [
  { url: require('@site/static/img/uneca.png').default, alt: 'UN ECA' },
  { url: require('@site/static/img/unfpa.png').default, alt: 'UN FPA' },
  { url: require('@site/static/img/office-for-national-statistics.png').default, alt: 'UN FPA' },
];

function Logo({url, alt}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img
            src={url}
            alt={alt}
            className={styles.logoImg}
          />
      </div>
    </div>
  );
}

export default function ImageGallery() {

  return (
    <section className={styles.logos}>
      <div className="container">
        <Heading as="h6" className={styles.logoSubtitle}>
        Contributors
        </Heading>
        <div className="row">
        { 
          LogoList.map((props, idx) => (
            <Logo key={idx} {...props} />
          ))
        }
        </div>
      </div>
    </section>
  );
}
