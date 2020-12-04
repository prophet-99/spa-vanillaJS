export class LoaderComponent{
    constructor() {}

    async getHTML(type){
        return `
        <section class="d-flex flex-column justify-content-center align-items-center ${ type === 'general' ? 'h-80vh padding-main' : '' }">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                width="${ type === 'general' ? '200px' : '150px' }" height="${ type === 'general' ? '200px' : '150px' }" 
                viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="mb-3">
                <defs>
                <clipPath id="ldio-qu4r345e64-cp" clipPathUnits="userSpaceOnUse">
                <rect x="0" y="50" width="100" height="50"></rect>
                </clipPath>
                <pattern id="ldio-qu4r345e64-pattern" patternUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                <rect x="0" y="0" width="100" height="100" fill="#487f5a"></rect><circle cx="92" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.4545454545454546s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="55" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.9393939393939394s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="11" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 140;0 -40" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.3333333333333333s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="23" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 107;0 -7" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.12121212121212122s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="76" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 140;0 -40" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.3333333333333333s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="92" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 152;0 -52" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.3636363636363638s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="48" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 105;0 -5" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.515151515151515s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="72" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 141;0 -41" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.4545454545454546s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="3" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 119;0 -19" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.6363636363636365s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="32" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 123;0 -23" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.090909090909091s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="57" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 113;0 -13" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.9090909090909091s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="37" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 128;0 -28" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.9393939393939394s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="36" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 109;0 -9" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.1515151515151514s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="53" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 128;0 -28" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.15151515151515152s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="39" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 107;0 -7" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.4545454545454546s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="99" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 119;0 -19" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.6666666666666666s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="53" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 130;0 -30" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.4242424242424243s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="86" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 138;0 -38" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.4848484848484849s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="71" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 150;0 -50" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.6060606060606061s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="9" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.5757575757575758s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="60" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 129;0 -29" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.7575757575757576s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="95" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 123;0 -23" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.9090909090909092s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="61" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 110;0 -10" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.090909090909091s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="38" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.48484848484848486s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="41" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 148;0 -48" keyTimes="0;1" dur="3.0303030303030303s" begin="-2s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="32" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 144;0 -44" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.36363636363636365s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="94" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 134;0 -34" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.2424242424242424s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="9" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.393939393939394s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="100" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.9393939393939394s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="15" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 149;0 -49" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.2424242424242424s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="11" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 131;0 -31" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.4545454545454546s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="33" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 105;0 -5" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.121212121212121s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="82" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 105;0 -5" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.1818181818181819s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="60" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 120;0 -20" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.393939393939394s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="75" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.5757575757575758s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="86" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 105;0 -5" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.1818181818181819s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="55" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 131;0 -31" keyTimes="0;1" dur="3.0303030303030303s" begin="-2s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="52" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.2727272727272727s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="81" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 140;0 -40" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.393939393939394s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="89" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.3636363636363638s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="18" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 150;0 -50" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.909090909090909s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="61" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 114;0 -14" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.6060606060606061s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="24" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.9090909090909091s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="23" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 151;0 -51" keyTimes="0;1" dur="3.0303030303030303s" begin="-0.48484848484848486s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="56" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 145;0 -45" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.9696969696969697s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="50" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 144;0 -44" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.909090909090909s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="13" cy="0" r="3" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 115;0 -15" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.9090909090909092s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="92" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 132;0 -32" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.2121212121212122s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="15" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="3.0303030303030303s" begin="-1.303030303030303s" repeatCount="indefinite"></animateTransform>
                </circle><circle cx="92" cy="0" r="2" fill="#ffffff">
                <animateTransform attributeName="transform" type="translate" values="0 112;0 -12" keyTimes="0;1" dur="3.0303030303030303s" begin="-2.8181818181818183s" repeatCount="indefinite"></animateTransform>
                </circle></pattern></defs>
                <path fill="url(#ldio-qu4r345e64-pattern)" clip-path="url(#ldio-qu4r345e64-cp)" d="M59,37.3V18.9c3-0.8,5.1-3.6,5.1-6.8C64.1,8.2,61,5,57.1,5H42.9c-3.9,0-7.1,3.2-7.1,7.1c0,3.2,2.2,6,5.1,6.8v18.4c-11.9,3.8-20.6,15-20.6,28.2C20.4,81.8,33.7,95,50,95s29.6-13.2,29.6-29.6C79.6,52.2,70.9,41.1,59,37.3z"></path>
                <path fill="none" stroke="#3a6648" stroke-width="5" d="M59,37.3V18.9c3-0.8,5.1-3.6,5.1-6.8C64.1,8.2,61,5,57.1,5H42.9c-3.9,0-7.1,3.2-7.1,7.1c0,3.2,2.2,6,5.1,6.8v18.4c-11.9,3.8-20.6,15-20.6,28.2C20.4,81.8,33.7,95,50,95s29.6-13.2,29.6-29.6C79.6,52.2,70.9,41.1,59,37.3z"></path>
            </svg>

            <h2 class="text-center ${ type === 'general' ? 'text-white font-weight-bold' : 'text-dark' }">
                Cargando ...
            </h2>
        </section>
        `;
    }      
}
