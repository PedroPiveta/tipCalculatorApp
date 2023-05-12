const Button = ({ title, id }) => {
    return (
        <>
            <button className="button" id={id}>
                 { title } 
            </button>
        </>
    );
}

export default Button;