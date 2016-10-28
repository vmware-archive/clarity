/* tslint:disable:max-line-length */
export const SVG_ICON_TEMPLATES: any = {

    "danger": `
            <svg version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Danger icon</title>
                <!--.outer-shape pertains to the enclosing path/stroke, so you can select the enclosing path/stroke through this class.-->
                <!--.inner-shape pertains to a shape within the enclosing path/stroke, so you can select the enclosed shapes through this class.-->
                <path class="outer-shape" d="M8,1.3A6.7,6.7,0,1,1,1.3,8,6.71,6.71,0,0,1,8,1.3M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0H8Z"/>
                <rect class="inner-shape" x="7" y="10" width="2" height="2"/>
                <rect class="inner-shape" x="7" y="3" width="2" height="6"/>
            </svg>
        `,

    "warning": `
            <svg version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Warning icon</title>
                <!--.outer-shape pertains to the enclosing path/stroke, so you can select the enclosing path/stroke through this class.-->
                <!--.inner-shape pertains to a shape within the enclosing path/stroke, so you can select the enclosed shapes through this class.-->
                <!--.transparent-fill-stroke means a transparent fill, and the outer-shape is defined by its stroke-->
                <path class="outer-shape transparent-fill-stroke" d="M9.5,2l5.6,10.4c0.6,1.1-0.1,2.5-1.3,2.5H2.2c-1.2,0-1.9-1.4-1.3-2.5L6.5,2C7.1,0.8,8.9,0.8,9.5,2z"/>
                <rect class="inner-shape" x="7" y="5" class="st1" width="2" height="4"/>
                <rect class="inner-shape" x="7" y="10" class="st1" width="2" height="2"/>
            </svg>
        `,

    "success": `
            <svg version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Success icon</title>
                <!--.outer-shape pertains to the enclosing path/stroke, so you can select the enclosing path/stroke through this class.-->
                <!--.inner-shape pertains to a shape within the enclosing path/stroke, so you can select the enclosed shapes through this class.-->
                <!--.transparent-fill-stroke means a transparent fill, and the outer-shape is defined by its stroke-->
                <path class="outer-shape" d="M8,1.3c3.7,0,6.7,3,6.7,6.7s-3,6.7-6.7,6.7s-6.7-3-6.7-6.7S4.3,1.3,8,1.3 M8,0C3.6,0,0,3.6,0,8    c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0L8,0z"/>
                <polyline class="inner-shape transparent-fill-stroke" points="3.5,7.5 6.5,10.5 11.6,5.4"/>
            </svg>
        `,

    "info": `
            <svg version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Info icon</title>
                <!--.outer-shape pertains to the enclosing path/stroke, so you can select the enclosing path/stroke through this class.-->
                <!--.inner-shape pertains to a shape within the enclosing path/stroke, so you can select the enclosed shapes through this class.-->
                <path class="outer-shape" d="M8,1.3c3.7,0,6.7,3,6.7,6.7s-3,6.7-6.7,6.7s-6.7-3-6.7-6.7S4.3,1.3,8,1.3 M8,0C3.6,0,0,3.6,0,8    c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0L8,0z"/>
                <path class="inner-shape" d="M5.7,6.5c0,0,1.6-0.3,2.5-0.3c0.8-0.1,1.1,0.4,0.9,1C8.9,7.7,8,10.6,7.7,11.6c-0.1,0.3,0,0.4,0,0.4   c0,0,0.1,0.1,0.2,0.1c0.2,0,0.4-0.1,0.6-0.3c0.5-0.4,0.8-0.8,1.1-1.3l0.6,0.3c-1,1.5-2.1,2.3-3.3,2.3c-0.3,0-0.7-0.1-1-0.3   c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.2,0-0.5,0.1-0.7c0,0,0.9-2.3,1.2-3.4C7.1,7,6.8,6.9,6.6,6.9c-0.4,0-0.7,0-1.1,0.1L5.7,6.5z"/>
                <path class="inner-shape" d="M8.4,2.9c0.3,0,0.7,0.1,0.9,0.4c0.2,0.2,0.4,0.6,0.4,0.9c0,0.3-0.1,0.7-0.4,0.9C8.8,5.6,8,5.6,7.5,5.1   c0,0,0,0,0,0C7.3,4.8,7.1,4.5,7.1,4.1c0-0.3,0.1-0.7,0.4-0.9C7.7,3,8.1,2.9,8.4,2.9"/>
            </svg>
        `,

    "vm-bug": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>VMware logo icon</title>
                <!--.outer-shape pertains to the enclosing path/stroke, so you can select the enclosing path/stroke through this class.-->
                <!--.inner-shape pertains to a shape within the enclosing path/stroke, so you can select the enclosed shapes through this class.-->
                <rect class="outer-shape background" fill-opacity="0.25" fill="#DDDDDD" opacity="0.6" x="0" y="0" width="36" height="36" rx="3"/>
                <path class="inner-shape" d="M7.63948376,13.8762402 C7.32265324,13.2097082 6.53978152,12.9085139 5.80923042,13.219934 C5.07771043,13.5322837 4.80932495,14.3103691 5.13972007,14.9769011 L8.20725954,21.3744923 C8.68977207,22.3784735 9.19844491,22.9037044 10.1528121,22.9037044 C11.1720955,22.9037044 11.6168209,22.3310633 12.0983646,21.3744923 C12.0983646,21.3744923 14.7744682,15.7847341 14.8015974,15.7261685 C14.8287266,15.6666733 14.9149588,15.4863286 15.1872199,15.4872582 C15.4178182,15.490047 15.6106294,15.6657437 15.6106294,15.9018652 L15.6106294,21.3698443 C15.6106294,22.212073 16.0979865,22.9037044 17.0349134,22.9037044 C17.9718403,22.9037044 18.4785754,22.212073 18.4785754,21.3698443 L18.4785754,16.8965503 C18.4785754,16.0338702 19.1219254,15.4742436 20.0007183,15.4742436 C20.8785423,15.4742436 21.4637583,16.0524624 21.4637583,16.8965503 L21.4637583,21.3698443 C21.4637583,22.212073 21.9520842,22.9037044 22.8880423,22.9037044 C23.8240003,22.9037044 24.3326731,22.212073 24.3326731,21.3698443 L24.3326731,16.8965503 C24.3326731,16.0338702 24.9750543,15.4742436 25.8538472,15.4742436 C26.7307023,15.4742436 27.3168871,16.0524624 27.3168871,16.8965503 L27.3168871,21.3698443 C27.3168871,22.212073 27.8052131,22.9037044 28.74214,22.9037044 C29.6771291,22.9037044 30.1848331,22.212073 30.1848331,21.3698443 L30.1848331,16.2783582 C30.1848331,14.4070488 28.6181207,13.0962956 26.7307023,13.0962956 C24.8452216,13.0962956 23.6651006,14.3475536 23.6651006,14.3475536 C23.037253,13.5666793 22.1720247,13.0972252 20.7089847,13.0972252 C19.164557,13.0972252 17.8129406,14.3475536 17.8129406,14.3475536 C17.1841241,13.5666793 16.1154267,13.0972252 15.2308204,13.0972252 C13.8617638,13.0972252 12.7746572,13.675444 12.1119292,15.1302871 L10.1528121,19.5608189 L7.63948376,13.8762402" id="Fill-4" fill="#FFFFFF"/>
            </svg>
        `
};
