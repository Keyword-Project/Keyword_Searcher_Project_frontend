import React from "react";
import ReactDOM from "react-dom/client";
import App from "App.tsx";
import { Provider } from "react-redux";
import store from "store/store.js";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "styles/GlobalStyle";
export type RootState = ReturnType<typeof store.getState>;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
