# Exemplo de Power BI Embedded em Node.js

## Incorporar para seus clientes

### Requisitos

1. [Node.js](https://nodejs.org/en/download/)

2. IDE/editor de código. Recomendamos o uso do Visual Studio Code.

### Configurar um aplicativo Power BI

Siga as etapas em [aka.ms/EmbedForCustomer](https://aka.ms/embedforcustomer)

### Executar a aplicação localmente

1. Abra a IDE.

2. Abra a pasta [AppOwnsData](./Embed%20for%20your%20customers/AppOwnsData).

3. Abra o terminal e instale as dependências necessárias executando o seguinte comando.<br>
   `npm install`

4. Preencha os parâmetros necessários no arquivo [config.json](./Embed%20for%20your%20customers/AppOwnsData/config/config.json) relacionados ao aplicativo AAD, relatório Power BI, espaço de trabalho e informações da conta do usuário.

5. Execute o seguinte comando no CMD/PowerShell para iniciar a aplicação.<br>
   `npm start`

6. Abra **http://localhost:5300** no navegador ou consulte os registros para verificar a porta na qual a aplicação está sendo executada.

#### Navegadores compatíveis:

1. Google Chrome

2. Microsoft Edge

3. Mozilla Firefox

## Importante

Por motivos de segurança, em um aplicativo do mundo real, senhas e segredos não devem ser armazenados em arquivos de configuração. Em vez disso, considere proteger suas credenciais com uma aplicação como o Key Vault.
