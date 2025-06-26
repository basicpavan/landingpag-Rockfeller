# 🎓 Rockfeller - Escola de Idiomas

Um site moderno e responsivo para a escola de idiomas Rockfeller, desenvolvido com HTML5, CSS3 e JavaScript puro.

Descrição

O Rockfeller é uma plataforma web completa para uma escola de idiomas, apresentando:
- **Carrossel interativo** com imagens promocionais
- **Formulário de inscrição** para aulas demonstrativas
- **Seções informativas** sobre cursos (Kids, Teens, Adults)
- **Design responsivo** para todos os dispositivos
- **Interface moderna** com animações suaves

Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
  - Flexbox e Grid para layout
  - Variáveis CSS para consistência
  - Media queries para responsividade
- **JavaScript** - Funcionalidades interativas
  - Carrossel automático
  - Navegação por indicadores
  - Controles manuais

Estrutura do Projeto

```
Rockfeller/
├── index.html          # Página principal
├── inscricao.html      # Página de inscrição
├── contato.html        # Página de contato
├── style.css           # Estilos principais
├── script.js           # JavaScript do carrossel
├── imagens/            # Assets de imagem
│   ├── logo.webp
│   ├── banner01.webp
│   ├── banner02.png
│   ├── banner03.webp
│   ├── banner04.webp
│   ├── kids.jpg
│   ├── teens.jpg
│   ├── adults.jpg
│   └── ...
├── Verlag-Bold.woff    # Fontes personalizadas
├── Verlag-Book.woff
├── Verlag-Light.woff
└── README.md
```

Características do Design

Paleta de Cores
- **Azul Principal**: #0061D4
- **Laranja**: #FF9008
- **Azul Secundário**: #3498db
- **Cinza Claro**: #f8f9fa

Tipografia
- **Fonte Principal**: Poppins
- **Fonte Secundária**: Inter
- **Fonte Display**: Playfair Display
- **Fontes Customizadas**: Verlag (Bold, Book, Light)

Componentes Principais
- **Header fixo** com navegação
- **Carrossel hero** com controles automáticos e manuais
- **Cards de serviços** com hover effects
- **Formulários** estilizados
- **Footer** com informações de contato

Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

Funcionalidades

Carrossel
- Transição automática a cada 5 segundos
- Controles manuais (setas)
- Indicadores clicáveis
- Overlay escuro para melhor legibilidade

Formulário de Inscrição
- Validação de campos obrigatórios
- Padrão de telefone brasileiro
- Seleção de curso (Kids, Teens, Adults)
- Design responsivo

Navegação
- Menu fixo no topo
- Links âncora para seções
- Botão de contato destacado

Como Usar

1. **Clone ou baixe** o projeto
2. **Abra** o arquivo `index.html` em um navegador
3. **Navegue** pelas páginas:
   - Página inicial com carrossel
   - Formulário de inscrição
   - Página de contato

Páginas

Página Inicial (`index.html`)
- Carrossel promocional
- Seção "Sobre"
- Grid de serviços (Kids, Teens, Adults)
- Footer com informações

Inscrição (`inscricao.html`)
- Formulário de inscrição
- Campos: nome, email, idade, telefone, curso
- Validação de dados

Contato (`contato.html`)
- Informações de contato
- Formulário de mensagem

Personalização

Cores
As cores podem ser alteradas através das variáveis CSS no arquivo `style.css`:
```css
:root {
    --color-primary: #0061D4;
    --color-accent: #FF9008;
    --color-secondary: #3498db;
}
```

Imagens
Substitua as imagens na pasta `imagens/` mantendo os mesmos nomes ou atualize os caminhos no HTML.

Conteúdo
Edite os textos diretamente nos arquivos HTML conforme necessário.

Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através do whatsapp.

---

**Desenvolvido com ❤️ para a Rockfeller**
