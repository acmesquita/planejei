import React from "react";

export const FAQSection: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="space-y-8">
        <div className="text-justify">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            As dúvidas são parte natural do processo de aprendizado financeiro. Nesta seção, abordamos as perguntas mais frequentes sobre investimentos, planejamento financeiro e uso da calculadora, organizadas de forma didática para facilitar sua compreensão e aplicação prática.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-blue-400">Entendendo a Calculadora:</span> Sua Ferramenta de Projeção
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nossa <strong className="text-blue-400">calculadora de juros compostos</strong> utiliza a fórmula matemática mais poderosa do universo financeiro para projetar o crescimento do seu patrimônio ao longo do tempo. O sistema considera seu patrimônio atual, renda mensal, despesas mensais e taxa de rendimento esperada, calculando automaticamente quanto você terá no futuro, considerando os aportes mensais e os juros sobre o valor acumulado.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            A diferença entre <strong className="text-blue-400">juros simples e compostos</strong> é fundamental para entender o poder do tempo nos investimentos. Juros simples são calculados apenas sobre o valor inicial investido, enquanto juros compostos são calculados sobre o valor inicial mais os juros acumulados anteriormente - o famoso "juros sobre juros" que faz o dinheiro crescer exponencialmente. Por exemplo: R$ 1.000 a 10% ao ano rende R$ 100 no primeiro ano (juros simples), mas no segundo ano rende R$ 110 (10% sobre R$ 1.100).
          </p>
          <p className="text-gray-300 leading-relaxed">
            A <strong className="text-blue-400">taxa de rendimento</strong> a ser utilizada na simulação depende do seu perfil de investidor e dos produtos que você pretende usar. Para investimentos conservadores (Tesouro Selic, CDB), use entre 6-8% ao ano. Para moderados (fundos multimercado, FIIs), use 8-12% ao ano. Para arrojados (ações, fundos de ações), use 12-15% ao ano. Lembre-se sempre: rentabilidade passada não garante rentabilidade futura.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-green-400">Conceitos Básicos:</span> Fundamentos do Investimento
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            O <strong className="text-green-400">patrimônio atual</strong> é a base para qualquer planejamento financeiro, representando a diferença entre o que você tem e o que você deve. Para calculá-lo, some: dinheiro em conta corrente, poupança, investimentos (CDB, Tesouro, ações, FIIs), valor de imóveis e veículos que você possui. Subtraia: dívidas do cartão de crédito, empréstimos, financiamentos, cheque especial. O resultado é seu patrimônio líquido atual.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            A <strong className="text-green-400">reserva de emergência</strong> é o primeiro investimento que qualquer pessoa deve fazer, funcionando como um colchão de segurança para gastos inesperados como desemprego, problemas de saúde ou reparos urgentes. O ideal é ter 3 a 6 meses de despesas mensais, investida em aplicações de alta liquidez e baixo risco, como Tesouro Selic ou CDB com liquidez diária. Nunca use a reserva para investimentos de risco.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-green-400">Começar a investir com pouco dinheiro</strong> não apenas é possível, como é a forma mais inteligente de construir patrimônio. Muitos investimentos têm valor mínimo baixo: Tesouro Direto (R$ 30), CDB (R$ 1), FIIs (R$ 10). Use a regra dos 50-30-20: 50% para necessidades, 30% para desejos, 20% para investimentos. Mesmo R$ 50 por mês podem se tornar R$ 100.000 em 30 anos com juros compostos.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-purple-400">Modalidades de Investimento:</span> Renda Fixa vs Variável
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A diferença entre <strong className="text-purple-400">renda fixa e renda variável</strong> é fundamental para entender os riscos e retornos dos investimentos. Renda fixa oferece retorno previsível e menor risco: Tesouro Direto, CDB, LCI/LCA. Renda variável tem retorno incerto e maior risco: ações, FIIs, fundos de ações. Para iniciantes, recomenda-se começar com renda fixa e gradualmente diversificar para renda variável conforme ganha experiência e tolerância ao risco.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            A <strong className="text-purple-400">diversificação</strong> é a estratégia de não colocar todos os ovos na mesma cesta. Distribua entre: diferentes tipos de investimento (renda fixa, variável, imóveis), diferentes setores (bancos, tecnologia, saúde), diferentes prazos (curto, médio, longo prazo). Uma carteira diversificada reduz riscos e pode aumentar retornos. Considere seu perfil: conservador (70% fixa, 30% variável), moderado (50% cada), arrojado (30% fixa, 70% variável).
          </p>
          <p className="text-gray-300 leading-relaxed">
            O <strong className="text-purple-400">Tesouro Direto</strong> é o programa do governo para venda de títulos públicos a pessoas físicas, onde você empresta dinheiro ao governo e recebe juros. Os tipos incluem: Tesouro Selic (acompanha taxa básica de juros), Tesouro IPCA+ (protege da inflação), Tesouro Prefixado (taxa fixa). Vantagens: segurança máxima, liquidez, baixo valor mínimo. Desvantagem: tributação de 15-22,5% sobre ganhos.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-orange-400">Investimentos Avançados:</span> FIIs e Ações
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Os <strong className="text-orange-400">Fundos Imobiliários (FIIs)</strong> são fundos que investem em imóveis e distribuem a maior parte dos rendimentos (aluguéis) aos cotistas mensalmente. Você compra cotas (como ações) e recebe dividendos. Vantagens: renda mensal, diversificação, isenção de IR para pessoas físicas, liquidez na bolsa. Desvantagens: volatilidade, dependência do mercado imobiliário. Ideal para quem busca renda passiva e diversificação.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            A escolha entre <strong className="text-orange-400">ações individuais ou fundos</strong> depende do seu nível de conhecimento e tempo disponível. Para iniciantes, fundos são mais seguros: diversificação automática, gestão profissional, menor risco. Ações individuais exigem mais conhecimento, tempo para análise e tolerância ao risco. Comece com fundos de ações ou ETFs para ganhar experiência. Conforme aprende, pode investir em ações individuais de empresas que conhece bem. Nunca invista em algo que não entende.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Para calcular quanto você precisa para se aposentar, a <strong className="text-orange-400">regra dos 25x</strong> sugere que você precisa de 25 vezes suas despesas anuais. Se gasta R$ 5.000 por mês (R$ 60.000 por ano), precisaria de R$ 1.500.000 investidos. Com 4% de retorno anual, isso geraria R$ 60.000 por ano. Mas considere inflação, mudanças no padrão de vida e imprevistos. Use nossa calculadora para simular diferentes cenários e encontrar o valor ideal para seu caso.
          </p>
        </div>

        <div className="bg-slate-400/30 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-semibold text-slate-200 mb-4"><span className="text-blue-400">Ainda tem dúvidas?</span></h3>
          <p className="text-gray-300 leading-relaxed">
            As dúvidas são parte natural do processo de aprendizado financeiro. Se não encontrou a resposta que procurava, entre em contato conosco ou consulte um profissional qualificado para orientações personalizadas. Lembre-se sempre de que as informações fornecidas são apenas para fins educacionais e informativos, não constituindo recomendações de investimento ou aconselhamento financeiro personalizado. Cada decisão financeira deve considerar seu perfil de risco, objetivos e situação pessoal específica.
          </p>
        </div>
      </div>
    </article>
  );
};
