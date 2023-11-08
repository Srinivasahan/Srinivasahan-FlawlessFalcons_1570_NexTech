
 const Button = (props) => {
  return (
    <button className={`px-4 py-6 bg-${props.color} rounded-lg`}>
            {props.children}
    </button>
  );
};
export default Button;