import { useUser } from "./UserContext";

// export const UserMenu = () => {
//   const { username } = useUser();

//   return (
//     <div>
//       <p>{username}</p>
//     </div>
//   );
// };


export const UserMenu = () => {
  const { username } = useUser();
  console.log('username :>> ', username);

  return (
    <div>
      <p>{username}</p>
    </div>
  );
};
