
function Form({ name, email, message, handleEmailChange, handleMessageChange, handleNameChange, addName }) {
    console.log(name);
    return (
      <form onSubmit={addName}>
        <input
          placeholder="Full Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        /><br></br>
        <input 
            placeholder="email address"
            value={email}
            type="email"
            onChange={handleEmailChange}>
        </input><br></br>
        <input 
            placeholder="message"
            value={message}
            type="text"
            onChange={handleMessageChange}>
        </input><br></br>
        <input type="submit" value="Submit" /><br></br>
      </form>
    );
  }

  export default Form