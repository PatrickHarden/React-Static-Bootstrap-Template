import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
import Navigation from '../Nav'


export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteRoot = this.props.siteRoot

        return (
            <header>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{siteTitle}</title>
                    <link rel="canonical" href={siteRoot} />
                </Helmet>
                <Navigation />
            </header>
        )

    }
})