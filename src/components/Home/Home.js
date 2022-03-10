import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Home.css';

function Home({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="google-site-verification" content="Bj-w2haa6TFSQj_xvxsVvbfqnf1ZRKyF-AVgzb6s5Zo" />
                <title>Leire Rincon | {t('home.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 div-sty">
                    <div className="col-xl-6 div-img"></div>
                    <div className="col-xl-6 div-text">
                        <div className="text">{t('home.text')}</div>
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Home);