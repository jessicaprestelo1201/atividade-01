import { Router } from "express";

const candidatosRoutes = Router()

let candidatos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Capita Lucimara",
        partido: "PSD",
        idade: 42,
        segundo: true,
        propostas: [
            "Aumento do salario mínimo",
            "Redução de impostos",
            "Mais investimentos em educação"
        ]
    },
]
//Rota para buscar todas as emoções
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).json(candidatos)
})

candidatosRoutes.post("/", (req, res) => {
    const {
        nome,
        partido,
        idade,
        segundo,
        propostas
    } = req.body;

    //validação dos campos nome e partiçipação

    if (! nome || !partido ) {
        return res.status(400).send({
message: "O nome ou o partido não foi preenchido!",

        })
    };

    //Validação de idade
    if(idade < 18) {
        return res.status(400).send({
            message: "Idade inválida",
    });
}

const novoCandidato = {
    id: Math.floor (Math.random() * 10000000),
    nome,
    partido,
    idade,
    segundo,
    propostas
};

candidatos.push(novoCandidato);
return res.status(201).json ({
    message: "Candidato cadastrado com sucesso",
    novoCandidato,
})

});


export default candidatosRoutes;