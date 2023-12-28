let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;
    if(retVal) {
        for(property in src) {
            if(typeof(src[property]) === typeof(trg[property])) { 
                retVal = typeof(src[property]) === 'object' ? deepComp(src[property], trg[property]) : src[property] === trg[property]
            } else {
                retVal =false;
            }
            if(!retVal) break;
        }
    }
    return retVal;
}