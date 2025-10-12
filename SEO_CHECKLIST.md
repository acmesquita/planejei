# 📊 Checklist de SEO - Planejei

## ✅ Implementado

### Meta Tags e Open Graph
- [x] Title otimizado com palavras-chave
- [x] Meta description atrativa e descritiva
- [x] Keywords relevantes
- [x] Open Graph tags (Facebook, LinkedIn, WhatsApp)
- [x] Twitter Cards
- [x] Canonical URL
- [x] Robots meta tags
- [x] Structured Data (Schema.org JSON-LD)

### Arquivos de SEO
- [x] robots.txt criado
- [x] sitemap.xml criado
- [x] _headers configurado (segurança e cache)

### Performance
- [x] Preconnect para recursos externos
- [x] DNS-prefetch para ads

---

## 🔄 Próximos Passos Importantes

### 1. **Submeter aos Buscadores**

**Google Search Console:**
```
1. Acesse: https://search.google.com/search-console
2. Adicione sua propriedade: https://planejei-sand.vercel.app
3. Submeta o sitemap: https://planejei-sand.vercel.app/sitemap.xml
4. Solicite indexação manual da página
```

**Bing Webmaster Tools:**
```
1. Acesse: https://www.bing.com/webmasters
2. Adicione seu site
3. Submeta o sitemap
```

### 2. **Validar Implementação**

- [ ] Testar structured data: https://validator.schema.org/
- [ ] Testar rich results: https://search.google.com/test/rich-results
- [ ] Validar sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Testar mobile-friendly: https://search.google.com/test/mobile-friendly
- [ ] Testar velocidade: https://pagespeed.web.dev/

### 3. **Melhorias de Conteúdo**

**Adicionar mais conteúdo textual:**
- [ ] Criar seção "Como funciona" detalhada
- [ ] Adicionar FAQ (perguntas frequentes)
- [ ] Criar blog/artigos sobre educação financeira
- [ ] Adicionar testimonials/depoimentos

**Exemplo de FAQ para adicionar:**
```html
<section>
  <h2>Perguntas Frequentes</h2>
  <article>
    <h3>Como calcular juros compostos?</h3>
    <p>Juros compostos são calculados sobre o montante acumulado...</p>
  </article>
</section>
```

### 4. **Links Externos (Backlinks)**

**Estratégias para conseguir backlinks:**
- [ ] Listar em diretórios de ferramentas financeiras
- [ ] Criar perfis em Product Hunt, BetaList
- [ ] Compartilhar em fóruns relevantes (Reddit, Adrenaline)
- [ ] Guest posts em blogs de finanças
- [ ] Parcerias com influenciadores financeiros

**Diretórios recomendados:**
- AlternativeTo
- SaaSHub
- Slant
- ToolJet
- Capterra (se aplicável)

### 5. **Analytics e Monitoramento**

**Instalar ferramentas de análise:**
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Hotjar ou Microsoft Clarity (heatmaps)
- [ ] Monitoramento de uptime

**Exemplo de instalação do GA4:**
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 6. **SEO Técnico**

- [ ] Garantir que o site carregue em < 3 segundos
- [ ] Implementar lazy loading para imagens
- [ ] Adicionar alt text em todas as imagens
- [ ] Usar heading tags corretamente (H1, H2, H3)
- [ ] Implementar breadcrumbs (se houver navegação)
- [ ] Garantir que não há links quebrados

### 7. **SEO Local (se aplicável)**

Se for voltado para Brasil:
```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  }
}
```

### 8. **Redes Sociais**

**Criar perfis e compartilhar:**
- [ ] Instagram (@planejei)
- [ ] Twitter/X (@planejei)
- [ ] LinkedIn (página da empresa)
- [ ] TikTok (conteúdo educativo sobre finanças)

**Estratégia de conteúdo:**
- Dicas de educação financeira
- Simulações de investimentos
- Memes sobre finanças pessoais
- Histórias de sucesso

---

## 📈 KPIs para Monitorar

| Métrica | Objetivo | Como medir |
|---------|----------|------------|
| Posição no Google | Top 10 para "calculadora investimentos" | Google Search Console |
| Tráfego Orgânico | +1000 visitas/mês | Google Analytics |
| Taxa de Rejeição | < 50% | Google Analytics |
| Tempo na Página | > 2 minutos | Google Analytics |
| Core Web Vitals | Todos em "Verde" | PageSpeed Insights |

---

## 🎯 Palavras-chave Alvo

**Primárias:**
- calculadora de investimentos
- planejamento financeiro
- simulador de investimentos
- calculadora juros compostos

**Secundárias:**
- projeção de patrimônio
- calculadora financeira gratuita
- planejamento de aposentadoria
- simulador financeiro online
- calculadora de aportes mensais

**Long-tail:**
- como calcular juros compostos investimentos
- simulador de investimentos com aportes mensais
- calculadora para planejar aposentadoria
- ferramenta gratuita planejamento financeiro

---

## 🚀 Comandos Úteis

```bash
# Build do projeto
bun run build

# Verificar se sitemap foi gerado
ls -la dist/sitemap.xml

# Testar structured data localmente
curl https://planejei-sand.vercel.app/ | grep -A 20 "application/ld+json"
```

---

## 📚 Recursos Úteis

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/WebApplication)
- [Ahrefs SEO Checklist](https://ahrefs.com/blog/seo-checklist/)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

---

## ⚠️ Importante

- **Atualizar a data do sitemap regularmente** quando fizer mudanças
- **Monitorar Google Search Console semanalmente** para erros
- **Criar conteúdo relevante regularmente** (blog, artigos, tutoriais)
- **Construir backlinks de qualidade** é mais importante que quantidade
- **SEO é um processo de longo prazo** - resultados aparecem em 3-6 meses

---

**Última atualização:** 12/10/2025

