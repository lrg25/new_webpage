import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Media.css';

function Media({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('media.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 t-div-sty-m">
                    <div className="col-xl-5 t-div-img-m"></div>
                    <div className="col-xl-7 t-text-m">
                        <div className="space-between-m">{t('media.text')}</div>
                        <div className="space-between-m"><a className="links" href="https://www.sapea.info/interview-leire-rincon-on-evidence-ideas-and-the-race-for-political-attention/">Interview: Leire Rincón on evidence, ideas, and the race for political attention</a>{t('media.text1')}</div>
                        <div className="space-between-m"><a className="links" href="https://evidenceandpolicyblog.co.uk/2021/05/12/does-scientific-evidence-capture-the-attention-of-policymakers/">Does scientific evidence capture the attention of policymakers?</a>{t('media.text2')}</div>
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Media);