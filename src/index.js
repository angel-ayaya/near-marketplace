import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import App from './App';
import { initializeContract } from "./utils/near";

// Inicializa tu contrato y luego la aplicación
window.nearInitPromise = initializeContract()
  .then(() => {
    const container = document.getElementById("root"); // Encuentra el contenedor
    const root = createRoot(container); // Crea una raíz para el contenedor
    root.render( // Usa la API de renderizado de la raíz
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.error);

  