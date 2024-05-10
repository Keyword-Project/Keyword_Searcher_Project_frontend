const ErrorField = ({
  resetErrorBoundary,
  setResultVisible,
}: {
  resetErrorBoundary: () => void;
  setResultVisible: (visible: boolean) => void;
}) => {
  return (
    <div>
      <p>에러가 발생했어요</p>
      <button
        onClick={() => {
          resetErrorBoundary();
          //안돌아가지네 이러면 왜 쓰는거지..??
          setResultVisible(false);
        }}
      >
        돌아가기 버튼
      </button>
    </div>
  );
};

export default ErrorField;
