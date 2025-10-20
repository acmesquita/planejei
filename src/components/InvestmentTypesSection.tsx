import React from "react";

export const InvestmentTypesSection: React.FC = () => {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="space-y-8">
        <div className="text-justify">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            O mercado financeiro brasileiro oferece uma ampla gama de opções de investimento, cada uma com suas características específicas, níveis de risco e potencial de retorno. Compreender essas diferentes modalidades é fundamental para construir uma carteira diversificada e adequada ao seu perfil de investidor.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate- 200 mb-6">
            <span className="text-green-400">Renda Fixa:</span> A Base da Segurança
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Os investimentos de renda fixa formam a base sólida de qualquer carteira de investimentos, oferecendo segurança e previsibilidade para quem busca preservar o capital. O <strong className="text-green-400">Tesouro Direto</strong> representa a opção mais segura disponível no mercado brasileiro, com títulos públicos do governo federal que incluem o Tesouro Selic (pós-fixado), Tesouro IPCA+ (híbrido) e Tesouro Prefixado, cada um adequado a diferentes estratégias e horizontes de investimento.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Os <strong className="text-green-400">CDBs (Certificados de Depósito Bancário)</strong> são uma alternativa interessante para quem busca rentabilidade com segurança, sendo títulos emitidos por bancos e protegidos pelo FGC até R$ 250 mil por CPF. Disponíveis nas modalidades prefixado, pós-fixado e híbrido, oferecem boa rentabilidade com o respaldo da garantia do Fundo Garantidor de Créditos.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para investidores que buscam vantagens fiscais, as <strong className="text-green-400">LCI/LCA (Letras de Crédito)</strong> são títulos de crédito imobiliário e do agronegócio que oferecem isenção de Imposto de Renda, proporcionando vantagem fiscal significativa, especialmente para investidores em faixas de renda mais altas.
          </p>
          <p className="text-gray-300 leading-relaxed">
            As <strong className="text-green-400">Debêntures</strong> representam uma opção intermediária na renda fixa, sendo títulos de dívida de empresas que apresentam maior risco que títulos bancários, mas com potencial de rentabilidade superior. Disponíveis nas modalidades simples e incentivadas, são adequadas para investidores que buscam maior retorno sem sair completamente da renda fixa.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-blue-400">Renda Variável:</span> O Caminho do Crescimento
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Enquanto a renda fixa oferece segurança, a renda variável abre as portas para o crescimento do patrimônio ao longo do tempo. As <strong className="text-blue-400">ações</strong> representam a participação direta no capital de empresas, oferecendo não apenas dividendos regulares, mas também a possibilidade de valorização significativa do capital investido. Com liquidez diária, são ideais para investidores com perfil mais arrojado e horizonte de longo prazo.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Os <strong className="text-blue-400">Fundos Imobiliários (FIIs)</strong> democratizaram o acesso ao mercado imobiliário, permitindo que qualquer investidor participe de grandes empreendimentos através de cotas. Além da renda mensal via aluguéis, oferecem diversificação automática e a vantagem fiscal da isenção de Imposto de Renda sobre os dividendos recebidos.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para quem busca profissionalização na gestão, os <strong className="text-blue-400">Fundos de Investimento</strong> são carteiras diversificadas administradas por gestores experientes, incluindo fundos de renda fixa, multimercado e ações, oferecendo expertise profissional na tomada de decisões de investimento.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Os <strong className="text-blue-400">ETFs (Exchange Traded Funds)</strong> revolucionaram o acesso à diversificação, sendo fundos que replicam índices de mercado com baixo custo e diversificação automática. São uma excelente opção para investidores que buscam exposição ampla ao mercado com taxas reduzidas e transparência total sobre os ativos subjacentes.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-purple-400">Investimentos Alternativos:</span> Diversificação Além do Tradicional
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para investidores que buscam diversificação além dos mercados tradicionais, os investimentos alternativos oferecem oportunidades únicas. Os <strong className="text-purple-400">imóveis</strong> representam o investimento mais tangível e compreensível, proporcionando não apenas renda via aluguel, mas também valorização histórica e proteção natural contra a inflação, sendo uma forma de preservar e fazer crescer o patrimônio ao longo das décadas.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            O mundo digital trouxe uma nova classe de ativos com as <strong className="text-purple-400">criptomoedas</strong>, moedas digitais que apresentam alta volatilidade, mas também potencial de crescimento exponencial. Desde o Bitcoin até altcoins e aplicações DeFi, representam uma revolução financeira que atrai investidores com alta tolerância ao risco e visão de longo prazo.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            As <strong className="text-purple-400">commodities</strong> oferecem uma forma de investir em matérias-primas essenciais como ouro, petróleo e soja, proporcionando proteção contra inflação e diversificação geográfica. São uma forma eficaz de hedge contra a volatilidade dos mercados tradicionais e oferecem exposição a setores fundamentais da economia global.
          </p>
          <p className="text-gray-300 leading-relaxed">
            O <strong className="text-purple-400">Private Equity</strong> representa o acesso a empresas não listadas em bolsa, incluindo startups inovadoras e empresas em crescimento acelerado. Embora exija maior prazo de investimento e ofereça menor liquidez, pode proporcionar retornos superiores através da participação em negócios com potencial de crescimento exponencial.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-green-400">Entendendo a Relação Risco vs Retorno</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Uma das premissas fundamentais do investimento é que maior risco potencial está associado a maior retorno esperado. Investimentos de <strong className="text-green-400">baixo risco</strong>, como Tesouro Direto, CDB e LCI/LCA, oferecem retornos históricos de 6-12% ao ano, sendo ideais para investidores conservadores que priorizam a preservação do capital e buscam estabilidade em suas aplicações.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            O espectro intermediário é ocupado por investimentos de <strong className="text-yellow-400">médio risco</strong>, incluindo fundos multimercado, FIIs e debêntures, que proporcionam retornos esperados de 8-15% ao ano. Esta categoria oferece um equilíbrio cuidadoso entre segurança e potencial de crescimento, sendo adequada para perfis moderados que buscam crescimento sustentável do patrimônio.
          </p>
          <p className="text-gray-300 leading-relaxed">
            No extremo superior da pirâmide de risco estão os investimentos de <strong className="text-red-400">alto risco</strong>, como ações individuais, criptomoedas e private equity, que podem oferecer retornos superiores a 15% ao ano, mas com maior volatilidade e possibilidade de perdas significativas. Estes investimentos são recomendados apenas para investidores com alta tolerância ao risco, horizonte de longo prazo e capacidade de suportar volatilidade temporária.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-200 mb-6">
            <span className="text-teal-400">A Arte da Diversificação</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A diversificação é considerada a única "refeição grátis" no mundo dos investimentos, oferecendo a possibilidade de reduzir riscos sem necessariamente sacrificar retornos. A estratégia consiste em distribuir os investimentos entre diferentes classes de ativos, setores econômicos e horizontes temporais, evitando a concentração em uma única modalidade que possa comprometer toda a carteira.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para investidores com <strong className="text-teal-400">perfil conservador</strong>, uma alocação de 70% em renda fixa, 20% em renda variável e 10% em investimentos alternativos oferece o equilíbrio ideal entre preservação do capital e crescimento moderado, priorizando a estabilidade e a previsibilidade dos fluxos de caixa.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Investidores com <strong className="text-teal-400">perfil moderado</strong> encontram na distribuição equilibrada de 50% em renda fixa, 40% em renda variável e 10% em alternativos uma estratégia que combina segurança com potencial de crescimento, adequada para quem busca crescimento sustentável do patrimônio ao longo do tempo, sem exposição excessiva aos riscos de mercado.
          </p>
        </div>

        <div className="bg-slate-400/30 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-semibold text-slate-200 mb-4"><span className="text-red-400">Considerações Importantes</span></h3>
          <p className="text-gray-300 leading-relaxed">
            Esta visão geral dos tipos de investimentos disponíveis no mercado brasileiro serve como ponto de partida para sua educação financeira. Cada modalidade possui características específicas, riscos únicos e custos associados que devem ser cuidadosamente analisados. Lembre-se sempre de que rentabilidade passada não garante rentabilidade futura, e que a construção de uma carteira adequada deve considerar seu perfil de risco, objetivos financeiros e horizonte de investimento. Consulte sempre um profissional qualificado e faça sua própria análise antes de tomar decisões de investimento.
          </p>
        </div>
      </div>
    </article>
  );
};
