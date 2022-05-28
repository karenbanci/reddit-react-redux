import React from "react";

// aqui está criando um contexto entre App e Search
const AppContext = React.createContext();
export const AppContextProvider = AppContext.Provider;
export default AppContext;
