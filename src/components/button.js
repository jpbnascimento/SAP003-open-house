function Button(props) {
    const template = `
      <button 
      data-id="${props.id}"
      class= "${props.class}"
       onclick="button.handleClick(event, ${props.onClick})" >
       ${props.title}
       </button>
    `;
  
    return template;
  }
  window.button = {
    handleClick: (event, callback) => {
      event.preventDefault();
      callback(event);
    },
  };
  
  export default Button;