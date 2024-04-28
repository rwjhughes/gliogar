import styles from '../styles/Bds.module.css';
import React from 'react';

const Bds = () => {
    const counties = {
        kerry: {
            name: 'Ciarraí',
            email: 'mailto:pa.daly@oireachtas.ie,norma.foley@oireachtas.ie,brendan.griffin@oireachtas.ie,danny.healy-rae@oireachtas.ie,michael.healy-rae@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta%2C%20a%20chara%2C%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa%2C%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr%2C%20agus%20%C3%B3n%20aer%2C%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta%2C%20leonta%2C%20ocracha%2C%20breoite%2C%20tugtha%20seo%20imeacht%20leo%3B%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA%2C%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach%2C%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo%2C%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn%3A%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta%3B%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh%2C%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne%3B%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe%2C%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael%3B%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA%3B%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte%2C%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD%2C%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn%2C%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm%2C%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna%2C%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s%2C%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne%3F%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas'
        },
        cork: {
            name: 'Corcaigh',
            email: 'mailto:michael.creed@oireachtas.ie,aindrias.moynihan@oireachtas.ie,michael.moynihan@oireachtas.ie,mick.barry@oireachtas.ie,colm.burke@oireachtas.ie,thomas.gould@oireachtas.ie,padraig.osullivan@oireachtas.ie,pat.buckley@oireachtas.ie,james.oconnor@oireachtas.ie,sean.sherlock@oireachtas.ie,david.stanton@oireachtas.ie,simon.coveney@oireachtas.ie,micheal.martin@oireachtas.ie,michael.mcgrath@oireachtas.ie,donnchadh.olaoghaire@oireachtas.ie,holly.cairns@oireachtas.ie,michael.collins@oireachtas.ie,christopher.osullivan@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta%2C%20a%20chara%2C%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa%2C%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr%2C%20agus%20%C3%B3n%20aer%2C%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta%2C%20leonta%2C%20ocracha%2C%20breoite%2C%20tugtha%20seo%20imeacht%20leo%3B%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA%2C%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach%2C%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo%2C%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn%3A%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta%3B%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh%2C%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne%3B%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe%2C%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael%3B%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA%3B%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte%2C%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD%2C%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn%2C%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm%2C%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna%2C%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s%2C%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne%3F%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas',
        },
        galway: {
            name: 'Gaillimh',
            email: 'mailto:catherine.connolly@oireachtas.ie,mairead.farrell@oireachtas.ie,noel.grealish@oireachtas.ie,hildegarde.naughton@oireachtas.ie,eamon.ocuiv@oireachtas.ie,sean.canney@oireachtas.ie,ciaran.cannon@oireachtas.ie,anne.rabbitte@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta,%20a%20chara,%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa,%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr,%20agus%20%C3%B3n%20aer,%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta,%20leonta,%20ocracha,%20breoite,%20tugtha%20seo%20imeacht%20leo;%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA,%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach,%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo,%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn:%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta;%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh,%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne;%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe,%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael;%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA;%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte,%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD,%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn,%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm,%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna,%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s,%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne?%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas'
        },
        mayo: {
            name: 'Maigh Eo',
            email: 'mailto:dara.calleary@oireachtas.ie,rose.conwaywalsh@oireachtas.ie,alan.dillon@oireachtas.ie,michael.ring@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta%2C%20a%20chara%2C%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa%2C%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr%2C%20agus%20%C3%B3n%20aer%2C%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta%2C%20leonta%2C%20ocracha%2C%20breoite%2C%20tugtha%20seo%20imeacht%20leo%3B%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA%2C%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach%2C%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo%2C%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn%3A%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta%3B%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh%2C%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne%3B%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe%2C%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael%3B%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA%3B%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte%2C%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD%2C%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn%2C%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm%2C%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna%2C%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s%2C%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne%3F%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas'
        },
        meath: {
            name: 'An Mhí',
            email: 'mailto:thomas.byrne@oireachtas.ie,helen.mcentee@oireachtas.ie,darren.orourke@oireachtas.ie,damien.english@oireachtas.ie,johnny.guirke@oireachtas.ie,peadar.toibin@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta%2C%20a%20chara%2C%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa%2C%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr%2C%20agus%20%C3%B3n%20aer%2C%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta%2C%20leonta%2C%20ocracha%2C%20breoite%2C%20tugtha%20seo%20imeacht%20leo%3B%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA%2C%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach%2C%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo%2C%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn%3A%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta%3B%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh%2C%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne%3B%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe%2C%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael%3B%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA%3B%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte%2C%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD%2C%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn%2C%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm%2C%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna%2C%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s%2C%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne%3F%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas'
        },
        waterford: {
            name: 'Port Láirge',
            email: 'mailto:mary.butler@oireachtas.ie,david.cullinane@oireachtas.ie,matt.shanahan@oireachtas.ie,marc.ocathasaigh@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta%2C%20a%20chara%2C%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa%2C%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr%2C%20agus%20%C3%B3n%20aer%2C%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta%2C%20leonta%2C%20ocracha%2C%20breoite%2C%20tugtha%20seo%20imeacht%20leo%3B%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA%2C%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach%2C%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo%2C%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn%3A%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta%3B%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh%2C%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne%3B%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe%2C%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael%3B%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA%3B%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte%2C%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD%2C%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn%2C%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm%2C%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna%2C%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s%2C%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne%3F%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas'
        },
        donegal: {
            name: 'Tír Chonaill',
            email: 'mailto:pearse.doherty@oireachtas.ie,padraig.maclochlainn@oireachtas.ie,charlie.mcconalogue@oireachtas.ie,joe.mchugh@oireachtas.ie,thomas.pringle@oireachtas.ie?subject=N%C3%AD%20ceadmhach%20neamhshuim!&body=A%20Theachta%2C%20a%20chara%2C%0A%0AT%C3%A1im%20ag%20scr%C3%ADobh%20chugat%20ar%20bhonn%20pr%C3%A1inne%20agus%20t%C3%BA%20mar%20ionada%C3%AD%20tofa%20s%E2%80%99agamsa%2C%20mar%20fhreagra%20ar%20an%20ionradh%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20ag%20f%C3%B3rsa%C3%AD%20Iosrael%20ar%20an%20dtalamh%20i%20ndeisceart%20Gaza%20faoi%20l%C3%A1thair.%0A%0ALe%20breis%20is%20ceithre%20mh%C3%AD%20anuas%20t%C3%A1%20Palaist%C3%ADnigh%20i%20nGaza%20faoin%20mbombard%C3%BA%20is%20f%C3%ADochmhaire%20agus%20is%20neamhshrianta%20f%C3%B3s%20%C3%B3%20Iosrael.%20D%C3%ADbr%C3%ADodh%20os%20cionn%201.4%20milli%C3%BAn%20duine%20go%20deisceart%20Gaza.%20Anois%20d%E2%80%99fh%C3%B3gair%20Iosrael%20don%20domhan%20m%C3%B3r%20go%20bhfuil%20siad%20chun%20l%C3%A1n-ionsa%C3%AD%20a%20dh%C3%A9anamh%20sa%20deisceart%20ar%20muir%20is%20ar%20t%C3%ADr%2C%20agus%20%C3%B3n%20aer%2C%20agus%20t%C3%A1%20s%C3%A9%20r%C3%A1ite%20leis%20na%20d%C3%ADl%C3%A1ithrigh%20bochta%2C%20leonta%2C%20ocracha%2C%20breoite%2C%20tugtha%20seo%20imeacht%20leo%3B%20n%C3%ADl%20aon%20%C3%A1it%20eile%20le%20dul%20acu.%0A%0AUaf%C3%A1is%20thar%20a%20bheith%20br%C3%BAidi%C3%BAil%20agus%20barbartha%20at%C3%A1%20%C3%A1%20n-imirt%20ar%20na%20Palaist%C3%ADnigh%20i%20nGaza%20agus%20n%C3%AD%20m%C3%B3r%20d%C3%BAinn%20stop%20a%20chur%20leo.%20T%C3%A1%20St%C3%A1it%20Iosrael%20ag%20cleachtadh%20d%C3%BAnmhar%C3%BA%2C%20ollphrios%C3%BAn%C3%BA%20agus%20glanadh%20eitneach%20ar%20mhuintir%20na%20Palaist%C3%ADne%20sa%20Bhruach%20Thiar.%20N%C3%AD%20m%C3%B3r%20gn%C3%ADomh%C3%BA%20l%C3%A1ithreach%2C%20n%C3%AD%20fh%C3%A9achfar%20go%20cneasta%20sa%20todhcha%C3%AD%20orthu%20si%C3%BAd%20n%C3%A1r%20ardaigh%20a%20nguth%20chun%20stop%20a%20chur%20leis%20seo%2C%20n%C3%A1%20nach%20ndearna%20a%20gcro%C3%AD%20d%C3%ADcheall%20chun%20deireadh%20a%20chur%20leis%20na%20coireanna%20uaf%C3%A1sacha%20seo.%0A%0AN%C3%ADl%20aon%20am%20f%C3%A1gtha%20le%20bheith%20ag%20cur%20is%20ag%20c%C3%BAiteamh%20faoi%20cad%20ba%20ch%C3%B3ir%20d%E2%80%99%C3%89irinn%20a%20dh%C3%A9anamh.%20N%C3%AD%20m%C3%B3r%20d%C3%BAinn%3A%0A%0A%C2%B7%20Taca%C3%ADocht%20dh%C3%ADreach%20a%20thaispe%C3%A1int%20agus%20dul%20i%20bp%C3%A1irt%20le%20c%C3%A1s%20na%20hAfraice%20Theas%20i%20gcoinne%20an%20Iosrael%20sa%20Ch%C3%BAirt%20Bhreithi%C3%BAnais%20Idirn%C3%A1isi%C3%BAnta%3B%0A%C2%B7%20Deireadh%20leis%20an%20L%C3%A9igear%20M%C3%ADdhleathach%20ar%20Gaza%20a%20%C3%A9ilimh%2C%20agus%20ligean%20do%20chabhair%20dhaonn%C3%BAil%20teacht%20isteach%20ann%20ar%20bhonn%20pr%C3%A1inne%3B%0A%C2%B7%20Smachtbhanna%C3%AD%20a%20chur%20i%20bhfeidhm%20l%C3%A1ithreach%20ar%20St%C3%A1t%20Iosrael%20agus%20a%20chuid%20ionadaithe%2C%20lena%20n-%C3%A1ir%C3%ADtear%20deireadh%20a%20chur%20leis%20an%20tr%C3%A1d%C3%A1il%20arm%20d%C3%A9thaobhach%20agus%20le%20h%C3%BAs%C3%A1id%20aerfort%20agus%20aersp%C3%A1s%20na%20h%C3%89ireann%20ag%20airm%20na%20St%C3%A1t%20Aontaithe%20mura%20d%C3%A9antar%20scr%C3%BAdaithe%20le%20cinnti%C3%BA%20nach%20bhfuil%20aon%20arm%20%C3%A1%20gcur%20go%20hIosrael%3B%0A%C2%B7%20Bille%20na%20gCr%C3%ADoch%20faoi%20Fhorghabh%C3%A1il%20agus%20an%20Bille%20um%20Dh%C3%ADfheisti%C3%BA%20i%20gCoil%C3%ADneachta%C3%AD%20Neamhdhleathacha%20Iosraelacha%20a%20reacht%C3%BA%3B%0A%C2%B7%20Deireadh%20a%20chur%20le%20caidrimh%20thaidhleoireachta%20le%20hIosrael%20na%20Cinedheighilte.%0A%0ADar%20leis%20na%20pobalbhreitheanna%20is%20d%C3%A9ana%C3%AD%20tuigeann%2080%25%20de%20v%C3%B3t%C3%A1laithe%20go%20bhfuil%20cinedh%C3%ADoth%C3%BA%20%C3%A1%20dh%C3%A9anamh%20ag%20Iosrael.%20Tuigeann%2070%25%20go%20bhfuil%20Iosrael%20ag%20d%C3%A9anamh%20coir%20na%20Cinedheighilte%2C%20agus%20teasta%C3%ADonn%20%C3%B3%2070%25%20go%20gcuirfear%20smachtbhanna%C3%AD%20i%20bhfeidhm.%0AMar%20v%C3%B3t%C3%A1la%C3%AD%2C%20ba%20mhaith%20liom%20a%20mheabhr%C3%BA%20duit%20go%20mbeidh%20toghch%C3%A1in%20ar%20si%C3%BAl%20in%20%C3%89irinn%20sa%20d%C3%A1%20bhliain%20amach%20romhainn%2C%20agus%20rachaidh%20seasamh%20p%C3%A1irtithe%20polait%C3%ADochta%20agus%20seasamh%20pholaiteoir%C3%AD%20indibhidi%C3%BAla%20i%20leith%20na%20Palaist%C3%ADne%20go%20m%C3%B3r%20i%20bhfeidhm%2C%20ar%20n%C3%AD%20hamh%C3%A1in%20mo%20ch%C3%A9ad%20roghanna%2C%20ach%20conas%20a%20v%C3%B3t%C3%A1laim%20tr%C3%ADd%20s%C3%ADos.%0A%0AT%C3%A1%20na%20coireanna%20at%C3%A1%20%C3%A1%20dh%C3%A9anamh%20i%20nGaza%20ag%20tarl%C3%BA%20faoi%20l%C3%A1thair%20mar%20n%C3%A1r%20chuir%20an%20pobal%20idirn%C3%A1isi%C3%BAnta%20aon%20phion%C3%B3s%20ar%20Iosrael%20maidir%20le%20coireanna%20eile%20a%20rinne%20siad%20roimhe%20seo.%20M%C3%A1%20ligtear%20d%E2%80%99Iosrael%20lean%C3%BAint%20ar%20aghaidh%20saor%20%C3%B3%20phion%C3%B3s%2C%20c%C3%A9n%20uaf%C3%A1is%20eile%20a%20bheidh%20i%20nd%C3%A1n%20do%20mhuintir%20na%20Palaist%C3%ADne%3F%0A%0ACaithfidh%20%C3%89irinn%20gn%C3%ADomh%C3%BA%20anois!%0A%0ALe%20meas'
        },

        // Add more counties and their email addresses as needed
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div></div>
                <div>
                    <h1>Seol Ríomhphost do do TDanna áitiúla<br />chun Smachtbhannaí a chur ar Iosrael </h1>
                    <h2>Ná dean dearmad d'ainm a shíniú ar bhun an ríomphoist.</h2>
                    <h2>Pioc do Chontae:</h2>
                </div>
                <div></div>
            </div>
            <div className={styles.bileog}>
                <a download="..imgs/Bileog_Eolais_CFC.jpg" href="../imgs/Bileog_Eolais_CFC.jpg" title="ImageName">
                    <p>íoslódáil an bhileog eolais BDS ⤵️</p>
                    <img alt="Bileog Eolais CFC" src="../imgs/Bileog_Eolais_CFC.jpg" />
                </a>
            </div>
            <div className={styles.bileogText}>
                <a download="..imgs/Bileog_Eolais_CFC.jpg" href="../imgs/Bileog_Eolais_CFC.jpg" title="ImageName">

                    <p> ➡️ íoslódáil an bhileog eolais BDS ⬅️</p>
                </a>
            </div>
            <div className={styles.countyList}>
                {Object.entries(counties).map(([county, data]) => (
                    <a key={county} className={`${styles.county} ${styles[county]}`} href={data.email}>{data.name}</a>
                ))}
            </div>
        </div>
    );
};

export default Bds;
