# 💖 Site do Amor - Manuel & Leonor

## Como Usar

### 📁 Ficheiros Incluídos:
- `index.html` - Página principal
- `styles.css` - Estilos e design
- `script.js` - Interatividade e animações

### 🚀 Como Abrir o Site:

1. **Opção 1 - Abrir Localmente:**
   - Faz duplo clique no ficheiro `index.html`
   - O site abrirá no teu navegador

2. **Opção 2 - Hospedar Online (Grátis):**
   - Vai a [Netlify Drop](https://app.netlify.com/drop)
   - Arrasta os 3 ficheiros para a área de upload
   - Recebes um link que podes partilhar com a Leonor!

3. **Opção 3 - GitHub Pages:**
   - Cria um repositório no GitHub
   - Faz upload dos ficheiros
   - Ativa GitHub Pages nas definições
   - Terás um link como: `https://teuusername.github.io/nome-repo`

---

## ✨ Funcionalidades do Site

### 🎬 **Intro Estilo Netflix**
- Animação de entrada elegante com logo do coração
- Desaparece automaticamente após 4 segundos

### 📱 **Design Responsivo**
- Funciona perfeitamente em telemóvel, tablet e computador
- Menu mobile com animação suave

### ⏱️ **Contador em Tempo Real**
- Mostra dias, horas, minutos e segundos desde 16/11/2024
- Atualiza automaticamente a cada segundo

### 🎵 **Controlo de Música**
- Botão flutuante no canto inferior direito
- Clica para tocar/pausar música de fundo
- (Atualmente usa música placeholder - vê abaixo como mudar)

### 🎨 **Animações Elegantes**
- Scroll animations suaves
- Efeitos hover nos cartões
- Corações flutuantes em secções especiais

### 🎁 **Easter Eggs Escondidos**
1. **Mensagem Secreta:** Clica 5 vezes no título "Manuel & Leonor" no topo
2. **Código Konami:** Usa as setas do teclado: ↑↑↓↓←→←→
3. **Detalhes dos Episódios:** Clica nos episódios das temporadas para ver mais detalhes
4. **Corações Mágicos:** Clica nas razões do amor para criar corações

---

## 🎨 Como Personalizar

### 🖼️ **Adicionar Fotos:**

No ficheiro `index.html`, procura pela secção `gallery-section` e adiciona:

```html
<div class="moment-card" data-aos="fade-up">
    <img src="caminho-da-foto.jpg" alt="Descrição" style="width: 100%; border-radius: 10px; margin-bottom: 15px;">
    <h3>Título do Momento</h3>
    <p>Descrição da foto...</p>
</div>
```

### 🎵 **Mudar a Música:**

**Opção 1 - Música do YouTube:**
1. Vai a [YouTube to MP3 Converter](https://ytmp3.nu/)
2. Converte a música que queres
3. Guarda o ficheiro como `musica.mp3` na mesma pasta
4. No `index.html`, muda:
```html
<audio id="backgroundMusic" loop>
    <source src="musica.mp3" type="audio/mpeg">
</audio>
```

**Opção 2 - Usar "Anda Comigo Ver os Aviões":**
1. Procura a música dos Azeitonas online
2. Descarrega como MP3
3. Renomeia para `avioes.mp3`
4. Coloca na mesma pasta dos ficheiros
5. Atualiza o `index.html` conforme acima

### 🎨 **Mudar Cores:**

No ficheiro `styles.css`, no topo tens as variáveis de cor:

```css
:root {
    --primary-red: #e50914;    /* Vermelho principal */
    --gold: #d4af37;           /* Dourado */
    --dark-bg: #0a0a0a;        /* Fundo escuro */
}
```

Muda estes valores para personalizar as cores!

### ✏️ **Editar Textos:**

Todos os textos estão no `index.html`. Procura pelas secções e edita:
- Timeline de momentos
- Razões do amor
- Mensagem final
- Títulos das temporadas

### 📅 **Adicionar Mais Momentos:**

Na timeline, adiciona novos momentos assim:

```html
<div class="timeline-item" data-aos="fade-right">
    <div class="timeline-date">Data Aqui</div>
    <div class="timeline-content">
        <h3>Título do Momento</h3>
        <p>Descrição do que aconteceu...</p>
    </div>
</div>
```

---

## 💡 Dicas e Truques

### 📱 **Teste no Telemóvel:**
1. Abre o site no computador
2. Pressiona F12 (Chrome/Edge)
3. Clica no ícone do telemóvel no topo
4. Escolhe o modelo de telemóvel para testar

### 🎬 **Personalizar a Intro:**
No `styles.css`, procura `.intro-screen` e ajusta:
- Tempo de duração (linha `animation: fadeOut 1s ease-in-out 3s forwards;`)
- Muda o `3s` para o tempo que quiseres

### 🖱️ **Desativar Efeitos:**
Se achares que tem muitas animações:
1. No `script.js`, comenta (adiciona `//` no início) das linhas dos efeitos
2. Ou simplesmente remove as funções que não queres

---

## 🎁 Ideias Extra para Impressionar

### 1. **QR Code:**
- Gera um QR code do link do site
- Imprime e coloca dentro de um cartão
- Ela escaneia e vê o site!

### 2. **Vídeo Surpresa:**
- Grava um vídeo teu a dizer algo especial
- Faz upload no YouTube (não listado)
- Adiciona ao site como um "episódio especial"

### 3. **Galeria de Fotos:**
- Cria uma pasta `fotos` com imagens vossas
- Adiciona uma secção de galeria interativa
- Usa lightbox effect para visualização

### 4. **Playlist Spotify:**
- Cria uma playlist com músicas especiais
- Embede no site
- Tutorial: [Como embedar Spotify](https://support.spotify.com/)

---

## 🐛 Resolução de Problemas

### ❌ **A música não toca:**
- Navegadores bloqueiam auto-play
- Adiciona um botão de "Iniciar" primeiro
- Ou usa o botão de música no canto inferior direito

### ❌ **Animações não funcionam:**
- Certifica-te que todos os 3 ficheiros estão na mesma pasta
- Limpa a cache do navegador (Ctrl + F5)

### ❌ **Site não abre:**
- Verifica se o nome do ficheiro é exatamente `index.html`
- Tenta outro navegador (Chrome, Firefox, Edge)

---

## 📚 Recursos Úteis

### **Fontes Gratuitas:**
- [Google Fonts](https://fonts.google.com/)

### **Ícones e Emojis:**
- [Emojipedia](https://emojipedia.org/)
- [Font Awesome](https://fontawesome.com/)

### **Hospedagem Grátis:**
- [Netlify](https://www.netlify.com/) - Mais fácil!
- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)

### **Editar Imagens:**
- [Canva](https://www.canva.com/)
- [Remove.bg](https://www.remove.bg/) - Remove fundos

---

## ❤️ Mensagem Final

Este site foi criado com muito amor e atenção aos detalhes. Cada secção, cada animação, cada palavra foi pensada para representar o amor entre o Manuel e a Leonor.

**Dicas para a apresentação:**
1. Testa tudo antes de mostrar
2. Prepara-te para explicar as funcionalidades especiais
3. Mostra os easter eggs escondidos
4. Deixa-a explorar sozinha também

**Lembra-te:**
- O que ela vai valorizar mais não é o código perfeito
- É o esforço, o carinho e os detalhes pessoais
- As referências aos vossos momentos únicos
- A forma como mostra que prestas atenção ao que importa

---

## 📞 Suporte

Se precisares de ajuda para personalizar algo específico, estas são as secções principais:

- **HTML (index.html):** Estrutura e conteúdo
- **CSS (styles.css):** Cores, fontes, layout
- **JavaScript (script.js):** Interatividade e animações

**Boa sorte! A Leonor vai adorar! 💖**

---

*Criado com ❤️ por Claude para o Manuel*
*Data: Fevereiro 2026*
