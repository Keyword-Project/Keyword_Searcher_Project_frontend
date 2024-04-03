import React from "react";
import ReactDOM from "react-dom/client";
import App from "App.tsx";
import { Provider } from "react-redux";
import store from "store/store.js";
import { BrowserRouter } from "react-router-dom";
import GlobalFont from "styles/GlobalFont";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type RootState = ReturnType<typeof store.getState>;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      gcTime: 1000 * 60 * 60,
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalFont />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
