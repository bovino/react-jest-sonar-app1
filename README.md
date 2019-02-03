This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and customized for Jest+Enzyme+ESLINT+SonarQube integration.

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
Requer versao por conta de recursos novos ESLINT adicionados -> 
Ver aqui: https://docs.sonarqube.org/display/PLUG/Importing+ESLint+Issues+Reports

Script para iniciar o SonarQube (em Windows, no Linux/MacOS é .sh) -> 
....\sonarqube-7.6\bin\windows-x86-64\StartSonar.bat

- Acessar no browser a URL http://localhost:9000 e confirmar que Sonar está rodando

- Voltar para a linha de comando e ir para sua pasta de desenvolvimento

- criar uma pasta

- git clone do projeto nessa pasta -> git clone https://github.com/bovino/react-jest-sonar-app1

- cd react-jest-sonar-app1

- yarn install

- yarn test-full (se estiver em Linux ou MacOS ajustar path do coverage no sonar-project.properties)

- Ir no Sonar ver dados coletados do projeto

- Para testar checagem de duplicação cross-project, 
a) Fazer Login no SonarQube como Administrator (admin)
b) Ir em Administration -> General -> Duplications -> Cross project duplication detection e ativar
c) Baixar o mesmo projeto em outra pasta, troca as chaves sonar.projectKey e sonar.projectName (ambas no arquivo sonar-project.properties) 
e depois fazer todo o procedimento para que apareçam dois projetos no Sonar, permitindo visualizar a duplicação entre eles

<img src="https://github.com/bovino/react-jest-sonar-app1/blob/master/public/sonar.png" alt="Img 1 - React+Jest+Enzyme+ESLint+Sonar Integration"/> 
<br/>
<br/>
<img src="https://github.com/bovino/react-jest-sonar-app1/blob/master/public/sonar2.png" alt="Img 2 - React+Jest+Enzyme+ESLint+Sonar Integration"/>
<br/>
<br/>
<img src="https://github.com/bovino/react-jest-sonar-app1/blob/master/public/sonar3.png" alt="Img 3 - React+Jest+Enzyme+ESLint+Sonar Integration"/>