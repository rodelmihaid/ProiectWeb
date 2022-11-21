import React from "react";

function LoginFrom() {
  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="input" type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginFrom;
