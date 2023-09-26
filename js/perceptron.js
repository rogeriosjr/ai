function perceptron ( inputs_weights ) {
    let sum = 0;
    let total = 0;

    for( let i = 0; i < inputs_weights.length; i++ ) {
        sum += inputs_weights[i].input * inputs_weights[i].weight;

        total += 1 * inputs_weights[i].weight;
    }

    console.log('Total: ' + total);
    console.log('50%: ' + (total / 2) );
    console.log('Soma: ' + sum);

    const activate = ( sum > ( total / 2 ) );

    return activate;
}