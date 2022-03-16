const { type } = require("express/lib/response");

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    checkout: (req, res) => {
        const detalhesPedido = {
            qtde: +req.query.qtde,
            react: req.query.react === 'on' ? 1 : 0,
            reactPreco: req.query.react === 'on' ? 3 : 0,
            vue: req.query.vue === 'on' ? 1 : 0,
            vuePreco: req.query.vue === 'on' ? 4 : 0,
            angular: req.query.angular === 'on' ? 1 : 0,
            angularPreco: req.query.angular === 'on' ? 5 : 0,
            observacoes: req.query.observacoes,
            frete: 21.99 //frete fixo somente para exemplo
        }

        const totalReact = detalhesPedido.qtde * detalhesPedido.reactPreco;
        const totalVue = detalhesPedido.qtde * detalhesPedido.vuePreco;
        const totalAngular = detalhesPedido.qtde * detalhesPedido.angularPreco;
        const totalPedido = totalReact + totalVue + totalAngular + detalhesPedido.frete;
        console.log(totalReact, totalVue, totalAngular, totalPedido)

        Object.assign(detalhesPedido, {totalReact, totalVue, totalAngular, totalPedido});

        console.log(detalhesPedido);
        res.render('checkout', {detalhesPedido});
    }
}
module.exports = controller;