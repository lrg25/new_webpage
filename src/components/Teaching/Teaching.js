import React from "react";
import {Helmet} from "react-helmet-async";
import { withNamespaces } from "react-i18next";
import './Teaching.css';

function Teaching({ t }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Leire Rincon | {t('teaching.title')}</title>
            </Helmet>
            <div className="row">
                <div className="col-xl-1"></div>
                <div className="col-xl-10 t-div-sty-t">
                    <div className="col-xl-5 t-div-img-t"></div>
                    <div className="col-xl-7 t-text-t">
                        <div className="space-between-t">{t('teaching.text')}</div>
                        <div className="space-between-t">{t('teaching.text1')}</div>
                        <div className="space-between-t">{t('teaching.text2')}</div>
                        <div className="space-between-t">{t('teaching.text3')}</div>
                        <div className="space-between-t">{t('teaching.text4')}</div>
                        <div className="space-between-t">{t('teaching.text5')}</div>
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div>
        </div>
    );
}

export default withNamespaces() (Teaching);