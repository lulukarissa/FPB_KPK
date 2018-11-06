function fpb_kpk(x,y){
    var FPB=0;
    for(var c=1; c<=x; c++){
        var d = x%c
        var e = y%c

        if(d==e && e==0){
            var FPB = c
        }
    }

    var KPK = (x*y)/FPB

    console.log(`FPB ${x} & ${y} = ${FPB}`)
    console.log(`KPK ${x} & ${y} = ${KPK}`)
}

fpb_kpk(2,3)
fpb_kpk(12,20)
fpb_kpk(4,5)