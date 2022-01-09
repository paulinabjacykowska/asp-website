import * as styles from './Footer.module.scss';
import * as React from 'react';
import asplogo from '../../../../../assets/images/asp-logo-long-black.png';
import asplogoWhite from '../../../../../assets/images/asp-logo-long-white.png';
import Insta from '../../../../../images/instagram.svg';
import Fb from '../../../../../assets/svg/Facebook.svg';
import Yt from '../../../../../images/yt.svg';
import classNames from 'classnames';
import { Container, Grid, Col, Row } from '../../../grid/grid';

const Footer = ({ darkTheme }) => {
  return (
    <div
      className={classNames(
        styles.backgroundOrange,
        darkTheme && styles.backgroundBlack
      )}
      style={{ zIndex: 999 }}
    >
      <Container>
        <Grid fluid>
          <Row className={styles.spaceRow}>
            <Col xs={12} md={3}>
              {!darkTheme && (
                <img src={asplogo} className={styles.logo} alt={'logo asp'} />
              )}
              {darkTheme && (
                <img
                  src={asplogoWhite}
                  className={styles.logo}
                  alt={'logo asp'}
                />
              )}
            </Col>
            <Col xs={12} md={4} xsOffset={0} mdOffset={1}>
              <p className={styles.title}>
                Akademia Sztuk pięknych im. Eugeniusza Gepperta we Wrocławiu
              </p>
              <div className={styles.barContainer}>
                <div
                  className={classNames(
                    styles.bar,
                    darkTheme && styles.barWhite
                  )}
                />
              </div>
              <div className={styles.space}>
                <p>p. Polski 3/4, 50-156 Wrocław</p>
                <p>ul. Traugotta 19/21, 50-416 Wrocław </p>
              </div>
              <p className={styles.title}>Telefon</p>
              <div className={styles.barContainer}>
                <div
                  className={classNames(
                    styles.bar,
                    darkTheme && styles.barWhite
                  )}
                />
              </div>
              <div className={styles.space}>
                <p>centrala pl. Polski: +48 71 343 80 31, 32, 33, 34</p>
                <p>centrala ul. Traugutta: +48 71 343 84 51</p>
              </div>
            </Col>
            <Col xs={12} md={3} xsOffset={0} mdOffset={1}>
              <p className={styles.title}>Więcej informacji</p>
              <div className={styles.barContainer}>
                <div
                  className={classNames(
                    styles.bar,
                    darkTheme && styles.barWhite
                  )}
                />
              </div>
              <div className={styles.space}>
                <a
                  className={classNames(
                    styles.link,
                    darkTheme && styles.linkWhite
                  )}
                  href={'www.asp.wroc.pl'}
                >
                  www.asp.wroc.pl
                </a>
              </div>
              <div className={styles.logoRow}>
                <Fb
                  className={classNames(
                    styles.icon,
                    darkTheme && styles.iconWhite
                  )}
                />
                <Yt
                  className={classNames(
                    styles.icon,
                    darkTheme && styles.iconWhite
                  )}
                />
                <Insta
                  className={classNames(
                    styles.icon,
                    darkTheme && styles.iconWhite
                  )}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};
export default Footer;
