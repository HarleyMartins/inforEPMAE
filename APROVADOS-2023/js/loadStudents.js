const loadStudents = () => {
    const students_table = document.querySelector('#tabela-aprovados');

    class Aluno {
        constructor(nome, nota) {
            this.nome = nome;
            this.nota = nota;
        }
    }
    
    let students_list = [
        new Aluno('Ana Luiza Sousa de Oliveira', 8.21),
        new Aluno('Ana Stefani de Sousa Farias', 8.88),
        new Aluno('Antonia Alice Castro do Nascimento', 8.76 ),
        new Aluno('Antonia Jordanna de Lima Castro', 8.94),
        new Aluno('Antonia Lorrany Alves Melo', 8.33),
        new Aluno('Antonia Thais Nascimento Fernandes', 9.46),
        new Aluno('Antonio Carlos Henrique Nunes', 7.67),
        new Aluno('Antonio Luan Saraiva Lima', 7.26),
        new Aluno('Bryan Lopes Furtado', 8.77),
        new Aluno('Daniel Carlos Dias ', 8.57),
        new Aluno('Daniela Acantara Ramos ', 8.96),
        new Aluno('Danila Pereira Costa ', 8.49),
        new Aluno('Euller Ferreira da Silva Carvalho', 8.20),
        new Aluno('Fabiola Nunes Veras', 8.15),
        new Aluno('Francisco Antonio Nascimento de Oliveira ', 7.18),
        new Aluno('Francisco de Jesus de Oliveira Chaves', 8.29),
        new Aluno('Francisco Fabrício Ambrósio da Silva', 8.33),
        new Aluno('Francisco Lucas Alencar de Sousa ', 7.29),
        new Aluno('Francisco Tainan Batista de Araujo', 8.25),
        new Aluno('Fridda Ximenes Oliveira ', 8.75),
        new Aluno('Gabriel de Sousa Moura', 9.18),
        new Aluno('Gisele Lima Costa', 9.02),
        new Aluno('Ingrid Tainara de Assis Araújo', 7.22),
        new Aluno('Isabelle Alves Araújo', 9.10),
        new Aluno('João Lucas Alves de Carvalho', 8.28),
        new Aluno('Joyce Magalhães de Oliveira', 8.41),
        new Aluno('Juan Matheus Marques da Silva ', 8.44),
        new Aluno('Lethicia Santana Guerra', 8.80),
        new Aluno('Luana de Azevedo Rodrigues', 7.15),
        new Aluno('Luis Felipe Rodrigues Trotte', 8.46),
        new Aluno('Maicon Aguiar Gomes', 8.65),
        new Aluno('Manuela de Sousa Cardoso', 9.11),
        new Aluno('Manuelly Nunes Alves ', 8.28),
        new Aluno('Maria Clara de Souza Moreira', 8.17),
        new Aluno('Maria Eduarda Barbosa de Carvalho', 8.48),
        new Aluno('Maria Eduarda Liorde Martins', 8.66),
        new Aluno('Maria Eduarda Rodrigues dos Santos', 8.70),
        new Aluno('Maria Fernanda Barbosa de Carvalho', 8.36),
        new Aluno('Mariana Rodrigues de Oliveira', 8.60),
        new Aluno('Matheus Mickael Pereira Moura ', 7.30),
        new Aluno('Paulo Vitor Silva ', 8.41),
        new Aluno('Pierre Paiva Ribeiro ', 8.59),
        new Aluno('Rayane da Silva de Lima ', 8.10),
        new Aluno('Renata Cristina Farias Holanda', 8.62),
        new Aluno('Wendell Abreu Timbó Filho', 7.77),
        
    ];
    
    students_list = students_list.sort((a, b) => a.nome.toLowerCase().localeCompare(b.nome.toLowerCase()));
    
    for (let i of students_list) {
        const tr_aluno = document.createElement('tr');
        
        const name_td = document.createElement('td');
        name_td.innerHTML = i.nome;
        
        const grade_td = document.createElement('td');
        grade_td.innerHTML = i.nota.toFixed(2);
        
        tr_aluno.append(name_td, grade_td);
        
        students_table.appendChild(tr_aluno);
    }
};

window.onload = loadStudents();