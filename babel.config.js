module.exports = {
  presets: [
    // Alterar funcionalidades do Javascript que o navegador ainda nao entende:
    // Import, export, ArrowFunctions, Classes.
    "@babel/preset-env",
    // Transformar as funcionalidades do react que o navegador não conhece:
    // JSX e outras funciolalidades especificas do react.
    "@babel/preset-react"
  ]
}