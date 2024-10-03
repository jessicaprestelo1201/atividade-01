import { Router } from "express";

const candidatosRoutes = Router()


let candidatos = [
    {
        id: Math.random() * 1000000,
        nome: "Capita Lucimara",
        partido: "PSD",
        idade: 42,
        segundo: true,
        propostas: [
            "Aumento do salario mínimo",
            "Redução de impostos",
            "Mais investimentos em educação"
        ]
    }
]
//Rota para buscar todas as emoções
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).json(candidatos)
})

//criar nova emoção
candidatosRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body

    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }

    emocoes.push(novaEmocao)
    return res.status(201).send(novaEmocao)
});

//Rota  para buscar uma emoção pelo id
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    //console.log(id);
    const emocao = emocoes.find((emotion) => emotion.id == id)

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não enconrada!",
        });
    }
    return res.status(200).send({
        message: "Emoção encontrada",
        emocao,
    });

});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;

    const emocao = emocoes.find((emotion) => emotion.id == id)

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }
    const { nome, cor } = req.body;
    emocao.nome = nome;
    emocao.cor = cor;

    return res.status(200).send({
        message: "Emoção atualizada!",
        emocao,
    });
});
candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    //console.log(id);
    const emocao = emocoes.find((emotion) => emotion.id == id)

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não enconrada!",
        });
    }
    return res.status(200).send({
        message: "Emoção encontrada",
        emocao,
    });

});
candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const emocao = emocoes.filter((emotion) => emotion.id == id);

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

    emocoes = emocoes.filter((emotion) => emotion.id != id)

    return res.status(200).send({
        message: "Emoção deletada",
        emocao,
    });

});

export default candidatosRoutes;