import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 

const GoogleButtonComponent = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'), 
      { theme: 'outline',
         size: 'large',
         shape : 'pill',

       } 
    );
  }, []); 

  function handleCallbackResponse(response) {
    var userObject = jwtDecode.default(response.credential);
    console.log(userObject); // Check the decoded JWT payload
    setUser(userObject);
    console.log(user); // This might not reflect the update immediately due to setState being asynchronous
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  return (
    <div>
       <div id="signInDiv" style={{ marginLeft: '-280px' }}></div> 
      {Object.keys(user).length !== 0 &&
        <button onClick={handleSignOut}>Sign Out</button>
      }
    </div>
  );
};

export default GoogleButtonComponent;
