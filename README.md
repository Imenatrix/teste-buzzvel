# Instruções de execução

## Variáveis de ambiente

- Copie os conteudos de .env.example para .env
- Adicione as informações do bando de dados
    - O container mysql irá utilizar essas informações para criar seu usuário
    - O endereço da coneção é gerenciado pelo docker-compose
- Adicione seu UID
    - O valor padrão é 1000, e provavelmente não precisa ser alterado
    - Para descobrir seu UID, utilize o comando
 ```
 $ id
 ```
 - A criação da chave de criptografia é gerenciada pelo próprio container

## Execução

O projeto depende de vários containeres externos e de um container com multiplos estágios de criação, todos gerenciados pelo docker-compose. Para executar, utilize o comando

```
$ docker-compose up
```

## Migrations

Se for a primeira vez que estiver executando o projeto, o banco de dados estará vazio e sem as tabelas necessárias, para adicionar as tabelas e popular o banco de dados utilize o comando

```
$ docker-compose exec laravel-app php artisan migrate --seed
```

## Comandos adicionais

Comandos adicionais devem ser direcionados ao container do projeto. Para executar um comando utilize

```
$ docker-compose exec laravel-app <comando>
```

E o docker-compose vai se conectar com o container e executar o comando. 

### Comandos artisan

Comandos artisan são executados da seguinte maneira:

```
$ docker-compose exec laravel-app php artisan <comando>
```

# Objetivo

Replicar com precisão as telas e casos de uso especificados no [documento](https://www.linkedin.com/safety/go?url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1E_aQ5_CmSUki_IMufBKMDnjvBdyexsxcS6HZvv7sSr0%2Fexport%3Fformat%3Dpdf&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-MDNmOWRmMzEtZjM3Ny00ZjcyLTk3ZmUtZmE3YjFmNzAyZGMyXzAxMw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAqo40QapS9y1gPA3QyTzGA%3D%3D) referente ao teste.

# Rotas

## web

- /

Redireciona para /generate

- /generate

Pagina com o formulário de geração de cartão de visitas. Ao preencher e enviar o formulário com sucesso, redireciona para a pagina do download do QR Code.

- /cartao/{id}

Pagina do download da imagem mobile contendo QR Code com o link do cartão de visitas.

- /{slug}

Pagina do cartão de visitas.

## API

- /api/cartao

Retorna um JSON contendo todos os cartões de visitas.
