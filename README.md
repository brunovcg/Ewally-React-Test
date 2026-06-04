Esse APP foi desenvolvido para atender ao teste do processo seletivo da Ewally

# Inicialização


## Instalação e Dependências

Após baixar via git, executar o comando "yarn" no terminal para carregar todas as dependências
você deve ter o YARN instalado

Inserir "yarn start" no terminal.
Verifique se está na porta 3000. Poderá haver bloqueio de CORS POLICY em outra porta.


## Caso prefira, segue o link do deploy pelo app vercel:
https://ewally-react-test.vercel.app/
Poderá haver bloqueio de CORS POLICY em função da API.

# Estilização
Baseado no site e cores da Ewally
Responsivo para Mobile.


# Funcionamento

### HEADER
Ícone da Ewally no cato superior esquerdo para voltar a Home
ícones dara dowload do applicativo da Ewally
Ícone de LOGOUT quando logado na tela Account

### HOME "/"

Apresenta informações da Ewally extraidas do próprio site.
Um botão para seguir a tela Login.

### LOGIN "/login"
Formulário com usuário e senha para login na api.
Caso haja erros de formuário, será mostrado ao usuário.
Caso esteja certo, redirecionado a tela account e um pop-up com Bem vindo surge.
Caso a senha esteja errada, aparecerá um pop up informando.


##### para teste default:
Usuário: testFrontEwally
senha: 123456


### ACCOUNT "/account"
Precisa está logado para acessar


caso esteja logado, não consegue acessar a home e login, pode-se deslogar apertando o botão superior de LOGOUT. (Autenticação)

No topo exibe o balanço da conta pela requisição da API

Dois inputs de calendário para selecionar período do extrato e pressionar o OK.


#### para teste usar 01/01/2019 e 31/01/2019 default:

Ao clicar em OK serão exibidos um gráfico diário de receitas e despesas

Uma lista de gastos, citando data, tipo , valor e um botão para o comprovante.

Caso clicado esse botão, será exibido o comprovante, se houver e a localização.


### PageNotfound 

Caso não esteja logado, e digite uma rota que não existe será redirecionado para a Not Found, que informa ao usuário e existe um botão para retornar a home.


