import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Aboutme.css';

function Aboutme({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('aboutme.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 a-div-sty">
                    <div className="col-xl-4 a-div-img"></div>
                    <div className="col-xl-8 a-text">
                        {t('aboutme.text')}
                        <div>
                            {t('aboutme.text1')} 
                            <a className="links" href="https://q-dem.com/">{t('qdem')}</a>
                            {t('aboutme.text2')}
                        </div>
                        <div>
                            {t('aboutme.text3')}
                            <a className="links" href="/research">{t('here')}</a>.
                        </div>
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Aboutme);