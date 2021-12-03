import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Publications.css';

function Publications({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('publications.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 t-div-sty-p">
                    <div className="col-xl-5 t-div-img-p"></div>
                    <div className="col-xl-7 t-text-p">
                        <h4>{t('journal.title')}</h4>
                        <div className="space-between-p">{t('journal.text')}</div>
                        <div className="space-between-p">{t('journal.text1')}</div>
                        <div className="space-between-p">{t('journal.text2')}</div>
                        <div className="space-between-p">{t('journal.text3')}</div>
                        <div className="space-between-p">{t('journal.text4')}</div>
                        <div className="space-between-p">{t('journal.text5')}</div>
                        <br/>
                        <h4>{t('book.title')}</h4>
                        <div className="space-between-p">{t('book.text')}</div>
                        <div className="space-between-p">{t('book.text1')}</div>
                        <br/>
                        <h4>{t('working.title')}</h4>
                        <div className="space-between-p">{t('working.text')}</div>
                        <div className="space-between-p">{t('working.text1')}</div>
                        <div className="space-between-p">{t('working.text2')}</div>
                        <div className="space-between-p">{t('working.text3')}</div>
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Publications);