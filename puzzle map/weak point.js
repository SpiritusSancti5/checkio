function weakPoint(matrix){

    var col,row,
        mincol = 999,
        minrow = 999;

    for(var i=0;i<matrix.length;i++){

        var sumcol = 0, sumrow = 0;

        for(var j=0;j<matrix.length;j++){
            sumrow += matrix[i][j];
            sumcol += matrix[j][i];
        }

        if(sumrow < minrow){
            minrow = sumrow;
            row = i;
        }

        if(sumcol < mincol){
            mincol = sumcol;
            col = i;
        }

    }
    return [row,col]
}
