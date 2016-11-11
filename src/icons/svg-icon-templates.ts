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
        `,

    "caret": `
            <svg version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>caret</title>
                <path
                    class="outer-shape"
                    d="M13.3,10c0.3,0.3,0.3,0.8,0,1.1c-0.3,0.3-0.8,0.3-1.1,0L8,
                        6.9l-4.2,4.2c-0.3,0.3-0.8,0.3-1.1,0c-0.3-0.3-0.3-0.8,0-1.1L8,4.7L13.3,10z"/>
            </svg>
        `,

    "cog": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Cog</title>
                <path class="inner-shape" d="M18.13,25a7,7,0,1,1,7-7A7,7,0,0,1,18.13,25Zm0-12a5,5,0,1,0,5,5A5,5,0,0,0,18.13,13Z"/>
                <path class="outer-shape" d="M19.69,34H16.31a1.6,1.6,0,0,1-1.54-1.14L13.9,30a12.86,12.86,0,0,1-1.49-.61l-2.63,1.4a1.6,1.6,0,0,1-1.9-.28L5.49,28.12a1.6,1.6,0,0,1-.28-1.9L6.6,23.61A12.63,12.63,0,0,1,6,22.09l-2.83-.86A1.6,1.6,0,0,1,2,19.69V16.31a1.6,1.6,0,0,1,1.14-1.54l2.8-.85a12.7,12.7,0,0,1,.64-1.56L5.21,9.78a1.6,1.6,0,0,1,.28-1.9L7.88,5.49a1.6,1.6,0,0,1,1.9-.28l2.57,1.37a12.79,12.79,0,0,1,1.57-.64l.85-2.79A1.6,1.6,0,0,1,16.31,2h3.38a1.6,1.6,0,0,1,1.54,1.14l.85,2.8a12.63,12.63,0,0,1,1.55.64l2.59-1.38a1.6,1.6,0,0,1,1.9.28l2.39,2.39a1.6,1.6,0,0,1,.28,1.9L29.4,12.39A12.8,12.8,0,0,1,30,13.9l2.84.86A1.6,1.6,0,0,1,34,16.31v3.38a1.6,1.6,0,0,1-1.14,1.54L30,22.1a12.75,12.75,0,0,1-.61,1.48l1.41,2.64a1.6,1.6,0,0,1-.28,1.9l-2.39,2.39a1.6,1.6,0,0,1-1.9.28l-2.65-1.41a12.8,12.8,0,0,1-1.47.6l-.87,2.87A1.6,1.6,0,0,1,19.69,34ZM16.6,32H19.4l1.1-3.62.52-.15a10.73,10.73,0,0,0,2.08-.86l.47-.26,3.33,1.78,2-2-1.78-3.33.26-.47A10.64,10.64,0,0,0,28.24,21l.15-.52L32,19.4V16.6l-3.59-1.09L28.26,15a10.73,10.73,0,0,0-.87-2.13l-.26-.47,1.76-3.29-2-2L23.63,8.86l-.48-.26A10.69,10.69,0,0,0,21,7.7l-.52-.15L19.4,4H16.6L15.52,7.54,15,7.69a10.68,10.68,0,0,0-2.17.89l-.47.26L9.09,7.11l-2,2,1.74,3.26-.26.47A10.65,10.65,0,0,0,7.71,15l-.15.52L4,16.6V19.4l3.57,1.08.15.52a10.64,10.64,0,0,0,.89,2.13l.26.48-1.76,3.3,2,2,3.31-1.77.47.26a10.79,10.79,0,0,0,2.11.86l.52.15ZM32.28,16.68h0Z"/>
            </svg>
        `,

    "bell": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Bell</title>
                <path class="inner-shape" d="M32.66,27.88A14.22,14.22,0,0,1,30.19,25a12.65,12.65,0,0,1-1.35-4.81V15.2A10.81,10.81,0,0,0,19.36,4.45V3.17a1.33,1.33,0,1,0-2.67,0V4.47A10.81,10.81,0,0,0,7.36,15.2v4.94A12.65,12.65,0,0,1,6,25a14.37,14.37,0,0,1-2.47,2.93,1,1,0,0,0-.34.75V30a1,1,0,0,0,1,1H32a1,1,0,0,0,1-1V28.64A1,1,0,0,0,32.66,27.88ZM5.27,29a16.12,16.12,0,0,0,2.44-3,14.25,14.25,0,0,0,1.65-5.86V15.2a8.74,8.74,0,1,1,17.47,0v4.94A14.25,14.25,0,0,0,28.48,26a16.12,16.12,0,0,0,2.44,3Z"/>
                <path class="outer-shape" d="M15.75,32A2.65,2.65,0,0,0,21,32Z"/>
            </svg>

        `,

    "home": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Home</title>
                <path class="inner-shape" d="M33.05,18.87a1,1,0,0,1-.71-.29L18.05,4.28,3.76,18.57a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15a1,1,0,0,1-.71,1.71Z"/>
                <path class="outer-shape" d="M28,34H22a1,1,0,0,1-1-1V24H15v9a1,1,0,0,1-1,1H8a2,2,0,0,1-2-2V18H8V32h5V23a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v9h5V18h2V32A2,2,0,0,1,28,34Z"/>
            </svg>
        `,

    "cloud": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Cloud</title>
                <path d="M27.14,32H10.62C5.67,32,1,27.19,1,22.1a9.94,9.94,0,0,1,8-9.74,10.19,10.19,0,0,1,20.33,1.06A10.06,10.06,0,0,1,29,15.66a8.29,8.29,0,0,1,6,8C35,28.1,31.33,32,27.14,32ZM19.09,5.23a8.24,8.24,0,0,0-8.19,8l0,.87-.86.1A7.94,7.94,0,0,0,3,22.1c0,4,3.77,7.9,7.62,7.9H27.14C30.21,30,33,27,33,23.65a6.31,6.31,0,0,0-5.37-6.26l-1.18-.18.39-1.13A8.18,8.18,0,0,0,19.09,5.23Z"/>
            </svg>
        `,

    "user": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>User</title>
                <path class="inner-shape" d="M18.08,16.9a7.45,7.45,0,1,1,7.45-7.45A7.46,7.46,0,0,1,18.08,16.9Zm0-12.9a5.45,5.45,0,1,0,5.45,5.45A5.46,5.46,0,0,0,18.08,4Z"/>
                <path class="outer-shape" d="M30.05,33.86H6.13a2,2,0,0,1-2-2V25.33a1,1,0,0,1,.2-.59,17.72,17.72,0,0,1,13.81-6c9.09,0,13.55,5.76,13.74,6a1,1,0,0,1,.2.59v6.53A2,2,0,0,1,30.05,33.86Zm-24-8.17v6.13c0,.06,0,.09.07.09H30.05s.07,0,.07-.09V25.63a15.82,15.82,0,0,0-12-5A16.27,16.27,0,0,0,6.06,25.69Z"/>
            </svg>
        `,

    "search": `
            <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Search</title>
                <path class="inner-shape" d="M15,4.05A10.95,10.95,0,1,1,4.05,15,11,11,0,0,1,15,4.05M15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"/>
                <path class="outer-shape" d="M33.71,32.29l-7.37-7.42-1.42,1.41,7.37,7.42a1,1,0,1,0,1.42-1.41Z"/>
            </svg>
        `,

    "folder": `
            <svg version="1.1" viewBox="0 0 36.1 36.1" preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-labelledby="title desc">
                <title>Folder</title>
                <path
                    class="outer-shape"
                    d="M32,8H16.28L14,5H4A2,2,0,0,0,2,7V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,
                        2,0,0,0,32,8Zm0,22H4V13H14.21l2-2H4V7h9l2.3,3H32Z"/>
            </svg>
        `
};
