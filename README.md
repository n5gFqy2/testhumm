# Set Up

 1. Clone o Projeto 
 2. execute **npm i**

# TEST 

com o comando 

> **npm run test**

# API 

## DBCheck

POST http://localhost:4000/DBCheck

{
	"status": 200,
	"statusText": "OK",
	"headers": {
		"Date": "Mon, 20 Sep 2021 22:56:52 GMT",
		"Content-Type": "application/json; charset=utf-8",
		"Content-Length": "395",
		"Connection": "close"
	},
	"config": {
		"timeout": 10000,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"headers": {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/x-www-form-urlencoded",
			"User-Agent": "axios/0.21.1"
		}
	},
	"request": {
		"method": "POST",
		"httpVersion": "1.1",
		"responseUrl": "http://localhost:4000/DBCheck",
		"timeout": 10000,
		"headers": {}
	},
	"data": {
		"message": "ok",
		"data": [
			{
				"id": 1,
				"nome": "nome",
				"valor": 10,
				"estoque": "estoque",
				"tamanho": "tamanho",
				"tipo": "tipo",
				"tipo_descricao": "descricao",
				"dataCadastro": "2021-09-20T22:56:52.976Z",
				"_id": "3BYTM0OLX3JBZe2T"
			},
			{
				"id": 1,
				"nome": "nome2",
				"valor": 10,
				"estoque": "estoque",
				"tamanho": "tamanho2",
				"tipo": "tipo",
				"tipo_descricao": "descricao",
				"dataCadastro": "2021-09-20T22:56:52.976Z",
				"_id": "ySNNfwICMz3RJYOG"
			}
		]
	}
}




## Venta

POST http://localhost:4000/venta 

{
	"status": 200,
	"statusText": "OK",
	"headers": {
		"Date": "Mon, 20 Sep 2021 22:53:03 GMT",
		"Content-Type": "application/json; charset=utf-8",
		"Content-Length": "221",
		"Connection": "close"
	},
	"config": {
		"timeout": 10000,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"headers": {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json;charset=utf-8",
			"User-Agent": "axios/0.21.1",
			"Content-Length": 241
		}
	},
	"request": {
		"method": "POST",
		"httpVersion": "1.1",
		"responseUrl": "http://localhost:4000/venta",
		"timeout": 10000,
		"headers": {},
		"data": {
			"data": "2021-09-20T18:57:13.208Z",
			"cpf": "240",
			"item": {
				"id": 1,
				"nome": "nome2",
				"valor": 10,
				"estoque": "estoque",
				"tamanho": "tamanho2",
				"tipo": "tipo2",
				"tipo_descricao": "descricao",
				"dataCadastro": "2021-09-20T18:57:13.208Z",
				"_id": "oZL67R39pVn4qPQT"
			}
		}
	},
	"data": {
		"message": "ok",
		"data": {
			"item": {
				"id": 1,
				"nome": "nome2",
				"tamanho": "tamanho2",
				"tipo": "tipo2",
				"tipo_descricao": "descricao"
			},
			"nf": {
				"idNf": "KnMyhqZuf",
				"idItem": "oZL67R39pVn4qPQT",
				"cpf": "240",
				"data": "2021-09-20T18:57:13.208Z"
			}
		}
	}
}


## devolucao

POST http://localhost:4000/devolucao

{
	"status": 200,
	"statusText": "OK",
	"headers": {
		"Date": "Mon, 20 Sep 2021 23:21:35 GMT",
		"Content-Type": "application/json; charset=utf-8",
		"Content-Length": "16",
		"Connection": "close"
	},
	"config": {
		"timeout": 10000,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"headers": {
			"Accept": "application/json, text/plain, */*",
			"Content-Type": "application/json;charset=utf-8",
			"User-Agent": "axios/0.21.1",
			"Content-Length": 60
		}
	},
	"request": {
		"method": "POST",
		"httpVersion": "1.1",
		"responseUrl": "http://localhost:4000/devolucao",
		"timeout": 10000,
		"headers": {},
		"data": {
			"cpf": "240",
			"idNF": "KnMyhqZuf",
			"idItem": "oZL67R39pVn4qPQT"
		}
	},
	"data": {
		"message": "ok"
	}
}
