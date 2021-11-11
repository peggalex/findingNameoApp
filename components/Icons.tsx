import React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { GlobalStyle, Colors } from '../AppStyles';
import {
    Svg,
    Circle,
    Ellipse,
    G,
    TSpan,
    Text as TextSvg,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    Marker,
  } from 'react-native-svg';


  const IconsStyle = StyleSheet.create({

    logo: {
        height: '100%'
        //animation: 'shift 1.5s ease-out'
    },
    
    wheel: {
        //transformBox: 'fill-box',
        //transformOrigin: 'center'
    },

    frontWheel: {
        //animation: 'turnSmall 1.5s ease-out'
    },

    backWheel: {
        //animation: 'turn 1.5s ease-out'
    },

    bubble: {
        //transformBox: 'fill-box',
        //transformOrigin: 'center',
        //transform: 'scale(0)',
        //animation: 'popup 0.5s linear 1s forwards'
    }


    /*@keyframes shift {
        from {
            transform: translateX(100px);
        } to {
            transform: translateX(0px);
        }
    }

    @keyframes turn {
        from {
            transform: rotate(180deg);
        } to {
            transform: rotate(0deg);
        }
    }

    @keyframes turnSmall {
        from {
            transform: rotate(270deg);
        } to {
            transform: rotate(0deg);
        }
    }

    @keyframes popup {
        0% {
            transform: scale(0);
        } 50% {
            transform: scale(1.1);
        } 65% {
            transform: scale(1);
        } 85% {
            transform: scale(1.05);
        } 100% {
            transform: scale(1);
        }
    }*/
});


const GetLogo = (showText: boolean) => <Svg style={[GlobalStyle.row, GlobalStyle.centerAll, GlobalStyle.spacer, IconsStyle.logo]} x="0px" y="0px" height="100%" viewBox="-75 0 850 1000">
<G>
{showText ? <G>
    <Path fill="#000000" opacity="0.5" id="SVGID_1_" d="M362.505,130.338l-24.828,31.922l-24.828-31.922H121.269c-14.44,0-26.144-11.704-26.144-26.143V63.527
        c0-14.439,11.704-26.143,26.144-26.143h432.819c14.439,0,26.145,11.704,26.145,26.143v40.668
        c0,14.439-11.705,26.143-26.145,26.143H362.505z" />
    <TextSvg fill="#FFFFFF" transform="matrix(1 0 0 1 185.1738 106.3818)" fontFamily="'SFProDisplay-Regular'" fontSize="69.7159">&lt;untitled&gt;</TextSvg>
    <G>
        <Circle fill="#A3BFFA" id="SVGID_5_" cx="143.85" cy="84.031" r="31.165" />
    </G>
<G>
</G>
    <Path fill="#FFFFFF" id="SVGID_9_" d="M149.661,87.225h-1.084c-1.439,0.582-3.04,0.914-4.726,0.914s-3.281-0.332-4.727-0.914h-1.083
        c-4.811,0-8.714,3.436-8.714,7.671v2.372c0,1.512,1.394,2.74,3.112,2.74h22.823c1.719,0,3.114-1.228,3.114-2.74v-2.372
        C158.375,90.661,154.472,87.225,149.661,87.225z M143.85,84.031c4.457,0,8.069-3.576,8.069-7.988
        c0-4.411-3.612-7.988-8.069-7.988c-4.458,0-8.068,3.577-8.068,7.988C135.782,80.455,139.393,84.031,143.85,84.031z" />
</G> : null}
<G>
    <Path fill="#4C51BF" id="SVGID_13_" d="M166.96,691.742c0,0,29.188,70.36,59.593,93.472l205.533,0.17c0,0,23.113-43.839,27.976-93.642H166.96z" />
</G>
<G>
    <Path  fill="#4C51BF" id="SVGID_17_" d="M49.974,450.003c0,0,33.068-25.797,37.935-119.441l170.266,119.441H49.974z" />
</G>
<G>
    <Path fill="none" stroke="#434190" strokeWidth="1.4524" strokeMiterlimit={10} d="M49.974,450.003
    c0,0,33.068-25.797,37.935-119.441l170.266,119.441H49.974z" />
</G>
<G>
    <Path fill="#4C51BF" id="SVGID_21_" d="M87.909,330.178c0,0,94.862-55.946,107.021-92.432l63.245,211.876L87.909,330.178z" />
</G>
<G>
    <Path fill="none" stroke="#434190" strokeWidth="1.4524" strokeMiterlimit={10} d="M87.909,330.178
    c0,0,94.862-55.946,107.021-92.432l63.245,211.876L87.909,330.178z" />
</G>
<G>
    <Path fill="#4C51BF" id="SVGID_25_" d="M194.932,237.747c0,0,76.163-3.342,123.278-27.478L258.173,449.62L194.932,237.747z" />
</G>
<G>
    <Path fill="none" stroke="#434190" strokeWidth="1.4524" strokeMiterlimit={10} d="M194.932,237.747
    c0,0,76.163-3.342,123.278-27.478L258.173,449.62L194.932,237.747z" />
    <Path fill="none" stroke="#CBD5E0" strokeWidth="22.9859" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="
    M326.641,210.269L266.604,449.62L326.641,210.269z" />
</G>
<G>
    <Path  fill="#4C51BF" id="SVGID_29_" d="M64.5,582.173h462.852c8.023,0,14.525-6.502,14.525-14.524V449.62H49.976v118.028
        C49.976,575.671,56.479,582.173,64.5,582.173z" />
</G>
<G>
    <Line fill="none" stroke="#CBD5E0" strokeWidth="22.9859" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="49.974" y1="460.348" x2="541.873" y2="460.348" />
    <Line fill="none" stroke="#CBD5E0" strokeWidth="22.9859" strokeLinecap="round" strokeMiterlimit={10} x1="216.647" y1="658.348" x2="482.76" y2="849.439" />
    <Polyline fill="none" stroke="#CBD5E0" strokeWidth="22.9859" strokeLinecap="round" strokeMiterlimit={10} points="
    160.865,875.024 127.36,825.061 127.36,746.118 344.906,532.271 624.787,257.152 		" />
    <Line fill="none" stroke="#CBD5E0" strokeWidth="22.9859" strokeMiterlimit={10} x1="344.963" y1="750.735" x2="344.963" y2="532.368" />
    <Line fill="none" stroke="#2D3748" strokeWidth="22.9859" strokeLinecap="round" strokeMiterlimit={10} x1="624.783" y1="257.152" x2="557.447" y2="323.342" />
    <G>
        <Path fill="none" stroke="#2D3748" strokeWidth="22.9859" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="
        M221.675,874.723c0,33.956-27.529,61.487-61.485,61.487c-33.955,0-61.484-27.531-61.484-61.487
        c0-33.955,27.529-61.481,61.484-61.481C194.146,813.241,221.675,840.768,221.675,874.723z" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="159.924" y1="813.563" x2="159.924" y2="936.157" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="99.01" y1="875.249" x2="221.603" y2="875.249" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="116.598" y1="831.897" x2="203.28" y2="918.585" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="117.138" y1="918.585" x2="203.821" y2="831.895" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="134.055" y1="819.469" x2="185.863" y2="930.576" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="104.915" y1="901.117" x2="216.022" y2="849.304" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="102.534" y1="854.396" x2="217.733" y2="896.326" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="139.659" y1="932.732" x2="181.59" y2="817.536" />
    </G>
    <G>
        <Path fill="none" stroke="#2D3748" strokeWidth="22.9859" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} d="
        M569.529,849.439c0,47.922-38.847,86.768-86.769,86.768c-47.923,0-86.771-38.846-86.771-86.768
        c0-47.915,38.848-86.769,86.771-86.769C530.683,762.671,569.529,801.524,569.529,849.439z" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="481.729" y1="769.895" x2="481.729" y2="930.032" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="402.427" y1="850.729" x2="562.562" y2="850.729" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="425.385" y1="793.904" x2="538.561" y2="907.082" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="426.094" y1="907.082" x2="539.272" y2="793.904" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="447.959" y1="777.721" x2="515.639" y2="922.853" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="410.254" y1="884.49" x2="555.381" y2="816.816" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="407.046" y1="823.29" x2="557.447" y2="878.034" />
        <Line fill="none" stroke="#2D3748" strokeWidth="3.8315" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="455.518" y1="931.379" x2="510.26" y2="780.976" />
    </G>
</G>
</G>
<G>
    <Circle fill="#2D3748" cx="625.408" cy="256.403" r="14.839" />
</G>
</Svg>

const Icons = {
    EditIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><Path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></Svg>,

    Logo: GetLogo(true),

    LogoNoText: GetLogo(false),

    PopIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><Polyline points="17 6 23 6 23 12" /></Svg>,
    
    CrossIcon: <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Line x1="15" y1="9" x2="9" y2="15"></Line><Line x1="9" y1="9" x2="15" y2="15"></Line></Svg>,

    LoadingIcon: <div className="loaderContainer"><div className="loader" /></div>,
    
    StarIcon: <Svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></Svg>,

    CogIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Circle cx={12} cy={12} r={3} /><Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></Svg>,

    RatingsIcon: <Svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Line x1={8} y1={6} x2={21} y2={6} /><Line x1={8} y1={12} x2={21} y2={12} /><Line x1={8} y1={18} x2={21} y2={18} /><Line x1={3} y1={6} x2="3.01" y2={6} /><Line x1={3} y1={12} x2="3.01" y2={12} /><Line x1={3} y1={18} x2="3.01" y2={18} /></Svg>,

    PartnerIcon: <Svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><Circle cx={9} cy={7} r={4} /><Path d="M23 21v-2a4 4 0 0 0-3-3.87" /><Path d="M16 3.13a4 4 0 0 1 0 7.75" /></Svg>,

    SearchIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Circle cx={11} cy={11} r={8} /><Line x1={21} y1={21} x2="16.65" y2="16.65" /></Svg>,

    FilterIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Line x1={4} y1={21} x2={4} y2={14} /><Line x1={4} y1={10} x2={4} y2={3} /><Line x1={12} y1={21} x2={12} y2={12} /><Line x1={12} y1={8} x2={12} y2={3} /><Line x1={20} y1={21} x2={20} y2={16} /><Line x1={20} y1={12} x2={20} y2={3} /><Line x1={1} y1={14} x2={7} y2={14} /><Line x1={9} y1={8} x2={15} y2={8} /><Line x1={17} y1={16} x2={23} y2={16} /></Svg>,

    ArrowDownIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><G><Circle cx={12} cy={12} r={10} /><Polyline points="12 16 16 12 12 8" /><Line x1={8} y1={12} x2={16} y2={12} /></G></Svg>,

    ArrowUpIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><G><Circle cx={12} cy={12} r={10} /><Polyline points="12 16 16 12 12 8" /><Line x1={8} y1={12} x2={16} y2={12} /></G></Svg>,

    ChevronIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Polyline points="6 9 12 15 18 9" /></Svg>,

    ClockIcon: <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Circle cx={12} cy={12} r={10} /><Polyline points="12 6 12 12 16 14" /></Svg>,

    DiceIcon: <Svg aria-hidden="true" data-prefix="fas" data-icon="dice-five" viewBox="0 0 448 512"><Path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" /></Svg>,

    RateIcon: <Svg x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48">
        <G>
        <Polygon fill="none" stroke="#000000" strokeWidth="3.5646" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="
        24,2.545 30.837,16.393 46.122,18.628 35.062,29.401 37.671,44.621 24,37.432 10.328,44.621 12.938,29.401 1.878,18.628 
        17.165,16.393 	" />
        <Line fill="none" stroke="#000000" strokeWidth="2.8517" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="24.242" y1="20.064" x2="24.242" y2="31.809" />
        <Line fill="none" stroke="#000000" strokeWidth="2.8517" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} x1="18.371" y1="25.938" x2="30.116" y2="25.938" />
        </G>
    </Svg>
}
export default Icons