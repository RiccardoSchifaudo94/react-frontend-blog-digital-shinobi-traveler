import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ description, title, siteTitle, slug = '', image='', type='' }) {
    
    let newCanonicalUrl = `https://www.the-shinobi-arts-of-eccentricity.com/`;
    
    switch(type){
        case 'post':
            newCanonicalUrl += `post/${slug}`;
            break;
        case 'page':
            newCanonicalUrl += `page/${slug}`;
        break;
        default:
            break;
    }
    return (
            <Helmet
                title={title}
                titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
                link = {[
                    { rel : 'canonical', href : newCanonicalUrl  }
                ]}
                meta={[
                        {
                            name: `description`,
                            content: description,
                        },
                        {
                            property: `og:title`,
                            content: title,
                        },
                        {
                            property: `og:description`,
                            content: description,
                        },
                        {
                            property: `og:type`,
                            content: `website`,
                        },
                        {
                            property:`og:url`,
                            content:newCanonicalUrl,
                        },
                        {
                            property: `fb:app_id`,
                            content: `103762537796791`,
                        },
                        {
                            property:`og:image`,
                            content:image
                        },
                        {
                            property: `article:publisher`,
                            content: `https://www.facebook.com/DigitalShinobiTraveler/`,
                        },
                        {
                            name:`google-site-verification`,
                            content:`1gG3ICoQrODbjOsWYqya1uEXnBNoav3caDsbWfatGtw`
                        },
                        {
                            name:`msvalidate.01`,
                            content:`B805F754EAC8648545F90B790E97E6F3`
                        },
                        {
                            name:`twitter:card`,
                            content:`summary_large_image`
                        },
                        {
                            name:`twitter:title`,
                            content:title
                        },
                        {
                            name:`twitter:description`,
                            content:description
                        },
                        {
                            name:`twitter:site`,
                            content:`@ActivistShinobi`
                        },
                        {
                            name:`twitter:creator`,
                            content:`@Activist`
                        },
                        {
                            name:`twitter:image`,
                            content:image
                        }
                ]}
            />
        )
}
