import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";


export default withSiteData(class SiteFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteCreator = this.props.siteCreator
        const siteCreatorURL = this.props.siteCreatorURL

        return (
            <footer className="text-center">
                &copy; 2018 {siteTitle}  |  Built By <a href={siteCreatorURL}>{siteCreator}</a>
            </footer>
        )

    }
})