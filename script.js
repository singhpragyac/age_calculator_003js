function click1() {
    //console.log("start");
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    const o = new Date();
    const d = new Date(year+"-"+month+"-"+day);
    let z = (o.getTime()-d.getTime())/1000;
    let y_s = 365 * 24 * 60 * 60;
    let m_s = 30 * 24 * 60 * 60;
    let d_s = 24 * 60 * 60;
    let p = (parseInt(z/y_s));
    let q = ( parseInt((z%y_s)/m_s) );
    let r = ( parseInt( ((z%y_s)%m_s)/d_s) );
    document.getElementById("show1").innerHTML = p;
    document.getElementById("show2").innerHTML = q;
    document.getElementById("show3").innerHTML = r;
    return;
    // console.log("end");
}
