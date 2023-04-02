import { useUser } from "./customProviderComponent/userContextCustom";

// export const UserMenu = () => {
//   const { username } = useUser();

//   return (
//     <div>
//       <p>{username}</p>
//     </div>
//   );
// };


// export const UserMenu = () => {
//   const { username } = useUser();
//   console.log('username :>> ', username);

//   return (
//     <div>
//       <p>{username}</p>
//     </div>
//   );
// };

export const UserMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useUser();

  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};