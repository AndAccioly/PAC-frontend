export function dividirArrayEmGrupos(arr, len){
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}




const Util = {
    dividirArrayEmGrupos,

}

export default Util