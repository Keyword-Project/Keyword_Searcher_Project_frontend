import React, { useMemo, useRef, useState } from "react";

const countUser = (users) => {
  console.log("전체 사용자 수 계산중");
  return users.length;
};

const App = () => {
  // Input 저장
  const [inputs, setInputs] = useState({
    name: "",
    feel: "",
  });

  // 비구조화 할당을 통해 Input 값 추출
  const { name, feel } = inputs;

  // user 정보 저장
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "navy",
      feel: "good",
    },
    {
      id: 2,
      name: "army",
      feel: "soso",
    },
  ]);

  // id 늘리기 위해
  const id = useRef(2);

  // Input 내용이 바뀔 때 호출
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 등록 버튼을 누를 때 호출
  const onSubmit = (e) => {
    e.preventDefault();
    id.current += 1;
    setUsers([
      ...users,
      {
        id: id.current,
        name: name,
        feel: feel,
      },
    ]);
  };

  // useMemo를 사용하여 users가 변할때만 countUser 함수 호출
  const numberOfUser = useMemo(() => countUser(users), [users]);

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input name="name" value={name} onChange={onChange} placeholder="이름"></input>
          <input name="feel" value={feel} onChange={onChange} placeholder="기분"></input>
          <input value="등록" type="submit" />
        </form>
      </div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            아이디 : {user.id} 이름 : {user.name} 기분 : {user.feel}
          </div>
        );
      })}
      총 사용자 수 : {numberOfUser}
    </div>
  );
};

export default App;