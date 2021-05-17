/**Frequece Used Methods of Global */
/**time getter */
export function getTime(t=new Date()){
    let [yyyy,MM,dd,hh,mm,ss]=[
        t.getFullYear(),
        t.getMonth()+1,
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds()
    ].map(function(m){
        return (''+m).padStart(2,'0')
    });
    let w=t.getDay().toString();
    return {yyyy,MM,dd,hh,mm,ss,w}
}
