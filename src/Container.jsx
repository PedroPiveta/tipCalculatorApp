import Button from "./Button";
import Results from "./Results";

const Container = () => {
    return (
        <div className="container">
            Bill

            Select Tip %
            <Button title="5%" />
            <Button title="10%" />
            <Button title="15%" />
            <Button title="25%" />
            <Button title="50%" />
            <Button title="Custom" className="custom" />

            Number of People

            <Results />
        </div>
    );
}

export default Container;