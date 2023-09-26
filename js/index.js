/**
 * Como programar um perceptron
 * 
 * Crie uma plotadora simples
 * Crie 500 pontos xy aleatórios
 * Exibir os pontos xy
 * Crie uma função de linha: f(x)
 * Exibir a linha
 * Calcule as respostas desejadas
 * Exibir as respostas desejadas
 */

// Create a Plotter
const plotter = new XYPlotter("myCanvas");
plotter.transformXY();
const xMax = plotter.xMax;
const yMax = plotter.yMax;
const xMin = plotter.xMin;
const yMin = plotter.yMin;

// Create Random XY Points
const numPoints = 500;
const xPoints = [];
const yPoints = [];
for (let i = 0; i < numPoints; i++) {
  xPoints[i] = Math.random() * xMax;
  yPoints[i] = Math.random() * yMax;
}

// Line Function
function f(x) {
  return x * 1.2 + 50;
}

//Plot the Line
plotter.plotLine(xMin, f(xMin), xMax, f(xMax), "black");

// Compute Desired Answers
const desired = [];
for (let i = 0; i < numPoints; i++) {
    desired[i] = 0;
    if (yPoints[i] > f(xPoints[i])) {desired[i] = 1}
}

// Diplay Desired Result
for (let i = 0; i < numPoints; i++) {
    let color = "blue";
    if (desired[i]){
        color = "black";
    }
    plotter.plotPoint(xPoints[i], yPoints[i], color);
}

/**perceptron */
const inputs_weights = [{
    input: 1,
    weight: 0.7
},
{
    input: 0,
    weight: 0.6
},
{
    input: 1,
    weight: 0.5
},
{
    input: 1,
    weight: 0.3
},
{
    input: 1,
    weight: 0.4
},
{
    input: 0,
    weight: 0.9
}];

let vou = perceptron( inputs_weights );
console.log(vou);