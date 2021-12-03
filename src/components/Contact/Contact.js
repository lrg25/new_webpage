import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Contact.css';

function Contact({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('contact.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10">
                    <div className="con-div-img col-xl-12"></div>
                    <div className="con-text">
                        <div>
                            {t('contact.text')}
                            <a className="links" href="mailto:leire.rincon.garcia@hu-berlin.de">leire.rincon.garcia@hu-berlin.de</a>
                            {t('contact.text1')}
                            <a className="links" href="lrincon@ibei.org.">lrincon@ibei.org.</a>.
                        </div>
                        <div>{t('contact.text2')}</div>
                        <div>{t('contact.text3')}</div>
                        <div>{t('contact.text4')}</div>
                        <div>{t('contact.text5')}</div>
                        <div>{t('contact.text6')}</div>
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Contact);