# Backend for the "Bank"


## Installation and Project Launch
1. To run this project, you will need nodejs and npm.
2. Clone this repository to your disk. Then execute npm i to install and npm start to start the server.
3. By default, the server listens on port 3000 on localhost.

Помните, что в репозиторий могли добавляться правки и улучшения, поэтому не забывайте периодически стягивать обновления посредством `git pull`.  


## Login and Password
Currently, access is only available to the following account:
* login: `developer`  
* password: `skillbox`  

For more information on how to authenticate, see below in the API documentation.

## Existing Accounts
Immediately after starting the server, the following accounts exist:

1. Your user account with a long history of transfers (incoming transfers from arbitrary accounts will regularly be received on this account):
    * 74213041477477406320783754

2. A set of other accounts that do not belong to the user but guaranteed to exist. You can use them to test the funds transfer functionality:
	* 61253747452820828268825011
	* 05168707632801844723808510
	* 17307867273606026235887604
	* 27120208050464008002528428
	* 2222400070000005
	* 5555341244441115


## API Response Format
All API methods respond with an object in the following common format:
```js
{
	payload, // any arbitrary value returned by the API method (null if an error occurred or it is impossible to return any significant data)
	error // error description/error code text that occurred; filled in only if an error occurred. Upon successful completion of the method, this will always be an empty string.
}
```

## API Methods

### GET /login
User authentication.   
Currently, the method allows login for the following user:
```js
{
	login: 'developer',
	password: 'skillbox'
}
```

The response will return a payload in the following format:
```js
{ token }
```
where token is a string containing information for accessing requests requiring authentication.

**Possible Errors:**  
* `Invalid password` — attempting to log in with an incorrect password;
* `No such user` — user with this username does not exist.

In the future, the token is specified in the Authorization header for methods requiring authentication: Authorization: Basic TOKEN, where TOKEN is replaced with the token value we obtained.

If we request any method, and it returns an error `Unauthorized`, it means we forgot to provide the token header when calling the method.

### GET /accounts
Returns a list of user accounts.
The response will be an array with information about the user's account in a format similar to this:

```js
[
	{
		"account": "74213041477477406320783754",
		"balance": 0,
		"transactions": [
			{
				"amount": 1234,
				"date": "2021-09-11T23:00:44.486Z",
				"from": "61253747452820828268825011",
				"to": "74213041477477406320783754"
			}
		]
	}
]
```
**Note:** This method returns only the last transaction from the transaction history.


### GET /account/{id}
The method returns detailed information about a user's account, where {id} in the method address is the account number.  
The response format is approximately as follows:
```js
[
	{
		"account": "74213041477477406320783754",
		"balance": 0,
		"transactions": [
			{
				"amount": 1234,
				"date": "2021-09-11T23:00:44.486Z",
				"from": "61253747452820828268825011",
				"to": "74213041477477406320783754"
			}
		]
	}
]
```
**Note:** This method returns the full transaction history for the account.


### POST /create-account
Creates a new account for the user. The request body is not important.

Responds with an object containing information about the newly created account:
```js
	"43123747452820828268825011": {
		"account": "43123747452820828268825011",
		"balance": 0,
		"mine": false,
		"transactions": []
	},
```

### POST /transfer-funds
Method for transferring, from one account to another.

Request body:    
```js
{
	from, // account from which funds are deducted
	to, // account to which funds are credited
	amount // amount to transfer
}
```

The method responds with an object of the account from which the transfer was made.

**Possible Errors:**  
* `Invalid account from` — no debit account address is specified, or this account does not belong to us;
* `Invalid account to`  — no credit account is specified, or this account does not exist;
* `Invalid amount` — the transfer amount is not specified, or it is negative;
* `Overdraft prevented` — we tried to transfer more money than is available in the debit account.


### GET /all-currencies
Returns an array with the codes of all currencies used by the backend at the moment, for example:
```js
[ 'ETH', 'BTC', 'USD' ]
```


### GET /currencies
Returns a list of the current user's currency accounts.   
Responds with an object containing information about the balances of the user's currency accounts:

```js
{
	"AUD": {
		"amount": 22.16,
		"code": "AUD"
	},
	"BTC": {
		"amount": 3043.34,
		"code": "BTC"
	},
	"BYR": {
		"amount": 48.75,
		"code": "BYR"
	},
}
```


### POST /currency-buy
Currency exchange method. 

Request body:
```js
{
	from, // currency code of the account from which funds are deducted
	to, // currency code of the account to which funds are credited
	amount // amount deducted, conversion is calculated automatically by the server based on the current exchange rate for this currency pair
}
```

The method responds with an object containing information about the balances of the user's currency accounts (see  `/currencies`).  

**Possible Errors:**  
* `Unknown currency code` — an incorrect currency code was passed, the code is not supported by the system (debit currency code or credit currency code);  
`Invalid amount` — the transfer amount is not specified, or it is negative;  
`Not enough currency` — there are no funds on the debit currency account;
`Overdraft prevented` — attempting to transfer more than is available on the debit account.


### Websocket /currency-feed
This is a websocket-stream that will provide messages about changes in the currency exchange rate.


Message format:
```js
{
	"type":"EXCHANGE_RATE_CHANGE",
	"from":"NZD",
	"to":"CHF",
	"rate":62.79,
	"change":1
}
```
where:
* `type` —  the type of message that can be used to filter this message from any other types of messages that may come;
* `from` — the currency code from which conversion is made;
* `to` — the currency code to which conversion is made;
* `rate` — the exchange rate of the above-mentioned currencies;
* `change` — the change in the exchange rate compared to the previous value: `1` —  increase in the exchange rate, `-1` — decrease in the exchange rate, `0` — the rate has not changed.  


### GET /banks
The method returns a list of points, marking ATM locations:

```js
[
		{ lat: 44.878414, lon: 39.190289 },
		{ lat: 44.6098268, lon: 40.1006606 }
]
```
were `lat` — is latitude, `lon` — is longitude.  
