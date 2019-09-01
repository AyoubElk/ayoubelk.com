import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://twitter.com/ayoubelkh"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/ayoubelk"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/7485880/ayoubelk"
          target="_blank"
          rel="noopener noreferrer"
        >
          stack overflow
        </a>
        &bull;{' '}
        <a href="mailto:elkhattabi.ayoub@gmail.com?Subject=Hello" target="_top">
          contact
        </a>
      </footer>
    );
  }
}

export default Footer;
