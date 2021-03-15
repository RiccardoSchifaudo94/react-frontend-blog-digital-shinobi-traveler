import React from 'react'
import UtilityObj from '../../utils/UtilityObj';

export default function Privacy() {
    
    const utilObj = new UtilityObj();

    var _iub = _iub || [];
    _iub.csConfiguration = {
      lang: "it",
      siteId: 1736086,
      cookiePolicyId: 78317149,
      banner: {
        acceptButtonDisplay: true,
        customizeButtonDisplay: true,
        position: "float-top-center",
      },
    };

 
    return (
        <div>
            <div className="dst_footer_privacy">
            <div className="container">
                <a
                href="https://www.iubenda.com/privacy-policy/78317149"
                className="iubenda-black iubenda-embed"
                title="Privacy Policy "
                >Privacy Policy</a
                >
            </div>
            {
            (function (w, d) {
                    var loader = function () {
                        var s = d.createElement("script"),
                        tag = d.getElementsByTagName("script")[0];
                        s.src = "https://cdn.iubenda.com/iubenda.js";
                        tag.parentNode.insertBefore(s, tag);
                    };
                    if (w.addEventListener) {
                        w.addEventListener("load", loader, false);
                    } else if (w.attachEvent) {
                        w.attachEvent("onload", loader);
                    } else {
                        w.onload = loader;
                    }
                    })(window, document)
            }
            {_iub }
            <script type="text/javascript"
                src="//cdn.iubenda.com/cs/iubenda_cs.js"
                charSet="UTF-8"
                async="">

            </script>
            </div>
        </div>
    )
}
