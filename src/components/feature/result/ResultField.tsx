import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorField from "./ErrorField";
import Result from "./Result";
import EmptyResult from "./EmptyResult";




export default function ResultField({setResultVisible, resultVisible}) {

    const { reset } = useQueryErrorResetBoundary();
  return (
    <>  {resultVisible ? (
        <ErrorBoundary
          onReset={() => {
            reset();
          }}
          FallbackComponent={({ resetErrorBoundary }) => (
            <div>
              <ErrorField
                resetErrorBoundary={resetErrorBoundary}
                setResultVisible={setResultVisible}
              />
            </div>
          )}
        >
          <Result setResultVisible={setResultVisible} />
        </ErrorBoundary>
      ) : (
        <EmptyResult />
      )}</>
  )
}
