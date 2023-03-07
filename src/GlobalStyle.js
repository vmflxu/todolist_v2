import { createGlobalStyle } from "styled-components";
import JamsilBold from "./font/JamsilBold.otf"
import JamsilExtraBold from "./font/JamsilBold.otf"
import JamsilLight from "./font/JamsilBold.otf"
import JamsilMedium from "./font/JamsilBold.otf"
import JamsilRegular from "./font/JamsilBold.otf"
import JamsilThin from "./font/JamsilBold.otf"
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family : 'JamsilBold' ;
        src: local('JamsilBold'), local('JamsilBold');
        font-style: normal;
        src: url(${JamsilBold}) format('opentype');
    }
    @font-face {
        font-family : 'JamsilExtraBold' ;
        src: local('JamsilExtraBold'), local('JamsilExtraBold');
        font-style: normal;
        src: url(${JamsilExtraBold}) format('opentype');
    }
    @font-face {
        font-family : 'JamsilLight';
        src: local('JamsilLight'), local('JamsilLight');
        font-style: normal;
        src: url(${JamsilLight}) format('opentype');
    }
    @font-face {
        font-family : 'JamsilMedium';
        src: local('JamsilMedium'), local('JamsilMedium');
        font-style: normal;
        src: url(${JamsilMedium}) format('opentype');
    }
    @font-face {
        font-family : 'JamsilRegular';
        src: local('JamsilRegular'), local('JamsilRegular');
        font-style: normal;
        src: url(${JamsilRegular}) format('opentype');
    }
    @font-face {
        font-family : 'JamsilThin';
        src: local('JamsilThin'), local('JamsilThin');
        font-style: normal;
        src: url(${JamsilThin}) format('opentype');
    }

    *{
        font-family: JamsilMedium;
    }

`

export default GlobalStyle;