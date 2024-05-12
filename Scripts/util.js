// Importar la clase Submission desde el archivo Submission.js
import { Submission } from './Submission.js';



function calcularScoreBoard(caso){
    let submissions = caso.split(";"); // Para separar las entregas o submissions
    let tiempoP = {}; // Objeto para almacenar los tiempos de penalización de cada equipo
    let problemasR = {};

    // Para separar los datos de cada submission
    for (let i = 0; i < submissions.length; i++) {
        let infoSubmission = submissions[i].trim().split(" ");

        let concursante = infoSubmission[0];
        let tiempo = parseInt(infoSubmission[2]);
        let l = infoSubmission[3];

        //Calcular el número de problemas resueltos
        if (l === "C") {
            if (problemasR[concursante]) {
                problemasR[concursante] ++;
            }else{
                problemasR[concursante] = 1;
            } 
        }
        
        // Hacer el cálculo del tiempo de penalización
        if (l === "C") {
            // Si el equipo ya tiene un tiempo de penalización registrado, sumarle el tiempo del problema actual
            if (tiempoP[concursante]) {
                tiempoP[concursante] += tiempo;
            } else {
                // Si es la primera vez que se toma el equipo, inicializar su tiempo con el del problema actual
                tiempoP[concursante] = tiempo;
            }
        } else if (l === "I") {
            
            if (tiempoP[concursante]) {
                tiempoP[concursante] += 20;
            } else {  
                tiempoP[concursante] = 20;
            }
        }

    }


    let res = "";
    
    for (let concursante in tiempoP) {
        res += concursante + " " + problemasR[concursante] + " " + tiempoP[concursante] + "\n";           
    }

    return res;
    

}






/*

// Crear una instancia de la clase Submission
let submission = new Submission();

// Definir una entrada de ejemplo
let entrada = 'Team1 1 5 C;Team2 5 10 C;Team3 2 15 I;Team1 3 20 R;Team2 1 25 R;Team2 4 30 C;Team1 3 35 I;Team1 3 40 C;Team3 2 45 I;Team3 2 50 C';
let resultado = submission.convertirCadena(entrada);
console.log(resultado); 

*/

