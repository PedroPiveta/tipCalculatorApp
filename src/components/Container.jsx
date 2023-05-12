import Button from "./Button";
import Results from "./Results";

const Container = () => {
    return (
        <div className="container">
            <form>
                Bill
                <input type="text" />
                
                <section className="btn-container">
                    <label>Select Tip %</label>
                    <div className="buttons">
                        <Button title="5%" />
                        <Button title="10%" />
                        <Button title="15%" />
                        <Button title="25%" />
                        <Button title="50%" />
                        <input type="text" placeholder="Custom" className="button" id="custom" />
                    </div>
                </section>

                Number of People
                <input type="text" />
            </form>

            <Results />
        </div>
    );
}

export default Container;