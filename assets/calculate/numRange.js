/* global math, Plotly */

var matrixSize = 3;

findIdxs = function (e, m) {
    let s = [];
    for (let index = 0; index < e.length; index++) {
        if (e[index] === m) {
            s.push(index);
        }
    }
    return s;
};

getCols = function (r, s) {
    let cols = [];
    for (let i = 0; i < s.length; i++) {
        cols.push(math.column(r, s[i]));
    }
    return math.matrixFromColumns(...cols);
};

//let testAr = [[1,2,3],[4,5,6],[7,8,9]];
//let testIdxs = [0,2];
//console.log( getCols(testAr, testIdxs) );


numerical_range = function (A, resolution) {
    let w = [];
    for (let cnt = 0; cnt < (2.0 * math.pi + resolution); cnt += resolution)
    {
        let Ath = math.multiply(math.exp(math.multiply(math.complex(0, 1), -cnt)), A);
        let Hth = math.divide(math.add(Ath, math.ctranspose(Ath)), 2);

        try
        {
            const { values, vectors } = math.eigs(Hth);
            
            let e = math.re(values).valueOf();
            let r = math.matrix(vectors);

            let m = math.max(e);
            let s = findIdxs(e, m);

            if (s.length === 1) {
                //w.append(matrix.item(r[:,s].H*A*r[:,s]))
                let col = math.column(r, s[0]);
                let item = math.multiply(math.ctranspose(col), math.multiply(A, col));
                //console.log(item.valueOf()[0][0]);
                w.push(item.valueOf()[0][0]);
            } else {
                /* TA GAŁĄŹ WYMAGA PRZETESTOWANIA !!! */
                
                // Kth=1j*(Hth-Ath)
                let Kth = math.multiply(math.complex(0, 1), math.subtract(Hth, Ath));

                // pKp=r[:,s].H*Kth*r[:,s]
                let cols = getCols(r, s);
                let pKp = math.multiply(cols.ctranspose(cols), math.multiply(Kth, cols));

                try {
                    // ee,rr= eigh(pKp)
                    // rr= matrix(rr)
                    // ee= real(ee)
                    const { values, vectors } = math.eigs(pKp);
                    let rr = math.matrix(vectors);
                    let ee = math.re(values).valueOf();

                    // mm=ee.min()
                    let mm = math.min(ee);
                    // sm=find(ee==mm)
                    let sm = findIdxs(ee, mm);

                    // temp=rr[:,sm[0]].H*r[:,s].H*A*r[:,s]*rr[:,sm[0]]
                    let colm = math.column(rr, sm[0]);
                    let temp = math.multiply(math.ctranspose(colm), math.multiply(math.ctranspose(cols), math.multiply(A, math.multiply(cols, colm))));

                    // w.append(temp[0,0])
                    w.push(temp.valueOf()[0][0]);

                    // mM=ee.max()
                    let mM = math.max(ee);
                    // sM=find(ee==mM)
                    let sM = findIdxs(ee, mM);

                    // temp=rr[:,sM[0]].H*r[:,s].H*A*r[:,s]*rr[:,sM[0]]
                    let colM = math.column(rr, sM[0]);
                    temp = math.multiply(math.ctranspose(colM), math.multiply(math.ctranspose(cols), math.multiply(A, math.multiply(cols, colM))));

                    // w.append(temp[0,0])
                    w.push(temp.valueOf()[0][0]);

                } catch (error) {
                    console.error(error);
                    console.info(pKp);
                }
            }
        } catch (error)
        {
            console.error(error);
            console.info(Hth);
        }


    }

    return w;
};


/**
   * Find min and max Real and min and max Imaginary part in the array of math.complex values
   * @param {Array} path Array of math.complex values
   * @returns {Object} Returns object contains found values
   */
findMinMax = function(path) {
    var minRe = Number.MAX_VALUE;
    var maxRe = Number.MIN_VALUE;
    var minIm = Number.MAX_VALUE;
    var maxIm = Number.MIN_VALUE;

    for (let i = 0; i < path.length; i++) {
        let val = path[i];

        minRe = Math.min(minRe, val.re);
        minIm = Math.min(minIm, val.im);
        maxRe = Math.max(maxRe, val.re);
        maxIm = Math.max(maxIm, val.im);
    }

//    minRe = Math.floor(minRe) - 1;
//    minIm = Math.floor(minIm) - 1;
//    maxRe = Math.ceil(maxRe) + 1;
//    maxIm = Math.ceil(maxIm) + 1;

    return {minRe, minIm, maxRe, maxIm};
};


/**
   * Read string from HTML input given by id and convert it to math.complex value
   * Optionaly it converts 'j' to 'i' in imaginary part first.
   * @param {String} id  HTML input id
   * @returns {math.complex} Returns the math.complex value
   */
str2cplx = function (id) {
    let s = document.getElementById(id).value.replace("j", "i");
    return math.complex(s);
};


/**
   * Converts string to matrix
   * Optionaly it converts 'j' to 'i' first.
   * @param {String} t  matrix in text format: "[[1+5i, 2, 3], [2, 4-i, 0], [3, 0, 1-2i]]"
   * @returns {math.matrix} Returns the math.matrix object
   */
str2matrix = function (t) {
    let m = math.evaluate(t.replace("j", "i"));
    
    if ( math.typeOf(m) === 'Matrix' ) {
        let s = m.size();
        if (s.length === 2) {
            let x = s[0];
            let y = s[1];

            if ( ( x===y ) && ( x>1 ) && (x<5) ) {
                return m;
            } else {
                throw "Dopuszczalne są macierze o rozmiarze 2x2, 3x3 lub 4x4";
            }
        } else {
            throw "Dopuszczalne są macierze o rozmiarze 2x2, 3x3 lub 4x4";
        }
    }
    throw "Wprowadzony ciąg nie reprezentuje macierzy";
};


 /**
   * Reads the matrix from HTML inputs
   * @param {Number} v  Size of matrix (should be 2,3 or 4)
   * @returns {math.matrix} Returns the math.matrix object
   */
readMatrix = function (v) {
    switch (v) {
        case 4:
            return math.matrix([
                [str2cplx("a00"), str2cplx("a10"), str2cplx("a20"), str2cplx("a30")],
                [str2cplx("a01"), str2cplx("a11"), str2cplx("a21"), str2cplx("a31")],
                [str2cplx("a02"), str2cplx("a12"), str2cplx("a22"), str2cplx("a32")],
                [str2cplx("a03"), str2cplx("a13"), str2cplx("a23"), str2cplx("a33")]]);
            break;
        case 3:
            return math.matrix([
                [str2cplx("a00"), str2cplx("a10"), str2cplx("a20")],
                [str2cplx("a01"), str2cplx("a11"), str2cplx("a21")],
                [str2cplx("a02"), str2cplx("a12"), str2cplx("a22")]]);
            break;
        case 2:
            return math.matrix([
                [str2cplx("a00"), str2cplx("a10")],
                [str2cplx("a01"), str2cplx("a11")]]);
            break;
        default:
            return math.matrix;
            break;
    }
};

 /**
   * Draws the graph with use of Plotly.js library
   * @param {Array} path  Array of complex values
   * @param {Array} eigenvalues  Array of complex values
   * @param {Bool} aspect  Tells if the aspect shoud be corrected
   * @returns {void}
   */
plot = function (path, eigenvalues, aspect) {
    
    var minmax = findMinMax(path);
    
    var plotData = {
            x : [],
            y : [],
            name : '',
            mode: 'lines',
            marker: {
                color: 'red'
            },
            showlegend: false };
        
    for (let i=0; i<path.length; i++) {
        plotData.x.push(path[i].re);
        plotData.y.push(path[i].im);
    }

    var points = {
            x : [],
            y : [],
            name : '',
            mode: 'markers',
            marker: {
                color: 'blue',
                symbol: 'x'
            },
            showlegend: false };
        
    for (let i=0; i<eigenvalues.length; i++) {
        points.x.push(eigenvalues[i].re);
        points.y.push(eigenvalues[i].im);
    }

    let xaxis = {
                showgrid : false,
                //side: 'top',
                range: [minmax.minRe, minmax.maxRe],
                ticks: 'outside',
                dtick: 1.0,
                showline: true,
                zeroline: false,
                mirror: 'ticks'
//                title: "ℜ",
//                titlefont: {
//                    family: 'Arial, sans-serif',
//                    size: 20,
//                    color: 'black'
//                  }
            };

    let yaxis = {
                //scaleanchor: "x",
                //scaleratio: 1,
                showgrid : false,
                //side: 'right',
                range: [minmax.minIm, minmax.maxIm],
                ticks: 'outside',
                dtick: 1.0,
                showline: true,
                zeroline: false,
                mirror: 'ticks'
//                title: "ℑ",
//                titlefont: {
//                    family: 'Arial, sans-serif',
//                    size: 20,
//                    color: 'black'
//                  }
            };

    if (!aspect) {
        yaxis.scaleanchor = "x";
        yaxis.scaleratio = 1;
    };

    let symbol_Im = {
            xref: 'paper',
            yref: 'paper',
            x: 0,
            y: 1,
            xanchor: 'left',
            yanchor: 'top',
            text: 'ℑ',
            font: {
                family: 'sans serif',
                size: 24,
                color: 'green'
              },
            showarrow: false
        };
    
    let symbol_Re = {
            xref: 'paper',
            yref: 'paper',
            x: 1,
            y: 0,
            xanchor: 'right',
            yanchor: 'bottom',
            text: 'ℜ ',
            font: {
                family: 'sans serif',
                size: 24,
                color: 'green'
              },
            showarrow: false
        };
            
    Plotly.newPlot("wykres", {
        data: [plotData, points],
        layout: { 
            width: 600,
            height: 600,
            xaxis: xaxis,
            yaxis: yaxis,
            annotations: [ symbol_Im, symbol_Re ]
        }
    });
};

displayArray = function (a) {
    var e = "";
    math.forEach(a, function (val) {
        e += "\n<br>" + val;
    });
    return e;
};


 /**
   * Initiates the calculations
   * @param {math.matrix} m The input matrix
   * @param {Number} resolution Resolution of calculations
   * @returns {void}
   */
przelicz = function(m, resolution) {
    let div = document.getElementById('results');

    div.innerHTML = "macierz wejściowa: " + m;//.toString();

    let evals = [];

    try {
        const { values, vectors } = math.eigs(m);
        
        evals = values.valueOf();

        div.innerHTML += "<br>\nwartości własne: " + displayArray(evals);
//        div.innerHTML += "<br>\nwektory własne: " + displayArray(vectors.valueOf());

    } catch (error) {

        evals = error.values;

        div.innerHTML += "<br>\nwartości własne: " + displayArray(evals);
//        div.innerHTML += "<br>\n<span style=\"color:#00f\">" + error + "</span>";
        console.error(error);
    }

    div.innerHTML += "<br>\nwywołanie funkcji numerical_range...";

    let result = numerical_range(m, resolution);

    div.innerHTML += "<br>\nWynik funkcji (w): " + displayArray(result);

    document.getElementById('wykres').innerHTML = "";
    
    plot( result, evals, document.getElementById('aspect').checked );
};


/* OBSŁUGA ZDARZEŃ */

// onBodyLoad = function () {
//     document.getElementById('radio3').checked = true;
//     onRadio(3);
//     document.getElementById('wprT').checked = true;
//     onWpr(true);   
//     //document.getElementById('aspect').checked = false;
// };

onPrzelicz = function () {
    console.clear();

    const m = readMatrix(matrixSize);
    const resolution = 0.1;

    przelicz(m, resolution);
};

onPrzelicz2 = function () {
    console.clear();

    var t = document.getElementById('we2').value;
    
    try {
        const m = str2matrix(t);
        const resolution = 0.1;

        przelicz(m, resolution);
    } catch (error) {
        console.error(error);
        document.getElementById('results').innerHTML = "<span style=\"color:#00f\">"+error + "</span>";
    }
};


 /**
   * Switch the matrix size
   * @param {Number} v Matrix size (2, 3 or 4)
   * @returns {void}
   */
onRadio = function (v) {
    matrixSize = v;
    
    document.getElementById("a20").hidden = (v < 3);
    document.getElementById("a21").hidden = (v < 3);
    document.getElementById("a02").hidden = (v < 3);
    document.getElementById("a12").hidden = (v < 3);
    document.getElementById("a22").hidden = (v < 3);

    document.getElementById("a30").hidden = (v < 4);
    document.getElementById("a31").hidden = (v < 4);
    document.getElementById("a32").hidden = (v < 4);
    document.getElementById("a03").hidden = (v < 4);
    document.getElementById("a13").hidden = (v < 4);
    document.getElementById("a23").hidden = (v < 4);
    document.getElementById("a33").hidden = (v < 4);
};


 /**
   * Switch the method of matrix input
   * @param {Bool} asTxt True if text, false if matrix
   * @returns {void}
   */
onWpr = function(asTxt) {
    document.getElementById("tInput").hidden = !asTxt;
    document.getElementById("mInput").hidden = asTxt;
};

