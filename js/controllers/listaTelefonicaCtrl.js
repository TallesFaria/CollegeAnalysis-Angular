angular.module("collegeAnalysis").controller('collegeAnalysisCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: 'Pedro', telefone: '8923899823', data: new Date, cor: "blue", operadora: {nome: 'Oi', codigo: 14, categoria: "Celular"},},
        {nome: 'Ana', telefone: '42342342', data: new Date, cor: "yellow", operadora: {nome: 'Oi', codigo: 14, categoria: "Celular"}},
        {nome: 'Maria', telefone: '453453534', data: new Date, cor: "red", operadora: {nome: 'Oi', codigo: 14, categoria: "Celular"}}
    ];

    // var carregarContatos= function(){
    //     $http.get(url).then(function (data, status){
    //         $scope.contatos = data;       
    //     })
    // }

    $scope.operadoras = [
        {nome: 'Oi', codigo: 14, categoria: "Celular", preco: 1},
        {nome: 'Vivo', codigo: 15, categoria: "Celular", preco: 2},   
        {nome: 'Tim', codigo: 41, categoria: "Celular", preco: 1.5}, 
        {nome: 'GVT', codigo: 25, categoria: "Fixo", preco: 1.2},
        {nome: 'Embratel', codigo: 21, categoria: "Fixo", preco: 0.99}
    ];
    $scope.adicionarContato = function (contato){
        $scope.contatos.push(angular.copy(contato))
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos){
        $scope.contatos = contatos.filter(function (contato){
            if(!contato.selecionado) return contato;
        })
    };
    $scope.isContatoSelecionado = function (contatos){
        return !contatos.some(function(contato){
            return contato.selecionado
        })
    };
    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }
});