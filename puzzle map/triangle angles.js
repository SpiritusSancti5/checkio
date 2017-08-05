function triangleAngles(a, b, c){

    var result;

    if( a+b<= c || b+c<=a || a+c<=b)

        result = [0,0,0];

    else{

        var alpha = Math.round(180/Math.PI*Math.acos((a*a+b*b-c*c)/(2*a*b)));

        var beta = Math.round(180/Math.PI*Math.acos((a*a-b*b+c*c)/(2*a*c)));

        var gamma = Math.round(180/Math.PI*Math.acos((-a*a+b*b+c*c)/(2*c*b)));

        result  = [alpha,beta,gamma].sort((a,b)=> a-b);

    }

    

    return result;

}

