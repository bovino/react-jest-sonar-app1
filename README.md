This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- yarn start
- yarn test --coverage
- yarn sonar-scanner
- yarn test-full -> Executa test, mostra o coverage, rodar eslint gerando seu arquivo report e ja chama o sonar-scanner na sequencia
- yarn build

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Passos para executar

- instalar o CLI do Creat React App com NPM -> npm install -g react-scripts@latest

- instalar o yarn -> npm install -g yarn

- instalar o eslint -> npm install -g eslint

- instalar GIT (preferencialmente com configs globais)

- instalar JDK 8 

- configurar variavel de ambiente JAVA_HOME apontando para raiz da pasta do JDK

- Baixar o SonarQube e rodar script de start -> Requer SonarQube 7.2+ e/ou SonarJS 4.2+.
....\sonarqube-7.6\bin\windows-x86-64\StartSonar.bat

- Acessar http://localhost:9000 e confirmar que Sonar está rodando

- Baixar JAR do ESLINT Plugin para Sonar -> URL: https://github.com/sleroy/SonarEsLintPlugin

- Copiar o jar do plugin ESLINT-Sonar na pasta "extensions/plugins" do Sonar

- Reiniciar o Sonar para que ele reconheça o plugin 

- Acessar http://localhost:9000 e confirmar que Sonar está rodando

- Logar como admin (usuário e senha admin) para ver o ESLINT na lista de Profiles disponiveis

- Voltar para a linha de comando e ir para sua pasta de desenvolvimento

- criar uma pasta

- git clone do projeto nessa pasta https://github.com/bovino/react-jest-sonar-app1

- cd react-jest-sonar-app1

- yarn install

- yarn test-full (se estiver em Linux ou MacOS ajustar path do coverage no sonar-project.properties)

- Ir no Sonar ver dados coletados do projeto

- Para testar checagem de duplicação cross-project, baixar o mesmo projeto em outra pasta, troca as chaves sonar.projectKey e sonar.projectName e fazer 
todo o procedimento para que apareçam dois projetos no Sonar