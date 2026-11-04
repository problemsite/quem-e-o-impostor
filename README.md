# Quem é o impostor?

Jogo para 4 a 10 pessoas: todos veem o mesmo short, menos 1, que vê um diferente. Cada um escreve uma palavra por vez (duas voltas) e depois todos votam em quem acham que é o impostor.

## Onde fica

- Jogo: https://problemsite.github.io/quem-e-o-impostor/
- Painel: https://problemsite.github.io/quem-e-o-impostor/ADM/ (com A, D, M maiúsculos)

## Trava + Firebase único + Central

Este site segue o mesmo esquema dos outros jogos do Problems:

- **Firebase único** (`jogos-github`): os dados ficam em `sites/quem-e-o-impostor/...`
  (`players`, `room`, `videos`, `history`). Não precisa criar projeto nem colar config.
- **Trava** (`/trava.js` do repo principal): carregada no `<head>` do jogo e do ADM.
  O jogo abre só quando estiver liberado na Central; o ADM só abre com a conta da equipe
  (não existe mais senha no código).
- **Central** (`problemsite.github.io/central/`): cadastre o repo `quem-e-o-impostor`
  e libere o jogo. Pastas que os jogadores podem gravar: `players, room, history`
  (os vídeos só o ADM mexe). `PERMISSION_DENIED` no jogo = falta liberar alguma dessas pastas.

## Arquivos

```
index.html            jogo (lobby, vídeo, discussão, votação, resultado)
ADM/index.html        painel do organizador  →  /ADM
css/style.css         visual
js/config.js          Firebase único (reserva) e tempos
js/videos.js          lista inicial de shorts (depois, gerencie pelo /ADM)
js/common.js          regras compartilhadas + acesso ao Firebase
js/game.js            lógica do jogo
js/admin.js           lógica do painel
```

Mudou código? Aumente o `?v=` nos `<script>`/CSS do `index.html` e do `ADM/index.html` (cache do GitHub Pages).

## Regras que o jogo segue

- Mínimo de 4 e máximo de 10 jogadores. Começa na hora em que todos que estão na sala clicam em Começar
  (com pelo menos 4). Se alguém sai da sala antes, o jogo espera 10 s para ver se a pessoa volta;
  se voltar, espera ela clicar. Qualquer um pode clicar em Cancelar para parar a contagem.
- Contagem de 5 s, 1:30 de vídeo, discussão em turnos (2 palavras por pessoa), 30 s de votação.
- A ordem das fotos é sorteada a cada partida, e a fala segue essa ordem nas duas voltas.
- A votação só começa quando todos que estão online clicarem em INICIAR VOTAÇÃO.
- Não dá para votar em si mesmo. Dá para trocar o voto enquanto o tempo corre.
- **Os inocentes vencem só se o impostor for o mais votado sem empate.** Empate ou erro = vitória do impostor.
- Depois do resultado, a sala some quando todos voltam ao lobby ou após 60 s. O nome e a foto ficam salvos.

## Painel /ADM

Mostra os dois vídeos da rodada, quem é o impostor, a ordem de fala, as palavras e votos ao vivo, e permite:
avançar fase, pular a vez de quem sumiu, encerrar partida, adicionar/remover pares de vídeos,
trocar qual vídeo do par é o do impostor (menos no par da rodada atual), escolher o próximo par,
remover jogadores, ver o histórico e limpar dados antigos.

Na primeira vez que o painel abre, ele copia os pares de `js/videos.js` para o Firebase.
Daí em diante a lista oficial é a do painel.

## Limitações honestas

- Como tudo roda no navegador (sem servidor), os dados da partida, inclusive quem é o impostor, ficam no banco.
  Alguém que abrir as ferramentas de desenvolvedor consegue descobrir. Entre amigos, tudo bem; para blindar
  de verdade seria preciso Cloud Functions (plano pago do Firebase).
- Alguns shorts têm incorporação desativada pelo dono e não tocam fora do YouTube. Teste cada link pelo painel.
- Alguns navegadores bloqueiam autoplay com som; nesse caso é só tocar no play.
