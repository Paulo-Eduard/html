// script.js - Quiz de Pensamento Computacional com mascote explicativo

const quizData = [
  {
    question: "1. O que é pensamento computacional?",
    options: [
      "Uso de computadores para programar",
      "Processo de resolver problemas de forma lógica e sistemática",
      "Apenas saber programar",
      "Pensar como uma máquina"
    ],
    answer: "Processo de resolver problemas de forma lógica e sistemática",
    explanation: "É uma abordagem que envolve decomposição, reconhecimento de padrões, abstração e algoritmos."
  },
  {
    question: "2. Qual é a finalidade da decomposição?",
    options: [
      "Remover elementos inúteis do código",
      "Separar dados em variáveis",
      "Dividir um problema em partes menores e mais gerenciáveis",
      "Criar funções matemáticas"
    ],
    answer: "Dividir um problema em partes menores e mais gerenciáveis",
    explanation: "A decomposição facilita o entendimento e resolução de problemas complexos."
  },
  {
    question: "3. Qual é o papel da abstração no pensamento computacional?",
    options: [
      "Criar soluções complexas",
      "Focar nos detalhes irrelevantes",
      "Esconder detalhes desnecessários para focar no essencial",
      "Elaborar sistemas de IA"
    ],
    answer: "Esconder detalhes desnecessários para focar no essencial",
    explanation: "Abstração ajuda a lidar com problemas grandes ignorando partes menos importantes."
  },
  {
    question: "4. Qual conceito define um algoritmo?",
    options: [
      "Um código que nunca termina",
      "Uma linguagem de programação",
      "Conjunto de instruções finitas para resolver um problema",
      "Um erro de lógica"
    ],
    answer: "Conjunto de instruções finitas para resolver um problema",
    explanation: "Algoritmos seguem etapas claras e finitas para atingir um objetivo."
  },
  {
    question: "5. Reconhecimento de padrões serve para quê?",
    options: [
      "Repetir códigos aleatórios",
      "Identificar semelhanças para resolver problemas mais rapidamente",
      "Criar designs gráficos",
      "Evitar abstrações"
    ],
    answer: "Identificar semelhanças para resolver problemas mais rapidamente",
    explanation: "Encontrar padrões permite aplicar soluções conhecidas."
  },
  {
    question: "6. Um algoritmo deve ser:",
    options: [
      "Subjetivo e criativo",
      "Infinito",
      "Claro, preciso e finito",
      "Impreciso e aberto a interpretações"
    ],
    answer: "Claro, preciso e finito",
    explanation: "Essas são características fundamentais de qualquer algoritmo."
  },
  {
    question: "7. Um exemplo de abstração é:",
    options: [
      "Focar no código completo de um sistema",
      "Detalhar cada byte de uma operação",
      "Ignorar detalhes técnicos para trabalhar no nível do problema",
      "Estudar todos os caminhos de rede de dados"
    ],
    answer: "Ignorar detalhes técnicos para trabalhar no nível do problema",
    explanation: "É uma forma de simplificar para resolver melhor."
  },
  {
    question: "8. Decompor um sistema complexo pode ajudar a:",
    options: [
      "Complicar a solução",
      "Facilitar a organização e desenvolvimento de soluções parciais",
      "Evitar o uso de algoritmos",
      "Ignorar testes"
    ],
    answer: "Facilitar a organização e desenvolvimento de soluções parciais",
    explanation: "Ajuda a atacar o problema por partes."
  },
  {
    question: "9. Pensamento computacional é usado apenas por programadores?",
    options: [
      "Sim, é exclusivo da programação",
      "Não, pode ser usado em qualquer área para resolver problemas",
      "Só na matemática",
      "Somente engenheiros de software"
    ],
    answer: "Não, pode ser usado em qualquer área para resolver problemas",
    explanation: "Ele é útil em qualquer profissão."
  },
  {
    question: "10. Qual das alternativas NÃO é um dos pilares do pensamento computacional?",
    options: [
      "Algoritmos",
      "Machine Learning",
      "Decomposição",
      "Abstração"
    ],
    answer: "Machine Learning",
    explanation: "Machine Learning é uma aplicação, não um pilar."
  },
  {
    question: "11. Reconhecer padrões pode economizar tempo porque:",
    options: [
      "Ajuda a criar novas linguagens",
      "Permite reusar soluções existentes",
      "Aumenta a complexidade do código",
      "Requer menos abstração"
    ],
    answer: "Permite reusar soluções existentes",
    explanation: "É mais eficiente usar algo que já funcionou."
  },
  {
    question: "12. A principal vantagem do pensamento computacional é:",
    options: [
      "Evitar o uso de lógica",
      "Fornecer soluções mágicas",
      "Resolver problemas de forma sistemática e eficiente",
      "Tornar o trabalho mais difícil"
    ],
    answer: "Resolver problemas de forma sistemática e eficiente",
    explanation: "Organiza o pensamento para ser mais efetivo."
  },
  {
    question: "13. Um bom algoritmo deve ser:",
    options: [
      "Longo e confuso",
      "Difícil de implementar",
      "Simples, claro e eficiente",
      "Escrito apenas em inglês"
    ],
    answer: "Simples, claro e eficiente",
    explanation: "Facilita manutenção e entendimento."
  },
  {
    question: "14. Em que etapa o reconhecimento de padrões costuma acontecer?",
    options: [
      "Antes da abstração",
      "Depois da decomposição",
      "Após a implementação do algoritmo",
      "Durante o teste de software"
    ],
    answer: "Depois da decomposição",
    explanation: "Após dividir o problema, padrões ficam mais visíveis."
  },
  {
    question: "15. Um exemplo de pensamento computacional no cotidiano é:",
    options: [
      "Criar um plano de estudos baseado em horários e metas",
      "Assistir séries sem parar",
      "Ficar trocando de ideia sem anotar nada",
      "Decorar respostas sem entender"
    ],
    answer: "Criar um plano de estudos baseado em horários e metas",
    explanation: "Organização lógica com objetivos e etapas."
  },
  {
    question: "16. Qual das opções representa um bom uso da abstração?",
    options: [
      "Codificar cada detalhe antes de entender o problema",
      "Focar no funcionamento geral sem se preocupar com a implementação",
      "Ignorar a lógica e usar tentativa e erro",
      "Copiar código sem compreender"
    ],
    answer: "Focar no funcionamento geral sem se preocupar com a implementação",
    explanation: "Abstração evita perder tempo com detalhes desnecessários."
  },
  {
    question: "17. Um bom programador usa pensamento computacional para:",
    options: [
      "Programar sem lógica",
      "Resolver problemas com estrutura, análise e eficiência",
      "Evitar usar algoritmos",
      "Criar códigos sem padrão"
    ],
    answer: "Resolver problemas com estrutura, análise e eficiência",
    explanation: "O uso da lógica é essencial para boas soluções."
  },
  {
    question: "18. Decomposição ajuda especialmente quando:",
    options: [
      "O problema é simples",
      "Não sabemos por onde começar",
      "Não queremos pensar",
      "Queremos ignorar regras"
    ],
    answer: "Não sabemos por onde começar",
    explanation: "Dividir facilita enxergar as etapas necessárias."
  },
  {
    question: "19. O que é necessário para criar um algoritmo eficaz?",
    options: [
      "Seguir um roteiro lógico e estruturado",
      "Copiar e colar da internet",
      "Adicionar comandos aleatórios",
      "Ignorar o problema"
    ],
    answer: "Seguir um roteiro lógico e estruturado",
    explanation: "Planejamento é essencial."
  },
  {
    question: "20. Pensamento computacional é importante porque:",
    options: [
      "Aumenta a dificuldade de resolução de problemas",
      "Ajuda a tomar decisões baseadas em lógica",
      "É obrigatório por lei",
      "É uma matéria da escola"
    ],
    answer: "Ajuda a tomar decisões baseadas em lógica",
    explanation: "É uma ferramenta para o pensamento crítico."
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");
const feedback = document.getElementById("feedback");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionElement.innerText = q.question;
  optionsElement.innerHTML = "";
  feedback.innerText = "";
  q.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(button);
  });
}

function selectOption(selected) {
  const q = quizData[currentQuestion];
  const buttons = document.querySelectorAll(".option");
  buttons.forEach(b => b.disabled = true);
  if (selected === q.answer) {
    score++;
    feedback.innerText = "✅ Resposta correta!";
    feedback.style.color = "lightgreen";
  } else {
    feedback.innerText = `❌ Resposta errada. Explicação: ${q.explanation}`;
    feedback.style.color = "orange";
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    showResults();
  }
});

function showResults() {
  questionElement.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
  optionsElement.innerHTML = "";
  feedback.innerText = "Muito bem! Continue estudando pensamento computacional.";
  nextButton.style.display = "none";
}

// Iniciar quiz
loadQuestion();
