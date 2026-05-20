const alunos = [
            {nome: "Sayuri", idade: 17, disciplinaPreferida: "Educação Física"},
            {nome: "Yuki", idade: 21, disciplinaPreferida: "História"},
            {nome: "Lara", idade: 20, disciplinaPreferida: "Biologia"},
            {nome: "Jasmine", idade: 22, disciplinaPreferida: "Matemática"},
            {nome: "Aika", idade: 28, disciplinaPreferida: "Artes"},
            {nome: "Darian", idade: 22, disciplinaPreferida: "Física"}
];
const primeiroNome = alunos[0].nome;
const ultimaDisciplina = alunos[alunos.length - 1].disciplinaPreferida;
alert("nome do primeiro aluno " + primeiroNome + " matéria favorita do último " + ultimaDisciplina);
