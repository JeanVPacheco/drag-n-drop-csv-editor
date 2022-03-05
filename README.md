# Deploy: https://drag-n-drop-csv-editor.vercel.app/

# Editor de CSV com função "drag and drop"

Esse projeto foi feito para o processo seletivo da startup Inteligov.

Foram usadas as seguintes bibliotecas:

- papaparse, para acessar os dados do arquivo .CSV
- eslint, para verificação da sintaxe dos arquivos
- prop-types, para verificação das props enviadas aos componentes
- react-csv, para download do arquivo .CSV após edição

## Siga as instruções para rodar o app:

1. Clone os arquivos para um diretório em sua máquina:
- $ git clone (endereço SSH ou HTTTP)

## Rodando localmente

2. Depois de clonar, entre no diretório e instale as dependências necessárias:
- $ npm install

3. Instaladas as dependências, é só rodar o script para montar o aplicativo:
- $ npm start

## Rodando via docker

2. Depois de clonar, entre no diretório e rode o seguinte comando para iniciar o docker (*):
- $ docker run -v "$PWD:/app" -p 3000:3000 -it node:12 bash

3. Agora que você esta no terminal do container, entre na pasta "app", instale as dependências necessárias e inicie o projeto, que estará rodando na porta 3000:
- $cd app && npm i && npm start

4. Acesse a porta 3000 a partir do navegador:
- http://localhost:3000/


*Explicando um pouco sobre os comandos docker:
- -v -> mapeia o diretório atual para a pasta "/app" do container
- -p -> faz um link entre a porta 3000 do computador local com a porta 3000 do container
- -it -> cria o container de forma interativa, para que seja possível acessar o terminal do container
- node:12 -> imagem de docker utilizada
- bash -> o terminal a ser utilizado
