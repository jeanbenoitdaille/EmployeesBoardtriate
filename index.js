let employes = ["Pierre", "Marie", "Julien", "Astrid", "Zoé"];
     
let employes_a_m = [];
let employes_n_z = [];
let alphabet_01 = "abcdefghijklm";
let alphabet_02 = "nopqrstuvwxyz";
 
for (let employe of employes) {
    let firstLetter = employe[0].toLowerCase();
    if (alphabet_01.indexOf(firstLetter) !== -1) {
        employes_a_m.push(employe);
    } else if (alphabet_02.indexOf(firstLetter) !== -1) {
        employes_n_z.push(employe);
    }
}
employes_a_m.sort();
employes_n_z.sort();