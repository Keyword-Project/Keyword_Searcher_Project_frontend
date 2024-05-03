function ErrorFallback() {
//   const { status } = error.response;
//   const isNotAuthorized = status === 401 || status === 403;
//   const buttonMessage = isNotAuthorized ? "로그인" : "새로고침";

//   const onClickHandler = () => {
//     resetErrorBoundary();
//   };

  return (
    <div>
      <div>
        <h2>에러!!</h2>
        <p>에러랍니다</p>
        <button type="button" >
         버튼이랍니다
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
