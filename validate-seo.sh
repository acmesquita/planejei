#!/bin/bash

# Script de validação de SEO para Planejei
# Execute: bash validate-seo.sh

echo "🔍 Validando SEO do Planejei..."
echo "================================"
echo ""

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

URL="https://planejei-sand.vercel.app"

# Verifica se o site está acessível
echo "1️⃣ Verificando disponibilidade do site..."
if curl -s --head "$URL" | head -n 1 | grep "HTTP" > /dev/null; then
  echo -e "${GREEN}✅ Site está acessível${NC}"
else
  echo -e "${RED}❌ Site não está acessível${NC}"
  exit 1
fi
echo ""

# Verifica robots.txt
echo "2️⃣ Verificando robots.txt..."
if curl -s "$URL/robots.txt" | grep "Sitemap:" > /dev/null; then
  echo -e "${GREEN}✅ robots.txt está configurado corretamente${NC}"
  echo "   Conteúdo do robots.txt:"
  curl -s "$URL/robots.txt" | head -n 5
else
  echo -e "${RED}❌ robots.txt não encontrado ou mal configurado${NC}"
fi
echo ""

# Verifica sitemap.xml
echo "3️⃣ Verificando sitemap.xml..."
if curl -s "$URL/sitemap.xml" | grep "<urlset" > /dev/null; then
  echo -e "${GREEN}✅ sitemap.xml está acessível${NC}"
else
  echo -e "${RED}❌ sitemap.xml não encontrado${NC}"
fi
echo ""

# Verifica imagem OG
echo "4️⃣ Verificando og-image.png..."
if curl -s --head "$URL/og-image.png" | grep "200 OK" > /dev/null; then
  echo -e "${GREEN}✅ og-image.png está acessível${NC}"
else
  echo -e "${YELLOW}⚠️  og-image.png não encontrada (pode ainda não ter sido deployed)${NC}"
fi
echo ""

# Verifica meta tags
echo "5️⃣ Verificando meta tags importantes..."
PAGE_CONTENT=$(curl -s "$URL")

if echo "$PAGE_CONTENT" | grep -q 'meta name="description"'; then
  echo -e "${GREEN}✅ Meta description encontrada${NC}"
else
  echo -e "${RED}❌ Meta description não encontrada${NC}"
fi

if echo "$PAGE_CONTENT" | grep -q 'property="og:image"'; then
  echo -e "${GREEN}✅ Open Graph tags encontradas${NC}"
else
  echo -e "${RED}❌ Open Graph tags não encontradas${NC}"
fi

if echo "$PAGE_CONTENT" | grep -q 'application/ld\+json'; then
  echo -e "${GREEN}✅ Schema.org structured data encontrado${NC}"
else
  echo -e "${RED}❌ Schema.org structured data não encontrado${NC}"
fi

if echo "$PAGE_CONTENT" | grep -q '<h1'; then
  echo -e "${GREEN}✅ Tag H1 encontrada${NC}"
else
  echo -e "${YELLOW}⚠️  Tag H1 não encontrada (importante para SEO)${NC}"
fi
echo ""

# Links úteis
echo "🔗 Links úteis para validação:"
echo "================================"
echo ""
echo "📊 Structured Data Validator:"
echo "   https://validator.schema.org/#url=$URL"
echo ""
echo "🔍 Google Rich Results Test:"
echo "   https://search.google.com/test/rich-results?url=$URL"
echo ""
echo "📱 Mobile-Friendly Test:"
echo "   https://search.google.com/test/mobile-friendly?url=$URL"
echo ""
echo "⚡ PageSpeed Insights:"
echo "   https://pagespeed.web.dev/?url=$URL"
echo ""
echo "🎭 Facebook Sharing Debugger:"
echo "   https://developers.facebook.com/tools/debug/?q=$URL"
echo ""
echo "🐦 Twitter Card Validator:"
echo "   https://cards-dev.twitter.com/validator"
echo ""
echo "📈 Google Search Console:"
echo "   https://search.google.com/search-console"
echo ""

# Resumo
echo "✨ Validação concluída!"
echo "================================"
echo ""
echo "📝 Próximos passos:"
echo "   1. Visite os links acima para validação detalhada"
echo "   2. Submeta o sitemap no Google Search Console"
echo "   3. Monitore o ranqueamento após algumas semanas"
echo ""

