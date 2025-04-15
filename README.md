#  📘 Projeto Django - Inventory Management
## 🔍 Visão Geral

Este projeto foi desenvolvido com o objetivo de aprender e praticar o framework **Django**, seguindo o curso do canal [Net Ninja no YouTube](https://youtu.be/3EzKBFc9_MQ?si=93a6kRDl2PfZEF79). Ao longo do projeto, foram abordados conceitos fundamentais de Django, como criação de aplicações, manipulação de modelos, formulários, autenticação de usuários, e muito mais.

Além disso, também foram aplicadas boas práticas de organização de projeto, estilização com **Bootstrap 5** e uso de **templates customizados** com **CSS** e **JavaScript** para aprimorar a experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

- **Django** (Framework principal do projeto)
- **Bootstrap 5** (Estilização responsiva)
- **django-crispy-forms** (Melhoria na renderização de formulários)
- **crispy-bootstrap5** (Template pack do crispy forms para Bootstrap 5)
- **HTML, CSS e JavaScript** (Personalização visual e interatividade)

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para clonar e executar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/emanuel07mii/project_inventory_management.git
cd project_inventory_management
```

### 2. Instale o Python
Certifique-se de ter o Python instalado em sua máquina (recomendado: versão 3.10 ou superior).
- 🔗[Download do Python](https://www.python.org/downloads/)
Para verificar se o Python está instalado corretamente, execute:
```bash
python --version
```
ou
```bash
python3 --version
```
### 3. Crie um ambiente virtual
```bash
python -m venv venv
```
### 4. Ative o ambiente virtual
- Windows:
```bash
venv\Scripts\activate
```
- Linux/macOS:
```bash
source venv/bin/activate
```
### 5. Instale as dependências do projeto
```bash
pip install django
pip install django-crispy-forms crispy-bootstrap5
```
### 6. Rode as migrações
```bash
python manage.py migrate
```
### 7. Inicie o servidor de desenvolvimento
```bash
python manage.py runserver
```
Acesse no navegador: http://localhost:8000

---

## 🎯 Objetivos de Aprendizado
- Entender o funcionamento do Django na prática

- Construir aplicações web com autenticação

- Trabalhar com formulários e estilização usando crispy-forms

- Utilizar templates e componentes do Bootstrap 5

- Praticar a separação entre lógica backend e apresentação frontend

## 📚 Referência
Curso: The Net Ninja - Django Tutorial for Beginners
📺 [Assista no YouTube](https://youtu.be/3EzKBFc9_MQ?si=93a6kRDl2PfZEF79)