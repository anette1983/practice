// import { Component } from "react";
import { useState, useEffect } from "react";

// export class ComplexEffect extends Component {
//     handleKeyDown = e => {
//       console.log("keydown event: ", e);
//     };
  
//     componentDidMount() {
//     //   initThirdPartyLibrary();
//     console.log(' Mount in Class ');
//       document.addEventListener("keydown", this.handleKeyDown);
//     }
  
//     componentDidUpdate(prevProps, prevState) {
//       if (prevProps.value !== this.props.value) {
//         // Do stuff when value prop changes
//       }
  
//       if (prevState.isLoggedIn !== this.state.isLoggedIn) {
//         // Do stuff when isLoggedIn state changes
//       }
  
//       if (prevProps.username !== this.props.username) {
//         // Fetch user when username prop changes
//         // fetchUser(this.props.username);
//         console.log(' fetch in Update in Class ');
//       }
      
//       }
//     }
  
//     componentWillUnmount() {
//       document.removeEventListener("keydown", this.handleKeyDown);
//     }
//   }


  export const ComplexEffectHook = () => {
    const [value, setValue] = useState(0);
    // 1. Run effect only on mount to init some library
    useEffect(() => {
    //   initThirdPartyLibrary();
    console.log('in hook on mount');
    }, []);
  
    // 2. Run effect only when username prop changes
    useEffect(() => {
      setValue(value);
    }, [value]);
  
    // 3. Run effect on value prop change
    useEffect(() => {
      // Do stuff when value prop changes
    }, [value]);
  
    // // 4. Run effect on isLoggedIn state change
    // useEffect(() => {
    //   // Do stuff when isLoggedIn state changes
    // }, [isLoggedIn]);
  
    // 5. Run effect on mount and clean up on unmount
    useEffect(() => {
      const handleKeyDown = e => console.log("keydown event: ", e);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  };