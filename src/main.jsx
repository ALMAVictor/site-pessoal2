// ============================================
// MAIN.JSX - Ponto de Entrada da Aplicação
// ============================================
// Arquivo que inicializa a aplicação React
// Configura o router e renderiza o App

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

/**
 * Inicialização da aplicação
 * - StrictMode: Ativa verificações extras do React
 * - BrowserRouter: Habilita roteamento client-side
 * - App: Componente principal da aplicação
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
