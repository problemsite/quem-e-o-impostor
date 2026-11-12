// ============================================================
//  CONFIGURAÇÕES — é aqui que você mexe
// ============================================================

// 1) Firebase único (jogos-github). A trava (/trava.js) já define a
//    configuração e a pasta deste jogo; isto aqui é só reserva.
export const firebaseConfig = {
  apiKey: "AIzaSyBQzl3bmbAEcyNfwqYj69DZHLjFfydlghI",
  authDomain: "jogos-github.firebaseapp.com",
  databaseURL: "https://jogos-github-default-rtdb.firebaseio.com",
  projectId: "jogos-github",
  storageBucket: "jogos-github.firebasestorage.app",
  messagingSenderId: "304376569454",
  appId: "1:304376569454:web:cd724cf50bef036a37907f"
};
// Pasta deste jogo dentro do Firebase único.
export const DB_ROOT = "sites/quem-e-o-impostor";

// 2) O /ADM é trancado pela trava (só a conta da equipe entra).

// 3) Tempos, em segundos
export const TEMPOS = {
  carregarMax: 60,    // espera no máximo isso para todos carregarem o vídeo (depois começa mesmo assim)
  contagem: 5,        // contagem antes do vídeo
  assistir: 90,       // tempo para assistir ao short (1:30)
  votacao: 30,        // tempo de votação
  limpezaLobby: 60,   // depois do resultado, a sala antiga some após esse tempo
  esperaSaida: 10     // se alguém sai do lobby, espera esse tempo para ver se a pessoa volta
};

// 4) Jogadores
export const MIN_JOGADORES = 3;
export const MAX_JOGADORES = 10;
export const PALAVRAS_POR_JOGADOR = 2;
