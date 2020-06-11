const path = require("path"); //biblioteca global

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //dirname retorna o diretorio atual do arquivo. Cada virgula depois dele é como uma barra
  output: {
    // s seguir o código transpilado pelo babel
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js" //nome do arquivo que será gerado
  },
  devServer: {
    //monitora para atualizar quando for necessário
    contentBase: path.resolve(__dirname, "public") //pasta ond fica o bundle.js
  },
  module: {
    rules: [
      {
        //transpiladores para código não javacript
        test: /\.js$/, //todos os arquivos .js vão para essa regra
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
