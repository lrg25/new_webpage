import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Research.css';

function Research({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('research.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 t-div-sty-r">
                    <div className="col-xl-7 t-text-r">
                        <h4>{t('preferences.title')}</h4>
                        {t('preferences.text')}
                        <br/><br/>
                        <h4>{t('information.title')}</h4>
                        {t('information.text')}
                        <br/><br/>
                        <h4>{t('gender.title')}</h4>
                        {t('gender.text')}
                        <a className="links" href="https://www.quesesepa.org/">{t('here')}</a>
                        {t('gender.text1')}
                        <a className="links" href="https://irla.cat/premis-i-beques/leire-rincon/">{t('here')}</a>
                        {t('gender.text2')}
                        <br/><br/>
                        <h4>{t('interest.title')}</h4>
                        {t('interest.text')}
                        <a className="links" href="www.q-dem.com">{t('qdem')}</a>
                        {t('interest.text1')}
                        <a className="links" href="https://q-dem.com/en/linies-investigacio/grups-d-interes-i-qualitat-de-la-democracia/">{t('here')}</a>
                        {t('interest.text2')}
                        <a className="links" href="https://www.cambridge.org/core/journals/journal-of-public-policy/article/abs/contingent-character-of-interest-groupspolitical-parties-interaction/0135D07900C02A739E441490EFDF9940">{t('here')}</a>
                        {t('interest.text3')}
                    </div>
                    <div className="col-xl-5 t-div-img-r"></div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Research);