import "../css/ListLogin.css";
import { IUser as IList } from "../App";

function ListLogin({ user }: IList) {
  const renderUser = (): JSX.Element[] => {
    return user.map((u) => (
      <div>
        {u.name} have pass is {u.pass}
      </div>
    ));
  };
  return (
    <div className="List_login">
      <h1 className="List_login_title">ListLogin</h1>
      {renderUser()}
    </div>
  );
}

export default ListLogin;
