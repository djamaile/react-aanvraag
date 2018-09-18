export default (aankopen) => {
    var i;
    var totaalBedrag = 0;
    if(aankopen){
        for(i = 0; i < aankopen.length; i++){
            totaalBedrag += aankopen[i].totaal;
        }
    }else{
        totaalBedrag = 0;
    }

    return totaalBedrag;
};