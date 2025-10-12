import React from "react";

export const InfoSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-8 md:p-12 shadow-2xl border-2 border-indigo-500/30 mt-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          📚 Guia Completo: Como Calcular Seu Patrimônio, Renda e Despesas
        </h2>
        <p className="text-gray-400 text-base">Um passo a passo para organizar sua vida financeira</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
        {/* Introdução */}
        <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/30">
          <p className="text-base leading-relaxed">
            Para fazer um bom planejamento financeiro, é fundamental entender três conceitos básicos: 
            <span className="text-blue-400 font-semibold"> patrimônio</span>, 
            <span className="text-green-400 font-semibold"> renda</span> e 
            <span className="text-orange-400 font-semibold"> despesas</span>. 
            Conhecer esses valores com precisão é o primeiro passo para conquistar seus objetivos financeiros 
            e garantir um futuro mais tranquilo. Vamos explicar cada um deles de forma simples e prática.
          </p>
        </div>

        {/* Patrimônio */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💎</span>
            <h3 className="text-2xl font-bold text-blue-400">1. Patrimônio: O Que Você Tem</h3>
          </div>
          <div className="space-y-4 pl-4 border-l-4 border-blue-500/30">
            <p className="text-base leading-relaxed">
              O patrimônio representa sua <span className="text-blue-400 font-semibold">situação financeira atual</span>. 
              É a diferença entre tudo que você possui (bens e ativos) e tudo que você deve (dívidas e passivos). 
              Em outras palavras: <span className="text-blue-400 font-semibold">Patrimônio = Bens - Dívidas</span>.
            </p>
            <p className="text-base leading-relaxed">
              <span className="text-blue-300 font-semibold">No lado dos bens</span>, você deve incluir: 
              o saldo disponível em suas contas bancárias (corrente e poupança), investimentos de qualquer tipo 
              (CDB, Tesouro Direto, ações, fundos), o valor de mercado de imóveis e veículos que você possui, 
              além de outros bens de valor como joias, coleções ou equipamentos.
            </p>
            <p className="text-base leading-relaxed">
              <span className="text-red-300 font-semibold">Já no lado das dívidas</span>, considere: 
              saldos devedor do cartão de crédito, empréstimos pessoais, financiamentos de imóveis e veículos, 
              cheque especial utilizado, e qualquer outra dívida pendente. É importante ser honesto e 
              incluir todas as dívidas para ter uma visão realista.
            </p>
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
              <p className="text-sm">
                <span className="text-blue-400 font-bold">Exemplo prático:</span> Se você tem R$ 50.000 em 
                investimentos, R$ 20.000 em conta corrente, um carro avaliado em R$ 40.000, mas deve R$ 30.000 
                de financiamento do carro e R$ 5.000 no cartão, seu patrimônio é: 
                (50.000 + 20.000 + 40.000) - (30.000 + 5.000) = <span className="text-blue-400 font-bold">R$ 75.000</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Renda */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💰</span>
            <h3 className="text-2xl font-bold text-green-400">2. Renda: O Que Entra Todo Mês</h3>
          </div>
          <div className="space-y-4 pl-4 border-l-4 border-green-500/30">
            <p className="text-base leading-relaxed">
              A renda mensal é a <span className="text-green-400 font-semibold">soma de todo o dinheiro que entra</span> 
              na sua conta durante o mês. É essencial calcular o valor líquido, ou seja, o que realmente fica 
              disponível após todos os descontos obrigatórios.
            </p>
            <p className="text-base leading-relaxed">
              Inclua na sua renda mensal: seu <span className="text-green-300 font-semibold">salário líquido</span> 
              (já descontado o INSS, imposto de renda e outros), valores recebidos de trabalhos freelance ou "bicos", 
              rendimentos de aplicações financeiras, valores de aluguéis que você recebe, pensões alimentícias, 
              benefícios sociais, e qualquer outra fonte de renda recorrente.
            </p>
            <p className="text-base leading-relaxed">
              Muitas pessoas cometem o erro de considerar apenas o salário principal, esquecendo de outras fontes. 
              Ter clareza sobre todas as entradas ajuda a tomar melhores decisões financeiras e aproveitar melhor 
              os recursos disponíveis.
            </p>
            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
              <p className="text-sm">
                <span className="text-green-400 font-bold">Exemplo prático:</span> Se você recebe R$ 8.000 
                líquidos de salário, mais R$ 1.000 de freelances ocasionais, e R$ 500 de rendimento de investimentos, 
                sua renda mensal total é: 8.000 + 1.000 + 500 = <span className="text-green-400 font-bold">R$ 9.500</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Despesas */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🛒</span>
            <h3 className="text-2xl font-bold text-orange-400">3. Despesas: O Que Sai Todo Mês</h3>
          </div>
          <div className="space-y-4 pl-4 border-l-4 border-orange-500/30">
            <p className="text-base leading-relaxed">
              As despesas mensais representam <span className="text-orange-400 font-semibold">todo o dinheiro que 
              sai</span> da sua conta para pagar contas, compras e compromissos financeiros. É onde muitas pessoas 
              perdem o controle, então é crucial ter um registro detalhado.
            </p>
            <p className="text-base leading-relaxed">
              Organize suas despesas por categorias: <span className="text-orange-300 font-semibold">Moradia</span> 
              (aluguel, condomínio, IPTU), <span className="text-orange-300 font-semibold">Contas básicas</span> 
              (luz, água, gás, internet, telefone), <span className="text-orange-300 font-semibold">Alimentação</span> 
              (supermercado, restaurantes, delivery), <span className="text-orange-300 font-semibold">Transporte</span> 
              (combustível, estacionamento, transporte público, manutenção do veículo), 
              <span className="text-orange-300 font-semibold"> Saúde</span> (plano de saúde, medicamentos, consultas), 
              <span className="text-orange-300 font-semibold"> Educação</span> (mensalidade escolar, cursos, livros).
            </p>
            <p className="text-base leading-relaxed">
              Não esqueça das despesas com <span className="text-orange-300 font-semibold">lazer e entretenimento</span> 
              (streaming, academia, hobbies), <span className="text-orange-300 font-semibold">vestuário</span>, 
              parcelas de financiamentos e empréstimos, e aqueles gastos "invisíveis" do dia a dia que parecem pequenos, 
              mas somados fazem diferença (cafezinho, lanches, apps de transporte).
            </p>
            <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30">
              <p className="text-sm">
                <span className="text-orange-400 font-bold">Exemplo prático:</span> Somando aluguel (R$ 2.000), 
                contas (R$ 500), alimentação (R$ 1.200), transporte (R$ 800), saúde (R$ 400), lazer (R$ 300) 
                e outros gastos (R$ 300), suas despesas mensais são: 
                <span className="text-orange-400 font-bold"> R$ 5.500</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Capacidade de Investimento */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border-2 border-purple-500/30">
          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">🚀</span>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-purple-400">A Fórmula do Crescimento Patrimonial</h3>
              <p className="text-base leading-relaxed">
                Agora que você sabe calcular sua renda e despesas, pode descobrir sua 
                <span className="text-purple-400 font-semibold"> capacidade de investimento</span>: 
                o valor que sobra todos os meses para fazer seu patrimônio crescer.
              </p>
              <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/40">
                <p className="text-center text-lg font-bold text-purple-300">
                  Capacidade de Investimento = Renda - Despesas
                </p>
              </div>
              <p className="text-base leading-relaxed">
                No exemplo anterior, com renda de R$ 9.500 e despesas de R$ 5.500, você teria 
                <span className="text-purple-400 font-bold"> R$ 4.000 por mês</span> para investir. 
                Esse valor, aplicado com disciplina e rendendo juros compostos, é o que vai 
                <span className="text-purple-400 font-semibold"> transformar seu futuro financeiro</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Dicas Práticas */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💡</span>
            <h3 className="text-2xl font-bold text-yellow-400">Dicas Práticas para o Sucesso</h3>
          </div>
          <div className="space-y-4 pl-4 border-l-4 border-yellow-500/30">
            <p className="text-base leading-relaxed">
              <span className="text-yellow-300 font-semibold">Acompanhe por pelo menos 3 meses:</span> As despesas 
              podem variar bastante de um mês para o outro. Fazer um acompanhamento trimestral dá uma média mais realista 
              do seu padrão de gastos.
            </p>
            <p className="text-base leading-relaxed">
              <span className="text-yellow-300 font-semibold">Use ferramentas de controle:</span> Aplicativos de 
              gestão financeira, planilhas ou até um caderninho funcionam. O importante é registrar todas as entradas 
              e saídas, sem exceção.
            </p>
            <p className="text-base leading-relaxed">
              <span className="text-yellow-300 font-semibold">Revise periodicamente:</span> Sua situação financeira 
              muda com o tempo. Revise seus números a cada 3 ou 6 meses para ajustar seu planejamento e identificar 
              oportunidades de economia ou aumento de renda.
            </p>
            <p className="text-base leading-relaxed">
              <span className="text-yellow-300 font-semibold">Seja honesto consigo mesmo:</span> Não adianta omitir 
              gastos ou superestimar a renda. Quanto mais preciso for seu levantamento, melhores serão suas decisões 
              financeiras.
            </p>
          </div>
        </div>

        {/* Conclusão */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-lg p-6 border-2 border-indigo-500/30 text-center">
          <p className="text-base leading-relaxed">
            Lembre-se: <span className="text-indigo-400 font-bold">conhecimento é poder</span>. Ao dominar esses 
            três conceitos e mantê-los sempre atualizados, você terá o controle total sobre sua vida financeira e 
            poderá traçar um caminho sólido rumo à <span className="text-indigo-400 font-bold">independência financeira</span>. 
            Use esta calculadora para simular diferentes cenários e descobrir como pequenas mudanças hoje podem 
            gerar grandes resultados no futuro! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};

