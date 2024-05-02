import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary"; 

interface Props {
  children: React.ReactNode;
}

const QueryErrorBoundary = ({ children }: Props) => {
    const { reset } = useQueryErrorResetBoundary();
  
    return (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            에러가 발생했다!
            <button onClick={() => resetErrorBoundary()}>돌아가기</button>
          </div>
        )}
      >
     {children}
      </ErrorBoundary>
    );
  };
  
  export default QueryErrorBoundary;