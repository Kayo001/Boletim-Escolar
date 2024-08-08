document.addEventListener("DOMContentLoaded", function() {
    const alunos = [
        { nome: "Ana", notas: [7, 6.5, 8], endereço: "Santo Amaro" },
        { nome: "Alan", notas: [9, 6, 5], endereço:"San Martin" },
        { nome: "João", notas: [8, 7.5, 9], endereço:"Olinda" },
        { nome: "Maria", notas: [6, 8, 7.5], endereço:"Casa Amarela" },
        { nome: "Pedro", notas: [9, 8.5, 8],  endereço:"Jaboatão dos Guararapes" },
    ];



    const tabela = document.querySelector("#boletim tbody");

    alunos.forEach(aluno => {
        const media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length;
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.notas[0]}</td>
            <td>${aluno.notas[1]}</td>
            <td>${aluno.notas[2]}</td>
            <td>${media.toFixed(1)}</td>
            <td>${aluno.endereço}</td>
        `;

        tabela.appendChild(tr);
    });
});